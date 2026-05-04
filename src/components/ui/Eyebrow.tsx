import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function Eyebrow({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "text-xs font-semibold uppercase tracking-[0.12em] text-tuerkis",
        className,
      )}
      {...props}
    />
  );
}
