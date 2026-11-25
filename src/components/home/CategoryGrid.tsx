import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { CategoryCard } from "@/components/home/CategoryCard";
import { homeCategories } from "@/data/home";

export function CategoryGrid() {
  return (
    <Section aria-labelledby="categories-heading">
      <Container>
        <div className="mb-8 md:mb-10">
          <h2
            id="categories-heading"
            className="font-heading text-2xl font-bold tracking-[-0.01em] text-noir md:text-3xl"
          >
            Nos catégories
          </h2>
          <p className="mt-2 max-w-2xl font-body text-gris-fonce">
            Pièces, accessoires et équipements sélectionnés par univers.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 xl:grid-cols-6">
          {homeCategories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
