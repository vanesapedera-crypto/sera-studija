import { LucideIcon } from "lucide-react";

interface ContactCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}

export default function ContactCard({
  icon: Icon,
  label,
  value,
  href,
}: ContactCardProps) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-beige/50 text-brown">
        <Icon size={20} strokeWidth={1.5} />
      </div>
      <div>
        <p className="font-body text-xs uppercase tracking-wider text-dark/50">
          {label}
        </p>
        <p className="mt-1 font-body text-base text-dark whitespace-pre-line">
          {value}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block transition-opacity duration-300 hover:opacity-70">
        {content}
      </a>
    );
  }

  return content;
}
