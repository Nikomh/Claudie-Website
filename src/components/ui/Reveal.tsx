"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { cn } from "@/lib/cn";

type RevealTag = "div" | "span" | "li" | "section" | "article";

interface RevealProps {
  as?: RevealTag;
  delay?: number;
  once?: boolean;
  className?: string;
  children?: ReactNode;
  id?: string;
  style?: CSSProperties;
}

export function Reveal({
  as = "div",
  className,
  delay = 0,
  once = true,
  style,
  id,
  children,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof window !== "undefined" && !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  const mergedStyle = delay
    ? { ...style, animationDelay: `${delay}ms` }
    : style;
  const mergedClassName = cn(
    "opacity-0 motion-reduce:opacity-100",
    visible && "opacity-100 motion-safe:animate-fade-in-up",
    className,
  );

  const refCallback = (node: HTMLElement | null) => {
    ref.current = node;
  };

  switch (as) {
    case "span":
      return (
        <span ref={refCallback} id={id} style={mergedStyle} className={mergedClassName}>
          {children}
        </span>
      );
    case "li":
      return (
        <li ref={refCallback} id={id} style={mergedStyle} className={mergedClassName}>
          {children}
        </li>
      );
    case "section":
      return (
        <section ref={refCallback} id={id} style={mergedStyle} className={mergedClassName}>
          {children}
        </section>
      );
    case "article":
      return (
        <article ref={refCallback} id={id} style={mergedStyle} className={mergedClassName}>
          {children}
        </article>
      );
    case "div":
    default:
      return (
        <div ref={refCallback} id={id} style={mergedStyle} className={mergedClassName}>
          {children}
        </div>
      );
  }
}
