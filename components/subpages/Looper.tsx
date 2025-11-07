'use client';

import { useLayoutEffect } from "react";
import Image from "next/image";
import ImageCarousel from "@/components/ui/image-carousel";
import PortfolioBackButton from "@/components/ui/portfolio-back-button";
import Link from "next/link";

const looperDetails = {
  overview: [
    "Designed and built a custom Bluetooth MIDI foot pedal with eleven footswitches powered by an ESP32 running MicroPython.",
    "Developed the pedal to control an iPad-based looping app during live performances.",
    "Modeled and rendered the enclosure in Shapr3D with an emphasis on ergonomics and stage usability.",
    "Explores the intersection of hardware, music performance, and UX through creative embedded systems.",
  ] as const,
  scope: "(2022) Course project — Science and Technology Innovation Part I",
  role: ["Hardware & firmware design", "Product development"],
  team: "individual",
} as const;

const cadImages = [
  {
    src: "/Looper/CAD/LooperCAD1.png",
    alt: "CAD render showing the looper pedal enclosure from the front angle.",
  },
  {
    src: "/Looper/CAD/LooperCAD2.png",
    alt: "CAD render highlighting the footswitch layout of the looper pedal.",
  },
  {
    src: "/Looper/CAD/LooperCAD3.png",
    alt: "CAD render displaying the internal structure of the looper pedal.",
  },
  {
    src: "/Looper/CAD/LooperCAD4.png",
    alt: "CAD render of the assembled looper pedal with acrylic layers.",
  },
] as const;

