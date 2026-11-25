import { cn } from "@/lib/cn";

export function Card({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "rounded-lg border border-gris-fonce/10 bg-white shadow-card",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
