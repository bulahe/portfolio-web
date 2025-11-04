'use client';

import { useLayoutEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const TITLE = "ESP32 MIDI Foot Pedal for Live Looping";
const HEADLINE =
  "Custom MIDI foot controller that keeps hands free for instrument performance while layering complex loops.";
const HERO_IMAGE = {
  src: "/Looper/LooperHero.png",
  alt: "Photo of the custom ESP32 MIDI pedalboard.",
} as const;

const OVERVIEW_POINTS = [
  "Designed and built a 6-switch ESP32 pedal with Bluetooth MIDI and a web-based companion for mapping presets.",
  "Focused on tactile feedback and latency-sensitive firmware to match the timing needs of live looping.",
] as const;

const TIMELINE = "2023";
const ROLES = ["Hardware designer", "Firmware engineer", "Product designer"] as const;
const TOOLS = ["KiCad", "ESP-IDF", "TypeScript", "React"] as const;

const SECTIONS = [
  {
    heading: "Hardware Architecture",
    paragraphs: [
      "Engineered a split PCB stack: one board handles power/battery management, the other hosts the ESP32 and RGB footswitch matrix.",
      "Used hall-effect sensors beneath each switch to ensure consistent actuation even with aggressive stomps.",
    ],
  },
  {
    heading: "Firmware & Connectivity",
    paragraphs: [
      "Implemented BLE MIDI with adaptive timestamping to keep jitter under 4 ms while switching between multiple connected devices.",
      "Added a chord-mode that sends simultaneous control changes, triggered by long-press detection on the switches.",
    ],
  },
  {
    heading: "Companion App",
    paragraphs: [
      "Built a React-based editor that lets me drag-and-drop actions onto switches and sync configurations over WebSockets.",
      "Included a session recorder for quickly reloading pedal mappings for different performances.",
    ],
  },
] as const;

export default function ExampleSubpage() {
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

  const router = useRouter();

  const handleBack = () => {
    let targetUrl = "/#portfolio";
    if (typeof window !== "undefined") {
      try {
        const raw = window.sessionStorage.getItem("portfolio:return-target");
        if (raw) {
          const data = JSON.parse(raw) as {
            path?: string;
            hash?: string;
            scroll?: number;
          };

          const path = data.path || "/";
          const hash = data.hash ? `#${data.hash}` : "";
          targetUrl = `${path}${hash}`;

          if (typeof data.scroll === "number") {
            window.sessionStorage.setItem(
              "portfolio:return-scroll",
              JSON.stringify(data.scroll)
            );
          } else {
            window.sessionStorage.removeItem("portfolio:return-scroll");
          }

          window.sessionStorage.removeItem("portfolio:return-target");
        } else {
          window.sessionStorage.removeItem("portfolio:return-scroll");
        }
      } catch {
        window.sessionStorage.removeItem("portfolio:return-scroll");
      }
    }
    router.push(targetUrl, { scroll: false });
  };

  return (
    <main className="relative flex w-full justify-center px-4 pb-24 pt-16 sm:px-6 lg:px-8">
      <div className="relative w-full">
        <button
          type="button"
          onClick={handleBack}
          className="fixed left-6 top-20 z-50 hidden items-center gap-2 rounded-full border border-neutral-200/70 bg-white/90 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-neutral-800 shadow-md backdrop-blur transition hover:-translate-x-1 hover:shadow-lg dark:border-neutral-700/70 dark:bg-neutral-900/80 dark:text-neutral-100 xl:flex"
        >
          <span aria-hidden>←</span>
          Back
        </button>

        <div className="mx-auto flex w-full max-w-5xl flex-col gap-12 lg:max-w-[68%]">
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex items-center gap-2 self-start rounded-full border border-neutral-200/70 bg-white/90 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-neutral-800 shadow-md backdrop-blur transition hover:-translate-x-1 hover:shadow-lg dark:border-neutral-700/70 dark:bg-neutral-900/80 dark:text-neutral-100 xl:hidden"
          >
            <span aria-hidden>←</span>
            Back
          </button>

          <article className="flex flex-col gap-12">
            <header className="flex flex-col gap-6 rounded-[2.5rem] border border-neutral-200/60 bg-white/85 p-8 text-neutral-900 shadow-xl backdrop-blur-sm dark:border-neutral-700/70 dark:bg-neutral-900/70 dark:text-neutral-100">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400">
                  Case Study
                </p>
                <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
                  {TITLE}
                </h1>
                <p className="text-lg text-neutral-600 dark:text-neutral-300">
                  {HEADLINE}
                </p>
              </div>

              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-100 shadow-inner dark:border-neutral-800 dark:bg-neutral-950">
                <Image
                  src={HERO_IMAGE.src}
                  alt={HERO_IMAGE.alt}
                  fill
                  sizes="(min-width: 1280px) 60vw, (min-width: 768px) 70vw, 90vw"
                  className="object-cover"
                  priority
                />
              </div>
            </header>

            <section className="grid gap-8 rounded-[2.25rem] border border-neutral-200/60 bg-white/70 p-8 text-neutral-800 shadow-lg backdrop-blur-sm dark:border-neutral-700/60 dark:bg-neutral-900/60 dark:text-neutral-200 sm:grid-cols-2">
              <div className="space-y-3">
                <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
                  Overview
                </h2>
                <ul className="space-y-3 text-sm leading-relaxed">
                  {OVERVIEW_POINTS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                {TIMELINE && (
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
                      Timeline
                    </h3>
                    <p className="mt-2 text-sm">{TIMELINE}</p>
                  </div>
                )}
                {ROLES.length > 0 && (
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
                      Role
                    </h3>
                    <ul className="mt-2 space-y-1 text-sm">
                      {ROLES.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {TOOLS.length > 0 && (
                  <div className="sm:col-span-2">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
                      Tools
                    </h3>
                    <ul className="mt-2 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wide text-neutral-600 dark:text-neutral-300">
                      {TOOLS.map((tool) => (
                        <li
                          key={tool}
                          className="rounded-full border border-neutral-300/70 px-3 py-1 dark:border-neutral-600/70"
                        >
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </section>

            {SECTIONS.map((section) => (
              <section
                key={section.heading}
                className="flex flex-col gap-6 rounded-[2.25rem] border border-neutral-200/60 bg-white/80 p-8 shadow-lg backdrop-blur-sm dark:border-neutral-700/60 dark:bg-neutral-900/70"
              >
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
                    {section.heading}
                  </h2>
                </div>
                <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.85fr)] lg:gap-10">
                  <div className="space-y-4 text-base leading-relaxed text-neutral-700 dark:text-neutral-200">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </section>
            ))}
          </article>
        </div>
      </div>
    </main>
  );
}
