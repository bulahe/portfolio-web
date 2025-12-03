'use client';

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import PortfolioBackButton from "@/components/ui/portfolio-back-button";
import SubDivider from "@/components/sub-divider";
import { brandTheme } from "@/lib/theme";

type ProjectDetails = {
  overview: readonly string[];
  scope: string | null;
  role: readonly string[];
  team: string | null;
};

const projectDetails = {
  overview: ["An AR-based behavioral study exploring how service robots balance fairness and efficiency when interrupted by multiple users.","I independently built the full Unity experiment system with a real-time synchronization framework linking multiple AR headsets, ensuring consistent robot state, dialogue timing, and spatial alignment across users.","Designed all experimental visuals in the paper, including Figures 1 – 4."],
  scope: "(2025) Academic research",
  role: ["Experiment Developer", "Visualization designer"],
  team: "Zixuan Guo, Yu-Chen Chung, et al.",
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

export default function MultiUserInterruptionsSubpage() {
  const beaconVideoRef = useRef<HTMLVideoElement | null>(null);
  const sync1VideoRef = useRef<HTMLVideoElement | null>(null);
  const sync2VideoRef = useRef<HTMLVideoElement | null>(null);
  const [sync2Error, setSync2Error] = useState(false);
  const [sync2Loading, setSync2Loading] = useState(true);

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
                Multi-User Robot Interruption Study
              </h1>

              <div className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-100 shadow-inner dark:border-neutral-800 dark:bg-neutral-950">
                <Image
                  src="/XRobot/XRobotHero.png"
                  alt="Illustration of the multi-user robot interaction study."
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

            <section className={`${baseSectionClass} gap-4 ${sectionPaddingClass}`}>
              <h2 className={sectionHeadingClass}>
                1. THE PROBLEM
              </h2>
              <div className="space-y-6 text-sm leading-relaxed sm:text-base">
                <div className="space-y-3">
                  <p className="text-base font-semibold text-neutral-900 dark:text-white">
                    👥 1.1 Multi-user conflicts in public service robots
                  </p>
                  <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 shadow-inner dark:border-neutral-800 dark:bg-neutral-950">
                    <Image
                      src="/XRobot/teaser.png"
                      alt="Real-world multi-user interruption scenario in the MR study."
                      width={1304}
                      height={520}
                      sizes="(min-width: 1280px) 60vw, (min-width: 768px) 70vw, 90vw"
                      className="h-auto w-full object-cover"
                      priority
                    />
                  </div>
                  <div className="space-y-4 text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
                    <p>
                      When service robots operate in public spaces, they frequently face <em>multi-user conflicts</em>: a secondary user interrupts while the robot is already serving someone else. These moments force the robot to balance <strong>fairness</strong>, <strong>efficiency</strong>, and <strong>attentional focus</strong> across multiple people.
                    </p>
                    <p>
                      In practice, even a simple interaction—like a customer asking for the menu—can collapse when another person suddenly interrupts with a different request. Robots must decide:
                    </p>
                    <ul className="space-y-2 pl-1">
                      <li className="flex gap-2">
                        <span className="select-none text-lg leading-none text-neutral-400 dark:text-neutral-500">•</span>
                        <span>Should they <strong>ignore</strong> the interruption to protect the primary user&apos;s task flow?</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="select-none text-lg leading-none text-neutral-400 dark:text-neutral-500">•</span>
                        <span>Should they <strong>acknowledge</strong> the secondary user to maintain social politeness?</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="select-none text-lg leading-none text-neutral-400 dark:text-neutral-500">•</span>
                        <span>Or should they <strong>stop</strong> the primary task and respond immediately?</span>
                      </li>
                    </ul>
                    <p>
                      Understanding how humans expect robots to behave in these situations is critical for designing socially intelligent service robots.
                    </p>
                  </div>
                </div>
                <SubDivider />
                <div className="space-y-3">
                  <p className="text-base font-semibold text-neutral-900 dark:text-white">
                    🔬 1.2 Why this problem is hard to study
                  </p>
                  <div className="space-y-4 text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
                    <p>
                      Studying multi-user conflicts in the real world is extremely difficult because <strong>the environment is uncontrollable</strong>:
                    </p>
                    <ul className="space-y-2 pl-1">
                      <li className="flex gap-2">
                        <span className="select-none text-lg leading-none text-neutral-400 dark:text-neutral-500">•</span>
                        <span>People interrupt at unpredictable times.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="select-none text-lg leading-none text-neutral-400 dark:text-neutral-500">•</span>
                        <span>The content and tone of interruptions vary.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="select-none text-lg leading-none text-neutral-400 dark:text-neutral-500">•</span>
                        <span>Robot behavior cannot be kept identical across trials.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="select-none text-lg leading-none text-neutral-400 dark:text-neutral-500">•</span>
                        <span>Multiple users cannot be reliably synchronized.</span>
                      </li>
                    </ul>
                    <p>
                      To obtain meaningful results, researchers need a <strong>repeatable, precisely controlled interaction environment</strong>—one where robot timing, user roles, interruption moments, and spatial positioning can be <em>exactly</em> reproduced across participants.
                    </p>
                    <p>
                      This challenge is the reason behind building a <strong>custom multi-user MR experiment system</strong>, which enables tightly synchronized robot behavior and controlled interruption events.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className={`${baseSectionClass} gap-4 ${sectionPaddingClass}`}>
              <h2 className={sectionHeadingClass}>
                2. SYSTEM DESIGN
              </h2>
              <div className="space-y-6 text-sm leading-relaxed sm:text-base">
                <div className="space-y-3">
                  <p className="text-base font-semibold text-neutral-900 dark:text-white">
                    🏗️ 2.1 Multiuser MR Framework Architecture
                  </p>
                  <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 shadow-inner dark:border-neutral-800 dark:bg-neutral-950">
                    <Image
                      src="/XRobot/task.png"
                      alt="Multiuser MR Framework Architecture diagram."
                      width={1304}
                      height={520}
                      sizes="(min-width: 1280px) 60vw, (min-width: 768px) 70vw, 90vw"
                      className="h-auto w-full object-cover"
                      priority
                    />
                  </div>
                  <div className="space-y-2 text-neutral-800 dark:text-neutral-200">
                    <ul className="space-y-2 pl-1">
                      <li className="flex gap-2">
                        <span className="select-none text-lg leading-none text-neutral-400 dark:text-neutral-500">
                          •
                        </span>
                        <span>
                          Two-user MR experiment with a physical social robot; a central controller
                          tracks the phase (<strong>RoleSelection → Action / Speaking → TrialEnd</strong>)
                          and which experimental condition (test type, interruption strategy) is active.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="select-none text-lg leading-none text-neutral-400 dark:text-neutral-500">
                          •
                        </span>
                        <span>
                          Players claim <strong>Role A / Role B</strong> through shared UI toggles. Once
                          both roles are assigned, a networked Start button launches a trial and the
                          controller switches to either the Action or Speaking scenario.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="select-none text-lg leading-none text-neutral-400 dark:text-neutral-500">
                          •
                        </span>
                        <span>
                          Robot behavior is split into two controllers: <strong>Action mode</strong>
                          (navigation, mid-path interruption, follow-up, reset) and{" "}
                          <strong>Speaking mode</strong> (multi-sentence speech, interruption handling,
                          turn to Player B, follow-up speech). XR buttons, long-press, and controller
                          inputs map directly to Action A/B and Follow-up, with haptic feedback and
                          subtitles for user feedback.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <SubDivider />
                <div className="space-y-3">
                  <p className="text-base font-semibold text-neutral-900 dark:text-white">
                    📍 2.2 Spatial Alignment & Environment Calibration
                  </p>
                  <div className="space-y-2 text-neutral-800 dark:text-neutral-200">
                    <ul className="space-y-2 pl-1">
                      <li className="flex gap-2">
                        <span className="select-none text-lg leading-none text-neutral-400 dark:text-neutral-500">
                          •
                        </span>
                        <span>
                          We use Ximmerse Rhino X Pro headsets together with an infrared beacon as the
                          shared world anchor.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="select-none text-lg leading-none text-neutral-400 dark:text-neutral-500">
                          •
                        </span>
                        <span>
                          A brief &quot;look at the beacon&quot; step at startup aligns each headset to that
                          anchor, so the physical robot and all virtual content appear in almost the
                          same real-world location for every user.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="group relative mt-4 overflow-hidden rounded-2xl border border-neutral-200/60 bg-white/60 shadow-inner transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-sky-200/40 dark:border-neutral-700/60 dark:bg-neutral-900/35 dark:hover:shadow-sky-900/25">
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-tr from-sky-100/40 to-transparent dark:from-sky-500/10" />
                    <div className="flex items-center justify-between px-4 pt-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
                      <span>Beacon UI Sync</span>
                      <span className="text-[0.65rem] text-neutral-500 dark:text-neutral-500">Hover to play</span>
                    </div>
                    <div className="relative w-full">
                      <video
                        ref={beaconVideoRef}
                        src="/XRobot/Becon UI Sync .mp4"
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        className="h-auto w-full"
                        onMouseEnter={() => void beaconVideoRef.current?.play()}
                        onFocus={() => void beaconVideoRef.current?.play()}
                        onMouseLeave={() => {
                          const vid = beaconVideoRef.current;
                          if (vid) {
                            vid.pause();
                            vid.currentTime = 0;
                          }
                        }}
                        onBlur={() => {
                          const vid = beaconVideoRef.current;
                          if (vid) {
                            vid.pause();
                            vid.currentTime = 0;
                          }
                        }}
                      />
                      <div className="absolute left-4 top-4 rounded-md bg-black/60 px-3 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
                        User A
                      </div>
                      <div className="absolute right-4 top-4 rounded-md bg-black/60 px-3 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
                        User B
                      </div>
                    </div>
                  </div>
                </div>
                <SubDivider />
                <div className="space-y-3">
                  <p className="text-base font-semibold text-neutral-900 dark:text-white">
                    ⚡ 2.3 Real-Time Synchronization Across Devices
                  </p>
                  <div className="space-y-2 text-neutral-800 dark:text-neutral-200">
                    <ul className="space-y-2 pl-1">
                      <li className="flex gap-2">
                        <span className="select-none text-lg leading-none text-neutral-400 dark:text-neutral-500">
                          •
                        </span>
                        <span>
                          Multiple <strong>Ximmerse Rhino X Pro headsets</strong> connect to the same Wi-Fi LAN. We use a{" "}
                          <strong>custom event-based protocol</strong> where clients send small, reliable messages that describe{" "}
                          <strong>semantic events</strong> (e.g., &quot;start Action A/B&quot;, &quot;robot reached Player A&quot;, &quot;turn
                          to Player B&quot;, &quot;play follow-up&quot;) instead of streaming raw poses every frame. Two headsets are assigned as{" "}
                          <strong>Player A/B</strong>; any additional headsets can join as <strong>observers</strong> that receive all events but do not control the robot.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="group relative mt-4 overflow-hidden rounded-2xl border border-neutral-200/60 bg-white/60 shadow-inner transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-sky-200/40 dark:border-neutral-700/60 dark:bg-neutral-900/35 dark:hover:shadow-sky-900/25">
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-tr from-sky-100/40 to-transparent dark:from-sky-500/10" />
                    <div className="flex items-center justify-between px-4 pt-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
                      <span>Sync Demo 1</span>
                      <span className="text-[0.65rem] text-neutral-500 dark:text-neutral-500">Hover to play</span>
                    </div>
                    <div className="relative w-full">
                      <video
                        ref={sync1VideoRef}
                        src="/XRobot/sync1.mp4"
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        className="h-auto w-full"
                        onMouseEnter={() => void sync1VideoRef.current?.play()}
                        onFocus={() => void sync1VideoRef.current?.play()}
                        onMouseLeave={() => {
                          const vid = sync1VideoRef.current;
                          if (vid) {
                            vid.pause();
                            vid.currentTime = 0;
                          }
                        }}
                        onBlur={() => {
                          const vid = sync1VideoRef.current;
                          if (vid) {
                            vid.pause();
                            vid.currentTime = 0;
                          }
                        }}
                      />
                      <div className="absolute left-4 top-4 rounded-md bg-black/60 px-3 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
                        User A
                      </div>
                      <div className="absolute right-4 top-4 rounded-md bg-black/60 px-3 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
                        User B
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 text-neutral-800 dark:text-neutral-200">
                    <ul className="space-y-2 pl-1">
                      <li className="flex gap-2">
                        <span className="select-none text-lg leading-none text-neutral-400 dark:text-neutral-500">
                          •
                        </span>
                        <span>
                          The <strong>messaging layer</strong> synchronizes experiment state: who is <strong>Role A/B</strong>, which{" "}
                          <strong>test mode</strong> and <strong>interruption strategy</strong> are active, and the current states of key
                          UI widgets (toggles, dropdowns, confirm button). Messages carry <strong>timestamps</strong> so older updates cannot overwrite newer ones, and
                          late-joining devices request the latest snapshot when they connect.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="group relative mt-4 overflow-hidden rounded-2xl border border-neutral-200/60 bg-white/60 shadow-inner transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-sky-200/40 dark:border-neutral-700/60 dark:bg-neutral-900/35 dark:hover:shadow-sky-900/25">
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-tr from-sky-100/40 to-transparent dark:from-sky-500/10" />
                    <div className="flex items-center justify-between px-4 pt-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
                      <span>Sync Demo 2</span>
                      <span className="text-[0.65rem] text-neutral-500 dark:text-neutral-500">Hover to play</span>
                    </div>
                    <div className="relative w-full">
                      {sync2Error ? (
                        <div className="flex min-h-[200px] items-center justify-center bg-neutral-100 dark:bg-neutral-900">
                          <p className="text-sm text-neutral-500 dark:text-neutral-400">
                            Video failed to load. Please refresh the page.
                          </p>
                        </div>
                      ) : (
                        <>
                          {sync2Loading && (
                            <div className="absolute inset-0 z-10 flex items-center justify-center bg-neutral-100 dark:bg-neutral-900">
                              <div className="h-8 w-8 animate-spin rounded-full border-2 border-neutral-300 border-t-neutral-600 dark:border-neutral-700 dark:border-t-neutral-400" />
                            </div>
                          )}
                          <video
                            ref={sync2VideoRef}
                            src="/XRobot/Sync2.mp4"
                            loop
                            muted
                            playsInline
                            preload="auto"
                            className="h-auto w-full"
                            onLoadedData={() => setSync2Loading(false)}
                            onCanPlay={() => setSync2Loading(false)}
                            onError={(e) => {
                              console.error("Sync2 video error:", e);
                              setSync2Error(true);
                              setSync2Loading(false);
                            }}
                            onMouseEnter={() => {
                              const vid = sync2VideoRef.current;
                              if (vid && !sync2Error) {
                                vid.play().catch((err) => {
                                  console.error("Play error:", err);
                                });
                              }
                            }}
                            onFocus={() => {
                              const vid = sync2VideoRef.current;
                              if (vid && !sync2Error) {
                                vid.play().catch((err) => {
                                  console.error("Play error:", err);
                                });
                              }
                            }}
                            onMouseLeave={() => {
                              const vid = sync2VideoRef.current;
                              if (vid) {
                                vid.pause();
                                vid.currentTime = 0;
                              }
                            }}
                            onBlur={() => {
                              const vid = sync2VideoRef.current;
                              if (vid) {
                                vid.pause();
                                vid.currentTime = 0;
                              }
                            }}
                          />
                          <div className="absolute left-4 top-4 rounded-md bg-black/60 px-3 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
                            User A
                          </div>
                          <div className="absolute right-4 top-4 rounded-md bg-black/60 px-3 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
                            User B
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="space-y-2 text-neutral-800 dark:text-neutral-200">
                    <ul className="space-y-2 pl-1">
                      <li className="flex gap-2">
                        <span className="select-none text-lg leading-none text-neutral-400 dark:text-neutral-500">
                          •
                        </span>
                        <span>
                          Architecturally, we use a <strong>per-role / per-object authority model</strong>
                          rather than a single heavy server or a fully decentralized consensus protocol.
                          This means, for example, that <strong>Player A</strong> is authoritative for &quot;robot moves toward
                          A&quot;, <strong>Player B</strong> is <strong>authoritative</strong> when the robot turns toward B, and each UI owner
                          is authoritative for its own controls. This keeps computation distributed across
                          devices (no overloaded server) while keeping the consistency model simple enough
                          to implement and debug.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className={`${baseSectionClass} gap-4 ${sectionPaddingClass}`}>
              <h2 className={sectionHeadingClass}>
                3. EXPERIMENT SETUP
              </h2>
              <div className="space-y-6 text-sm leading-relaxed sm:text-base">
                <div className="space-y-3">
                  <p className="text-base font-semibold text-neutral-900 dark:text-white">
                    📊 3.1 Study Design
                  </p>
                  <div className="space-y-4 text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
                    <p>
                      We conducted a controlled AR experiment using a <strong>within-subject design</strong>, where each participant experienced all conditions across two user roles.
                    </p>
                    <ul className="space-y-2 pl-1">
                      <li className="flex gap-2">
                        <span className="select-none text-lg leading-none text-neutral-400 dark:text-neutral-500">•</span>
                        <span>24 participants (12 pairs)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="select-none text-lg leading-none text-neutral-400 dark:text-neutral-500">•</span>
                        <span>12 conditions (2 robot types × 2 interruption relevance × 3 response modes)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="select-none text-lg leading-none text-neutral-400 dark:text-neutral-500">•</span>
                        <span>Each participant acted as both the <strong>primary</strong> and <strong>secondary user</strong></span>
                      </li>
                    </ul>
                  </div>
                </div>
                <SubDivider />
                <div className="space-y-3">
                  <p className="text-base font-semibold text-neutral-900 dark:text-white">
                    🤖 3.2 Robot Types & Scenarios
                  </p>
                  <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 shadow-inner dark:border-neutral-800 dark:bg-neutral-950">
                    <Image
                      src="/XRobot/mode.png"
                      alt="Robot Types & Scenarios diagram."
                      width={1304}
                      height={520}
                      sizes="(min-width: 1280px) 60vw, (min-width: 768px) 70vw, 90vw"
                      className="h-auto w-full object-cover"
                      priority
                    />
                  </div>
                  <div className="space-y-4 text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
                    <p>
                      The study simulated two common service robots in a café environment:
                    </p>
                    <ul className="space-y-2 pl-1">
                      <li className="flex gap-2">
                        <span className="select-none text-lg leading-none text-neutral-400 dark:text-neutral-500">•</span>
                        <span><strong>Speech-oriented robot</strong> — introduces the menu and answers customer questions at the counter</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="select-none text-lg leading-none text-neutral-400 dark:text-neutral-500">•</span>
                        <span><strong>Motion-oriented robot</strong> — delivers drinks while navigating between tables</span>
                      </li>
                    </ul>
                    <p>
                      These scenarios allowed us to test how users expect different robot modalities to handle social interruptions.
                    </p>
                  </div>
                </div>
                <SubDivider />
                <div className="space-y-3">
                  <p className="text-base font-semibold text-neutral-900 dark:text-white">
                    ⚖️ 3.3 Task-Relevant vs. Task-Irrelevant Interruptions
                  </p>
                  <div className="space-y-4 text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
                    <p>
                      Interruptions were categorized into two types to capture different social expectations.
                    </p>
                    <ul className="space-y-2 pl-1">
                      <li className="flex gap-2">
                        <span className="select-none text-lg leading-none text-neutral-400 dark:text-neutral-500">•</span>
                        <span><strong>Task-relevant interruptions</strong> — service-related requests (e.g., &quot;Could you bring me water as well?&quot;)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="select-none text-lg leading-none text-neutral-400 dark:text-neutral-500">•</span>
                        <span><strong>Task-irrelevant interruptions</strong> — casual remarks or curiosity-driven comments (e.g., &quot;Why are you so cute?&quot;)</span>
                      </li>
                    </ul>
                    <p>
                      This distinction strongly influences what users consider a <strong>&apos;fair&apos;</strong> or <strong>&apos;appropriate&apos;</strong> robot response.
                    </p>
                  </div>
                </div>
                <SubDivider />
                <div className="space-y-3">
                  <p className="text-base font-semibold text-neutral-900 dark:text-white">
                    📋 3.4 Procedure
                  </p>
                  <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 shadow-inner dark:border-neutral-800 dark:bg-neutral-950">
                    <Image
                      src="/XRobot/sequence.png"
                      alt="Procedure sequence diagram."
                      width={1304}
                      height={520}
                      sizes="(min-width: 1280px) 60vw, (min-width: 768px) 70vw, 90vw"
                      className="h-auto w-full object-cover"
                      priority
                    />
                  </div>
                  <div className="space-y-4 text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
                    <p>
                      Each condition followed a consistent scripted sequence to ensure timing, roles, and robot behavior were fully controlled:
                    </p>
                    <ol className="space-y-2 pl-1">
                      <li className="flex gap-2">
                        <span className="select-none text-lg leading-none text-neutral-400 dark:text-neutral-500">1.</span>
                        <span><strong>Primary user initiates a service request</strong></span>
                      </li>
                      <li className="flex gap-2">
                        <span className="select-none text-lg leading-none text-neutral-400 dark:text-neutral-500">2.</span>
                        <span><strong>Robot begins its task</strong> (explaining menu or navigating with an item)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="select-none text-lg leading-none text-neutral-400 dark:text-neutral-500">3.</span>
                        <span><strong>Secondary user delivers a timed interruption</strong> (2–4 seconds after task starts)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="select-none text-lg leading-none text-neutral-400 dark:text-neutral-500">4.</span>
                        <span><strong>Robot responds with one of the assigned response modes</strong></span>
                      </li>
                      <li className="flex gap-2">
                        <span className="select-none text-lg leading-none text-neutral-400 dark:text-neutral-500">5.</span>
                        <span><strong>Robot finishes serving the primary user and then turns to assist the secondary user</strong></span>
                      </li>
                    </ol>
                    <p>
                      This procedure ensured every participant experienced identical interaction timing across devices.
                    </p>
                  </div>
                </div>
                <SubDivider />
                <div className="space-y-3">
                  <p className="text-base font-semibold text-neutral-900 dark:text-white">
                    📊 3.5 Study Findings (Short Summary)
                  </p>
                  <div className="space-y-4 text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
                    <p className="italic text-neutral-600 dark:text-neutral-400">
                      What the controlled experiment revealed
                    </p>
                    <p>
                      Our controlled multi-user AR study showed clear and consistent social expectations:
                    </p>
                    <ul className="space-y-2 pl-1">
                      <li className="flex gap-2">
                        <span className="select-none text-lg leading-none text-neutral-400 dark:text-neutral-500">•</span>
                        <span>
                          Primary users <strong>strongly prefer uninterrupted task flow</strong>, favoring Maintain-and-Respond or Ignore-for-irrelevant responses.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="select-none text-lg leading-none text-neutral-400 dark:text-neutral-500">•</span>
                        <span>
                          Secondary users <strong>expect immediate acknowledgment</strong>, especially when their request is task-relevant.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="select-none text-lg leading-none text-neutral-400 dark:text-neutral-500">•</span>
                        <span>
                          Maintain-and-Respond emerged as the <strong>best compromise</strong> across roles and tasks.
                        </span>
                      </li>
                    </ul>
                    <p>
                      These findings validate the importance of designing robots that can <strong>balance continuity with social awareness</strong>, and they demonstrate how the MR system enabled precise, repeatable measurement of multi-user interaction preferences.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className={`${baseSectionClass} gap-4 ${sectionPaddingClass}`}>
              <h2 className={sectionHeadingClass}>
                4. WHAT I BUILT — Core Technical System
              </h2>
              <div className="space-y-6 text-sm leading-relaxed sm:text-base">
                <div className="space-y-4 text-neutral-800 dark:text-neutral-200">
                  <p>
                    I independently built the full multi-user MR experiment system—from networking and spatial alignment to robot control logic and trial automation. Every subsystem was implemented by me except for the robot&apos;s animation assets, which were authored by a collaborator.
                  </p>
                  <p className="text-base font-semibold text-neutral-900 dark:text-white">
                    The platform integrates several key components:
                  </p>
                  <ul className="space-y-2 pl-1">
                    <li className="flex gap-2">
                      <span className="select-none text-lg leading-none text-neutral-400 dark:text-neutral-500">•</span>
                      <span>
                        <strong>Event-based multi-device networking</strong>, synchronizing robot actions and experiment events across AR headsets.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="select-none text-lg leading-none text-neutral-400 dark:text-neutral-500">•</span>
                      <span>
                        <strong>Distributed authority model</strong>, where each role owns only its relevant states for predictable and debuggable consistency.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="select-none text-lg leading-none text-neutral-400 dark:text-neutral-500">•</span>
                      <span>
                        <strong>Shared spatial coordinate system</strong> using Ximmerse beacons for aligning the physical robot and virtual content.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="select-none text-lg leading-none text-neutral-400 dark:text-neutral-500">•</span>
                      <span>
                        <strong>Unified robot behavior state machine</strong> covering both speech-mode and motion-mode scenarios.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="select-none text-lg leading-none text-neutral-400 dark:text-neutral-500">•</span>
                      <span>
                        <strong>Deterministic interruption timing</strong>, ensuring each trial reproduces identical service-interruption sequences.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className={`${baseSectionClass} gap-4 ${sectionPaddingClass}`}>
              <h2 className={sectionHeadingClass}>
                5. WHAT I LEARNED
              </h2>
              <div className="space-y-6 text-sm leading-relaxed sm:text-base">
                <div className="space-y-3">
                  <p className="text-base font-semibold text-neutral-900 dark:text-white">
                    📍 5.1 Why Beacon Anchors Fail to Scale — In Space and Across Spaces
                  </p>
                  <div className="space-y-4 text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
                    <ul className="space-y-2 pl-1">
                      <li className="flex gap-2">
                        <span className="select-none text-lg leading-none text-neutral-400 dark:text-neutral-500">•</span>
                        <span>
                          Beacon-based spatial alignment performs well only within a small ~3-5 m interaction zone; beyond that, accuracy deteriorates quickly due to occlusion, head-angle variation, and weak IR signal.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="select-none text-lg leading-none text-neutral-400 dark:text-neutral-500">•</span>
                        <span>
                          Because the beacon is a <strong>physical anchor</strong>, it cannot be replicated or persisted across rooms, sessions, or locations. Even small physical shifts invalidate the entire coordinate frame.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="select-none text-lg leading-none text-neutral-400 dark:text-neutral-500">•</span>
                        <span>
                          These constraints limit beacon systems to controlled lab environments and make them fundamentally unsuitable for real-world, scalable multi-user AR.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="select-none text-lg leading-none text-neutral-400 dark:text-neutral-500">•</span>
                        <span>
                          <span style={{ color: brandTheme.secondary }}><strong>Future direction:</strong></span> Move toward a Vision Pro-style <strong>SLAM world memory pipeline</strong>—devices scan scenes, upload feature maps, and relocalize against a shared cloud anchor graph. This eliminates physical setup and enables persistent, multi-room, multi-user AR.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <SubDivider />
                <div className="space-y-3">
                  <p className="text-base font-semibold text-neutral-900 dark:text-white">
                    ⚡ 5.2 Why Event-Based Sync Gets Harder With More Users
                  </p>
                  <div className="space-y-4 text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
                    <ul className="space-y-2 pl-1">
                      <li className="flex gap-2">
                        <span className="select-none text-lg leading-none text-neutral-400 dark:text-neutral-500">•</span>
                        <span>
                          My system uses a <strong>semi-decentralized authority model</strong>, where two users alternate ownership of robot state while the other device syncs. This works for two participants but does not scale cleanly.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="select-none text-lg leading-none text-neutral-400 dark:text-neutral-500">•</span>
                        <span>
                          As more users join, authority switching introduces race conditions, timestamp ordering issues, and conflicting updates—without a single source of truth, global consistency becomes unstable.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="select-none text-lg leading-none text-neutral-400 dark:text-neutral-500">•</span>
                        <span>
                          Late joiners require snapshot reconstruction, and event streams alone cannot guarantee that all devices converge to the same world state.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="select-none text-lg leading-none text-neutral-400 dark:text-neutral-500">•</span>
                        <span>
                          <span style={{ color: brandTheme.secondary }}><strong>Future direction:</strong></span> Evolve toward a <strong>server-authoritative architecture</strong> that maintains a canonical shared state graph, resolves conflicts deterministically, and provides authoritative snapshots. This model scales far better for multi-user AR.
                        </span>
                      </li>
                    </ul>
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
