import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "solid",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-8 py-3.5 font-body text-sm tracking-wide transition-all duration-300 ease-soft";

  const styles =
    variant === "solid"
      ? "bg-gold text-background hover:bg-brown hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brown/20"
      : "border border-background/70 text-background hover:bg-background hover:text-brown hover:-translate-y-0.5";

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
