import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { heroContent } from "@/data/home";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-noir text-white">
      <Container className="grid items-center gap-8 py-12 md:grid-cols-2 md:py-20">
        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-widest text-rouge">
            {heroContent.eyebrow}
          </p>
          <h1 className="font-heading text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
            {heroContent.title}
          </h1>
          <p className="max-w-xl text-base text-white/80 md:text-lg">
            {heroContent.subtitle}
          </p>
          <div className="flex flex-wrap gap-3">
            <Button size="lg">{heroContent.primaryCta}</Button>
            <Button variant="secondary" size="lg" className="border-white/30 bg-white/10 text-white hover:bg-white/20">
              {heroContent.secondaryCta}
            </Button>
          </div>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gris-fonce/40">
          <Image
            src="/images/products/_placeholder/product-placeholder.png"
            alt={heroContent.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            preload
            className="object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
