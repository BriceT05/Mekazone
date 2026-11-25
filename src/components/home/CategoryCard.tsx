import Image from "next/image";
import Link from "next/link";
import type { Category } from "@/types/category";
import { cn } from "@/lib/cn";

type CategoryCardProps = {
  category: Category;
};

export function CategoryCard({ category }: CategoryCardProps) {
  const { slug, label, icon } = category;

  return (
    <Link
      href={`/categories/${slug}`}
      prefetch={false}
      aria-label={`Voir la catégorie ${label}`}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-lg border border-gris-fonce/10 bg-white shadow-card",
        "transition-shadow duration-300 hover:shadow-elevated",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bordeaux",
      )}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gris-clair">
        <Image
          src={`/images/categories/${slug}-800x600.jpg`}
          alt=""
          fill
          sizes="(max-width: 639px) 45vw, (max-width: 1023px) 30vw, 200px"
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none"
        />
      </div>
      <div className="flex flex-1 flex-col items-center gap-3 p-4 text-center">
        {icon ? (
          <span
            className="flex h-11 w-11 items-center justify-center rounded-full bg-gris-clair transition-colors duration-300 group-hover:bg-bordeaux/10"
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
      {/* Ligne d'accent au survol (micro-interaction premium) */}
      <span
        aria-hidden="true"
        className={cn(
          "absolute bottom-0 left-0 h-0.5 w-full origin-center scale-x-0 bg-bordeaux",
          "transition-transform duration-300 ease-out group-hover:scale-x-100",
          "motion-reduce:transition-none motion-reduce:transform-none",
        )}
      />
    </Link>
  );
}
