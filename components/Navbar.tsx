"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Sākums" },
  { href: "/par-mani", label: "Par mani" },
  { href: "/masazas", label: "Masāžas" },
  { href: "/vaksacija", label: "Vaksācija" },
  { href: "/kontakti", label: "Kontakti" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

 const solid = scrolled || !isHome || open;

  return (
<header
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
    solid
      ? "bg-background/95 backdrop-blur-xl shadow-sm border-b border-beige/30"
      : "bg-white/10 backdrop-blur-xl border-b border-white/15"
  }`}
>
      <div className="container-studio flex h-20 md:h-24 items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
  src="/logo.svg"
  alt="Šēra Labsajūtas Studija"
  width={320}
  height={100}
  priority
  className={`h-16 md:h-20 w-auto transition-all duration-500 ${
    solid ? "" : "brightness-0 invert"
  }`}
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-body text-sm tracking-wide transition-colors duration-300 hover:text-gold ${
                pathname === link.href
                  ? "text-gold"
                  : solid
                  ? "text-dark"
                  : "text-background"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="/kontakti"
          className="hidden md:inline-flex items-center rounded-full bg-gold px-7 py-3 font-body text-sm text-background transition-all duration-300 hover:bg-brown"
        >
          Pieteikt vizīti
        </Link>

        {/* Mobile Menu Button */}
        <button
          aria-label="Atvērt izvēlni"
          className={`md:hidden transition-colors ${
            solid ? "text-dark" : "text-background"
          }`}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden border-t border-beige/60 bg-background md:hidden"
          >
            <div className="container-studio flex flex-col gap-5 py-6">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-body text-base text-dark transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/kontakti"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex justify-center rounded-full bg-gold px-7 py-3 font-body text-sm text-background"
              >
                Pieteikt vizīti
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}