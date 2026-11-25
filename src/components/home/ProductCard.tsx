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
        "group flex h-full flex-col overflow-hidden rounded-lg border border-gris-fonce/10 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated motion-reduce:transform-none motion-reduce:transition-none",
        className,
      )}
    >
      {/* Image area — square, centered, consistent framing */}
      <div className="relative aspect-square w-full overflow-hidden bg-white">
        <Image
          src={product.image}
          alt={product.imageAlt ?? product.title}
          fill
          sizes="(max-width: 639px) 45vw, (max-width: 1023px) 31vw, 302px"
          className="object-contain p-6 transition-transform duration-500 ease-out motion-reduce:transform-none group-hover:scale-105"
        />

        <div className="absolute left-3 top-3 z-10 flex flex-col gap-1.5">
          {isDemo ? (
            <span className="rounded-sm bg-rouge px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-sm">
              Visuel de démonstration
            </span>
          ) : product.badge ? (
            <span className="rounded-sm bg-bordeaux px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-sm">
              {product.badge}
            </span>
          ) : null}
        </div>
      </div>

      {/* Info block */}
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 space-y-1.5">
          {!isDemo && product.rating !== undefined && (
            <Rating value={product.rating} count={product.reviewCount} className="mb-2" />
          )}

          <h3 className="font-heading text-base font-bold leading-snug text-noir line-clamp-2 min-h-[2.75rem]">
            {product.title}
          </h3>
        </div>

        <div className="mt-auto border-t border-gris-fonce/5 pt-4">
          <div className="flex flex-col gap-3">
            {isDemo ? (
              <p className="font-body text-base font-medium text-gris-fonce/60">
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
                    "text-[10px] font-bold uppercase tracking-wider",
                    product.availability === "in_stock"
                      ? "text-noir/60"
                      : "text-rouge/70",
                  )}
                >
                  {product.availability === "in_stock" ? "En stock" : "Rupture de stock"}
                </p>
              )}

              <p className="text-[11px] font-medium leading-relaxed text-gris-fonce/50">
                {isDemo
                  ? "Produit de démonstration — non commercialisable"
                  : "Bientôt disponible à la commande"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}