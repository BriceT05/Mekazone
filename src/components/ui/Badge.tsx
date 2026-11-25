import { cn } from "@/lib/cn";

type BadgeVariant = "default" | "promo" | "new" | "stock";

const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-gris-clair text-gris-fonce",
  promo: "bg-rouge text-white",
  new: "bg-bordeaux text-white",
  stock: "bg-green-100 text-green-800",
};

export function Badge({
  variant = "default",
  className,
  children,
  ...props
}: React.ComponentProps<"span"> & { variant?: BadgeVariant }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold",
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
