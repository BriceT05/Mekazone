export type Price = {
  amount: number;
  currency?: string;
};

export type Product = {
  id: string;
  slug: string;
  title: string;
  price: Price;
  rating?: number;
  reviewCount?: number;
  badge?: string;
  image?: string;
};
