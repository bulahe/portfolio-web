"use client";
import Image from "next/image";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
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
  const [accentSegment, setAccentSegment] = useState<FocusSegment | null>("xr");
  const [mobileFocus, setMobileFocus] = useState<FocusSegment | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const query = window.matchMedia("(max-width: 767px)");
    const handleMatch = (event?: MediaQueryListEvent) => {
      const matches = event ? event.matches : query.matches;
      setIsMobile(matches);
      if (!matches) {
        setMobileFocus(null);
        setAccentSegment(activeSegment);
      }
    };

    handleMatch();

    if (query.addEventListener) {
      query.addEventListener("change", handleMatch);
      return () => query.removeEventListener("change", handleMatch);
    }

    query.addListener(handleMatch);
    return () => query.removeListener(handleMatch);
  }, [activeSegment]);

  const handleBlockActivate = (segment: FocusSegment) => {
    setActiveSegment(segment);
    setAccentSegment(segment);
    if (isMobile) {
      setMobileFocus(segment);
    }
  };

  const handleHoverLeave = () => {
    if (!isMobile) {
      setAccentSegment(null);
    }
  };

  const handleMobileBack = () => {
    setMobileFocus(null);
    setAccentSegment(activeSegment);
  };

  const handleLearnMore = (segment: FocusSegment) => {
    setActiveSegment(segment);
    setMobileFocus(null);
    setAccentSegment(segment);
    // Placeholder for future navigation hook
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
              onMouseLeave={handleHoverLeave}
              onTouchEnd={handleHoverLeave}
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

              <div className="relative grid h-full w-full gap-4 px-5 pt-7 pb-0 sm:gap-5 sm:px-6 sm:pt-8 sm:pb-0 md:grid-cols-[minmax(0,0.7fr)_minmax(0,0.3fr)] md:items-stretch md:px-12 md:pt-10 md:pb-0">
                <div className="relative flex min-h-[24rem] sm:min-h-[25rem] md:min-h-[26rem] items-end justify-center">
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

                <div className="relative flex h-full flex-col items-end gap-2 pb-4 sm:pb-5 md:h-full md:justify-between md:pb-8">
                  <InteractiveBlock
                    title="From vision to reality"
                    description="My dream, my journey, my creation."
                    active={activeSegment === "xr"}
                    onActivate={handleBlockActivate}
                    onHoverEnd={handleHoverLeave}
                    variant="xr"
                    positionClass="-mt-8 sm:-mt-7 md:-mt-6 sm:[--block-width:22rem] md:[--block-width:27rem] lg:[--block-width:29rem] md:[--block-aspect:3.2/1]"
                    isMobile={isMobile}
                    mobileActive={mobileFocus === "xr"}
                    onMobileBack={handleMobileBack}
                    onLearnMore={() => handleLearnMore("xr")}
                  />

                  <InteractiveBlock
                    title="From notes to notion"
                    description="Integrating every aspect of music—not just a side talent, but an unified design attitude."
                    active={activeSegment === "music"}
                    onActivate={handleBlockActivate}
                    onHoverEnd={handleHoverLeave}
                    variant="music"
                    positionClass="mt-0 sm:mt-1 md:mt-2 sm:[--block-width:22rem] md:[--block-width:27rem] lg:[--block-width:29rem] md:[--block-aspect:3.2/1] md:[--music-scale:1]"
                    scale="music"
                    isMobile={isMobile}
                    mobileActive={mobileFocus === "music"}
                    onMobileBack={handleMobileBack}
                    onLearnMore={() => handleLearnMore("music")}
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
  onActivate: (segment: FocusSegment) => void;
  onHoverEnd?: () => void;
  variant: FocusSegment;
  positionClass?: string;
  scale?: "base" | "music";
  isMobile: boolean;
  mobileActive: boolean;
  onMobileBack: () => void;
  onLearnMore?: (segment: FocusSegment) => void;
};

