import Image from "next/image";
import { cn } from "@/lib/cn";

export function Rating({
  value,
  count,
  className,
  ...props
}: { value: number; count?: number } & React.ComponentProps<"div">) {
  const rounded = Math.round(value * 2) / 2;
  return (
    <div className={cn("flex items-center gap-1 text-sm text-gris-fonce", className)} {...props}>
      <div className="flex items-center" aria-label={`Note : ${value} sur 5`}>
        {Array.from({ length: 5 }).map((_, i) => {
          const full = i + 1 <= Math.floor(rounded);
          const half = !full && i + 0.5 === rounded;
          return (
            <Image
              key={i}
              src={half ? "/icons/ui/star-half.svg" : "/icons/ui/star.svg"}
              alt=""
              width={14}
              height={14}
              className={full || half ? "opacity-100" : "opacity-30"}
            />
          );
        })}
      </div>
      {count !== undefined && <span className="text-xs">({count})</span>}
    </div>
  );
}
