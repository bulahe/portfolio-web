"use client";

import { useLayoutEffect, useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import PortfolioBackButton from "@/components/ui/portfolio-back-button";
import SectionDivider from "@/components/section-divider";
import SubDivider from "@/components/sub-divider";
import SectionIndicator from "@/components/ui/section-indicator";
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
      content: "",
  },
  {
    number: "03",
    title: "Later Projects",
    content: "",
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

// Helper function to save return target for navigation
const rememberReturnTarget = (hash?: string) => {
  if (typeof window === "undefined") return;
  try {
    const { pathname } = window.location;
    const payload = JSON.stringify({
      path: pathname || "/xr",
      hash: hash || "",
      scroll: window.scrollY,
    });
    window.sessionStorage.setItem("portfolio:return-target", payload);
  } catch {
    /* ignore storage failure */
  }
};

// Helper function to render project card with unified format (title/subtitle centered, content/image horizontal)
const renderProjectCard = (
  title: string,
  subtitle: string,
  imageSrc: string,
  imageAlt: string,
  href: string,
  index: number, // 0-based index for determining layout (odd: text left/image right, even: text right/image left)
  content?: string, // Optional content text
  id?: string,
  refCallback?: (el: HTMLDivElement | null) => void
) => {
  const isOdd = index % 2 === 0; // 0, 2, 4 are odd positions (1st, 3rd, 5th)
  const textOrder = isOdd ? "order-1" : "order-2";
  const imageOrder = isOdd ? "order-2" : "order-1";

  return (
    <div
      id={id}
      ref={refCallback}
      className="mx-auto mt-6 w-full max-w-5xl overflow-hidden rounded-[1.75rem] border border-white/50 bg-white/80 p-6 shadow-lg backdrop-blur-sm dark:border-white/10 dark:bg-white/5 sm:p-7"
    >
      {/* Title and subtitle - centered at top */}
      <div className="mb-6 text-center">
        <h3 className="mb-2 text-2xl font-semibold leading-tight text-neutral-900 dark:text-white sm:text-[1.65rem]">
          {title}
        </h3>
        <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
          {subtitle}
        </p>
      </div>
      {/* Content and image - horizontal layout */}
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-8">
        {/* Text content */}
        <div className={`flex flex-1 flex-col ${textOrder} md:w-1/2`}>
          {content && (
            <div className="space-y-3 text-base leading-relaxed text-slate-700 dark:text-slate-200">
              {content.split("\n\n").map((paragraph, pIndex) => (
                <p key={pIndex}>{paragraph}</p>
              ))}
            </div>
          )}
        </div>
        {/* Image */}
        <Link
          href={href}
          onClick={() => rememberReturnTarget(id)}
          className={`group relative aspect-[3/2] w-full overflow-hidden rounded-2xl border border-white/40 bg-neutral-200 shadow-inner dark:border-white/10 dark:bg-neutral-900 ${imageOrder} md:w-1/2 block cursor-pointer`}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 90vw"
            className="object-cover transition duration-300 group-hover:scale-[1.02]"
            priority
          />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/35 opacity-0 transition duration-200 group-hover:opacity-100">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-slate-900 shadow-lg">
              View project details
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default function XRSubpage() {
  // Create refs for each timeline stage
  const stageRefs = useRef<(HTMLElement | null)[]>([]);
  const cafeteriaProjectRef = useRef<HTMLDivElement | null>(null);

  // Restore scroll position when returning from project pages
  useEffect(() => {
    if (typeof window === "undefined") return;

    const restoreScrollPosition = () => {
      // Check if we have a return target and if it's from XR page (meaning we came from a project page)
      let shouldRestore = false;
      try {
        const raw = window.sessionStorage.getItem("portfolio:return-target");
        if (raw) {
          const data = JSON.parse(raw) as {
            path?: string;
            hash?: string;
            scroll?: number;
          };
          // Only restore if the return target path is "/xr" (meaning we came from a project page back to XR)
          if (data.path === "/xr") {
            shouldRestore = true;
          }
        }
      } catch {
        /* ignore */
      }

      // If no return target from XR page, check if there's a hash in URL (for direct links like /xr#cafeteria-seat-finding-system)
      if (!shouldRestore) {
        const hash = window.location.hash;
        if (hash) {
          const target = document.getElementById(hash.slice(1));
          if (target) {
            const desiredTop = target.getBoundingClientRect().top + window.scrollY - 120;
            requestAnimationFrame(() => {
              window.scrollTo({
                top: Math.max(0, desiredTop),
                behavior: "smooth",
              });
            });
          }
        }
        return;
      }

      let desiredTop: number | null = null;
      const hash = window.location.hash;

      // First, try to scroll to hash if present
      if (hash) {
        const target = document.getElementById(hash.slice(1));
        if (target) {
          desiredTop = target.getBoundingClientRect().top + window.scrollY - 120;
        }
      }

      // If no hash or hash target not found, try stored scroll position
      if (desiredTop === null) {
        try {
          const rawScroll = window.sessionStorage.getItem("portfolio:return-scroll");
          if (rawScroll !== null) {
            const parsed = JSON.parse(rawScroll);
            if (typeof parsed === "number") {
              desiredTop = parsed;
            }
          }
          window.sessionStorage.removeItem("portfolio:return-scroll");
        } catch {
          /* ignore */
        }
      }

      if (desiredTop === null) {
        return;
      }

      requestAnimationFrame(() => {
        const root = document.documentElement;
        const hadSmoothClass = root.classList.contains("!scroll-smooth");
        const previousBehavior = root.style.getPropertyValue("scroll-behavior");
        const previousPriority = root.style.getPropertyPriority("scroll-behavior");

        if (hadSmoothClass) {
          root.classList.remove("!scroll-smooth");
        }
        root.style.setProperty("scroll-behavior", "auto", "important");

        window.scrollTo({
          top: Math.max(0, desiredTop as number),
          behavior: "auto",
        });

        requestAnimationFrame(() => {
          if (previousBehavior) {
            root.style.setProperty(
              "scroll-behavior",
              previousBehavior,
              previousPriority || undefined
            );
          } else {
            root.style.removeProperty("scroll-behavior");
          }

          if (hadSmoothClass) {
            root.classList.add("!scroll-smooth");
          }
        });
      });
    };

    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(restoreScrollPosition, 100);
    return () => clearTimeout(timeoutId);
  }, []);

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



  return (
    <main className="relative px-4 pb-16 pt-12 sm:px-6 lg:px-10 lg:pt-14">
      {/* Vertical Section Indicator */}
      <SectionIndicator
        stages={timelineStages.map((stage) => ({
          number: stage.number,
          title: stage.title,
        }))}
        sectionRefs={stageRefs}
      />

      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <PortfolioBackButton label="Back" />

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
                  {stage.content && (
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
                  )}
                  {stage.number === "02" && (
                    <div className="mt-6 space-y-6">
                      <div
                        id="cafeteria-seat-finding-system"
                        ref={cafeteriaProjectRef}
                        className="mx-auto mt-6 w-full max-w-5xl overflow-hidden rounded-[1.75rem] border border-white/50 bg-white/80 p-6 shadow-lg backdrop-blur-sm dark:border-white/10 dark:bg-white/5 sm:p-7"
                      >
                        {/* Title and subtitle - centered at top */}
                        <div className="mb-6 text-center">
                          <h3 className="mb-2 text-2xl font-semibold leading-tight text-neutral-900 dark:text-white sm:text-[1.65rem]">
                            Cafeteria Seat-Finding System
                          </h3>
                          <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                            An AR-Inspired Approach to Real-World Occupancy Mapping
                          </p>
                        </div>
                        {/* Content and image - horizontal layout */}
                        <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-8">
                          {/* Text content - Left */}
                          <div className="flex flex-1 flex-col md:w-1/2">
                            <div className="space-y-3 text-base leading-relaxed text-slate-700 dark:text-slate-200">
                              <p>
                                Peak-hour seat searching in a large campus cafeteria was frustrating. I wondered if AR-style spatial awareness could make finding available seats more intuitive, so I proposed the idea in class and led a team to build it.
                              </p>
                              <p>
                                We used ceiling-mounted cameras to detect seat occupancy in real time and presented results through a web interface, grounding an AR-inspired idea in deployable infrastructure.
                              </p>
                            </div>
                          </div>
                          {/* Image - Right */}
                          <Link
                            href={`/projects/${generateSlug("Cafeteria Seat-Finding System")}`}
                            onClick={() => rememberReturnTarget("cafeteria-seat-finding-system")}
                            className="group relative aspect-[3/2] w-full overflow-hidden rounded-2xl border border-white/40 bg-neutral-200 shadow-inner dark:border-white/10 dark:bg-neutral-900 md:w-1/2 block cursor-pointer"
                          >
                            <Image
                              src="/Where2eat/where2eatHero.png"
                              alt="Cafeteria Seat-Finding System"
                              fill
                              sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 90vw"
                              className="object-cover transition duration-300 group-hover:scale-[1.02]"
                              priority
                            />
                            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/35 opacity-0 transition duration-200 group-hover:opacity-100">
                              <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-slate-900 shadow-lg">
                                View project details
                              </span>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <SubDivider />
                      {renderProjectCard(
                        "Exploring Modular AR Hardware Design",
                        "A conceptual design envisioning lightweight AR eyewear with magnetic, detachable dual bands for full-range hand tracking.",
                        "/glassBandDesign/glassBandDesignHero.png",
                        "Modular AR glasses with magnetic hand-tracking bands concept design.",
                        `/projects/${modularArGlassesSlug}`,
                        1, // Even position: text right, image left
                        "This project began with a set of questions about why current wearable AR systems struggle to move beyond prototypes.\n\nI framed the design around recurring constraints—computation, energy, sensing, and interaction—and how they shape everyday usability.\n\nAs my technical understanding deepened in later years, I revisited these early assumptions and learned how idealistic AR visions must evolve alongside real-world constraints.",
                        generateSlug("Exploring Modular AR Hardware Design")
                      )}
                      <SubDivider />
                      {renderProjectCard(
                        "GAME: Surprise Party",
                        "A Roblox-based multiplayer party game that won a campus game design award.",
                        "/partyGame/partyGameHero.png",
                        "GAME: Surprise Party",
                        `/projects/${generateSlug("GAME: Surprise Party")}`,
                        2, // Odd position: text left, image right
                        "As a team member, I contributed to interaction design and real-time behavior in a shared 3D environment.\n\nWhile not an XR project, this experience helped strengthen the spatial and interaction instincts that continue to inform how I approach VR and AR systems.",
                        generateSlug("GAME: Surprise Party")
                      )}
                          </div>
                  )}
                  {stage.number === "03" && (
                    <div className="mt-6 space-y-6">
                      {renderProjectCard(
                        "Enhancing Synthetic IMU Generation for Human Activity Recognition",
                        "Bachelor thesis proposing a closed-loop framework for controllable virtual IMU data generation and evaluation, improving model generalization across datasets.",
                        "/undergraduate thesis/undergraduate thesisHero.jpeg",
                        "Enhancing Synthetic IMU Generation for Human Activity Recognition",
                        `/projects/${generateSlug("Enhancing Synthetic IMU Generation for Human Activity Recognition")}`,
                        0, // Odd position: text left, image right
                        "For my undergraduate thesis in Microelectronics, I chose a topic aligned with human pose recognition—a foundational problem underlying many AR and XR systems.\n\nWorking within the constraints of my department, I used this project to engage with multimodal data fusion and contemporary AI methods.\n\nThe experience deepened my understanding of how sensing, learning, and system design intersect in embodied, real-world applications.",
                        generateSlug("Enhancing Synthetic IMU Generation for Human Activity Recognition")
                      )}
                      <SubDivider />
                      {renderProjectCard(
                        "Managing Multi-User Interruptions in Human–Robot Interaction",
                        "An AR-simulated study of real-world service robot interactions in multi-user environments, reviewed at CHI 2026 and currently undergoing revision for resubmission.",
                        "/XRobot/XRobotHero.png",
                        "Managing Multi-User Interruptions in Human–Robot Interaction",
                        `/projects/${generateSlug("Managing Multi-User Interruptions in Human–Robot Interaction")}`,
                        1, // Even position: text right, image left
                        "After finishing my undergraduate thesis, I sought out collaboration with the Software School's Digital Art Lab to work on a project aligned with my long-term AR vision.\n\nThrough developing a multi-user AR system for service robot interaction research, I began engaging with challenges of shared state, coordination, and system-level consistency across users.",
                        generateSlug("Managing Multi-User Interruptions in Human–Robot Interaction")
                      )}
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

