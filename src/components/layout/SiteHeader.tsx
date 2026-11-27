"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { IconButton } from "@/components/ui/IconButton";
import { SearchInput } from "@/components/ui/SearchInput";
import { MobileDrawer, type DrawerItem } from "./MobileDrawer";

const navItems: DrawerItem[] = [
  { label: "Automobile", href: "/#category-automobile" },
  { label: "Moto", href: "/#category-moto" },
  { label: "Machines", href: "/#category-machines" },
  { label: "Informatique", href: "/#category-informatique" },
  { label: "Téléphonie", href: "/#category-telephonie" },
  { label: "Accessoires", href: "/#category-accessoires" },
];

// Information de livraison : mention descriptive, sans délai, gratuité ni couverture.
const deliveryNote = "Livraison au Sénégal 🇸🇳";

// Respecte prefers-reduced-motion pour les défilements programmatiques.
const scrollBehavior = (): "auto" | "smooth" =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const drawerId = useId();

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
      window.scrollTo({ top: Math.max(0, top), behavior: scrollBehavior() });
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
      window.scrollTo({ top: Math.max(0, top), behavior: scrollBehavior() });
      window.history.replaceState(null, "", href);
    }, 60);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gris-fonce/10 bg-white/95 backdrop-blur">
      {/* Main header */}
      <Container className="flex h-16 items-center gap-0 max-[359px]:px-3 md:h-[84px] md:gap-4 lg:h-[92px]">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/branding/mekazone-logo-transparent.png"
            alt="MEKAZONE — Accueil"
            width={1800}
            height={595}
            sizes="(min-width: 1024px) 230px, (min-width: 768px) 206px, 169px"
            priority
            className="h-14 w-auto max-w-none shrink-0 aspect-[1800/595] max-[387px]:h-11 md:h-[68px] lg:h-[76px]"
          />
        </Link>

        <div className="hidden flex-1 md:block">
          <SearchInput placeholder="Rechercher un produit, une pièce..." aria-label="Recherche" />
        </div>

        {/* Mention de livraison — niveau secondaire, alignée à droite de la recherche */}
        <p className="ml-4 hidden shrink-0 whitespace-nowrap text-xs font-medium text-gris-fonce/80 md:block">
          {deliveryNote}
        </p>

        <div className="ml-auto flex items-center gap-1 max-[359px]:gap-0 md:hidden">
          <IconButton
            ref={menuButtonRef}
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={open ? drawerId : undefined}
          >
            <Image src="/icons/ui/menu.svg" alt="" width={22} height={22} />
          </IconButton>
        </div>
      </Container>

      {/* Mobile search */}
      <Container className="pb-3 md:hidden">
        <SearchInput placeholder="Rechercher..." aria-label="Recherche mobile" />
        <p className="mt-2 text-right text-xs font-medium text-gris-fonce/80">{deliveryNote}</p>
      </Container>

      {/* Desktop nav */}
      <nav className="hidden border-t border-gris-fonce/10 md:block" aria-label="Navigation principale">
        <Container className="flex h-11 items-center gap-6 text-sm font-medium text-gris-fonce">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex h-full items-center transition-[color] hover:text-bordeaux"
              onClick={() => handleNavClick(item.href)}
            >
              {item.label}
            </Link>
          ))}
        </Container>
      </nav>

      {/* Mobile drawer — rendu hors du header via portail (voir MobileDrawer) */}
      {open && (
        <MobileDrawer
          id={drawerId}
          items={navItems}
          onClose={() => setOpen(false)}
          triggerRef={menuButtonRef}
        />
      )}
    </header>
  );
}
