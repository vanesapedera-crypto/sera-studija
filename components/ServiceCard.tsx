"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export interface ServicePrice {
  duration: string;
  price: string;
}

interface ServiceCardProps {
  slug: string;
  image: string;
  title: string;
  description: string;
  prices: ServicePrice[];
  index?: number;
}

export default function ServiceCard({
  slug,
  image,
  title,
  description,
  prices,
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-sm shadow-brown/5 transition-all duration-500 ease-soft hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brown/10"
    >
      <Link href={`/masazas/${slug}`} className="absolute inset-0 z-10" aria-label={title} />
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 ease-soft group-hover:scale-110"
        />
      </div>

      <div className="p-7">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-heading text-2xl text-brown">{title}</h3>
          <ArrowUpRight
            size={20}
            className="mt-1 shrink-0 text-gold transition-transform duration-500 ease-soft group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </div>
        <p className="mt-3 font-body text-sm leading-relaxed text-dark/70">
          {description}
        </p>

        <div className="mt-5 flex flex-col gap-1.5 border-t border-beige/70 pt-4">
          {prices.map((p) => (
            <div
              key={p.duration}
              className="flex items-center justify-between font-body text-sm text-dark"
            >
              <span className="text-dark/60">{p.duration}</span>
              <span className="text-gold font-medium">{p.price}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
