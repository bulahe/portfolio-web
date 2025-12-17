"use client";

import { useLayoutEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import PortfolioBackButton from "@/components/ui/portfolio-back-button";
import SectionDivider from "@/components/section-divider";
import SubDivider from "@/components/sub-divider";
import { generateSlug } from "@/lib/slug";
import { brandTheme } from "@/lib/theme";

const timelineStages = [
  {
    number: "01",
    title: "The Moment the Vision Took Shape",
    content:
      "Growing up, games shaped the way I understood interaction. Their spatial interfaces, guiding markers, and diegetic UI taught me that information didn't have to live on a flat screen—it could live *in the world*.\n\nDuring my final year of high school, I came across a series of fan-made \"Apple Glass\" concept videos. They turned that early intuition into a concrete vision: a future where digital systems could coexist with physical space in meaningful, everyday ways.\n\nThat moment crystallized the direction I would spend the next years pursuing—understanding what it would take to build a persistent digital layer woven into the real world.",
    hasVideoLink: true,
  },
  {
    number: "02",
    title: "Early Attempts to Ground the Vision (Freshman Year)",
    content:
      "My early work explored how spatial computing ideas could be grounded in real environments.\n\nOne example was a cafeteria seat-finding system that combined AR-inspired interaction logic with real-time computer vision.\n\nThese projects helped me turn an ambitious AR vision into concrete engineering questions for the first time.",
  },
  {
    number: "03",
    title: "Expanding Capabilities Through Interactive Systems (Sophomore Year)",
    content:
      "Although not XR-specific, building an interactive Unity game taught me essential system skills—state management, feedback loops, UI flow, and 3D content pipelines.\n\nThis experience became foundational for the more complex XR systems I would eventually build.",
  },
  {
    number: "04",
    title: "A Period of Forced Stillness, and Quiet Foundation-Building (Late Sophomore → Junior Year)",
    content:
      "Heavy coursework and a major not aligned with XR made it difficult to continue creating spatial projects.\n\nYet this period gave me something unexpected: a deep, cross-layer understanding of technology—from transistors to circuits, systems, and software.\n\nWhat felt like stagnation became the technical grounding that later enabled real progress.",
  },
  {
    number: "05",
    title: "First Breakthrough: My Senior Thesis as a Complete XR System (Senior Fall)",
    content:
      "My senior thesis marked the first time I designed and delivered a full XR system end-to-end.\n\nIt transformed years of scattered experiments and foundational knowledge into a cohesive architectural mindset, setting the stage for more advanced multi-user work.",
  },
  {
    number: "06",
    title: "Second Breakthrough: Multi-User MR and System-Level Consistency (Senior Spring → Summer)",
    content:
      "I then built a deterministic multi-user MR framework—shared state machines, synchronized behaviors, and stable spatial alignment across devices.\n\nThis was my first project operating at the infrastructural level of XR, directly touching the challenges that define AR engines.",
  },
  {
    number: "07",
    title: "Spatial Interaction Awareness: Early Vision Pro Exploration (Around Senior Year)",
    content:
      "Before and after my thesis work, I explored the Vision Pro to understand spatial UI, gesture languages, and immersive interaction.\n\nThese prototypes were simple, but they helped me form an intuition for the interaction layer that future AR systems will rely on, complementing the system-level work I was building elsewhere.",
  },
  {
    number: "08",
    title: "Returning to the Long-Term Goal: Toward a Creator-First AR Engine",
    content:
      "Across all these stages—early prototypes, capability expansion, difficult pauses, and eventual breakthroughs—my direction has remained the same.\n\nI aim to build the foundations of a creator-first AR engine: shared spatial consistency, intuitive interaction, world anchoring, and environment-aware digital content.\n\nThis journey is my way of assembling the tools and understanding needed to create the digital layer I envisioned years ago.",
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

const cafeteriaProjectOverview = [
  "Built a Raspberry-Pi-based vision system that detects seat occupancy through OpenCV edge analysis.",
  "Developed a real-time web dashboard presenting seat availability.",
] as const;

const cafeteriaProjectScope = "(2021) Course project —— Engineering Practice";
const cafeteriaProjectRole = ["Team Lead", "Proposal", "CV Dev", "CAD"] as const;
const cafeteriaProjectTeam = "YU-CHEN CHUNG ,Hongxi Chen ,Ke Xu ,Ziwen Xu";

const modularArGlassesSlug = generateSlug("Modular AR Glasses with Magnetic Hand-Tracking Bands");

export default function XRSubpage() {
  const [isProjectExpanded, setIsProjectExpanded] = useState(false);
  const prototypeTestingVideoRef = useRef<HTMLVideoElement | null>(null);

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

  // Handle URL hash navigation to scroll to the button
  useLayoutEffect(() => {
    if (window.location.hash === "#cafeteria-seat-finding-system") {
      const element = document.getElementById("cafeteria-seat-finding-system");
      if (element) {
        // Small delay to ensure the page is fully rendered
        setTimeout(() => {
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - 120; // Add 120px padding from top
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
          // Also expand the project section if it's collapsed
          setIsProjectExpanded(true);
        }, 100);
      }
    }
  }, []);

  return (
    <main className="px-4 pb-16 pt-12 sm:px-6 lg:px-10 lg:pt-14">
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
            <div key={stage.number} className="w-full flex flex-col items-center">
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
                      <button
                        id="cafeteria-seat-finding-system"
                        onClick={() => setIsProjectExpanded(!isProjectExpanded)}
                        className="flex w-full items-center justify-between rounded-xl border border-neutral-200/70 bg-white/60 px-4 py-3 text-left transition-all hover:bg-white/80 dark:border-neutral-700/60 dark:bg-neutral-900/40 dark:hover:bg-neutral-900/60"
                      >
                        <span className="text-base font-semibold text-neutral-900 dark:text-white">
                          Cafeteria Seat-Finding System — An AR-Inspired Approach to Real-World Occupancy Mapping
                        </span>
                        <svg
                          className={`h-5 w-5 text-neutral-500 transition-transform duration-200 dark:text-neutral-400 ${
                            isProjectExpanded ? "rotate-180" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {isProjectExpanded && (
                        <div className="space-y-4">
                          <section className={`${baseSectionClass} gap-3 ${sectionPaddingClass}`}>
                            <h2 className={sectionHeadingClass}>
                              Overview
                            </h2>
                            {renderOverviewPoints(cafeteriaProjectOverview)}
                            <div className="mt-6 grid gap-6 sm:grid-cols-3">
                              <div>
                                <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
                                  SCOPE
                                </h3>
                                {renderText(cafeteriaProjectScope)}
                              </div>
                              <div>
                                <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
                                  ROLE
                                </h3>
                                {renderText(cafeteriaProjectRole.join(" · "))}
                              </div>
                              <div>
                                <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
                                  TEAM
                                </h3>
                                {renderText(cafeteriaProjectTeam)}
                              </div>
                            </div>
                          </section>

                          <section className={`${baseSectionClass} gap-3 ${sectionPaddingClass}`}>
                            <h2 className={sectionHeadingClass}>
                              PROBLEM & CONCEPT
                            </h2>
                            <div className="space-y-3 text-sm leading-relaxed">
                              <p>
                                During peak hours, students often wandered through the cafeteria searching for open seats, despite the problem involving hundreds of tables and no existing solution.
                              </p>
                              <p>
                                Inspired by AR and game-style spatial markers, I envisioned a system that could one day overlay seat availability directly into a user&apos;s view. But for this project, we focused on the foundational layer: detecting empty seats using ceiling-mounted cameras.
                              </p>
                              <p>
                                Since full AR rendering was far beyond scope, we concentrated on real-time computer vision and surfaced the results through a simple mobile interface—validating the core idea and paving the way for potential AR extensions.
                              </p>
                              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div className="relative overflow-hidden rounded-2xl border border-neutral-200/60 bg-neutral-100 shadow-sm dark:border-neutral-700/60 dark:bg-neutral-900/35">
                                  <div className="relative aspect-video">
                                    <Image
                                      src="/Where2eat/becon1.png"
                                      alt="Game-style cursor guidance example 1."
                                      fill
                                      sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 90vw"
                                      className="object-cover"
                                    />
                                  </div>
                                </div>
                                <div className="relative overflow-hidden rounded-2xl border border-neutral-200/60 bg-neutral-100 shadow-sm dark:border-neutral-700/60 dark:bg-neutral-900/35">
                                  <div className="relative aspect-video">
                                    <Image
                                      src="/Where2eat/becon2.jpeg"
                                      alt="Game-style cursor guidance example 2."
                                      fill
                                      sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 90vw"
                                      className="object-cover"
                                    />
                                  </div>
                                </div>
                              </div>
                              <p className="text-center text-xs italic text-neutral-500 dark:text-neutral-400">
                                These images demonstrate game-style cursor guidance that inspired the AR overlay concept.
                              </p>
                            </div>
                          </section>

                          <section className={`${baseSectionClass} gap-3 ${sectionPaddingClass}`}>
                            <h2 className={sectionHeadingClass}>
                              SYSTEM DESIGN & IMPLEMENTATION
                            </h2>
                            <div className="space-y-4 text-sm leading-relaxed">
                              <div className="relative mx-auto w-full max-w-2xl overflow-hidden rounded-2xl border border-neutral-200/60 bg-neutral-100 shadow-sm dark:border-neutral-700/60 dark:bg-neutral-900/35">
                                <div className="relative aspect-video">
                                  <Image
                                    src="/Where2eat/system.jpg"
                                    alt="System design flow diagram showing the pipeline from camera capture to web interface."
                                    fill
                                    sizes="(min-width: 1280px) 40vw, (min-width: 768px) 55vw, 90vw"
                                    className="object-cover"
                                  />
                                </div>
                              </div>
                              <p>
                                The system follows a simple pipeline: a ceiling-mounted camera captures each table&apos;s surface, OpenCV routines calibrate the tabletop regions and detect changes that signal occupancy, and a Raspberry Pi serves the results through a real-time web interface.
                              </p>

                              <SubDivider className="my-4" />

                              <div>
                                <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-50">
                                  🏗️ 1. System Architecture
                                </h3>
                                <div className="mt-3 space-y-3">
                                  <p>
                                    A single overhead camera feeds video into a Raspberry Pi, which handles both image capture and processing. The same Pi runs a lightweight web server that publishes an up-to-date seat-availability view to any phone on the local hotspot, effectively turning the camera feed into a live occupancy map.
                                  </p>
                                  <div className="relative w-full overflow-hidden rounded-2xl border border-neutral-200/60 bg-neutral-100 shadow-sm dark:border-neutral-700/60 dark:bg-neutral-900/35">
                                    <Image
                                      src="/Where2eat/systemArch.png"
                                      alt="System architecture diagram showing camera, Raspberry Pi, and web interface flow."
                                      width={1200}
                                      height={800}
                                      sizes="100vw"
                                      className="h-auto w-full object-contain"
                                    />
                                  </div>
                                </div>
                              </div>

                              <SubDivider className="my-4" />

                              <div>
                                <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-50">
                                  👁️ 2. Computer Vision Pipeline
                                </h3>
                                <div className="mt-3 space-y-3">
                                  <p>
                                    I implemented the core logic in OpenCV:
                                  </p>
                                  <ul className="space-y-2 pl-1">
                                    <li className="flex gap-2">
                                      <span className="select-none text-lg leading-none text-neutral-500">•</span>
                                      <span>Table calibration to mark each tabletop region of interest during initialization.</span>
                                    </li>
                                    <li className="flex gap-2">
                                      <span className="select-none text-lg leading-none text-neutral-500">•</span>
                                      <span>Edge-based change detection to spot new objects appearing within those regions.</span>
                                    </li>
                                    <li className="flex gap-2">
                                      <span className="select-none text-lg leading-none text-neutral-500">•</span>
                                      <span>Occupancy inference that classifies each table as free or occupied based on the detected changes.</span>
                                    </li>
                                  </ul>
                                  <div className="relative w-full overflow-hidden rounded-2xl border border-neutral-200/60 bg-neutral-100 shadow-sm dark:border-neutral-700/60 dark:bg-neutral-900/35">
                                    <Image
                                      src="/Where2eat/Computer Vision Pipeline.jpg"
                                      alt="Computer vision pipeline diagram showing table calibration, edge detection, and occupancy inference."
                                      width={1200}
                                      height={800}
                                      sizes="100vw"
                                      className="h-auto w-full object-contain"
                                    />
                                  </div>
                                </div>
                              </div>

                              <SubDivider className="my-4" />

                              <div>
                                <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-50">
                                  🔧 3. Prototype Setup
                                </h3>
                                <div className="mt-3 space-y-3">
                                  <p>
                                    Because we couldn&apos;t test directly in the cafeteria, I designed and built a simple ceiling-style camera mount so we could emulate the installation height and angle in the lab and run repeatable tests.
                                  </p>
                                  <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-neutral-200/60 bg-neutral-100 shadow-sm dark:border-neutral-700/60 dark:bg-neutral-900/35">
                                    <Image
                                      src="/Where2eat/Prototype Setup.jpg"
                                      alt="Prototype setup showing the ceiling-style camera mount in the lab environment."
                                      width={1200}
                                      height={800}
                                      sizes="(min-width: 768px) 50vw, 90vw"
                                      className="h-auto w-full object-contain"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>

                          <section className={`${baseSectionClass} gap-4 ${sectionPaddingClass}`}>
                            <h2 className={sectionHeadingClass}>
                              OUTCOME & TAKEAWAYS
                            </h2>
                            <div className="space-y-4 text-sm leading-relaxed">
                              <div>
                                <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-50">
                                  Trailer
                                </h3>
                                <div className="mt-3 space-y-3">
                                  <p>
                                    A playful short video illustrating the problem: struggling to find a seat during peak hours. The story follows me wandering through the cafeteria in frustration—until a classmate shows me the app, which instantly helps me locate an open table.
                                  </p>
                                  <div className="mt-6 flex flex-col items-center space-y-2">
                                    <div className="group relative mx-auto w-1/2 overflow-hidden rounded-3xl border border-neutral-200/70 bg-neutral-100 shadow-sm dark:border-neutral-700/60 dark:bg-neutral-900/35">
                                      <div className="relative aspect-video">
                                        <Image
                                          src="/Where2eat/trailer.png"
                                          alt="Trailer video thumbnail showing the cafeteria seat-finding system."
                                          fill
                                          sizes="(min-width: 1280px) 20vw, (min-width: 768px) 27.5vw, 45vw"
                                          className="object-cover transition duration-300 group-hover:scale-[1.02]"
                                        />
                                      </div>
                                      <Link
                                        href="https://www.youtube.com/watch?v=rCXh-gksS_Q"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="absolute inset-0 flex items-center justify-center bg-neutral-950/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                      >
                                        <span className="rounded-full bg-white/90 px-5 py-2 text-sm font-semibold uppercase tracking-wide text-neutral-900 shadow-md dark:bg-neutral-900/90 dark:text-white">
                                          View on YouTube
                                        </span>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <SubDivider className="my-4" />

                              <div>
                                <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-50">
                                  Prototype Testing
                                </h3>
                                <div className="mt-3 space-y-3">
                                  <p>
                                    Since real cafeteria access was restricted during development, we validated the CV pipeline using printed table layouts that reproduced the overhead camera view. These tests allowed us to tune edge detection, calibrate table regions, and verify occupancy inference before integrating the full system.
                                  </p>
                                  <div className="group relative mt-4 overflow-hidden rounded-2xl border border-neutral-200/60 bg-white/60 shadow-inner transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-sky-200/40 dark:border-neutral-700/60 dark:bg-neutral-900/35 dark:hover:shadow-sky-900/25">
                                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-tr from-sky-100/40 to-transparent dark:from-sky-500/10" />
                                    <div className="flex items-center justify-between px-4 pt-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
                                      <span>Prototype Testing</span>
                                      <span className="text-[0.65rem] text-neutral-500 dark:text-neutral-500">Hover to play</span>
                                    </div>
                                    <div className="relative w-full">
                                      <video
                                        ref={prototypeTestingVideoRef}
                                        src="/Where2eat/show.mov"
                                        loop
                                        playsInline
                                        preload="metadata"
                                        className="h-auto w-full"
                                        onMouseEnter={() => void prototypeTestingVideoRef.current?.play()}
                                        onFocus={() => void prototypeTestingVideoRef.current?.play()}
                                        onMouseLeave={() => {
                                          const vid = prototypeTestingVideoRef.current;
                                          if (vid) {
                                            vid.pause();
                                            vid.currentTime = 0;
                                          }
                                        }}
                                        onBlur={() => {
                                          const vid = prototypeTestingVideoRef.current;
                                          if (vid) {
                                            vid.pause();
                                            vid.currentTime = 0;
                                          }
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <SubDivider className="my-4" />

                              <div>
                                <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-50">
                                  Final Presentation
                                </h3>
                                <div className="mt-3 space-y-3">
                                  <p>
                                    The system did run end-to-end on an actual table during the final in-class presentation, demonstrating real-time updates on the Raspberry Pi and mobile interface. However, the recording from that session only captured my verbal presentation, not the live demo itself. The photos below document the setup and environment from the final session.
                                  </p>
                                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div className="relative overflow-hidden rounded-2xl border border-neutral-200/60 bg-neutral-100 shadow-sm dark:border-neutral-700/60 dark:bg-neutral-900/35">
                                      <div className="relative aspect-video">
                                        <Image
                                          src="/Where2eat/present.png"
                                          alt="Final presentation setup showing the system in action."
                                          fill
                                          sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 90vw"
                                          className="object-cover"
                                        />
                                      </div>
                                    </div>
                                    <div className="relative overflow-hidden rounded-2xl border border-neutral-200/60 bg-neutral-100 shadow-sm dark:border-neutral-700/60 dark:bg-neutral-900/35">
                                      <div className="relative aspect-video">
                                        <Image
                                          src="/Where2eat/together.png"
                                          alt="Final presentation environment showing the complete setup."
                                          fill
                                          sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 90vw"
                                          className="object-cover"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                        </div>
                      )}
                      <div className="mt-6 space-y-3 text-sm leading-relaxed">
                        <p>
                          After this early experiment in grounding AR ideas through computer vision, I became increasingly interested in the hardware side of spatial interfaces—how future AR devices might be worn, assembled, or adapted to different contexts.
                        </p>
                        <p>
                          During the summer studio between my freshman and sophomore years, I took a design course where I explored these questions through a modular AR glasses concept. This became my first attempt to think about AR not only as an interaction system, but also as an industrial and wearable form.
                        </p>
                      </div>
                      <div className="mt-6 w-full max-w-3xl overflow-hidden rounded-[1.75rem] border border-white/50 bg-white/80 p-5 shadow-lg backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
                        <h3
                          className="mb-3 text-2xl font-semibold leading-tight text-transparent bg-clip-text sm:text-[1.65rem]"
                          style={{
                            backgroundImage: `linear-gradient(90deg, ${brandTheme.primary}, ${brandTheme.accent})`,
                          }}
                        >
                          Exploring Modular AR Hardware Design
                        </h3>
                        <p className="mb-4 text-base font-medium text-slate-800 dark:text-slate-100">
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

