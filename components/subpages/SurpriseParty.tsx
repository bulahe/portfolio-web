"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import PortfolioBackButton from "@/components/ui/portfolio-back-button";
import SubDivider from "@/components/sub-divider";
import { brandTheme } from "@/lib/theme";

type ProjectDetails = {
  overview: readonly string[];
  scope: string | null;
  role: readonly string[];
  team: string | null;
};

type MiniGame = {
  title: string;
  description: string;
  videoSrc?: string;
};

const projectDetails = {
  overview: [
    "A festive Roblox party game where players vote into mini-games, compete for points, and loop back through a shared lobby rhythm.",
    "Shifted from pure programming into art direction and game design, defining the winter look and spatial flow.",
    "Built the world environment and designed two signature mini-games — Rolling Log and Ice Platform Drop.",
  ],
  scope: "(2022) Course project - Tencent Electronic Game Creation Workshop",
  role: ["Environment Artist", "Gameplay Designer"],
  team:
    "Yang Jinlong — Game Design / Sound\nZou Zihao, Pan Haonan — Programming\nChong Yu-Chen — Art & Level Design",
} satisfies ProjectDetails;

const coreLoop = [
  "Players vote on the next mini-game, teleport into its arena, compete for points, and return to the lobby to queue the next round.",
  "The fast cadence keeps the group moving through fresh spaces while preserving a shared rhythm of quick decisions and short competitions.",
];

const miniGames: MiniGame[] = [
  {
    title: "🪵 Rolling Log",
    description:
      "A long downhill lane drops surprise obstacles as you sprint uphill; keep your eyes open, shimmy past the falling logs, and dodge every roll. First one to the top gets bragging rights—anyone who mistimes a step gets flattened into the pavement. I designed the mechanics and scene layout for this mini-game.",
    videoSrc: "/partyGame/Rolling%20Log.mov",
  },
  {
    title: "🔵 Sphere Survival",
    description:
      "Shrunk to hamster size, you’re trapped in a circular cage while giant spheres keep rolling back. Slip between their paths, hug the rim for breathers, and outlast the physics chaos to earn your escape.",
    videoSrc: "/partyGame/Sphere%20Survival.mp4",
  },
  {
    title: "💰 Gold Rush",
    description:
      "Do you hoard coins or body-block rivals? Sprint across ramps, snatch stacks, and bump opponents off their lines. Whatever it takes, end the round as the richest player on the map.",
    videoSrc: "/partyGame/gold%20rush.mp4",
  },
  {
    title: "⚽️ Soccer Knockout",
    description:
      "You are the ball on a raised pitch. Roll hard, shoulder-check foes, and cling to the turf while others slip off the edge. Last one spinning wins.",
    videoSrc: "/partyGame/Soccer%20Knockout.mp4",
  },
  {
    title: "🧊 Ice Platform Drop",
    description:
      "The floor keeps vanishing; only the ice beneath you buys a few more seconds. Hop tile to tile, grab the occasional power-up slab, and be the last player standing on the freezing void. I designed the mechanics and scene layout for this mini-game.",
    videoSrc: "/partyGame/Ice%20Platform%20Drop.mov",
  },
];

