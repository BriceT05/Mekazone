import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import {
  brand,
  footerCategoryLinks,
  footerContactSectionLabel,
  footerCopyright,
  footerDelivery,
  footerPaymentLabels,
  footerShopLinks,
  footerSocialLinks,
  hasContactInfo,
  siteContact,
  type FooterLink,
} from "@/data/site";

// Footer sombre, rendu côté serveur : aucun état, aucun gestionnaire, aucune donnée
// commerciale non confirmée. Les zones sans contenu vérifiable sont absentes du DOM.

const linkClassName =
  "inline-flex min-h-11 items-center rounded-sm text-sm text-white/75 transition-[color] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

const headingClassName =
  "font-body text-[11px] font-bold uppercase tracking-[0.18em] text-white/60";

/**
 * Les ancres de la page sont rendues en <a> natif : la navigation par fragment
 * déclenche `hashchange`, écouté par le Header, qui replace la cible sous le
 * header sticky. Les routes réelles passent par <Link>.
 */
function FooterLinkItem({ link }: { link: FooterLink }) {
  if (link.href.includes("#")) {
    return (
      <a href={link.href} className={linkClassName}>
        {link.label}
      </a>
    );
  }

  return (
    <Link href={link.href} className={linkClassName}>
      {link.label}
    </Link>
  );
}

function FooterColumn({
  id,
  heading,
  links,
  className,
}: {
  id: string;
  heading: string;
  links: FooterLink[];
  className?: string;
}) {
  return (
    <nav aria-labelledby={id} className={className}>
      <h2 id={id} className={headingClassName}>
        {heading}
      </h2>
      <ul className="mt-3">
        {links.map((link) => (
          <li key={link.href}>
            <FooterLinkItem link={link} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function SiteFooter() {
  const hasSocials = footerSocialLinks.length > 0;
  const hasPayments = footerPaymentLabels.length > 0;

  return (
    <footer className="bg-noir text-white">
      {/* Filet de signature bordeaux — décoratif */}
      <div aria-hidden="true" className="h-1 w-full bg-bordeaux" />

      <Container className="py-12 md:py-14 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 md:gap-x-8 lg:grid-cols-3 lg:gap-x-10 xl:grid-cols-12">
          {/* A. Marque */}
          <div className="md:col-span-2 lg:col-span-3 xl:col-span-4">
            <Link
              href="/"
              aria-label="MEKAZONE — Accueil"
              className="inline-flex rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <Image
                src={brand.logo.src}
                alt=""
                width={brand.logo.width}
                height={brand.logo.height}
                sizes="(min-width: 768px) 145px, 133px"
                className="h-11 w-auto max-w-none md:h-12"
              />
            </Link>
            <p className="mt-5 max-w-xs font-body text-sm leading-relaxed text-white/70">
              {brand.description}
            </p>
          </div>

          {/* B. Navigation boutique */}
          <FooterColumn
            id="footer-shop-heading"
            heading="Boutique"
            links={footerShopLinks}
            className="xl:col-span-2"
          />

          {/* C. Catégories */}
          <FooterColumn
            id="footer-categories-heading"
            heading="Catégories"
            links={footerCategoryLinks}
            className="xl:col-span-3"
          />

          {/* D. Livraison — seules les informations confirmées sont affichées */}
          <section
            aria-labelledby="footer-delivery-heading"
            className="md:col-span-2 xl:col-span-3"
          >
            <div className="rounded-lg border border-white/10 bg-gris-fonce p-5">
              <h2
                id="footer-delivery-heading"
                className={cn(headingClassName, "text-white/70")}
              >
                {footerDelivery.title}
              </h2>
              <p className="mt-3 font-body text-sm font-semibold text-white">
                {footerDelivery.note}
              </p>
              <p className="mt-1.5 font-body text-sm leading-relaxed text-white/70">
                {footerDelivery.status}
              </p>
            </div>
          </section>

          {/* Contact — masqué tant qu'aucune coordonnée n'est confirmée */}
          {hasContactInfo ? (
            <section
              aria-labelledby="footer-contact-heading"
              className="md:col-span-2 xl:col-span-4"
            >
              <h2 id="footer-contact-heading" className={headingClassName}>
                {footerContactSectionLabel}
              </h2>
              <ul className="mt-3 space-y-1 font-body text-sm text-white/75">
                {siteContact.phone ? <li>{siteContact.phone}</li> : null}
                {siteContact.email ? <li>{siteContact.email}</li> : null}
                {siteContact.whatsapp ? <li>{siteContact.whatsapp}</li> : null}
                {siteContact.addressLines?.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>
      </Container>

      {/* E. Barre de bas de page */}
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-body text-xs text-white/50">{footerCopyright}</p>

          {hasSocials || hasPayments ? (
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {hasSocials ? (
                <nav aria-label="Réseaux sociaux">
                  <ul className="flex flex-wrap items-center gap-x-4">
                    {footerSocialLinks.map((social) => (
                      <li key={social.href}>
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(linkClassName, "min-h-0 text-xs")}
                        >
                          {social.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              ) : null}

              {hasPayments ? (
                <ul
                  aria-label="Moyens de paiement"
                  className="flex flex-wrap items-center gap-x-3 font-body text-xs text-white/60"
                >
                  {footerPaymentLabels.map((label) => (
                    <li key={label}>{label}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ) : null}
        </Container>
      </div>
    </footer>
  );
}
