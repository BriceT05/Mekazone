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
  { id: "automobile", slug: "automobile", label: "Automobile", icon: "/icons/categories/automobile.svg", count: 1240 },
  { id: "moto", slug: "moto", label: "Moto", icon: "/icons/categories/moto.svg", count: 320 },
  { id: "machines", slug: "machines", label: "Machines", icon: "/icons/categories/machines.svg", count: 86 },
  { id: "informatique", slug: "informatique", label: "Informatique", icon: "/icons/categories/informatique.svg", count: 540 },
  { id: "telephonie", slug: "telephonie", label: "Téléphonie", icon: "/icons/categories/telephonie.svg", count: 210 },
  { id: "accessoires", slug: "accessoires", label: "Accessoires", icon: "/icons/categories/accessoires.svg", count: 890 },
];

export const homeProducts: Product[] = [];
