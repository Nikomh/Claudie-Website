import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-border bg-bg-section">
      <div className="mx-auto max-w-screen-xl px-4 md:px-6 lg:px-8">
        <ol className="flex items-center gap-1 py-3 text-xs text-anthrazit-80">
          <li>
            <Link href="/" className="transition-colors hover:text-anthrazit">
              Start
            </Link>
          </li>
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-1">
              <ChevronRight className="h-3 w-3 shrink-0 text-anthrazit-80/50" aria-hidden />
              {item.href ? (
                <Link href={item.href} className="transition-colors hover:text-anthrazit">
                  {item.label}
                </Link>
              ) : (
                <span className="text-anthrazit" aria-current="page">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
