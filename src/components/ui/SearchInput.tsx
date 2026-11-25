import Image from "next/image";
import { cn } from "@/lib/cn";
import { Input } from "./Input";

export function SearchInput({
  className,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <div className={cn("relative", className)}>
      <Image
        src="/icons/ui/search.svg"
        alt=""
        width={18}
        height={18}
        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 opacity-60"
      />
      <Input className="pl-10" {...props} />
    </div>
  );
}
