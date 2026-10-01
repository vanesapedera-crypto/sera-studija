"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Button from "./Button";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden flex items-center justify-center"
    >
      <motion.div style={{ y }} className="absolute inset-0">
        {/* Desktop bilde */}
        <img
          src="/hero.jpg"
          alt="Šēra Labsajūtas Studija"
          className="hidden md:block h-[130%] w-full object-cover object-center"
        />

        {/* Mobilā bilde */}
        <img
          src="/hero-mobile.jpg"
          alt="Šēra Labsajūtas Studija"
          className="block md:hidden h-[130%] w-full object-cover object-center brightness-95"
        />

        {/* Overlay */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/40 to-dark/70" />
        <div className="block md:hidden absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/45" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 container-studio text-center flex flex-col items-center px-6 -translate-y-6 md:-translate-y-10"
      >
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-background text-5xl sm:text-6xl md:text-7xl leading-tight drop-shadow-[0_2px_16px_rgba(0,0,0,0.35)]"
        >
          Miers ķermenim.
          <br />
          Līdzsvars prātam.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-6 max-w-2xl font-body text-base md:text-lg text-background/90 drop-shadow-md"
        >
          Rūpes par ķermeni, mieru un labsajūtu – profesionālas masāžas un
          skaistumkopšanas procedūras Šēra Labsajūtas studijā Tukumā.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Button href="/kontakti">Pieteikt vizīti</Button>

          <Button href="/masazas" variant="outline">
            Apskatīt pakalpojumus
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}