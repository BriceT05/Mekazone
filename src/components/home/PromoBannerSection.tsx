import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { PromoBanner } from "./PromoBanner";
import { promoContent } from "@/data/home";

// Les routes commerciales n'existent pas encore : le CTA éditorial reste désactivé
// (attribut `disabled`, donc non focusable) tant qu'aucune page de destination n'est livrée.
const PROMO_LINKS_ENABLED = false;

// Cadrages et budgets : docs/d2.5ter-rapport-cloture.md §2 et docs/assets-strategy.md §9.
const largeBanner = {
  desktopSrc: "/images/banners/promo-large-desktop",
  mobileSrc: "/images/banners/promo-large-mobile",
  desktopMedia: "(min-width: 768px)",
  desktopWidth: 1920,
  desktopHeight: 480,
  mobileWidth: 1080,
  mobileHeight: 540,
};

const sidebarBanner = {
  desktopSrc: "/images/banners/promo-sidebar-desktop",
  mobileSrc: "/images/banners/promo-sidebar-mobile",
  desktopMedia: "(min-width: 1024px)",
  desktopWidth: 600,
  desktopHeight: 900,
  mobileWidth: 800,
  mobileHeight: 400,
};

export function PromoBannerSection() {
  return (
    <Section aria-labelledby="promo-heading">
      <Container>
        <h2 id="promo-heading" className="sr-only">
          Sélections et offres
        </h2>

        <div className="grid gap-4 md:gap-6 lg:grid-cols-12">
          {/* B3 — grande bannière, cadrage 4:1 desktop et 2:1 mobile */}
          <PromoBanner
            {...largeBanner}
            alt={promoContent.large.imageAlt}
            ratioClassName="aspect-[2/1] md:aspect-[4/1] lg:col-span-12"
            scrim="bottom-left"
            // B3 est courte en 4:1 (≈176 px à 768 px) : le sous-titre n'apparaît qu'à lg.
            subtitleVisibilityClassName="hidden lg:block"
            overlay={{
              eyebrow: promoContent.large.eyebrow,
              title: promoContent.large.title,
              subtitle: promoContent.large.subtitle,
              ctaLabel: promoContent.large.ctaLabel,
            }}
            // B3 est sous la ligne de flottaison aux trois viewports de référence :
            // chargement paresseux, sans preload ni priorité élevée (LCP = Hero).
            loading="lazy"
          />

          {/* B2 — portrait 2:3 desktop, cadrage 2:1 tablette/mobile */}
          <PromoBanner
            {...sidebarBanner}
            alt={promoContent.sidebar.imageAlt}
            ratioClassName="aspect-[2/1] lg:aspect-[2/3] lg:col-span-4"
            scrim="bottom-left"
            overlay={{
              eyebrow: promoContent.sidebar.eyebrow,
              title: promoContent.sidebar.title,
              subtitle: promoContent.sidebar.subtitle,
              ctaLabel: promoContent.sidebar.ctaLabel,
            }}
            loading="lazy"
          />

          {/* Bloc éditorial — équilibre la rangée inférieure sur desktop */}
          <Card className="flex h-full flex-col justify-center rounded-xl p-6 md:p-8 lg:col-span-8">
            <p className="font-body text-[11px] font-bold uppercase tracking-[0.22em] text-rouge">
              {promoContent.editorial.eyebrow}
            </p>
            <h3 className="mt-3 font-heading text-xl font-extrabold leading-tight tracking-[-0.02em] text-noir md:text-2xl lg:text-3xl">
              {promoContent.editorial.title}
            </h3>
            <div className="mt-4 h-[3px] w-12 bg-bordeaux" />
            <p className="mt-4 max-w-xl font-body text-sm leading-relaxed text-gris-fonce md:text-base">
              {promoContent.editorial.body}
            </p>
            <ul className="mt-4 max-w-xl divide-y divide-gris-fonce/10 border-y border-gris-fonce/10">
              {promoContent.editorial.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 py-2.5 font-body text-sm text-gris-fonce"
                >
                  <span
                    aria-hidden="true"
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rouge"
                  />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
              <Button type="button" size="md" disabled={!PROMO_LINKS_ENABLED}>
                {promoContent.editorial.ctaLabel}
              </Button>
              <span className="font-body text-xs text-gris-fonce">
                {promoContent.editorial.note}
              </span>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
