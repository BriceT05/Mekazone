import type { Category } from "@/types/category";
import type { Product } from "@/types/product";

export const heroContent = {
  eyebrow: "MEKAZONE",
  title: "L'automobile, la moto et la tech au meilleur prix",
  subtitle:
    "Pièces, accessoires et équipements sélectionnés pour les passionnés et les professionnels.",
  primaryCta: "Découvrir la boutique",
  secondaryCta: "Voir les promotions",
  imageAlt: "Illustration hero MEKAZONE",
};

export const homeCategories: Category[] = [
  { id: "automobile", slug: "automobile", label: "Automobile", icon: "/icons/categories/automobile.svg" },
  { id: "moto", slug: "moto", label: "Moto", icon: "/icons/categories/moto.svg" },
  { id: "machines", slug: "machines", label: "Machines & équipements", icon: "/icons/categories/machines.svg" },
  { id: "informatique", slug: "informatique", label: "Informatique", icon: "/icons/categories/informatique.svg" },
  { id: "telephonie", slug: "telephonie", label: "Téléphonie", icon: "/icons/categories/telephonie.svg" },
  { id: "accessoires", slug: "accessoires", label: "Accessoires & composants", icon: "/icons/categories/accessoires.svg" },
];

// Visuels de démonstration : les fichiers B5 ne sont pas disponibles dans le dépôt.
// Le placeholder est utilisé en attendant l'intégration des dérivés B5 (voir réserve D2.4).
const DEMO_IMAGE = "/images/products/_placeholder/product-placeholder.png";

export const homeProducts: Product[] = [
  {
    id: "demo-auto-mats",
    slug: "auto-mats",
    title: "Tapis de sol automobiles noirs",
    category: "automobile",
    kind: "demo",
    image: DEMO_IMAGE,
    imageAlt: "Visuel de démonstration — tapis de sol automobiles noirs",
  },
  {
    id: "demo-moto-helmet",
    slug: "moto-helmet",
    title: "Casque moto intégral noir mat",
    category: "moto",
    kind: "demo",
    image: DEMO_IMAGE,
    imageAlt: "Visuel de démonstration — casque moto intégral noir mat",
  },
  {
    id: "demo-cordless-drill",
    slug: "cordless-drill",
    title: "Perceuse-visseuse sans fil",
    category: "machines",
    kind: "demo",
    image: DEMO_IMAGE,
    imageAlt: "Visuel de démonstration — perceuse-visseuse sans fil",
  },
  {
    id: "demo-smartphone",
    slug: "smartphone",
    title: "Smartphone générique noir",
    category: "telephonie",
    kind: "demo",
    image: DEMO_IMAGE,
    imageAlt: "Visuel de démonstration — smartphone générique noir",
  },
];