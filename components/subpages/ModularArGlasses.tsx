'use client';

import { useLayoutEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import PortfolioBackButton from "@/components/ui/portfolio-back-button";

type ProjectDetails = {
  overview: readonly string[];
  scope: string | null;
  role: readonly string[];
  team: string | null;
};

const projectDetails = {
  overview: ["This project explores a conceptual design for lightweight AR glasses paired with detachable magnetic hand-tracking bands. The system was created during my freshman design elective as an early exploration into spatial interaction hardware — before most consumer AR eyewear even existed.","Unlike vision-only tracking, which fails when hands leave the camera’s field of view, the dual-band setup provides consistent gesture sensing through wearable sensors. When combined, the two magnetic bands form a compact accessory; when separated, they attach to both hands to enable full-range tracking. The design emphasizes modularity, ergonomics, and a vision for more seamless, human-centered AR experiences."],
  scope: "(2022) Course project — The Art of Design Innovation",
  role: ["Lead Designer", "Hardware Modeler"],
  team: "Yu-Chen Chong, Chu Chen, Yufan Zhang, Nan Li, Jiarui Zhou,Liuhao Feng",
} satisfies ProjectDetails;

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

export default function ModularArGlassesSubpage() {
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
      <div className="relative w-full">
        <PortfolioBackButton />

        <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 lg:max-w-[54%]">
          <article className="flex flex-col gap-4">
            <header className="flex flex-col gap-5 rounded-[2.5rem] border border-neutral-200/70 bg-neutral-50/60 p-6 text-neutral-900 shadow-xl backdrop-blur-sm dark:border-neutral-700/60 dark:bg-neutral-900/40 dark:text-neutral-100">
              <h1 className="text-2xl font-semibold leading-tight sm:text-3xl">
                Modular AR Glasses with Magnetic Hand-Tracking Bands
              </h1>

              <div className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-100 shadow-inner dark:border-neutral-800 dark:bg-neutral-950">
                <Image
                  src="/glassBandDesign/glassBandDesignHero.png"
                  alt="Concept render of the modular AR glasses with hand-tracking bands."
                  fill
                  sizes="(min-width: 1280px) 60vw, (min-width: 768px) 70vw, 90vw"
                  className="object-cover"
                  priority
                />
              </div>
            </header>

            <section className={`${baseSectionClass} gap-3 ${sectionPaddingClass}`}>
              <h2 className={sectionHeadingClass}>
                Overview
              </h2>
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
                  {renderList(projectDetails.role)}
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
                    TEAM
                  </h3>
                  {renderText(projectDetails.team)}
                </div>
              </div>
            </section>

            <section className={`${baseSectionClass} gap-3 ${sectionPaddingClass}`}>
              <h2 className={sectionHeadingClass}>
                Inspiration
              </h2>
              <div className="space-y-4 text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
                <p>
                  During my senior year of high school, I came across a fan-made concept video for “Apple Glass” — not an official product, but an imaginative vision of what AR glasses could become. That moment sparked a lasting belief that augmented reality would one day merge seamlessly with everyday life. I became fascinated by how digital content could coexist with the physical world, leading me to start imagining what the hardware behind such experiences might look like.
                </p>
                <div className="group relative mx-auto w-full overflow-hidden rounded-3xl border border-neutral-200/70 bg-neutral-100 shadow-sm dark:border-neutral-700/60 dark:bg-neutral-900/35">
                  <div className="relative aspect-video">
                    <Image
                      src="/glassBandDesign/appleGlassYT.png"
                      alt="Fan-made Apple Glass concept video thumbnail."
                      fill
                      sizes="(min-width: 1280px) 40vw, (min-width: 768px) 55vw, 90vw"
                      className="object-cover transition duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                  <Link
                    href="https://www.youtube.com/watch?v=AvzgDoDgXzE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center bg-neutral-950/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  >
                    <span className="rounded-full bg-white/90 px-5 py-2 text-sm font-semibold uppercase tracking-wide text-neutral-900 shadow-md dark:bg-neutral-900/90 dark:text-white">
                      View on YouTube
                    </span>
                  </Link>
                </div>
                <p className="text-center text-xs italic text-neutral-500 dark:text-neutral-400">
                  I watched this (and many similar) fan-made “Apple Glass” concept videos around 2020; collectively they inspired my interest in AR glasses.
                </p>
              </div>
            </section>

            <section className={`${baseSectionClass} gap-3 ${sectionPaddingClass}`}>
              <h2 className={sectionHeadingClass}>
                Design Concept
              </h2>
              <div className="space-y-6 text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
                <p>
                  The concept envisions future AR hardware guided by four principles — distributed computation, energy sustainability, privacy-conscious sensing, and ergonomic interaction — addressing key pain points in today’s wearable AR systems.
                </p>

                <div
                  className="relative w-full overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 shadow-inner dark:border-neutral-800 dark:bg-neutral-950"
                  style={{ aspectRatio: "16 / 9" }}
                >
                  <Image
                    src="/glassBandDesign/How to shrink it down.png"
                    alt="Sketch showing how the magnetic AR bands compress into a compact form factor."
                    fill
                    className="object-cover"
                    sizes="(min-width: 1280px) 40vw, (min-width: 768px) 55vw, 90vw"
                  />
                </div>

                <div className="space-y-2">
                  <p className="text-base font-semibold text-neutral-900 dark:text-white">
                    ☁️ Distributed Computation
                  </p>
                  <p>
                    Future AR devices should minimize onboard processing by distributing computation between the headset, nearby personal devices, and the cloud. To reduce latency, the local device can first render a simplified low-poly scene for immediate feedback, while the cloud progressively refines and replaces it with a high-fidelity version. This distributed workflow enables lighter form factors without sacrificing responsiveness or visual quality.
                  </p>
                </div>

                <div
                  className="relative w-full overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 shadow-inner dark:border-neutral-800 dark:bg-neutral-950"
                  style={{ aspectRatio: "16 / 9" }}
                >
                  <Image
                    src="/glassBandDesign/Distributed Computation.png"
                    alt="Diagram explaining the distributed computation workflow for the AR glasses concept."
                    fill
                    className="object-cover"
                    sizes="(min-width: 1280px) 40vw, (min-width: 768px) 55vw, 90vw"
                  />
                </div>

                <div className="space-y-2">
                  <p className="text-base font-semibold text-neutral-900 dark:text-white">
                    🔋 Energy Sustainability
                  </p>
                  <p>
                    Current AR/VR devices are constrained by short battery life. A modular or replaceable power design could make continuous, everyday use feasible — an essential step toward practical wearable computing.
                  </p>
                </div>

                
                <div className="space-y-2">
                  <p className="text-base font-semibold text-neutral-900 dark:text-white">
                    🧠 Privacy-First Sensing
                  </p>
                  <p>
                    The future of AR should respect personal and public privacy. Avoiding conventional cameras and exploring alternative sensing methods, such as LiDAR-based spatial mapping, could make AR more socially acceptable and trustworthy.
                  </p>
                </div>

                <div className="space-y-2 text-center">
                  <div
                    className="relative mx-auto w-full overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 shadow-inner dark:border-neutral-800 dark:bg-neutral-950"
                    style={{ aspectRatio: "16 / 9" }}
                  >
                    <Image
                      src="/glassBandDesign/google-glass-macro.webp"
                      alt="Close-up view of Google Glass hardware highlighting the camera module."
                      fill
                      className="object-cover"
                      sizes="(min-width: 1280px) 40vw, (min-width: 768px) 55vw, 90vw"
                    />
                  </div>
                  <p className="text-xs italic text-neutral-500 dark:text-neutral-400">
                    Public concern arose when Google Glass enabled near-invisible recording in public spaces, raising questions of consent, bystander tracking, and privacy.
                  </p>
                  <p className="text-[0.65rem] uppercase tracking-wide text-neutral-400 dark:text-neutral-500">
                    Image source: “Potential dangers for Google Glass, other wearable computers”, Malwarebytes Labs (Aug 30 2013)
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-base font-semibold text-neutral-900 dark:text-white">
                    ✋ Ergonomic Interaction
                  </p>
                  <p>
                    Camera-based hand tracking often fails when hands move outside the field of view, forcing users to keep their arms raised unnaturally during operation. A more ergonomic approach would enable continuous gesture recognition even when hands are relaxed — potentially through wearable sensing integrated into everyday accessories.
                  </p>
                  <div className="mx-auto mt-4 w-full max-w-[16rem]">
                    <div className="relative aspect-square overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 shadow-inner dark:border-neutral-800 dark:bg-neutral-950">
                      <Image
                        src="/glassBandDesign/VRshake.jpg"
                        alt="Square concept render illustrating the VR shake interaction challenge."
                        fill
                        className="object-cover"
                        sizes="(min-width: 1280px) 18vw, (min-width: 768px) 25vw, 60vw"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className={`${baseSectionClass} gap-3 ${sectionPaddingClass}`}>
              <h2 className={sectionHeadingClass}>
                3D Modeling
              </h2>
              <div className="min-h-[6rem] rounded-2xl border border-neutral-200/60 bg-white/40 dark:border-neutral-700/60 dark:bg-neutral-900/35" />
            </section>

            <section className={`${baseSectionClass} gap-4 ${sectionPaddingClass}`}>
              <h2 className={sectionHeadingClass}>
                Reflection
              </h2>
              <div className="min-h-[6rem] rounded-2xl border border-neutral-200/60 bg-white/40 dark:border-neutral-700/60 dark:bg-neutral-900/35" />
            </section>
          </article>
        </div>
      </div>
    </main>
  );
}
