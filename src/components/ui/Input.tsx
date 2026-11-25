import { cn } from "@/lib/cn";

export function Input({ className, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-md border border-gris-fonce/20 bg-white px-3 text-sm text-noir placeholder:text-gris-fonce/60 focus:border-bordeaux focus:outline-none",
        className,
      )}
      {...props}
    />
  );
}
