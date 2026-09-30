import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Navigācijas ceļš" className="font-body text-sm">
      <ol className="flex flex-wrap items-center gap-2 text-dark/55">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            {item.href ? (
              <Link href={item.href} className="hover:text-gold transition-colors duration-300">
                {item.label}
              </Link>
            ) : (
              <span className="text-brown">{item.label}</span>
            )}
            {i < items.length - 1 && (
              <ChevronRight size={14} className="text-dark/30" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
