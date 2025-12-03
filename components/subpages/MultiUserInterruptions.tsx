'use client';

import { useLayoutEffect } from "react";
import Image from "next/image";
import PortfolioBackButton from "@/components/ui/portfolio-back-button";
import SubDivider from "@/components/sub-divider";

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
                          A brief “look at the beacon” step at startup aligns each headset to that
                          anchor, so the physical robot and all virtual content appear in almost the
                          same real-world location for every user.
                        </span>
                      </li>
                    </ul>
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
                          <strong>semantic events</strong> (e.g., "start Action A/B", "robot reached Player A", "turn
                          to Player B", "play follow-up") instead of streaming raw poses every frame. Two headsets are assigned as{" "}
                          <strong>Player A/B</strong>; any additional headsets can join as <strong>observers</strong> that receive all events but do not control the robot.
                        </span>
                      </li>
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
                      <li className="flex gap-2">
                        <span className="select-none text-lg leading-none text-neutral-400 dark:text-neutral-500">
                          •
                        </span>
                        <span>
                          Architecturally, we use a <strong>per-role / per-object authority model</strong>
                          rather than a single heavy server or a fully decentralized consensus protocol.
                          This means, for example, that <strong>Player A</strong> is authoritative for "robot moves toward
                          A", <strong>Player B</strong> is <strong>authoritative</strong> when the robot turns toward B, and each UI owner
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
                  <div className="min-h-[4rem] rounded-2xl border border-dashed border-neutral-200/70 bg-white/60 dark:border-neutral-700/60 dark:bg-neutral-900/35 p-4">
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 italic">
                      （解释两类中断）
                    </p>
                  </div>
                </div>
                <SubDivider />
                <div className="space-y-3">
                  <p className="text-base font-semibold text-neutral-900 dark:text-white">
                    📋 3.4 Procedure
                  </p>
                  <div className="min-h-[4rem] rounded-2xl border border-dashed border-neutral-200/70 bg-white/60 dark:border-neutral-700/60 dark:bg-neutral-900/35 p-4">
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 italic">
                      （用户站位、触发流程、交互顺序）
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className={`${baseSectionClass} gap-4 ${sectionPaddingClass}`}>
              <h2 className={sectionHeadingClass}>
                4. KEY FINDINGS
              </h2>
              <div className="space-y-6 text-sm leading-relaxed sm:text-base">
                <div className="space-y-3">
                  <p className="text-base font-semibold text-neutral-900 dark:text-white">
                    👤 4.1 Primary users prioritize continuity
                  </p>
                  <div className="min-h-[4rem] rounded-2xl border border-dashed border-neutral-200/70 bg-white/60 dark:border-neutral-700/60 dark:bg-neutral-900/35 p-4">
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 italic">
                      （prefer Maintain-and-Respond / Ignore for irrelevant interruptions）
                    </p>
                  </div>
                </div>
                <SubDivider />
                <div className="space-y-3">
                  <p className="text-base font-semibold text-neutral-900 dark:text-white">
                    👥 4.2 Secondary users prioritize acknowledgment
                  </p>
                  <div className="min-h-[4rem] rounded-2xl border border-dashed border-neutral-200/70 bg-white/60 dark:border-neutral-700/60 dark:bg-neutral-900/35 p-4">
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 italic">
                      （prefer Interrupt-and-Respond especially for relevant interruptions）
                    </p>
                  </div>
                </div>
                <SubDivider />
                <div className="space-y-3">
                  <p className="text-base font-semibold text-neutral-900 dark:text-white">
                    ⚖️ 4.3 Maintain-and-Respond is the best compromise
                  </p>
                  <div className="min-h-[4rem] rounded-2xl border border-dashed border-neutral-200/70 bg-white/60 dark:border-neutral-700/60 dark:bg-neutral-900/35 p-4">
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 italic">
                      （跨角色与任务类型）
                    </p>
                  </div>
                </div>
                <SubDivider />
                <div className="space-y-3">
                  <p className="text-base font-semibold text-neutral-900 dark:text-white">
                    🤖 4.4 Robot modality affects expectations
                  </p>
                  <div className="min-h-[4rem] rounded-2xl border border-dashed border-neutral-200/70 bg-white/60 dark:border-neutral-700/60 dark:bg-neutral-900/35 p-4">
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 italic">
                      （speech vs motion robot — maintain vs interrupt）
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className={`${baseSectionClass} gap-4 ${sectionPaddingClass}`}>
              <h2 className={sectionHeadingClass}>
                5. DESIGN GUIDELINES
              </h2>
              <div className="space-y-6 text-sm leading-relaxed sm:text-base">
                <div className="space-y-3">
                  <p className="text-base font-semibold text-neutral-900 dark:text-white">
                    👥 5.1 Different roles → different priorities
                  </p>
                  <div className="min-h-[4rem] rounded-2xl border border-dashed border-neutral-200/70 bg-white/60 dark:border-neutral-700/60 dark:bg-neutral-900/35 p-4">
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 italic">
                      （primary wants flow, secondary wants acknowledgment）
                    </p>
                  </div>
                </div>
                <SubDivider />
                <div className="space-y-3">
                  <p className="text-base font-semibold text-neutral-900 dark:text-white">
                    🔄 5.2 Adapt response modes to interruption relevance
                  </p>
                  <div className="min-h-[4rem] rounded-2xl border border-dashed border-neutral-200/70 bg-white/60 dark:border-neutral-700/60 dark:bg-neutral-900/35 p-4">
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 italic">
                      （relevant → respond; irrelevant → minimal）
                    </p>
                  </div>
                </div>
                <SubDivider />
                <div className="space-y-3">
                  <p className="text-base font-semibold text-neutral-900 dark:text-white">
                    🎯 5.3 Match behavior strategy to robot modality
                  </p>
                  <div className="min-h-[4rem] rounded-2xl border border-dashed border-neutral-200/70 bg-white/60 dark:border-neutral-700/60 dark:bg-neutral-900/35 p-4">
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 italic">
                      （motion robot适合 maintain；speech robot适合 quick interrupt）
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className={`${baseSectionClass} gap-4 ${sectionPaddingClass}`}>
              <h2 className={sectionHeadingClass}>
                6. KEY LEARNINGS
              </h2>
              <div className="space-y-6 text-sm leading-relaxed sm:text-base">
                <div className="space-y-3">
                  <p className="text-base font-semibold text-neutral-900 dark:text-white">
                    🏗️ 6.1 Built a scalable multi-user MR system from scratch
                  </p>
                  <div className="min-h-[4rem] rounded-2xl border border-dashed border-neutral-200/70 bg-white/60 dark:border-neutral-700/60 dark:bg-neutral-900/35 p-4">
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 italic">
                      （同步、空间对齐、交互控制）
                    </p>
                  </div>
                </div>
                <SubDivider />
                <div className="space-y-3">
                  <p className="text-base font-semibold text-neutral-900 dark:text-white">
                    ✨ 6.2 Learned precision in HRI interaction design
                  </p>
                  <div className="min-h-[4rem] rounded-2xl border border-dashed border-neutral-200/70 bg-white/60 dark:border-neutral-700/60 dark:bg-neutral-900/35 p-4">
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 italic">
                      （timing, gesture, gaze, latency）
                    </p>
                  </div>
                </div>
                <SubDivider />
                <div className="space-y-3">
                  <p className="text-base font-semibold text-neutral-900 dark:text-white">
                    🌐 6.3 Deep understanding of multi-user coordination
                  </p>
                  <div className="min-h-[4rem] rounded-2xl border border-dashed border-neutral-200/70 bg-white/60 dark:border-neutral-700/60 dark:bg-neutral-900/35 p-4">
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 italic">
                      （为你未来 world-scale AR ambition 做铺垫）
                    </p>
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
