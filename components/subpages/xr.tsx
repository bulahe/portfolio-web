"use client";

import { useLayoutEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import PortfolioBackButton from "@/components/ui/portfolio-back-button";
import SectionDivider from "@/components/section-divider";
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
      "My first experiments focused on mapping digital logic onto physical spaces.\n\nI built a seat-detection prototype inspired by AR navigation ideas and designed a concept AR headset to explore form factors and interaction models.\n\nThese small steps helped translate an abstract vision into concrete engineering questions.",
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

export default function XRSubpage() {
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

