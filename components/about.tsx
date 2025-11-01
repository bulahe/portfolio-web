"use client";
import Image from "next/image";
import clsx from "clsx";
import React, { useState } from "react";
import { motion } from "framer-motion";

import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";

type FocusSegment = "xr" | "music";

const BASE_IMAGE_STYLE: React.CSSProperties = {
  objectPosition: "40% 80%",
  transformOrigin: "60% 85%",
};

export default function About() {
  const { ref } = useSectionInView("About", 0.4);
  const [activeSegment, setActiveSegment] = useState<FocusSegment>("xr");
  const [accentSegment, setAccentSegment] = useState<FocusSegment | null>(null);

  const handleFocus = (segment: FocusSegment) => {
    setActiveSegment(segment);
    setAccentSegment(segment);
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
          <div className="pointer-events-none absolute -inset-14 -z-10 rounded-[3.75rem]">
            <div className="absolute inset-0 rounded-[3.75rem] bg-[radial-gradient(circle_at_22%_28%,rgba(210,198,255,0.42),transparent_74%)] blur-[120px]" />
            <div className="absolute inset-0 rounded-[3.75rem] bg-[radial-gradient(circle_at_80%_74%,rgba(255,210,188,0.36),transparent_74%)] blur-[130px]" />
            <div
              className={clsx(
                "absolute inset-0 rounded-[3.75rem] blur-[125px] transition-opacity duration-700",
                accentSegment === "xr"
                  ? "opacity-100 bg-[radial-gradient(circle_at_24%_32%,rgba(160,128,255,0.6),transparent_66%)]"
                  : "opacity-0"
              )}
            />
            <div
              className={clsx(
                "absolute inset-0 rounded-[3.75rem] blur-[125px] transition-opacity duration-700",
                accentSegment === "music"
                  ? "opacity-100 bg-[radial-gradient(circle_at_78%_78%,rgba(255,156,108,0.56),transparent_66%)]"
                  : "opacity-0"
              )}
            />
          </div>

          <div className="relative min-h-[28rem] overflow-hidden rounded-[2.75rem] border border-neutral-200/60 bg-white/20 p-[2px] shadow-[0_25px_70px_-40px_rgba(15,23,42,0.45),0_0_8px_rgba(0,0,0,0.15)] ring-[0.5px] ring-white/20 backdrop-blur-[26px] md:aspect-[16/10] dark:border-neutral-700/70 dark:bg-neutral-900/40 dark:shadow-[0_32px_80px_-45px_rgba(15,23,42,0.7),0_0_12px_rgba(0,0,0,0.3)]">
            <div
              className="relative flex h-full w-full overflow-hidden rounded-[2.35rem] bg-black/70 backdrop-blur-xl"
              onMouseLeave={() => setAccentSegment(null)}
              onTouchEnd={() => setAccentSegment(null)}
            >
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -inset-20 bg-[linear-gradient(345deg,rgba(255,184,148,0.62)_0%,rgba(255,196,164,0.45)_22%,rgba(208,182,252,0.38)_42%,rgba(178,150,255,0.5)_65%,rgba(170,136,255,0.52)_100%)] blur-[70px]" />
                <div className="absolute inset-0 bg-[linear-gradient(345deg,rgba(255,188,152,0.82)_0%,rgba(253,180,150,0.62)_18%,rgba(194,168,255,0.5)_45%,rgba(172,140,255,0.7)_75%,rgba(164,128,255,0.75)_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_28%,rgba(198,168,255,0.35),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_82%,rgba(255,196,160,0.28),transparent_62%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(315deg,rgba(255,255,255,0.05),transparent_45%)]" />

                <div
                  className={clsx(
                    "absolute inset-0 transition-opacity duration-700",
                    accentSegment === "xr" ? "opacity-100" : "opacity-0"
                  )}
                >
                  <div className="absolute -inset-20 bg-[linear-gradient(345deg,rgba(255,198,164,0.62)_0%,rgba(255,206,178,0.46)_22%,rgba(186,132,230,0.38)_42%,rgba(140,103,255,0.52)_65%,rgba(131,88,249,0.55)_100%)] blur-[70px]" />
                  <div className="absolute inset-0 bg-[linear-gradient(345deg,rgba(255,192,158,0.82)_0%,rgba(253,182,150,0.66)_18%,rgba(162,120,255,0.55)_45%,rgba(133,92,255,0.78)_75%,rgba(129,80,255,0.82)_100%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_28%,rgba(158,120,255,0.35),transparent_50%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_82%,rgba(255,212,188,0.3),transparent_62%)]" />
                  <div className="absolute inset-0 bg-[linear-gradient(315deg,rgba(255,255,255,0.06),transparent_45%)]" />
                </div>

                <div
                  className={clsx(
                    "absolute inset-0 transition-opacity duration-700",
                    accentSegment === "music" ? "opacity-100" : "opacity-0"
                  )}
                >
                  <div className="absolute -inset-20 bg-[linear-gradient(345deg,rgba(255,176,122,0.6)_0%,rgba(255,188,136,0.46)_22%,rgba(210,186,250,0.36)_42%,rgba(180,148,242,0.46)_65%,rgba(170,138,236,0.48)_100%)] blur-[70px]" />
                  <div className="absolute inset-0 bg-[linear-gradient(345deg,rgba(255,160,102,0.92)_0%,rgba(255,146,94,0.8)_18%,rgba(186,150,244,0.52)_45%,rgba(162,122,240,0.78)_75%,rgba(146,104,228,0.8)_100%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_28%,rgba(192,168,246,0.3),transparent_50%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_82%,rgba(255,150,94,0.48),transparent_62%)]" />
                  <div className="absolute inset-0 bg-[linear-gradient(315deg,rgba(255,255,255,0.05),transparent_45%)]" />
                </div>
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
                      "object-contain transition-all duration-700 ease-out",
                      activeSegment === "xr"
                        ? "scale-[1.32] opacity-100 blur-0"
                        : "scale-[1.07] opacity-25 blur-[18px]"
                    )}
                    style={BASE_IMAGE_STYLE}
                  />

                  <Image
                    src="/music.png"
                    alt="Brian playing music while embracing mixed reality."
                    fill
                    sizes="(min-width: 1024px) 32vw, (min-width: 768px) 40vw, 80vw"
                    className={clsx(
                      "object-contain transition-all duration-700 ease-out",
                      activeSegment === "music"
                        ? "scale-[1.32] opacity-100 blur-0"
                        : "scale-[1.07] opacity-25 blur-[18px]"
                    )}
                    style={BASE_IMAGE_STYLE}
                  />

                  <div className="pointer-events-none absolute inset-x-0 top-10 hidden h-[55%] rounded-[1.75rem] bg-black/20 blur-3xl md:block" />
                </div>

                <div className="relative flex h-full flex-col items-end gap-6 pb-8 md:h-full md:justify-between md:pb-16">
                  <InteractiveBlock
                    title="From vision to reality"
                    description="My dream, my journey, my creation."
                    active={activeSegment === "xr"}
                    onActivate={() => handleFocus("xr")}
                    onHoverEnd={() => setAccentSegment(null)}
                    variant="xr"
                    positionClass="md:mt-4 md:min-h-[16rem] md:[--block-width:29rem] md:[--block-aspect:3.2/1]"
                 />

                  <InteractiveBlock
                    title="From notes to notion"
                    description="Integrating every aspect of music—not just a side talent, but an unified design attitude."
                    active={activeSegment === "music"}
                    onActivate={() => handleFocus("music")}
                    onHoverEnd={() => setAccentSegment(null)}
                    variant="music"
                    positionClass="md:mt-6 md:min-h-[8rem] md:[--block-width:29rem] md:[--block-aspect:3.2/1] md:[--music-scale:1]"
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
  onHoverEnd?: () => void;
  variant: FocusSegment;
  positionClass?: string;
  scale?: "base" | "music";
};

