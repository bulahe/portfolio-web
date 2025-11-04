'use client';

import { useLayoutEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const looperDetails = {
  overview: [
    "Designed and built a custom 11-switch Bluetooth MIDI foot pedal powered by an ESP32 running MicroPython.",
    "Developed the pedal to control an iPad-based looping app during live performances.",
    "Modeled and rendered the enclosure in Shapr3D with an emphasis on ergonomics and stage usability.",
    "Explores the intersection of hardware, music performance, and UX through creative embedded systems.",
  ] as const,
  scope: "(2022) Course project — Science and Technology Innovation Part I",
  role: ["Hardware & firmware design", "Product development"],
  team: "individual",
} as const;

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
          className="fixed left-3 top-6 z-50 inline-flex items-center gap-2 rounded-full border border-neutral-200/70 bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-neutral-800 shadow-md backdrop-blur transition hover:-translate-x-1 hover:shadow-lg dark:border-neutral-700/70 dark:bg-neutral-900/80 dark:text-neutral-100 sm:left-6 sm:top-8 sm:px-5 sm:py-2.5 sm:text-sm lg:left-8"
        >
          <span aria-hidden>←</span>
          Back
        </button>

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
            <section className="flex flex-col gap-3 rounded-[2.25rem] border border-neutral-200/70 bg-neutral-50/55 p-5 text-neutral-800 shadow-lg backdrop-blur-sm dark:border-neutral-700/60 dark:bg-neutral-900/40 dark:text-neutral-200">
              <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
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
            <section className="flex flex-col gap-3 rounded-[2.25rem] border border-neutral-200/70 bg-neutral-50/55 p-5 text-neutral-800 shadow-lg backdrop-blur-sm dark:border-neutral-700/60 dark:bg-neutral-900/40 dark:text-neutral-200">
              <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
                The Problem
              </h2>
              <div className="min-h-[6rem] rounded-2xl border border-neutral-200/60 bg-white/40 dark:border-neutral-700/60 dark:bg-neutral-900/35" />
            </section>

            {/* Solution部分 */}
            <section className="flex flex-col gap-3 rounded-[2.25rem] border border-neutral-200/70 bg-neutral-50/55 p-5 text-neutral-800 shadow-lg backdrop-blur-sm dark:border-neutral-700/60 dark:bg-neutral-900/40 dark:text-neutral-200">
              <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
                The Solution
              </h2>
              <div className="min-h-[6rem] rounded-2xl border border-neutral-200/60 bg-white/40 dark:border-neutral-700/60 dark:bg-neutral-900/35" />
            </section>


            {/* Key Learnings部分 */}
            <section className="flex flex-col gap-4 rounded-[2.25rem] border border-neutral-200/70 bg-neutral-50/55 p-6 text-neutral-800 shadow-lg backdrop-blur-sm dark:border-neutral-700/60 dark:bg-neutral-900/40 dark:text-neutral-200">
              <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
                Key Learnings
              </h2>
              <div className="min-h-[6rem] rounded-2xl border border-neutral-200/60 bg-white/40 dark:border-neutral-700/60 dark:bg-neutral-900/35" />
            </section>

            {/* 在这里加新部分 */}
          </article>
        </div>
      </div>
    </main>
  );
}
