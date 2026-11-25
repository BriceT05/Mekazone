import { preload } from "react-dom";
import { getImageProps } from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { heroContent } from "@/data/home";

// Art direction: the hero photo is a different crop per viewport (12:5 desktop, 4:5 mobile).
// The browser picks exactly one <source> through CSS media queries: no JS, no hydration needed.
const heroSizes = "(max-width: 767px) 100vw, 50vw";

export function HeroSection() {
  const common = {
    alt: heroContent.imageAlt,
    sizes: heroSizes,
    fill: true,
    loading: "eager" as const,
    fetchPriority: "high" as const,
    className: "object-cover",
  };

  const {
    props: { srcSet: desktopSrcSet, src: desktopSrc },
  } = getImageProps({
    ...common,
    src: "/images/hero/hero-desktop.jpg",
  });

  const {
    props: {
      srcSet: mobileSrcSet,
      src: mobileSrc,
      sizes,
      ...imgProps
    },
  } = getImageProps({
    ...common,
    src: "/images/hero/hero-mobile.jpg",
  });

  // Two media-scoped preloads: the browser keeps the one matching its viewport,
  // so only one photo variant is ever fetched, and it starts before hydration.
  preload(mobileSrc, {
    as: "image",
    imageSrcSet: mobileSrcSet,
    imageSizes: sizes,
    media: "(max-width: 767px)",
    fetchPriority: "high",
  });
  preload(desktopSrc, {
    as: "image",
    imageSrcSet: desktopSrcSet,
    imageSizes: sizes,
    media: "(min-width: 768px)",
    fetchPriority: "high",
  });

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

        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-gris-fonce/40 md:aspect-[12/5]">
          <picture>
            <source media="(min-width: 768px)" srcSet={desktopSrcSet} sizes={sizes} />
            <source media="(max-width: 767px)" srcSet={mobileSrcSet} sizes={sizes} />
            <img {...imgProps} src={mobileSrc} alt={heroContent.imageAlt} sizes={sizes} fetchPriority="high" />
          </picture>
        </div>
      </Container>
    </section>
  );
}