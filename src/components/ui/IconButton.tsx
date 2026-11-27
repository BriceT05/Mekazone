import { forwardRef } from "react";
import { cn } from "@/lib/cn";

export const IconButton = forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & { "aria-label": string }
>(function IconButton({ className, children, "aria-label": ariaLabel, ...props }, ref) {
  return (
    <button
      ref={ref}
      aria-label={ariaLabel}
      className={cn(
        "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-noir transition-[color,background-color] hover:bg-gris-clair max-[359px]:h-9 max-[359px]:w-9",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bordeaux",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
});
