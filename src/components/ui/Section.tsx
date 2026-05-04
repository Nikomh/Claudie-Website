import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  as?: "section" | "div" | "article";
  bg?: "default" | "section" | "anthrazit";
}

export function Section({
  className,
  as: Tag = "section",
  bg = "default",
  ...props
}: SectionProps) {
  return (
    <Tag
      className={cn(
        "scroll-mt-24 py-16 md:py-24",
        bg === "section" && "bg-bg-section",
        bg === "anthrazit" && "bg-anthrazit text-white",
        className,
      )}
      {...props}
    />
  );
}
