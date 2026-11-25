import { formatPrice } from "@/lib/format";
import { cn } from "@/lib/cn";

export function Price({
  amount,
  currency = "XOF",
  className,
  ...props
}: { amount: number; currency?: string } & React.ComponentProps<"span">) {
  return (
    <span className={cn("font-heading font-bold text-bordeaux", className)} {...props}>
      {formatPrice(amount, currency)}
    </span>
  );
}
