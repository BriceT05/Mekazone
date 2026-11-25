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

export const homeProducts: Product[] = [];