function InteractiveBlock({
  title,
  description,
  active: _active,
  onActivate,
  onHoverEnd,
  variant,
  positionClass,
  scale = "base",
  isMobile,
  mobileActive,
  onMobileBack,
  onLearnMore,
}: InteractiveBlockProps) {
  const handleActivate = () => onActivate(variant);
  const showMobileOverlay = isMobile && mobileActive;

  const isXR = variant === "xr";
  const gradientClass = isXR
    ? "bg-[radial-gradient(circle_at_top_right,rgba(167,139,250,0.45),transparent_60%)]"
    : "bg-[radial-gradient(circle_at_bottom_right,rgba(253,186,116,0.32),transparent_55%)]";
  const alignmentClass = isXR
    ? "items-end justify-center text-right"
    : "items-end justify-end text-right";
  const titleColor = isXR ? "#7b5bf7" : "#f6753d";
  const titleShadow = isXR
    ? "0px 10px 32px rgba(24, 8, 74, 0.5)"
    : "0px 10px 32px rgba(62, 18, 0, 0.55)";
  const titleStroke = "1px rgba(255,255,255,0.82)";
  const descriptionColor = "rgba(255,255,255,0.88)";

  return (
    <div
      role="button"
      tabIndex={0}
      onMouseEnter={!isMobile ? handleActivate : undefined}
      onFocus={!isMobile ? handleActivate : undefined}
      onMouseLeave={!isMobile ? onHoverEnd : undefined}
      onBlur={!isMobile ? onHoverEnd : undefined}
      onTouchStart={isMobile ? handleActivate : undefined}
      onClick={isMobile ? handleActivate : undefined}
      className={clsx(
        "relative mr-0 flex min-h-[9.5rem] w-full cursor-pointer overflow-hidden rounded-[1.85rem] border border-white/40 bg-white/12 px-5 py-5 transition-all duration-500 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 backdrop-blur-[4px] shadow-[0_18px_45px_-28px_rgba(15,23,42,0.55)] hover:-translate-y-1.5 hover:shadow-[0_26px_65px_-28px_rgba(15,23,42,0.68)] sm:px-6 sm:py-6 md:px-9 md:py-7 md:w-[var(--block-width)] md:max-w-none md:self-end md:aspect-[var(--block-aspect,auto)]",
        alignmentClass,
        positionClass,
        scale === "music"
          ? "min-h-[5.5rem] sm:min-h-[6.25rem] md:min-h-[8rem] md:origin-right md:scale-[var(--music-scale,1)]"
          : "min-h-[10.5rem] sm:min-h-[12.5rem] md:min-h-[16rem]",
        "opacity-100"
      )}
    >
      <div className="absolute inset-0">
        <div className="absolute -inset-10 rounded-[2.5rem] bg-black/10 blur-xl opacity-25" />
        <div
          className={clsx(
            "absolute inset-0 rounded-[1.85rem] transition-all duration-700 ease-out",
            gradientClass,
            "opacity-85 blur-0"
          )}
        />
        <div className="absolute inset-0 rounded-[1.85rem] bg-white/10" />
      </div>

      <div
        className={clsx(
          "relative z-10 flex h-full w-full flex-col text-right items-end transition-all duration-300",
          scale === "music"
            ? "gap-2 justify-end"
            : "gap-4 sm:gap-5 md:gap-8 justify-center",
          showMobileOverlay ? "pointer-events-none blur-sm opacity-20" : "opacity-100"
        )}
      >
        <h3
          className={clsx(
            "font-semibold leading-tight",
            scale === "music"
              ? "text-[1.55rem] sm:text-[1.75rem] md:text-[2.05rem] lg:text-[2.3rem]"
              : "text-[2.1rem] sm:text-[2.8rem] lg:text-[4.3rem]",
          )}
          style={{
            color: titleColor,
            textShadow: titleShadow,
            WebkitTextStroke: titleStroke,
          }}
        >
          {title}
        </h3>
        <p
          className={clsx(
            "text-white/80 leading-snug",
            scale === "music"
              ? "text-sm sm:text-base md:text-[1.05rem]"
              : "text-base sm:text-lg md:text-[1.32rem]"
          )}
          style={{
            color: descriptionColor,
            maxWidth: scale === "music" ? "22rem" : "26rem",
          }}
        >
          {description}
        </p>
      </div>

      {isMobile && (
        <div
          className={clsx(
            "absolute inset-0 flex flex-col items-stretch justify-center gap-3 bg-neutral-950/55 px-6 py-6 text-right transition-opacity duration-300",
            showMobileOverlay ? "opacity-100 pointer-events-auto" : "pointer-events-none opacity-0"
          )}
          onClick={(event) => event.stopPropagation()}
          onTouchStart={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            className="w-full rounded-xl bg-white/20 py-3 text-base font-semibold uppercase tracking-wide text-white shadow-sm backdrop-blur transition hover:bg-white/30"
            onClick={(event) => {
              event.stopPropagation();
              onLearnMore?.(variant);
            }}
          >
            learn more
          </button>
          <button
            type="button"
            className="w-full rounded-xl border border-white/40 py-3 text-sm font-medium uppercase tracking-wide text-white/90 backdrop-blur transition hover:bg-white/10"
            onClick={(event) => {
              event.stopPropagation();
              onMobileBack();
            }}
          >
            back
          </button>
        </div>
      )}
    </div>
  );
}
