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
          <header className="mb-10 md:mb-12">
            <p className="mb-3 font-body text-[11px] font-bold uppercase tracking-[0.2em] text-bordeaux">
              Sélection
            </p>
            <h2
              id="products-heading"
              className="font-heading text-3xl font-bold leading-tight tracking-[-0.02em] text-noir md:text-4xl"
            >
              {title}
            </h2>
            <div className="mt-4 h-[2px] w-16 bg-bordeaux" />
            <p className="mt-4 max-w-2xl font-body text-gris-fonce">
              Pièces, accessoires et équipements sélectionnés pour vous.
            </p>
          </header>
        )}

        <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </Section>
  );
}