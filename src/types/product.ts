export type Price = {
  amount: number;
  currency?: string;
};

export type ProductAvailability = "in_stock" | "out_of_stock";

export type ProductBase = {
  id: string;
  slug: string;
  title: string;
  category: string;
  image: string;
  imageAlt?: string;
};

export type DemoProduct = ProductBase & {
  kind: "demo";
};

export type RealProduct = ProductBase & {
  kind: "real";
  price: Price;
  promoPrice?: Price;
  badge?: string;
  rating?: number;
  reviewCount?: number;
  availability: ProductAvailability;
};

export type Product = DemoProduct | RealProduct;