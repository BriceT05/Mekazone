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
        "inline-flex h-10 w-10 items-center justify-center rounded-md text-noir transition-colors hover:bg-gris-clair focus-visible:outline-none",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
});
