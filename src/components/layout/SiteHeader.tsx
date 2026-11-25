"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { IconButton } from "@/components/ui/IconButton";
import { SearchInput } from "@/components/ui/SearchInput";
import { Badge } from "@/components/ui/Badge";

const navItems = [
  { label: "Automobile", href: "/#category-automobile" },
  { label: "Moto", href: "/#category-moto" },
  { label: "Machines", href: "/#category-machines" },
  { label: "Informatique", href: "/#category-informatique" },
  { label: "Téléphonie", href: "/#category-telephonie" },
  { label: "Accessoires", href: "/#category-accessoires" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;
    previousFocusRef.current = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 0);

    const getFocusable = () => {
      if (!drawerRef.current) return [];
      return Array.from(
        drawerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])',
        ),
      );
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        return;
      }
      if (e.key !== "Tab") return;
      const focusable = getFocusable();
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement as HTMLElement | null;
      if (e.shiftKey) {
        if (active === first || !drawerRef.current?.contains(active)) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previousFocusRef.current?.focus();
    };
  }, [open]);

  // Fait défiler la page vers la carte de catégorie ciblée par une ancre
  // (/#category-*) — y compris depuis une autre route ou au chargement initial.
  useEffect(() => {
    const scrollToAnchor = (hash?: string) => {
      const id = (hash ?? window.location.hash).replace(/^#/, "");
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      const header = document.querySelector("header");
      const offset = header ? header.getBoundingClientRect().height : 0;
      const top = target.getBoundingClientRect().top + window.scrollY - offset - 8;
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    };
    // Laisser le temps au DOM (et aux images) de se stabiliser.
    const timer = window.setTimeout(() => scrollToAnchor(), 150);
    const onHashChange = () => scrollToAnchor();
    window.addEventListener("hashchange", onHashChange);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  const handleNavClick = (href: string) => {
    setOpen(false);
    const hash = href.split("#")[1];
    if (!hash || window.location.pathname !== "/") return;
    // Différé pour laisser le tiroir mobile se fermer (body overflow restauré)
    // avant de défiler.
    window.setTimeout(() => {
      const target = document.getElementById(hash);
      if (!target) return;
      const header = document.querySelector("header");
      const offset = header ? header.getBoundingClientRect().height : 0;
      const top = target.getBoundingClientRect().top + window.scrollY - offset - 8;
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
      window.history.replaceState(null, "", href);
    }, 60);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gris-fonce/10 bg-white/95 backdrop-blur">
      {/* Top bar */}
      <div className="hidden border-b border-gris-fonce/10 bg-gris-clair md:block">
        <Container className="flex h-9 items-center justify-between text-xs text-gris-fonce">
          <span>Livraison rapide partout en Côte d&apos;Ivoire</span>
          <div className="flex items-center gap-4">
            <Link href="/support" className="hover:text-bordeaux">
              Support
            </Link>
            <Link href="/suivi" className="hover:text-bordeaux">
              Suivi de commande
            </Link>
          </div>
        </Container>
      </div>

      {/* Main header */}
      <Container className="flex h-16 items-center gap-4">
        <Link href="/" className="flex items-center gap-2" aria-label="MEKAZONE accueil">
          <Image
            src="/brand/logo-mark.svg"
            alt="MEKAZONE"
            width={36}
            height={36}
            priority
          />
          <span className="font-heading text-xl font-extrabold tracking-tight text-bordeaux">
            MEKAZONE
          </span>
        </Link>

        <div className="hidden flex-1 md:block">
          <SearchInput placeholder="Rechercher un produit, une pièce..." aria-label="Recherche" />
        </div>

        <div className="ml-auto flex items-center gap-1">
          <IconButton aria-label="Mon compte">
            <Image src="/icons/ui/user.svg" alt="" width={20} height={20} />
          </IconButton>
          <IconButton aria-label="Favoris">
            <Image src="/icons/ui/heart.svg" alt="" width={20} height={20} />
          </IconButton>
          <IconButton aria-label="Panier" className="relative">
            <Image src="/icons/ui/cart.svg" alt="" width={20} height={20} />
            <Badge variant="promo" className="absolute -right-1 -top-1 px-1.5 py-0 text-[10px]">
              3
            </Badge>
          </IconButton>
          <IconButton
            ref={menuButtonRef}
            aria-label="Menu"
            className="md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-drawer"
          >
            <Image src="/icons/ui/menu.svg" alt="" width={22} height={22} />
          </IconButton>
        </div>
      </Container>

      {/* Mobile search */}
      <Container className="pb-3 md:hidden">
        <SearchInput placeholder="Rechercher..." aria-label="Recherche mobile" />
      </Container>

      {/* Desktop nav */}
      <nav className="hidden border-t border-gris-fonce/10 md:block" aria-label="Navigation principale">
        <Container className="flex h-11 items-center gap-6 text-sm font-medium text-gris-fonce">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-bordeaux"
              onClick={() => handleNavClick(item.href)}
            >
              {item.label}
            </Link>
          ))}
        </Container>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-noir/40"
            aria-label="Fermer le menu"
            onClick={() => setOpen(false)}
          />
          <div ref={drawerRef} id="mobile-drawer" className="absolute left-0 top-0 h-full w-72 bg-white shadow-elevated" role="dialog" aria-modal="true" aria-label="Menu mobile">
            <div className="flex h-16 items-center justify-between border-b border-gris-fonce/10 px-4">
              <span className="font-heading text-lg font-extrabold text-bordeaux">
                MEKAZONE
              </span>
              <IconButton ref={closeButtonRef} aria-label="Fermer" onClick={() => setOpen(false)}>
                <Image src="/icons/ui/close.svg" alt="" width={20} height={20} />
              </IconButton>
            </div>
            <nav className="flex flex-col p-4" aria-label="Navigation mobile">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-noir hover:bg-gris-clair"
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-4 border-t border-gris-fonce/10 pt-4">
                <Link
                  href="/compte"
                  className="block rounded-md px-3 py-2 text-sm font-medium text-noir hover:bg-gris-clair"
                  onClick={() => setOpen(false)}
                >
                  Mon compte
                </Link>
                <Link
                  href="/panier"
                  className="block rounded-md px-3 py-2 text-sm font-medium text-noir hover:bg-gris-clair"
                  onClick={() => setOpen(false)}
                >
                  Panier
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
