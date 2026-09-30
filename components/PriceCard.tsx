"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PriceCardProps {
  icon: ReactNode;
  title: string;
  detail?: string;
  price: string;
  index?: number;
}

export default function PriceCard({
  icon,
  title,
  detail,
  price,
  index = 0,
}: PriceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        delay: (index % 3) * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex flex-col items-center rounded-2xl border border-beige/70 bg-white px-8 py-10 text-center transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-lg hover:shadow-brown/10"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-beige/50 text-brown">
        {icon}
      </div>

      <h3 className="mt-5 font-heading text-2xl text-brown">
        {title}
      </h3>

      {detail && (
        <p className="mt-2 font-body text-sm text-dark/60">
          {detail}
        </p>
      )}

      <p className="mt-4 font-heading text-3xl text-gold">
        {price}
      </p>
    </motion.div>
  );
}