const realImages = [
  {
    src: "/Looper/Real/Real1.png",
    alt: "Final looper pedal prototype on stage setup.",
  },
  {
    src: "/Looper/Real/Real2.png",
    alt: "Close-up of the looper pedal footswitches and enclosure.",
  },
  {
    src: "/Looper/Real/Real3.png",
    alt: "Looper pedal connected wirelessly during a live performance.",
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

export default function LooperSubpage() {
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
                ESP32 MIDI Foot Pedal for Live Looping
              </h1>

              <div className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-100 shadow-inner dark:border-neutral-800 dark:bg-neutral-950">
                <Image
                  src="/Looper/LooperHero.png"
                  alt="Photo of the custom ESP32 MIDI pedalboard."
                  fill
                  sizes="(min-width: 1280px) 60vw, (min-width: 768px) 70vw, 90vw"
                  className="object-cover"
                  priority
                />
              </div>
            </header>

            {/* Overview部分 */}
            <section className={`${baseSectionClass} gap-3 ${sectionPaddingClass}`}>
              <h2 className={sectionHeadingClass}>
                Overview
              </h2>
              {renderOverviewPoints(looperDetails.overview)}
              <div className="mt-6 grid gap-6 sm:grid-cols-3">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
                    SCOPE
                  </h3>
                  {renderText(looperDetails.scope)}
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
                    ROLE
                  </h3>
                  {renderList(looperDetails.role)}
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
                    TEAM
                  </h3>
                  {renderText(looperDetails.team)}
                </div>
              </div>
            </section>


            {/* Problem部分 */}
            <section className={`${baseSectionClass} gap-3 ${sectionPaddingClass}`}>
              <h2 className={sectionHeadingClass}>
                The Problem
              </h2>
              <div className="space-y-3 text-sm leading-relaxed">
                <p>
                  In high school, I was fascinated by Ed Sheeran–style live looping, where a
                  single performer builds entire songs layer by layer.
                </p>
                <p>
                  However, commercial loopers like the Boss RC-300 were too bulky, limited in track count, and restricted by a fixed input interface that could only handle one microphone and one instrument.
                </p>
                <div className="relative mx-auto aspect-[16/9] w-full max-w-md overflow-hidden rounded-2xl border border-neutral-200/60 bg-neutral-100 shadow-sm dark:border-neutral-700/60 dark:bg-neutral-900/35">
                  <Image
                    src="/Looper/bossRc300problem.jpg"
                    alt="Boss RC-300 looper highlighting its large footprint on stage."
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 90vw"
                    className="object-cover"
                  />
                </div>
                <p>
                  I found an iPad app, Loopy Pro, that could handle unlimited tracks—but it required
                  a foot pedal to control recording and playback. Since the audio interface already
                  occupied the iPad&rsquo;s only wired port, adding a USB hub would make the stage
                  setup messy and unreliable.
                </p>
                <p>
                  While wireless audio transmission introduces noticeable latency, wireless MIDI control signals are lightweight and show almost no perceptible delay, making Bluetooth the ideal choice for this setup.
                </p>
                <div className="mx-auto w-full max-w-2xl overflow-hidden rounded-2xl border border-neutral-200/60 bg-neutral-100 shadow-sm dark:border-neutral-700/60 dark:bg-neutral-900/35">
                  <div className="relative aspect-video">
                    <Image
                      src="/Looper/loopyProGood.jpg"
                      alt="Loopy Pro interface for looping on iPad."
                      fill
                      sizes="(min-width: 1280px) 40vw, (min-width: 768px) 55vw, 90vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                
                <p>
                  That is why I insisted on a Bluetooth MIDI pedal—yet none on the market offered
                  both wireless connectivity and enough footswitches for multi-track control. So I
                  decided to build my own.
                </p>
              </div>
            </section>

            {/* Solution部分 */}
            <section className={`${baseSectionClass} gap-3 ${sectionPaddingClass}`}>
              <h2 className={sectionHeadingClass}>
                The Solution
              </h2>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  The development was divided into two main parts—hardware design and software
                  implementation—with multiple iterations before reaching a stable prototype.
                </p>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400 sm:text-2xl">
                    Hardware Design
                  </h3>
                  <div className="mt-4 space-y-4 sm:space-y-5">
                    <p>
                      I began by modeling the pedal enclosure in Shapr3D, determining the optimal spacing and height for the mechanical footswitches to ensure reliable triggering during live performance.

                    </p>
                    <p>
                      The layout originally featured twelve footswitches, but during testing I found the upper row too dense and prone to accidental presses. To improve ergonomics, I reduced it to eleven footswitches, arranging the upper row in a staggered formation so that each footswitch sits between the gaps of the lower row — making it easier to target while standing.
                    </p>
                    
                    <ImageCarousel
                      images={cadImages}
                      aspectClassName="aspect-video"
                      sizes="(min-width: 1280px) 50vw, (min-width: 768px) 70vw, 90vw"
                      ariaLabel="CAD model gallery"
                      containerClassName="mt-4"
                    />
                    <p>
                      Originally planned for CNC machining, the enclosure had to be redesigned during the COVID lockdown for on-campus fabrication. I adapted the model into stacked laser-cut acrylic layers, balancing precision with feasibility. While the resulting prototype simplified some surface details, it maintained the same ergonomics and functional geometry as the digital model.
                    </p>
                    <ImageCarousel
                      images={realImages}
                      aspectClassName="aspect-[4/3]"
                      sizes="(min-width: 1280px) 50vw, (min-width: 768px) 70vw, 90vw"
                      ariaLabel="Looper pedal prototype gallery"
                      containerClassName="mt-4 mx-auto w-full max-w-[90%] sm:max-w-[82%] lg:max-w-[75%]"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400 sm:text-2xl">
                    Software Implementation
                  </h3>
                  <div className="mt-4 space-y-4 sm:space-y-5">
                    <p>
                      Firmware development went through several iterations. I first built a wired
                      prototype using Arduino, successfully transmitting standard MIDI messages over
                      USB.
                    </p>
                    <p>
                      Implementing Bluetooth MIDI proved difficult—Arduino boards relied on external
                      HC-05 or HM-10 modules that lacked proper BLE MIDI support, leading to unstable
                      connections with iOS devices.
                    </p>
                    <p>
                      Switching to an ESP32 solved it. With native Bluetooth Classic and BLE, I
                      implemented a MicroPython MIDI control script so each footswitch could send
                      configurable CC or Note messages wirelessly to Loopy Pro on iPad.
                    </p>
                    <div className="mx-auto w-full max-w-2xl overflow-hidden rounded-2xl border border-neutral-200/60 bg-neutral-100 shadow-sm dark:border-neutral-700/60 dark:bg-neutral-900/35">
                      <div className="relative aspect-video">
                        <Image
                          src="/Looper/software.png"
                          alt="MicroPython configuration interface powering the pedal's software."
                          fill
                          sizes="(min-width: 1280px) 40vw, (min-width: 768px) 55vw, 90vw"
                          className="object-cover"
                        />
                      </div>
                    </div>
                    
                  </div>
                </div>

                <p>
                  The final prototype combined a precision-engineered enclosure with low-latency,
                  wireless firmware—bridging the gap between consumer loopers and the flexibility of
                  a modular, software-based setup.
                </p>
              </div>
            </section>


            {/* Key Learnings部分 */}
            <section className={`${baseSectionClass} gap-4 ${sectionPaddingClass}`}>
              <h2 className={sectionHeadingClass}>
                The Outcome
              </h2>
              <div className="space-y-4 text-sm leading-relaxed sm:text-base">
                <p>
                  The final prototype was showcased in a live looping performance of{" "}
                  <span className="italic">Celestial</span> (Ed Sheeran) at the 2023 Shanghai Jiao
                  Tong University Guitar Association Spring Concert.
                </p>
                 <div className="group relative mx-auto w-full max-w-2xl overflow-hidden rounded-3xl border border-neutral-200/70 bg-neutral-100 shadow-sm dark:border-neutral-700/60 dark:bg-neutral-900/35">
                  <div className="relative aspect-video">
                    <Image
                      src="/Looper/live.png"
                      alt="Live looping performance using the custom MIDI pedal."
                      fill
                      sizes="(min-width: 1280px) 40vw, (min-width: 768px) 55vw, 90vw"
                      className="object-cover transition duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                  <Link
                    href="https://www.youtube.com/watch?v=XPsy6PvJpnU"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center bg-neutral-950/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  >
                    <span className="rounded-full bg-white/90 px-5 py-2 text-sm font-semibold uppercase tracking-wide text-neutral-900 shadow-md dark:bg-neutral-900/90 dark:text-white">
                      View on YouTube
                    </span>
                  </Link>
                </div>
                <p>
                  While the song itself was a cover, the loop arrangement, layer structure, and live
                  control system were entirely self-designed.
                </p>
                <p>
                  Using Loopy Pro together with my custom Bluetooth MIDI pedal, I built the
                  arrangement live—recording, overdubbing, and transitioning between sections
                  completely hands-free.
                </p>
               
              </div>
            </section>

            {/* 在这里加新部分 */}
          </article>
        </div>
      </div>
    </main>
  );
}
