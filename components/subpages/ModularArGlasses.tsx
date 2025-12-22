'use client';

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import PortfolioBackButton from "@/components/ui/portfolio-back-button";
import SectionIndicator from "@/components/ui/section-indicator";
import ImageCarousel from "@/components/ui/image-carousel";

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
  team: "Yu-Chen Chung, Chu Chen, Yufan Zhang, Nan Li, Jiarui Zhou,Liuhao Feng",
} satisfies ProjectDetails;

const batteryCarouselImages = [
  {
    src: "/glassBandDesign/battery/battery1.png",
    alt: "Exploded view highlighting the detachable battery side-arms on the AR glasses.",
  },
  {
    src: "/glassBandDesign/battery/battery2.png",
    alt: "Close-up render showing the magnetic interface between the battery module and glasses frame.",
  },
  {
    src: "/glassBandDesign/battery/battery3.png",
    alt: "Perspective render of the battery module detached from the glasses, illustrating swappable power packs.",
  },
] as const;

const threeInOneCarouselImages = [
  {
    src: "/glassBandDesign/3in1/3in11.png",
    alt: "Render showing the wrist bands merged into a single watch-like wearable.",
  },
  {
    src: "/glassBandDesign/3in1/3in12.png",
    alt: "Visualization of each band worn independently with sensors highlighted.",
  },
  {
    src: "/glassBandDesign/3in1/3in13.png",
    alt: "Diagram illustrating the bands separating into two modules for AR use.",
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

export default function ModularArGlassesSubpage() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  const arGlassesStages = [
    { number: "01", title: "Overview" },
    { number: "02", title: "Inspiration" },
    { number: "03", title: "Design Concept" },
    { number: "04", title: "3D Modeling", minThreshold: 0.01 }, // Lower threshold for this long section
    { number: "05", title: "Reflection" },
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
      <SectionIndicator stages={arGlassesStages} sectionRefs={sectionRefs} />
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

            <section
              ref={(el) => {
                sectionRefs.current[0] = el;
              }}
              className={`${baseSectionClass} gap-3 ${sectionPaddingClass}`}
            >
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

            <section
              ref={(el) => {
                sectionRefs.current[1] = el;
              }}
              className={`${baseSectionClass} gap-3 ${sectionPaddingClass}`}
            >
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
                <p className="text-center text-xs italic text-neutral-500 dark:text-neutral-400">
                  I watched this (and many similar) fan-made “Apple Glass” concept videos around 2020; collectively they inspired my interest in AR glasses.
                </p>
              </div>
            </section>

            <section
              ref={(el) => {
                sectionRefs.current[2] = el;
              }}
              className={`${baseSectionClass} gap-3 ${sectionPaddingClass}`}
            >
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

            <section
              ref={(el) => {
                sectionRefs.current[3] = el;
              }}
              className={`${baseSectionClass} gap-3 ${sectionPaddingClass}`}
            >
              <h2 className={sectionHeadingClass}>
                3D Modeling
              </h2>
              <div className="space-y-5">
                <div className="space-y-2">
                  <p className="text-base font-semibold text-neutral-900 dark:text-white sm:text-2xl">
                    👓 AR Glasses
                  </p>
                  <div className="space-y-5 text-sm leading-relaxed text-neutral-800 dark:text-neutral-100">
                    <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 shadow-inner dark:border-neutral-800 dark:bg-neutral-950">
                      <Image
                        src="/glassBandDesign/ARglassHero.jpg"
                        alt="Hero render of the modular AR glasses concept."
                        width={1600}
                        height={900}
                        className="h-auto w-full object-cover"
                        sizes="(min-width: 1280px) 50vw, (min-width: 768px) 65vw, 95vw"
                      />
                    </div>
                    <div className="space-y-2">
                      <p className="text-base font-semibold text-neutral-900 dark:text-white">
                        Privacy-First Sensing
                      </p>
                      <ul className="list-disc space-y-1 pl-5">
                        <li>LiDAR-only spatial mapping replaces traditional cameras to avoid capturing bystanders&rsquo; images.</li>
                        <li>Maintains depth perception and scene reconstruction accuracy while minimizing privacy concerns.</li>
                      </ul>
                    </div>
                    <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 shadow-inner dark:border-neutral-800 dark:bg-neutral-950">
                      <Image
                        src="/glassBandDesign/lidar.png"
                        alt="Diagram explaining LiDAR-based sensing for the AR glasses concept."
                        width={1200}
                        height={675}
                        className="h-auto w-full object-cover"
                        sizes="(min-width: 1280px) 40vw, (min-width: 768px) 55vw, 90vw"
                      />
                    </div>
                    <div className="space-y-2">
                      <p className="text-base font-semibold text-neutral-900 dark:text-white">
                        2️⃣ Modular Power &amp; Design Flexibility
                      </p>
                      <ul className="list-disc space-y-1 pl-5">
                        <li>Detachable battery side-arms let both temples act as swappable battery modules when power runs low.</li>
                        <li>Interchangeable frame styles enable sport or lightweight side-arms, balancing endurance, comfort, and personal aesthetics.</li>
                      </ul>
                    </div>
                    <ImageCarousel
                      images={batteryCarouselImages}
                      aspectClassName="aspect-video"
                      sizes="(min-width: 1280px) 40vw, (min-width: 768px) 60vw, 95vw"
                      ariaLabel="Battery module render carousel"
                      containerClassName="mt-1"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-base font-semibold text-neutral-900 dark:text-white sm:text-2xl">
                    ⌚ Dual Wrist Bands
                  </p>
                  <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-100">
                    A pair of magnetically detachable wrist bands that provide full-range hand tracking beyond camera limits, designed for both ergonomic comfort and daily wearability.
                  </p>
                  <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 shadow-inner dark:border-neutral-800 dark:bg-neutral-950">
                    <Image
                      src="/glassBandDesign/bandHero.png"
                      alt="Hero render showcasing the dual wrist band concept."
                      width={1600}
                      height={900}
                      className="h-auto w-full object-cover"
                      sizes="(min-width: 1280px) 50vw, (min-width: 768px) 65vw, 95vw"
                    />
                  </div>
                  <div className="space-y-5 text-sm leading-relaxed text-neutral-800 dark:text-neutral-100">
                    <div className="space-y-2">
                      <p className="text-base font-semibold text-neutral-900 dark:text-white">
                        Modular Three-in-One Design
                      </p>
                      <p>
                        The wrist bands were designed as a modular three-in-one system to balance functionality and everyday usability. Each single band integrates essential motion-tracking components — such as IMU sensors — to support gesture recognition and activity monitoring when worn independently.
                      </p>
                      <p>
                        During AR operation, the two bands can be separated and worn on both wrists, extending the system’s ability to recognize hand gestures beyond the headset’s field of view. However, since users may not always need dual-hand tracking, the bands can magnetically attach together to form a single, watch-like wearable for daily use — maintaining a clean and familiar aesthetic without redundant hardware.
                      </p>
                      <ImageCarousel
                        images={threeInOneCarouselImages}
                        aspectClassName="aspect-video"
                        sizes="(min-width: 1280px) 40vw, (min-width: 768px) 60vw, 95vw"
                        ariaLabel="Three-in-one wrist band configuration carousel"
                        containerClassName="mt-3"
                      />
                    </div>
                    <div className="space-y-2">
                      <p className="text-base font-semibold text-neutral-900 dark:text-white">
                        Strap Design and Material Choice
                      </p>
                      <p>
                        The connecting edges of each band are embedded with precision magnets, enabling the two halves to snap seamlessly together.
                      </p>
                      <p>
                        Inspired by Apple’s Solo Loop design, the bands are made of ultra-soft, stretchable silicone that conforms comfortably to the wrist. This buckle-free material ensures a smooth, continuous surface and makes the magnetic merging mechanism both practical and elegant — allowing the two bands to connect as one unified, minimalist form.
                      </p>
                      <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 shadow-inner dark:border-neutral-800 dark:bg-neutral-950">
                        <Image
                          src="/glassBandDesign/strap.png"
                          alt="Close-up of the dual wrist band strap material and magnetic connection detail."
                          width={1200}
                          height={675}
                          className="h-auto w-full object-cover"
                          sizes="(min-width: 1280px) 40vw, (min-width: 768px) 60vw, 95vw"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section
              ref={(el) => {
                sectionRefs.current[4] = el;
              }}
              className={`${baseSectionClass} gap-4 ${sectionPaddingClass}`}
            >
              <h2 className={sectionHeadingClass}>
                Reflection
              </h2>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  When I designed this concept in my freshman year, I imagined AR glasses as lightweight, personal devices that could preserve privacy through LiDAR-only sensing — a vision that now feels idealistic. As I gained more experience, I realized that depth data alone can’t replace imagery; in today’s AI-driven computer vision, visual input remains the foundation for semantic understanding, with depth merely assisting as spatial context.
                </p>
                <p>
                  The recent success of products like Ray-Ban Meta reminded me that what once failed may not always stay impossible. As technology and society evolve, ideas once ahead of their time can return with new relevance.
                </p>
                <p>
                  In the end, this project taught me to question assumptions. I came to realize that design isn’t only about feasibility, but about the values it upholds — and how those values quietly evolve as technology enters everyday life. Every design, in its own way, imagines a future — and reminds us of our responsibility in shaping it.
                </p>
              </div>
            </section>
          </article>
        </div>
      </div>
    </main>
  );
}