function InteractiveBlock({
  title,
  description,
  active,
  onActivate,
  onHoverEnd,
  variant,
  positionClass,
  scale = "base",
}: InteractiveBlockProps) {
  const isXR = variant === "xr";
  const gradientClass = isXR
    ? "bg-[radial-gradient(circle_at_top_right,rgba(167,139,250,0.45),transparent_60%)]"
    : "bg-[radial-gradient(circle_at_bottom_right,rgba(253,186,116,0.32),transparent_55%)]";
  const alignmentClass = isXR
    ? "items-end justify-center text-right"
    : "items-end justify-end text-right";
  const titleColor = isXR ? "#7b5bf7" : "#f6753d";
  const titleInactiveColor = isXR ? "rgba(123,91,247,0.65)" : "rgba(246,117,61,0.68)";
  const titleShadow = isXR
    ? "0px 10px 32px rgba(24, 8, 74, 0.5)"
    : "0px 10px 32px rgba(62, 18, 0, 0.55)";
  const titleStroke = "1px rgba(255,255,255,0.82)";
  const descriptionColor = active
    ? "rgba(255,255,255,0.9)"
    : "rgba(255,255,255,0.78)";

  return (
    <div
      role="button"
      tabIndex={0}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onTouchStart={onActivate}
      onMouseLeave={onHoverEnd}
      onBlur={onHoverEnd}
      onTouchEnd={onHoverEnd}
      className={clsx(
        "relative mr-0 flex min-h-[9.5rem] w-full cursor-pointer overflow-hidden rounded-[1.85rem] border border-white/40 bg-white/8 px-9 py-7 transition-all duration-500 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 backdrop-blur-[4px] shadow-[0_18px_45px_-28px_rgba(15,23,42,0.55)] hover:-translate-y-1.5 hover:shadow-[0_26px_65px_-28px_rgba(15,23,42,0.68)] md:w-[var(--block-width)] md:max-w-none md:self-end md:aspect-[var(--block-aspect,auto)]",
        alignmentClass,
        positionClass,
        scale === "music"
          ? "min-h-[7rem] md:min-h-[7rem] md:origin-right md:scale-[var(--music-scale,1)]"
          : "md:min-h-[9.5rem]",
        active ? "opacity-100" : "opacity-75 hover:opacity-95"
      )}
    >
      <div className="absolute inset-0">
        <div className="absolute -inset-10 rounded-[2.5rem] bg-black/10 blur-xl opacity-30" /> {/* 减少模糊效果和透明度 */}
        <div
          className={clsx(
            "absolute inset-0 rounded-[1.85rem] transition-all duration-700 ease-out",
            gradientClass,
            active ? "opacity-70 blur-0" : "opacity-35 blur-[1px]" // 减少模糊效果和调整透明度
          )}
        />
        <div className="absolute inset-0 rounded-[1.85rem] bg-white/3" /> {/* 降低白色叠加层透明度 */}
      </div>

      <div
        className={clsx(
          "relative z-10 flex h-full w-full flex-col text-right items-end",
          scale === "music"
            ? "gap-1.5 justify-end"
            : "gap-6 md:gap-8 justify-center"
        )}
      >
        <h3
          className={clsx(
            "font-semibold leading-tight",
            scale === "music"
              ? "text-[2.3rem]"
              : "text-[clamp(2.6rem,3vw+1.4rem,3.6rem)]",
          )}
          style={{
            color: active ? titleColor : titleInactiveColor,
            textShadow: titleShadow,
            WebkitTextStroke: titleStroke,
          }}
        >
          {title}
        </h3>
        <p
          className={clsx(
            "text-white/80",
            scale === "music" ? "text-sm md:text-base" : "text-base md:text-xl"
          )}
          style={{
            color: descriptionColor,
            fontSize: scale === "music" ? "1.05rem" : "1.26rem",
            lineHeight: scale === "music" ? "1.52rem" : "1.82rem",
            maxWidth: scale === "music" ? "24rem" : "24rem",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
