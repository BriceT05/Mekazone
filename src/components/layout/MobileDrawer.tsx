"use client";

import { useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconButton } from "@/components/ui/IconButton";

export type DrawerItem = { label: string; href: string };

type MobileDrawerProps = {
  id: string;
  items: DrawerItem[];
  onClose: () => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
};

const FOCUSABLE =
  'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])';

const DESKTOP_QUERY = "(min-width: 768px)";

export function MobileDrawer({ id, items, onClose, triggerRef }: MobileDrawerProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const pathname = usePathname();
  const openedOnPath = useRef(pathname);

  // Ferme le tiroir si la route change (les liens d'ancre ne modifient pas le pathname).
  useEffect(() => {
    if (pathname !== openedOnPath.current) onClose();
  }, [pathname, onClose]);

  // Ferme le tiroir au passage en desktop : sinon le panneau resterait monté
  // (md:hidden) tout en gardant le défilement du document verrouillé.
  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_QUERY);
    if (mq.matches) {
      onClose();
      return;
    }
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) onClose();
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [onClose]);

  // Verrouille le défilement du document et restaure la position exacte au démontage.
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const scrollY = window.scrollY;
    const previous = {
      htmlOverflow: html.style.overflow,
      htmlGutter: html.style.scrollbarGutter,
      bodyPosition: body.style.position,
      bodyTop: body.style.top,
      bodyWidth: body.style.width,
    };

    html.style.overflow = "hidden";
    html.style.scrollbarGutter = "stable";
    // Technique iOS : le document ne défile plus, la position visuelle est conservée.
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";

    return () => {
      html.style.overflow = previous.htmlOverflow;
      html.style.scrollbarGutter = previous.htmlGutter;
      body.style.position = previous.bodyPosition;
      body.style.top = previous.bodyTop;
      body.style.width = previous.bodyWidth;
      // Restauration instantanée : sans cela, `scroll-behavior: smooth` animerait
      // le retour et la position ne serait pas exacte au démontage.
      window.scrollTo({ top: scrollY, left: 0, behavior: "instant" });
    };
  }, []);

  // Rend inerte tout ce qui entoure le tiroir (le dialogue, lui, reste actif).
  useEffect(() => {
    const root = panelRef.current?.closest<HTMLElement>("[data-drawer-root]");
    const trigger = triggerRef.current;
    const neighbours = Array.from(document.body.children).filter(
      (element): element is HTMLElement =>
        element instanceof HTMLElement && element !== root && !element.hasAttribute("inert"),
    );
    neighbours.forEach((element) => element.setAttribute("inert", ""));

    return () => {
      neighbours.forEach((element) => element.removeAttribute("inert"));
      // Restitue le focus au déclencheur s'il est encore affiché (il est masqué en desktop).
      if (trigger && trigger.isConnected && trigger.offsetParent !== null) trigger.focus();
    };
  }, [triggerRef]);

  // Focus initial, piège de tabulation, fermeture par Escape et garde-fou focusin.
  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;

    const focusTimer = window.setTimeout(() => closeButtonRef.current?.focus(), 0);

    const getFocusable = () =>
      Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
        (element) => element.offsetParent !== null || element === document.activeElement,
      );

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = getFocusable();
      if (focusable.length === 0) return;

      // Cycle géré explicitement : Safari ne place pas les liens dans l'ordre de
      // tabulation par défaut, ce qui laisserait le focus sortir du dialogue.
      event.preventDefault();
      const index = focusable.indexOf(document.activeElement as HTMLElement);
      const next = event.shiftKey
        ? focusable[index <= 0 ? focusable.length - 1 : index - 1]
        : focusable[index === -1 || index === focusable.length - 1 ? 0 : index + 1];
      next.focus();
    };

    const onFocusIn = (event: FocusEvent) => {
      if (panel.contains(event.target as Node)) return;
      closeButtonRef.current?.focus();
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("focusin", onFocusIn);

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("focusin", onFocusIn);
    };
  }, [onClose]);

  return createPortal(
    <div data-drawer-root className="fixed inset-0 z-[60] md:hidden">
      <div className="absolute inset-0 bg-noir/40" aria-hidden="true" onClick={onClose} />
      <div
        ref={panelRef}
        id={id}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="absolute inset-y-0 left-0 flex h-[100dvh] max-h-[100dvh] w-72 max-w-[85vw] flex-col bg-white shadow-elevated"
      >
        <div className="flex h-16 shrink-0 items-center justify-between border-b border-gris-fonce/10 px-4">
          <h2 id={titleId} className="font-heading text-lg font-extrabold text-bordeaux">
            MEKAZONE
          </h2>
          <IconButton ref={closeButtonRef} aria-label="Fermer" onClick={onClose}>
            <Image src="/icons/ui/close.svg" alt="" width={20} height={20} />
          </IconButton>
        </div>
        <nav
          aria-label="Navigation mobile"
          className="flex-1 overflow-y-auto overscroll-contain p-4"
        >
          <div className="flex flex-col">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex min-h-11 items-center rounded-md px-3 text-sm font-medium text-noir transition-[color,background-color] hover:bg-gris-clair"
                onClick={onClose}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </div>,
    document.body,
  );
}
