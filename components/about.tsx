"use client";
import Image from "next/image";
import clsx from "clsx";
import React, { useState } from "react";
import { motion } from "framer-motion";

import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";

type FocusSegment = "xr" | "music";

export default function About() {
  const { ref } = useSectionInView("About", 0.3);
  const [activeSegment, setActiveSegment] = useState<FocusSegment>("xr");

  const handleFocus = (segment: FocusSegment) => {
    setActiveSegment(segment);
  };

  return (
    <motion.section
      ref={ref}
      className="scroll-mt-28 w-full self-stretch"
      initial={{ opacity: 0, y: 72 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.18 }}
      id="about"
    >
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <SectionHeading>about me</SectionHeading>

        <div className="relative mt-10 w-full max-w-6xl md:mx-auto">
          <div className="relative min-h-[28rem] overflow-hidden rounded-[2.75rem] border border-neutral-200/60 bg-white/20 p-[2px] shadow-[0_25px_70px_-40px_rgba(15,23,42,0.45)] backdrop-blur-[26px] md:aspect-[16/10] dark:border-neutral-700/70 dark:bg-neutral-900/40 dark:shadow-[0_32px_80px_-45px_rgba(15,23,42,0.7)]">
            <div
              className="relative flex h-full w-full overflow-hidden rounded-[2.35rem] bg-black/70 backdrop-blur-xl"
              onMouseLeave={() => handleFocus("xr")}
            >
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -inset-20 bg-[linear-gradient(14deg,rgba(131,88,249,0.55)_0%,rgba(140,103,255,0.52)_44%,rgba(186,132,230,0.38)_52%,rgba(255,153,94,0.45)_60%,rgba(255,140,82,0.62)_100%)] blur-[70px]" />
                <div className="absolute inset-0 bg-[linear-gradient(14deg,rgba(129,80,255,0.82)_0%,rgba(133,92,255,0.78)_38%,rgba(162,120,255,0.55)_50%,rgba(253,133,82,0.65)_60%,rgba(255,136,76,0.85)_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_28%,rgba(158,120,255,0.35),transparent_60%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_82%,rgba(255,164,108,0.38),transparent_62%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),transparent_45%)]" />
              </div>

              <div className="relative grid h-full w-full gap-6 px-6 pt-6 pb-0 md:grid-cols-[minmax(0,0.7fr)_minmax(0,0.3fr)] md:items-stretch md:px-12 md:pt-12 md:pb-0">
                <div className="relative flex min-h-[26rem] items-end justify-center">
                  <Image
                    src="/XR.png"
                    alt="Brian exploring XR with immersive gestures."
                    fill
                    priority
                    sizes="(min-width: 1024px) 32vw, (min-width: 768px) 40vw, 80vw"
                    className={clsx(
                      "object-contain object-bottom transition-all duration-700 ease-out",
                      activeSegment === "xr"
                        ? "scale-[1.22] opacity-100 blur-0"
                        : "scale-[1.06] opacity-15 blur-3xl"
                    )}
                  />

                  <Image
                    src="/music.png"
                    alt="Brian playing music while embracing mixed reality."
                    fill
                    sizes="(min-width: 1024px) 32vw, (min-width: 768px) 40vw, 80vw"
                    className={clsx(
                      "object-contain object-bottom transition-all duration-700 ease-out",
                      activeSegment === "music"
                        ? "scale-[1.18] opacity-100 blur-0"
                        : "scale-[1.08] opacity-15 blur-3xl"
                    )}
                  />

                  <div className="pointer-events-none absolute inset-x-0 top-10 hidden h-[55%] rounded-[1.75rem] bg-black/20 blur-3xl md:block" />
                </div>

                <div className="relative flex flex-col items-end gap-6 pb-8 md:pb-12">
                  <InteractiveBlock
                    title="From vision to reality"
                    description="My dream, my journey, my creation."
                    active={activeSegment === "xr"}
                    onActivate={() => handleFocus("xr")}
                    variant="xr"
                    positionClass="md:mr-8 md:translate-y-10"
                  />

                  <InteractiveBlock
                    title="From notes to notion"
                    description="Integrating every aspect of music—not just a side talent, but an unified design attitude."
                    active={activeSegment === "music"}
                    onActivate={() => handleFocus("music")}
                    variant="music"
                    positionClass="md:translate-x-8 md:translate-y-[68px]"
                    scale="music"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

type InteractiveBlockProps = {
  title: string;
  description: string;
  active: boolean;
  onActivate: () => void;
  variant: FocusSegment;
  positionClass?: string;
  scale?: "base" | "music";
};

function InteractiveBlock({
  title,
  description,
  active,
  onActivate,
  variant,
  positionClass,
  scale = "base",
}: InteractiveBlockProps) {
  const isXR = variant === "xr";
  const gradientClass = isXR
    ? "bg-[radial-gradient(circle_at_top_right,rgba(167,139,250,0.45),transparent_60%)]"
    : "bg-[radial-gradient(circle_at_bottom_right,rgba(253,186,116,0.45),transparent_55%)]";
  const alignmentClass = isXR
    ? "items-start justify-start text-right"
    : "items-end justify-end text-right";

  return (
    <div
      role="button"
      tabIndex={0}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onTouchStart={onActivate}
      className={clsx(
        "relative flex min-h-[9.5rem] w-full cursor-pointer overflow-hidden rounded-[1.85rem] bg-white/5 px-9 py-7 transition-all duration-500 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 backdrop-blur-lg md:max-w-[28rem]",
        alignmentClass,
        positionClass,
        scale === "music" ? "md:max-w-[30rem] min-h-[10.5rem]" : "",
        active ? "opacity-100" : "opacity-85 hover:opacity-100"
      )}
    >
      <div className="absolute inset-0">
        <div className="absolute -inset-10 rounded-[2.5rem] bg-black/40 blur-3xl opacity-65" />
        <div
          className={clsx(
            "absolute inset-0 rounded-[1.85rem] transition-all duration-700 ease-out",
            gradientClass,
            active ? "opacity-100 blur-0" : "opacity-65 blur-[2px]"
          )}
        />
        <div className="absolute inset-0 rounded-[1.85rem] bg-black/12" />
      </div>

      <div
        className={clsx(
          "relative z-10 flex w-full flex-col gap-2 text-right items-end",
          scale === "music" ? "gap-1.5" : ""
        )}
      >
        <h3
          className={clsx(
            "font-semibold leading-tight text-white",
            scale === "music"
              ? "text-[1.95rem]"
              : "text-3xl md:text-[2.35rem]",
            active ? "" : "text-white/80"
          )}
        >
          {title}
        </h3>
        <p
          className={clsx(
            "text-white/80",
            scale === "music" ? "text-sm md:text-base" : "text-sm md:text-lg"
          )}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
