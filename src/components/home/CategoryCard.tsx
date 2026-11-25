import Image from "next/image";
import Link from "next/link";
import type { Category } from "@/types/category";
import { cn } from "@/lib/cn";

// Les pages de destination `/categories/[slug]` ne sont pas encore implémentées
// (hors périmètre D2.3). Pour éviter des 404, les cartes restent non cliquables.
// Réactivation : passer à `true` et restaurer le rendu <Link> ci-dessous.
const CATEGORY_LINKS_ENABLED = false;

type CategoryCardProps = {
  category: Category;
};

export function CategoryCard({ category }: CategoryCardProps) {
  const { slug, label, icon } = category;
  const href = `/categories/${slug}`;
  // Tant que les liens sont neutralisés, aucune micro-interaction de survol ne doit
  // suggérer une carte cliquable. Le focus clavier, lui, reste visible.
  const hoverEffects = CATEGORY_LINKS_ENABLED;

  const cardClassName = cn(
    "group relative flex flex-col overflow-hidden rounded-lg border border-gris-fonce/10 bg-white shadow-card",
    "scroll-mt-36",
    hoverEffects && "transition-shadow duration-300 hover:shadow-elevated",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bordeaux",
  );

  const inner = (
    <>
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gris-clair">
        <Image
          src={`/images/categories/${slug}-800x600.jpg`}
          alt=""
          fill
          sizes="(max-width: 639px) 45vw, (max-width: 1023px) 30vw, 200px"
          className={cn(
            "object-cover",
            hoverEffects &&
              "transition-transform duration-300 ease-out group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none",
          )}
        />
      </div>
      <div className="flex flex-1 flex-col items-center gap-3 p-4 text-center">
        {icon ? (
          <span
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-full bg-gris-clair",
              hoverEffects && "transition-colors duration-300 group-hover:bg-bordeaux/10",
            )}
            aria-hidden="true"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={icon} alt="" className="h-6 w-6" />
          </span>
        ) : null}
        <h3 className="font-heading text-sm font-bold tracking-tight text-noir sm:text-base">
          {label}
        </h3>
      </div>
      {/* Ligne d'accent au survol (micro-interaction premium) — uniquement carte cliquable */}
      {hoverEffects ? (
        <span
          aria-hidden="true"
          className={cn(
            "absolute bottom-0 left-0 h-0.5 w-full origin-center scale-x-0 bg-bordeaux",
            "transition-transform duration-300 ease-out group-hover:scale-x-100",
            "motion-reduce:transition-none motion-reduce:transform-none",
          )}
        />
      ) : null}
    </>
  );

  if (CATEGORY_LINKS_ENABLED) {
    return (
      <Link
        href={href}
        id={`category-${slug}`}
        prefetch={false}
        aria-label={`Voir la catégorie ${label}`}
        className={cardClassName}
      >
        {inner}
      </Link>
    );
  }

  // Lien indisponible : motif ARIA APG — focusable pour les utilisateurs clavier,
  // annoncé « lien, indisponible », sans navigation.
  return (
    <div
      id={`category-${slug}`}
      role="link"
      tabIndex={0}
      aria-label={`Catégorie ${label} — page à venir`}
      aria-disabled="true"
      className={cardClassName}
    >
      {inner}
    </div>
  );
}
