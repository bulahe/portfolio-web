"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ProjectCard } from "@/lib/data";

type ProjectProps = ProjectCard;

export default function Project({ title, subtitle, tags, image }: ProjectProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.25 }}
      className="flex flex-col gap-4"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-100 shadow-[0_18px_45px_-25px_rgba(15,23,42,0.45)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_55px_-25px_rgba(15,23,42,0.55)] dark:border-neutral-800 dark:bg-neutral-900 dark:shadow-[0_18px_45px_-25px_rgba(15,23,42,0.65)]">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 90vw"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-neutral-200 via-neutral-100 to-neutral-300 text-sm font-medium text-neutral-500 dark:from-neutral-800 dark:via-neutral-900 dark:to-neutral-800 dark:text-neutral-400">
            Preview coming soon
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
          {title}
        </h3>
        <p className="text-sm uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
          {subtitle}
        </p>
        {tags?.length > 0 && (
          <ul className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-neutral-300 px-3 py-1 text-xs font-medium uppercase tracking-wide text-neutral-700 dark:border-neutral-700 dark:text-neutral-300"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.article>
  );
}
