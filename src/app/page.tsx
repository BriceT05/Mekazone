import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { HeroSection } from "@/components/home/HeroSection";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { PromoBannerSection } from "@/components/home/PromoBannerSection";
import { ProductRail } from "@/components/home/ProductRail";
import { homeProducts } from "@/data/home";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <CategoryGrid />
        <PromoBannerSection />
        <ProductRail title="Sélection de produits" products={homeProducts} />
      </main>
      <SiteFooter />
    </>
  );
}
