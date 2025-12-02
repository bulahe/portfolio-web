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
                    🏗️ 2.1 Multi-User MR Framework Architecture
                  </p>
                  <div className="min-h-[4rem] rounded-2xl border border-dashed border-neutral-200/70 bg-white/60 dark:border-neutral-700/60 dark:bg-neutral-900/35 p-4">
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 italic">
                      （解释你搭的系统总体结构：同步、状态管理、空间对齐）
                    </p>
                  </div>
                </div>
                <SubDivider />
                <div className="space-y-3">
                  <p className="text-base font-semibold text-neutral-900 dark:text-white">
                    📍 2.2 Spatial Alignment & Environment Calibration
                  </p>
                  <div className="min-h-[4rem] rounded-2xl border border-dashed border-neutral-200/70 bg-white/60 dark:border-neutral-700/60 dark:bg-neutral-900/35 p-4">
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 italic">
                      （真实咖啡馆空间 + 多 AR 头显一致的坐标系）
                    </p>
                  </div>
                </div>
                <SubDivider />
                <div className="space-y-3">
                  <p className="text-base font-semibold text-neutral-900 dark:text-white">
                    ⚡ 2.3 Real-Time Synchronization Across Devices
                  </p>
                  <div className="min-h-[4rem] rounded-2xl border border-dashed border-neutral-200/70 bg-white/60 dark:border-neutral-700/60 dark:bg-neutral-900/35 p-4">
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 italic">
                      （你用 TI-NET / 自定义网络协议同步机器人位置、朝向、语音、动作）
                    </p>
                  </div>
                </div>
                <SubDivider />
                <div className="space-y-3">
                  <p className="text-base font-semibold text-neutral-900 dark:text-white">
                    🎛️ 2.4 Robot Behavior Controller
                  </p>
                  <div className="space-y-2">
                    <ul className="space-y-2 pl-1">
                      <li className="flex gap-2">
                        <span className="select-none text-lg leading-none text-neutral-500">•</span>
                        <span>12 个实验条件（2 robot types × 2 relevance × 3 response modes）</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="select-none text-lg leading-none text-neutral-500">•</span>
                        <span>动作、语音、注视方向、导航</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="select-none text-lg leading-none text-neutral-500">•</span>
                        <span>所有反应模式图示（Figure 3）由你的实现支撑</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <SubDivider />
                <div className="space-y-3">
                  <p className="text-base font-semibold text-neutral-900 dark:text-white">
                    🎬 2.5 Interruption Trigger & Participant Prompt System
                  </p>
                  <div className="min-h-[4rem] rounded-2xl border border-dashed border-neutral-200/70 bg-white/60 dark:border-neutral-700/60 dark:bg-neutral-900/35 p-4">
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 italic">
                      （次用户打断何时发生、如何保证实验一致性）
                    </p>
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
                  <div className="min-h-[4rem] rounded-2xl border border-dashed border-neutral-200/70 bg-white/60 dark:border-neutral-700/60 dark:bg-neutral-900/35 p-4">
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 italic">
                      （within-subject，24 participants，12 conditions）
                    </p>
                  </div>
                </div>
                <SubDivider />
                <div className="space-y-3">
                  <p className="text-base font-semibold text-neutral-900 dark:text-white">
                    🤖 3.2 Robot Types & Scenarios
                  </p>
                  <div className="space-y-2">
                    <ul className="space-y-2 pl-1">
                      <li className="flex gap-2">
                        <span className="select-none text-lg leading-none text-neutral-500">•</span>
                        <span>Speech-oriented robot</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="select-none text-lg leading-none text-neutral-500">•</span>
                        <span>Motion-oriented robot</span>
                      </li>
                    </ul>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 italic mt-2">
                      （引用展示流程的 Figure 4）
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
