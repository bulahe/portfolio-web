"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import clsx from "clsx";
import type { ProjectCard } from "@/lib/data";
import type { MouseEvent, TouchEvent } from "react";

type ProjectProps = ProjectCard & {
  isMobile: boolean;
  isActive: boolean;
  onActivate: () => void;
  onMobileBack: () => void;
  onLearnMore?: () => void;
};

export default function Project({
  title,
  subtitle,
  tags,
  image,
  isMobile,
  isActive,
  onActivate,
  onMobileBack,
  onLearnMore,
}: ProjectProps) {
  const handleCardActivate = () => {
    if (!isMobile) return;
    onActivate();
  };

  const handleMobileBack = (event: MouseEvent<HTMLButtonElement> | TouchEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onMobileBack();
  };

  const handleLearnMore = (event: MouseEvent<HTMLButtonElement> | TouchEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onLearnMore?.();
    onMobileBack();
  };

  const cardContentClass = clsx(
    "flex flex-col gap-4",
    isMobile && isActive
      ? "pointer-events-none opacity-20 blur-[1px]"
      : "opacity-100"
  );

  const overlayClass = clsx(
    "absolute inset-0 z-10 flex flex-col items-stretch justify-center gap-3 rounded-3xl bg-neutral-950/55 px-6 py-6 transition-opacity duration-300",
    isMobile && isActive
      ? "opacity-100 pointer-events-auto"
      : "pointer-events-none opacity-0"
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.25 }}
      className={clsx(
        "relative flex flex-col gap-4",
        isMobile ? "cursor-pointer" : "cursor-default"
      )}
      onClick={handleCardActivate}
      onTouchStart={handleCardActivate}
    >
      <div className={cardContentClass}>
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
          <p className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">
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
      </div>

      {isMobile && (
        <div
          className={overlayClass}
          onClick={(event) => event.stopPropagation()}
          onTouchStart={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            className="w-full rounded-xl bg-white/20 py-3 text-base font-semibold uppercase tracking-wide text-white shadow-sm backdrop-blur transition hover:bg-white/30"
            onClick={handleLearnMore}
          >
            learn more
          </button>
          <button
            type="button"
            className="w-full rounded-xl border border-white/40 py-3 text-sm font-medium uppercase tracking-wide text-white/90 backdrop-blur transition hover:bg-white/10"
            onClick={handleMobileBack}
          >
            back
          </button>
        </div>
      )}
    </motion.article>
  );
}
