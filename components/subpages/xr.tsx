"use client";

import { useLayoutEffect, useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import PortfolioBackButton from "@/components/ui/portfolio-back-button";
import SectionDivider from "@/components/section-divider";
import SubDivider from "@/components/sub-divider";
import { generateSlug } from "@/lib/slug";
import { brandTheme } from "@/lib/theme";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";

const timelineStages = [
  {
    number: "01",
    title: "Origin",
    content:
      "Games shaped how I first understood interaction. Spatial cues, diegetic UI, and in-world feedback taught me that information didn't have to live on flat screens—it could live *in the world*.\n\nDuring my final year of high school, I encountered a series of fan-made Apple Glass concept videos. They transformed that intuition into a concrete vision: a future where digital systems coexist with physical space in meaningful, everyday ways.\n\nThat moment crystallized the direction I would spend the following years pursuing—understanding what it would take to build a persistent digital layer woven into the real world.",
    hasVideoLink: true,
  },
  {
    number: "02",
    title: "Early Work",
    content:
      "My early university work focused on turning a long-term AR vision into things I could actually build.\n\nI led a cafeteria seat-finding system that combined AR-inspired interaction logic with real-time computer vision, then explored AR as a wearable form through a modular AR glasses concept developed in a summer design studio.\n\nIn parallel, I built a Roblox game (\"Surprise Party\") to strengthen my real-time 3D instincts—interaction design, feedback loops, and building experiences that feel coherent inside a spatial world.",
  },
  {
    number: "03",
    title: "Later Projects",
    content:
      "In my later years, my work shifted from prototypes to complete XR systems—projects where architecture, reliability, and consistency mattered as much as the interaction itself.\n\nMy senior thesis was the first time I designed and delivered an XR system end-to-end, integrating the full pipeline from technical implementation to an experience that could actually be run and evaluated.\n\nBuilding on that foundation, I became the sole Unity system developer for a multi-user MR service-robot interaction study, where I worked on shared state, synchronized behaviors, and stable spatial alignment across devices.",
  },
  {
    number: "04",
    title: "Current Research",
    content:
      "Right now, I'm focused on a specific research direction: bringing high-fidelity 3D Gaussian Splatting (3DGS) into AR.\n\nI'm working on adapting a 3DGS renderer and deploying it on Apple Vision Pro, so the splatted scene can be viewed and aligned as AR content in a real environment—on-device, in real time.\n\nThis effort sits at the intersection of rendering performance, spatial alignment, and interaction—exactly the kind of infrastructure-level work I want to keep pushing forward.",
  },
  {
    number: "05",
    title: "Long-Term Direction",
    content:
      "Across early prototypes, later-stage XR systems, and my current 3DGS-on–Vision Pro research, my direction has stayed consistent.\n\nI aim to build the foundations of a creator-first AR engine—shared spatial consistency, world anchoring that holds up over time, intuitive interaction, and environment-aware digital content.\n\nThis journey is how I've been assembling the technical depth and system intuition needed to build the persistent digital layer I envisioned years ago.",
  },
] as const;

const renderText = (value: string | null) =>
  value ? (
    <p className="mt-2 text-sm">{value}</p>
  ) : (
    <div className="mt-2 min-h-[4rem] rounded-xl border border-dashed border-neutral-200/70 bg-white/60 dark:border-neutral-700/60 dark:bg-neutral-900/35" />
  );

const renderList = (items: readonly string[]) =>
  items.length > 0 ? (
    <ul className="mt-2 space-y-1 text-sm">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  ) : (
    <div className="mt-2 min-h-[4rem] rounded-xl border border-dashed border-neutral-200/70 bg-white/60 dark:border-neutral-700/60 dark:bg-neutral-900/35" />
  );

const renderOverviewPoints = (points: readonly string[]) =>
  points.length > 0 ? (
    <ul className="space-y-2 text-sm leading-relaxed">
      {points.map((text) => (
        <li key={text} className="flex items-start gap-2">
          <span className="select-none text-lg leading-none">·</span>
          <span>{text}</span>
        </li>
      ))}
    </ul>
  ) : (
    <div className="min-h-[6rem] rounded-2xl border border-neutral-200/60 bg-white/40 dark:border-neutral-700/60 dark:bg-neutral-900/35" />
  );

const baseSectionClass =
  "flex flex-col rounded-[2.25rem] border border-neutral-200/70 bg-neutral-50/55 text-neutral-800 shadow-lg backdrop-blur-sm dark:border-neutral-700/60 dark:bg-neutral-900/40 dark:text-neutral-200";
const sectionPaddingClass = "p-6 sm:p-7";
const sectionHeadingClass =
  "text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400 sm:text-base";

const modularArGlassesSlug = generateSlug("Modular AR Glasses with Magnetic Hand-Tracking Bands");

export default function XRSubpage() {
  const [activeStageIndex, setActiveStageIndex] = useState<number | null>(null);
  const [hoveredStageIndex, setHoveredStageIndex] = useState<number | null>(null);
  
  // Create refs for each timeline stage
  const stageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cafeteriaProjectRef = useRef<HTMLDivElement | null>(null);

  // Handle URL hash navigation to scroll to cafeteria project
  useLayoutEffect(() => {
    if (window.location.hash === "#cafeteria-seat-finding-system") {
      const element = cafeteriaProjectRef.current;
      if (element) {
        // Small delay to ensure the page is fully rendered
        setTimeout(() => {
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - 120; // Add 120px padding from top
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }, 100);
      }
    }
  }, []);

  useLayoutEffect(() => {
    const root = document.documentElement;
    const hadSmoothClass = root.classList.contains("!scroll-smooth");
    const previousBehavior = root.style.getPropertyValue("scroll-behavior");
    const previousPriority = root.style.getPropertyPriority("scroll-behavior");

    if (hadSmoothClass) {
      root.classList.remove("!scroll-smooth");
    }
    root.style.setProperty("scroll-behavior", "auto", "important");

    return () => {
      if (hadSmoothClass) {
        root.classList.add("!scroll-smooth");
      }
      if (previousBehavior) {
        root.style.setProperty(
          "scroll-behavior",
          previousBehavior,
          previousPriority || undefined
        );
      } else {
        root.style.removeProperty("scroll-behavior");
      }
    };
  }, []);


  // Track which stage is currently in view using Intersection Observer
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const visibleStages = new Map<number, number>(); // Map of index -> intersection ratio

    const updateActiveStage = () => {
      if (visibleStages.size === 0) return;

      // Find the stage with the highest intersection ratio
      let maxRatio = 0;
      let activeIndex: number | null = null;

      visibleStages.forEach((ratio, index) => {
        if (ratio > maxRatio) {
          maxRatio = ratio;
          activeIndex = index;
        }
      });

      if (activeIndex !== null && maxRatio > 0.2) {
        setActiveStageIndex(activeIndex);
      }
    };

    stageRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              visibleStages.set(index, entry.intersectionRatio);
            } else {
              visibleStages.delete(index);
            }
            updateActiveStage();
          });
        },
        {
          threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
          rootMargin: "-10% 0px -10% 0px", // Trigger when element is in center 80% of viewport
        }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
      visibleStages.clear();
    };
  }, []);

  // Handle clicking on timeline indicator dots to scroll to section
  const scrollToStage = (index: number) => {
    const ref = stageRefs.current[index];
    if (ref) {
      const elementPosition = ref.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - 120; // Add 120px padding from top
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Calculate scale - only hovered dot scales, others don't
  const getDotScale = (index: number): number => {
    if (hoveredStageIndex === index) return 1.3;
    return 1;
  };

  // Calculate text scale - only hovered text scales
  const getTextScale = (index: number): number => {
    if (hoveredStageIndex === index) return 1.15;
    return 1;
  };

  return (
    <main className="relative px-4 pb-16 pt-12 sm:px-6 lg:px-10 lg:pt-14">
      {/* Vertical Timeline Indicator */}
      <div 
        className="fixed left-6 top-1/2 z-10 hidden -translate-y-1/2 lg:block"
        onMouseLeave={() => setHoveredStageIndex(null)}
      >
        <div 
          className={clsx(
            "relative flex flex-row items-center gap-6 rounded-[1.75rem] border border-white/50 bg-white/95 p-6 shadow-lg backdrop-blur-sm dark:border-white/10 dark:bg-neutral-900/90 transition-transform duration-300 ease-out",
            hoveredStageIndex !== null ? "scale-105" : "scale-100"
          )}
          onMouseEnter={() => {
            if (hoveredStageIndex === null) {
              // Set to a dummy value to trigger container hover
              setHoveredStageIndex(-1);
            }
          }}
        >
          {/* Dots container */}
          <div className="flex flex-col items-center gap-4">
            {timelineStages.map((stage, index) => (
              <button
                key={stage.number}
                type="button"
                onClick={() => scrollToStage(index)}
                onMouseEnter={() => setHoveredStageIndex(index)}
                style={{
                  transform: `scale(${getDotScale(index)})`,
                }}
                className={clsx(
                  "w-3 rounded-full transition-all duration-300 ease-out",
                  activeStageIndex === index
                    ? "h-12 bg-neutral-900 dark:bg-white"
                    : "h-3 bg-neutral-300 dark:bg-neutral-600"
                )}
                aria-label={`Go to stage ${stage.number}: ${stage.title}`}
                aria-current={activeStageIndex === index}
              />
            ))}
          </div>

          {/* Text container - Only show when hovered */}
          {hoveredStageIndex !== null && (
            <div className="flex flex-col gap-4 min-w-[256px]">
              {timelineStages.map((stage, index) => {
                // Calculate the height to match the dot's visual center
                const dotHeight = activeStageIndex === index ? 48 : 12; // h-12 or h-3
                return (
                  <div
                    key={stage.number}
                    onClick={() => scrollToStage(index)}
                    onMouseEnter={() => setHoveredStageIndex(index)}
                    style={{
                      transform: `scale(${getTextScale(index)})`,
                      transformOrigin: "left center",
                      height: `${dotHeight}px`,
                    }}
                    className={clsx(
                      "transition-all duration-300 ease-out text-xs font-medium line-clamp-2 break-words flex items-center cursor-pointer",
                      activeStageIndex === index
                        ? "text-neutral-900 dark:text-white"
                        : "text-neutral-500 dark:text-neutral-400"
                    )}
                  >
                    {stage.title}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <PortfolioBackButton label="Back" />

        <div className="rounded-2xl border-2 border-amber-300/60 bg-amber-50/80 p-4 text-center shadow-sm dark:border-amber-500/40 dark:bg-amber-950/30">
          <p className="text-sm font-medium text-amber-800 dark:text-amber-200">
            ⚠️ This page is currently under construction and not yet complete.
          </p>
        </div>

        <section className="relative overflow-hidden rounded-[2.4rem] border border-white/40 bg-gradient-to-br from-purple-50 via-white to-orange-50 p-6 shadow-[0_25px_80px_-40px_rgba(139,92,246,0.35)] backdrop-blur-md sm:p-8 md:p-10 dark:border-white/10 dark:from-slate-900 dark:via-slate-950 dark:to-orange-950/20 dark:shadow-[0_25px_80px_-40px_rgba(0,0,0,0.7)]">
          <div className="pointer-events-none absolute -left-24 -top-28 h-72 w-72 rounded-full bg-gradient-to-br from-purple-300/35 via-pink-300/30 to-transparent blur-3xl dark:from-purple-400/25 dark:via-pink-500/15" />
          <div className="pointer-events-none absolute -right-16 top-20 h-64 w-64 rounded-full bg-gradient-to-tr from-orange-300/35 via-amber-200/30 to-transparent blur-3xl dark:from-orange-400/25 dark:via-amber-500/15" />
          <div className="pointer-events-none absolute inset-x-16 bottom-[-18rem] h-96 rounded-full bg-gradient-to-t from-sky-200/40 via-transparent to-transparent blur-3xl dark:from-sky-500/15" />

          <div className="relative space-y-4 sm:space-y-5 md:space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple-900 shadow-sm backdrop-blur dark:bg-white/10 dark:text-purple-100">
              From vision to reality
            </div>
            <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
              <div className="space-y-2">
                <h1 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl sm:leading-[1.05] lg:text-[2.65rem] dark:text-white">
                  My XR Journey
                </h1>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-white/70 px-4 py-3 text-sm text-slate-800 shadow-sm backdrop-blur md:text-base dark:bg-white/10 dark:text-white">
                <span className="rounded-full bg-purple-100 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-widest text-purple-900 shadow-sm dark:bg-purple-900/40 dark:text-purple-50">
                  Timeline
                </span>
                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200/80">
                  Eight stages from vision to system-level work.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-12 flex flex-col items-center gap-8">
          {timelineStages.map((stage, index) => (
            <div
              key={stage.number}
              ref={(el) => {
                stageRefs.current[index] = el;
              }}
              id={`timeline-stage-${stage.number}`}
              className="w-full flex flex-col items-center"
            >
              <SectionDivider />
              <div className="w-full max-w-5xl overflow-hidden rounded-[1.75rem] border border-white/50 bg-white/80 p-6 text-slate-900 shadow-lg backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:text-white sm:p-7">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-100 to-orange-100 text-lg font-semibold text-slate-900 shadow-sm dark:from-purple-900/60 dark:to-orange-900/60 dark:text-white">
                      {stage.number}
                    </div>
                    <div className="flex-1 space-y-2">
                      <h2
                        className="text-2xl font-semibold leading-tight sm:text-[1.65rem] text-transparent bg-clip-text"
                        style={{
                          backgroundImage: `linear-gradient(90deg, ${brandTheme.primary}, ${brandTheme.accent})`,
                        }}
                      >
                        {stage.title}
                      </h2>
                    </div>
                  </div>
                  <div className="space-y-4 text-sm leading-relaxed text-slate-800 dark:text-slate-100 sm:space-y-5">
                    {stage.content.split("\n\n").map((paragraph, pIndex) => {
                      // Handle italic text for "*in the world*"
                      const parts = paragraph.split(/(\*[^*]+\*)/);
                      return (
                        <p key={pIndex} className="text-base">
                          {parts.map((part, partIndex) => {
                            if (part.startsWith("*") && part.endsWith("*")) {
                              return (
                                <em key={partIndex} className="not-italic font-medium">
                                  {part.slice(1, -1)}
                                </em>
                              );
                            }
                            return <span key={partIndex}>{part}</span>;
                          })}
                        </p>
                      );
                    })}
                  </div>
                  {stage.number === "02" && (
                    <div className="mt-6 space-y-3">
                      <div 
                        id="cafeteria-seat-finding-system"
                        ref={cafeteriaProjectRef}
                        className="mx-auto mt-6 w-full max-w-3xl overflow-hidden rounded-[1.75rem] border border-white/50 bg-white/80 p-5 shadow-lg backdrop-blur-sm dark:border-white/10 dark:bg-white/5"
                      >
                        <h3 className="mb-3 text-center text-2xl font-semibold leading-tight text-neutral-900 dark:text-white sm:text-[1.65rem]">
                          Cafeteria Seat-Finding System
                        </h3>
                        <p className="mb-4 text-center text-base font-medium text-slate-800 dark:text-slate-100">
                          An AR-Inspired Approach to Real-World Occupancy Mapping
                        </p>
                        <div className="group relative aspect-[3/2] w-full overflow-hidden rounded-2xl border border-white/40 bg-neutral-200 shadow-inner dark:border-white/10 dark:bg-neutral-900">
                          <Image
                            src="/Where2eat/where2eatHero.png"
                            alt="Cafeteria Seat-Finding System"
                            fill
                            sizes="(min-width: 1024px) 60vw, (min-width: 640px) 70vw, 95vw"
                            className="object-cover transition duration-300 group-hover:scale-[1.02]"
                            priority
                          />
                          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/35 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                            <Link
                              href={`/projects/${generateSlug("Cafeteria Seat-Finding System")}`}
                              className="inline-flex items-center gap-2 rounded-full bg-white/90 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-slate-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-white"
                            >
                              View project details
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 space-y-3 text-sm leading-relaxed">
                        <p>
                          After this early experiment in grounding AR ideas through computer vision, I became increasingly interested in the hardware side of spatial interfaces—how future AR devices might be worn, assembled, or adapted to different contexts.
                        </p>
                        <p>
                          During the summer studio between my freshman and sophomore years, I took a design course where I explored these questions through a modular AR glasses concept. This became my first attempt to think about AR not only as an interaction system, but also as an industrial and wearable form.
                        </p>
                      </div>
                      <div className="mx-auto mt-6 w-full max-w-3xl overflow-hidden rounded-[1.75rem] border border-white/50 bg-white/80 p-5 shadow-lg backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
                        <h3 className="mb-3 text-center text-2xl font-semibold leading-tight text-neutral-900 dark:text-white sm:text-[1.65rem]">
                          Exploring Modular AR Hardware Design
                        </h3>
                        <p className="mb-4 text-center text-base font-medium text-slate-800 dark:text-slate-100">
                          A conceptual design envisioning lightweight AR eyewear with magnetic, detachable dual bands for full-range hand tracking.
                        </p>
                        <div className="group relative aspect-[3/2] w-full overflow-hidden rounded-2xl border border-white/40 bg-neutral-200 shadow-inner dark:border-white/10 dark:bg-neutral-900">
                          <Image
                            src="/glassBandDesign/glassBandDesignHero.png"
                            alt="Modular AR glasses with magnetic hand-tracking bands concept design."
                            fill
                            sizes="(min-width: 1024px) 60vw, (min-width: 640px) 70vw, 95vw"
                            className="object-cover transition duration-300 group-hover:scale-[1.02]"
                            priority
                          />
                          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/35 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                            <Link
                              href={`/projects/${modularArGlassesSlug}`}
                              className="inline-flex items-center gap-2 rounded-full bg-white/90 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-slate-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-white"
                            >
                              View project details
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {(stage as typeof stage & { hasVideoLink?: boolean }).hasVideoLink && (
                    <div className="mt-6 flex flex-col items-center space-y-2">
                      <div className="group relative mx-auto w-1/2 overflow-hidden rounded-3xl border border-neutral-200/70 bg-neutral-100 shadow-sm dark:border-neutral-700/60 dark:bg-neutral-900/35">
                        <div className="relative aspect-video">
                          <Image
                            src="/glassBandDesign/appleGlassYT.png"
                            alt="Fan-made Apple Glass concept video thumbnail."
                            fill
                            sizes="(min-width: 1280px) 20vw, (min-width: 768px) 27.5vw, 45vw"
                            className="object-cover transition duration-300 group-hover:scale-[1.02]"
                          />
                        </div>
                        <Link
                          href="https://www.youtube.com/watch?v=Rz00fHQP5GI"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute inset-0 flex items-center justify-center bg-neutral-950/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        >
                          <span className="rounded-full bg-white/90 px-5 py-2 text-sm font-semibold uppercase tracking-wide text-neutral-900 shadow-md dark:bg-neutral-900/90 dark:text-white">
                            View on YouTube
                          </span>
                        </Link>
                      </div>
                      <p className="text-center text-xs italic text-neutral-500 dark:text-neutral-400 max-w-2xl">
                        I watched this (and many similar) fan-made &quot;Apple Glass&quot; concept videos around 2020; collectively they inspired my interest in AR glasses.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