const renderText = (value: string | null) =>
  value ? (
    <p className="mt-2 whitespace-pre-line text-sm">{value}</p>
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

export default function SurprisePartySubpage() {
  const loopVideoRef = useRef<HTMLVideoElement | null>(null);
  const gameVideoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

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
                GAME: Surprise Party
              </h1>

              <div className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-100 shadow-inner dark:border-neutral-800 dark:bg-neutral-950">
                <Image
                  src="/partyGame/partyGameHero.png"
                  alt="Screenshot from the Surprise Party multiplayer game."
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
                Core Game Loop
              </h2>
              <div className="space-y-3 text-sm leading-relaxed">
                {coreLoop.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="group relative mt-6 overflow-hidden rounded-2xl border border-neutral-200/60 bg-white/60 shadow-inner transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-sky-200/40 dark:border-neutral-700/60 dark:bg-neutral-900/35 dark:hover:shadow-sky-900/25">
                <div className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-tr from-sky-100/40 to-transparent dark:from-sky-500/10" />
                <div className="flex items-center justify-between px-4 pt-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
                  <span>Core loop demo</span>
                  <span className="text-[0.65rem] text-neutral-500 dark:text-neutral-500">Hover to play</span>
                </div>
                <video
                  ref={loopVideoRef}
                  src="/partyGame/CGLoop.mov"
                  className="relative mt-2 h-full w-full rounded-b-2xl object-cover"
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  onMouseEnter={() => void loopVideoRef.current?.play()}
                  onFocus={() => void loopVideoRef.current?.play()}
                  onMouseLeave={() => {
                    const vid = loopVideoRef.current;
                    if (vid) {
                      vid.pause();
                      vid.currentTime = 0;
                    }
                  }}
                  onBlur={() => {
                    const vid = loopVideoRef.current;
                    if (vid) {
                      vid.pause();
                      vid.currentTime = 0;
                    }
                  }}
                />
              </div>
            </section>

            <section className={`${baseSectionClass} gap-3 ${sectionPaddingClass}`}>
              <h2 className={sectionHeadingClass}>
                Mini-Games Collection
              </h2>
              <div className="space-y-6 text-sm leading-relaxed">
                {miniGames.map((game, index) => (
                  <div key={game.title} className="space-y-3">
                    <p className="text-sm font-semibold uppercase tracking-[0.12em] text-neutral-600 dark:text-neutral-300">
                      {game.title}
                    </p>
                    <p className="leading-relaxed">{game.description}</p>
                    {game.videoSrc ? (
                      <div className="group relative mt-2 overflow-hidden rounded-2xl border border-neutral-200/60 bg-white/60 shadow-inner transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-sky-200/40 dark:border-neutral-700/60 dark:bg-neutral-900/35 dark:hover:shadow-sky-900/25">
                        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-tr from-sky-100/40 to-transparent dark:from-sky-500/10" />
                        <div className="flex items-center justify-between px-4 pt-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                          <span>Hover to play</span>
                          <span className="text-[0.65rem] text-neutral-500 dark:text-neutral-500">{game.title} clip</span>
                        </div>
                        <video
                          ref={(el) => {
                            if (el) gameVideoRefs.current[game.title] = el;
                          }}
                          src={game.videoSrc}
                          className="relative mt-2 h-full w-full rounded-b-2xl object-cover"
                          muted
                          loop
                          playsInline
                          preload="metadata"
                          onMouseEnter={() => void gameVideoRefs.current[game.title]?.play()}
                          onFocus={() => void gameVideoRefs.current[game.title]?.play()}
                          onMouseLeave={() => {
                            const vid = gameVideoRefs.current[game.title];
                            if (vid) {
                              vid.pause();
                              vid.currentTime = 0;
                            }
                          }}
                          onBlur={() => {
                            const vid = gameVideoRefs.current[game.title];
                            if (vid) {
                              vid.pause();
                              vid.currentTime = 0;
                            }
                          }}
                        />
                      </div>
                    ) : null}
                    {index < miniGames.length - 1 ? (
                      <SubDivider className="my-5 sm:my-6" />
                    ) : null}
                  </div>
                ))}
              </div>
            </section>

            <section className={`${baseSectionClass} gap-3 ${sectionPaddingClass}`}>
              <h2 className={sectionHeadingClass}>
                Art Direction
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-neutral-700 dark:text-neutral-200">
                    Christmas-themed world layout that matches the season and sets a festive tone.
                  </p>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-neutral-200/70 bg-neutral-100 shadow-inner dark:border-neutral-700/60 dark:bg-neutral-900/35">
                    <Image
                      src="/partyGame/scene.png"
                      alt="Snowy Christmas-themed world layout with festive elements."
                      fill
                      sizes="(min-width: 1024px) 40vw, (min-width: 640px) 45vw, 90vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-neutral-700 dark:text-neutral-200">
                    A central road serves as the game’s main axis, creating a clear forward flow for players.
                  </p>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-neutral-200/70 bg-neutral-100 shadow-inner dark:border-neutral-700/60 dark:bg-neutral-900/35">
                    <Image
                      src="/partyGame/road.png"
                      alt="Central road guiding players through the game world."
                      fill
                      sizes="(min-width: 1024px) 40vw, (min-width: 640px) 45vw, 90vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className={`${baseSectionClass} gap-4 ${sectionPaddingClass}`}>
              <h2 className={sectionHeadingClass}>
                My Role
              </h2>
              <ul className="space-y-2 text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="select-none text-lg leading-none">·</span>
                  <span>Set the overall visual direction: defined a winter palette, lighting, and clean UI layout, then applied it consistently across the lobby and all mini-game arenas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="select-none text-lg leading-none">·</span>
                  <span>Designed Rolling Log and Ice Platform Drop from scratch, including obstacle behavior, win/lose conditions, difficulty pacing, and how each round resets.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="select-none text-lg leading-none">·</span>
                  <span>Built the environment art in Roblox Studio: sculpted terrain, placed props and trees, and constructed the central road and arena entrances that connect the lobby to each mini-game.</span>
                </li>
              </ul>
            </section>

            <section className={`${baseSectionClass} gap-4 ${sectionPaddingClass}`}>
              <h2 className={sectionHeadingClass}>Quick Showcase</h2>
              <p className="text-sm leading-relaxed">
                A short one-minute clip capturing the highlights of the project.
              </p>
              <div className="group relative mx-auto w-full max-w-3xl overflow-hidden rounded-3xl border border-neutral-200/70 bg-neutral-100 shadow-sm dark:border-neutral-700/60 dark:bg-neutral-900/35">
                <div className="relative aspect-video">
                  <Image
                    src="/partyGame/partyGameHero.png"
                    alt="Surprise Party highlight reel still."
                    fill
                    sizes="(min-width: 1280px) 60vw, (min-width: 768px) 70vw, 90vw"
                    className="object-cover transition duration-300 group-hover:scale-[1.02]"
                  />
                </div>
                <Link
                  href="https://youtu.be/SHp08ecfhiM?si=H55E1GMJxzRvwnGK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-neutral-950/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  <span className="rounded-full bg-white/90 px-5 py-2 text-sm font-semibold uppercase tracking-wide text-neutral-900 shadow-md dark:bg-neutral-900/90 dark:text-white">
                    View on YouTube
                  </span>
                </Link>
              </div>
            </section>
          </article>
        </div>
      </div>
    </main>
  );
}
