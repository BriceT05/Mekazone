import { cn } from "@/lib/cn";

export function Section({
  className,
  children,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section className={cn("py-10 md:py-14", className)} {...props}>
      {children}
    </section>
  );
}
