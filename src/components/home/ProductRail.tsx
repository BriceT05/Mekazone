import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ProductCard } from "./ProductCard";
import type { Product } from "@/types/product";

type ProductRailProps = {
  products: Product[];
  title?: string;
  className?: string;
};

export function ProductRail({ products, title, className }: ProductRailProps) {
  return (
    <Section
      aria-labelledby={title ? "products-heading" : undefined}
      className={className}
    >
      <Container>
        {title && (
          <header className="mb-8 md:mb-10">
            <p className="mb-2 font-body text-[11px] font-bold uppercase tracking-[0.22em] text-bordeaux">
              Sélection
            </p>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2
                  id="products-heading"
                  className="font-heading text-2xl font-bold leading-tight tracking-[-0.02em] text-noir md:text-3xl"
                >
                  {title}
                </h2>
                <div className="mt-3 h-[3px] w-12 bg-bordeaux" />
              </div>
            </div>
            <p className="mt-4 max-w-2xl font-body text-sm text-gris-fonce md:text-base">
              Pièces, accessoires et équipements sélectionnés pour vous.
            </p>
          </header>
        )}

        <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-7">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </Section>
  );
}