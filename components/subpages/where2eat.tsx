"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import PortfolioBackButton from "@/components/ui/portfolio-back-button";
import SectionIndicator from "@/components/ui/section-indicator";
import SubDivider from "@/components/sub-divider";

const projectDetails = {
  overview: [
    "Built a Raspberry-Pi-based vision system that detects seat occupancy through OpenCV edge analysis.",
    "Developed a real-time web dashboard presenting seat availability.",
  ],
  scope: "(2021) Course project —— Engineering Practice",
  role: ["Team Lead", "Proposal", "CV Dev", "CAD"],
  team: "YU-CHEN CHUNG ,Hongxi Chen ,Ke Xu ,Ziwen Xu",
} as const;

const renderText = (value: string | null) =>
  value ? (
    <p className="mt-2 whitespace-pre-line text-sm">{value}</p>
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

export default function Where2EatSubpage() {
  const prototypeTestingVideoRef = useRef<HTMLVideoElement | null>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  const where2eatStages = [
    { number: "01", title: "Overview" },
    { number: "02", title: "Problem & Concept" },
    { number: "03", title: "System Design" },
    { number: "04", title: "Outcome" },
  ];

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
    <main className="relative flex w-full justify-center px-4 pb-24 pt-16 sm:px-6 lg:px-8">
      <SectionIndicator stages={where2eatStages} sectionRefs={sectionRefs} />
      <div className="relative w-full">
        <PortfolioBackButton />

        <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 lg:max-w-[54%]">
          <article className="flex flex-col gap-4">
            <header className="flex flex-col gap-5 rounded-[2.5rem] border border-neutral-200/70 bg-neutral-50/60 p-6 text-neutral-900 shadow-xl backdrop-blur-sm dark:border-neutral-700/60 dark:bg-neutral-900/40 dark:text-neutral-100 sm:p-8">
              <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
                Cafeteria Seat-Finding System
              </h1>
              <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                An AR-Inspired Approach to Real-World Occupancy Mapping
              </p>
            </header>

            <section
              ref={(el) => {
                sectionRefs.current[0] = el;
              }}
              className={`${baseSectionClass} gap-3 ${sectionPaddingClass}`}
            >
              <h2 className={sectionHeadingClass}>Overview</h2>
              {renderOverviewPoints(projectDetails.overview)}
              <div className="mt-6 grid gap-6 sm:grid-cols-3">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
                    SCOPE
                  </h3>
                  {renderText(projectDetails.scope)}
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
                    ROLE
                  </h3>
                  {renderText(projectDetails.role.join(" · "))}
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
                    TEAM
                  </h3>
                  {renderText(projectDetails.team)}
                </div>
              </div>
            </section>

            <section
              ref={(el) => {
                sectionRefs.current[1] = el;
              }}
              className={`${baseSectionClass} gap-3 ${sectionPaddingClass}`}
            >
              <h2 className={sectionHeadingClass}>PROBLEM & CONCEPT</h2>
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

            <section
              ref={(el) => {
                sectionRefs.current[2] = el;
              }}
              className={`${baseSectionClass} gap-3 ${sectionPaddingClass}`}
            >
              <h2 className={sectionHeadingClass}>SYSTEM DESIGN & IMPLEMENTATION</h2>
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

            <section
              ref={(el) => {
                sectionRefs.current[3] = el;
              }}
              className={`${baseSectionClass} gap-4 ${sectionPaddingClass}`}
            >
              <h2 className={sectionHeadingClass}>OUTCOME & TAKEAWAYS</h2>
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
          </article>
        </div>
      </div>
    </main>
  );
}

