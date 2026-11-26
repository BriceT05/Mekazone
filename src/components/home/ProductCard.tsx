import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { Price } from "@/components/ui/Price";
import { Rating } from "@/components/ui/Rating";
import type { Product } from "@/types/product";
import { cn } from "@/lib/cn";
import { formatPrice } from "@/lib/format";

type ProductCardProps = {
  product: Product;
  className?: string;
};

export function ProductCard({ product, className }: ProductCardProps) {
  const isDemo = product.kind === "demo";

  return (
    <Card
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-lg border border-gris-fonce/10 bg-white shadow-card",
        "transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-elevated",
        "motion-reduce:transform-none motion-reduce:transition-none",
        className,
      )}
    >
      {/* Image area — square, centered, consistent framing */}
      <div className="relative aspect-square w-full overflow-hidden bg-gris-clair/40">
        <Image
          src={product.image}
          alt={product.imageAlt ?? product.title}
          fill
          sizes="(max-width: 639px) 45vw, (max-width: 1023px) 31vw, 302px"
          className="object-contain p-6 transition-transform duration-500 ease-out motion-reduce:transform-none group-hover:scale-105 sm:p-8"
        />

        <div className="absolute left-3 top-3 z-10">
          {isDemo ? (
            <span className="inline-flex items-center gap-1.5 rounded-sm bg-rouge px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-white shadow-sm sm:px-3 sm:text-[10px]">
              <span
                className="h-1.5 w-1.5 rounded-full bg-white/85"
                aria-hidden="true"
              />
              Visuel de démonstration
            </span>
          ) : product.badge ? (
            <span className="inline-flex items-center rounded-sm bg-bordeaux px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-white shadow-sm sm:px-3 sm:text-[10px]">
              {product.badge}
            </span>
          ) : null}
        </div>
      </div>

      {/* Info block */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="space-y-1.5">
          {!isDemo && product.rating !== undefined && (
            <Rating value={product.rating} count={product.reviewCount} className="mb-2" />
          )}

          <h3 className="font-heading text-sm font-bold leading-snug tracking-tight text-noir line-clamp-2 min-h-[2.5rem] sm:text-base sm:min-h-[2.75rem]">
            {product.title}
          </h3>
        </div>

        <div className="mt-auto space-y-3 border-t border-gris-fonce/8 pt-4">
          {isDemo ? (
            <p className="font-heading text-base font-bold text-gris-fonce/45 sm:text-lg">
              Prix à venir
            </p>
          ) : product.promoPrice ? (
            <div className="flex flex-wrap items-baseline gap-2">
              <Price
                amount={product.promoPrice.amount}
                currency={product.promoPrice.currency ?? "XOF"}
                className="text-lg font-bold text-rouge"
              />
              <span className="text-sm font-medium text-gris-fonce/40 line-through">
                {formatPrice(product.price.amount, product.price.currency ?? "XOF")}
              </span>
            </div>
          ) : (
            <Price
              amount={product.price.amount}
              currency={product.price.currency ?? "XOF"}
              className="text-lg font-bold"
            />
          )}

          <div className="space-y-1">
            {!isDemo && (
              <p
                className={cn(
                  "text-[10px] font-bold uppercase tracking-wider sm:text-[11px]",
                  product.availability === "in_stock"
                    ? "text-noir/60"
                    : "text-rouge/70",
                )}
              >
                {product.availability === "in_stock" ? "En stock" : "Rupture de stock"}
              </p>
            )}

            <p className="flex items-start gap-1.5 text-[10px] font-medium leading-relaxed text-gris-fonce/55 sm:text-[11px]">
              <svg
                viewBox="0 0 16 16"
                className="mt-0.5 h-3 w-3 shrink-0 text-gris-fonce/40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <circle cx="8" cy="8" r="6.5" />
                <path d="M8 7v4M8 5h.01" strokeLinecap="round" />
              </svg>
              <span>
                {isDemo
                  ? "Produit de démonstration — non commercialisable"
                  : "Bientôt disponible à la commande"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}