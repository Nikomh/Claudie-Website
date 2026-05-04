"use client";

import Image from "next/image";
import { useState } from "react";
import { PlayCircle } from "lucide-react";
import { cn } from "@/lib/cn";

interface YoutubeEmbedProps {
  videoId: string;
  title: string;
  className?: string;
}

export function YoutubeEmbed({ videoId, title, className }: YoutubeEmbedProps) {
  const [active, setActive] = useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  if (active) {
    return (
      <div className={cn("relative aspect-video w-full overflow-hidden rounded-[var(--radius-lg)] shadow-xl", className)}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setActive(true)}
      aria-label={`Video abspielen: ${title}`}
      className={cn(
        "group relative aspect-video w-full overflow-hidden rounded-[var(--radius-lg)] shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tuerkis focus-visible:ring-offset-2",
        className,
      )}
    >
      <Image
        src={thumbnailUrl}
        alt={title}
        fill
        sizes="(max-width: 1024px) 100vw, 60vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-anthrazit/40 transition-opacity duration-200 group-hover:bg-anthrazit/30" />
      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 shadow-xl transition-all duration-200 group-hover:scale-110 group-hover:bg-white">
          <PlayCircle className="h-10 w-10 text-tuerkis" aria-hidden />
        </div>
      </div>
      {/* Title overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-anthrazit/80 to-transparent p-6">
        <p className="text-sm font-semibold text-white">{title}</p>
      </div>
    </button>
  );
}
