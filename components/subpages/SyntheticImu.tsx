'use client';

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import PortfolioBackButton from "@/components/ui/portfolio-back-button";
import SectionIndicator from "@/components/ui/section-indicator";
import SubDivider from "@/components/sub-divider";
import { brandTheme } from "@/lib/theme";

type ProjectDetails = {
  overview: readonly string[];
  scope: string | null;
  role: readonly string[];
  team: string | null;
};


const projectDetails = {
  overview: ["Proposed a feature-level evaluation framework to ensure the reliability of synthetic IMU data for human activity recognition.","Introduced a closed-loop filtering pipeline combining semantic screening, signal calibration, and distribution alignment.","Enhanced the generalization and cross-dataset consistency of existing text-to-motion generation methods."],
  scope: "(2025) Undergraduate Thesis",
  role: ["Research & development", "Implementation", "Evaluation"],
  team: "individual",
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

export default function SyntheticImuSubpage() {
  const directionVideoRef = useRef<HTMLVideoElement | null>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  const syntheticImuStages = [
    { number: "01", title: "Overview" },
    { number: "02", title: "Background" },
    { number: "03", title: "Goals & Approach" },
    { number: "04", title: "Understanding Gap" },
    { number: "05", title: "System" },
    { number: "06", title: "Experiments" },
    { number: "07", title: "Contributions" },
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
      <SectionIndicator stages={syntheticImuStages} sectionRefs={sectionRefs} />
      <div className="relative w-full">
        <PortfolioBackButton />

        <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 lg:max-w-[54%]">
          <article className="flex flex-col gap-4">
            <header className="flex flex-col gap-5 rounded-[2.5rem] border border-neutral-200/70 bg-neutral-50/60 p-6 text-neutral-900 shadow-xl backdrop-blur-sm dark:border-neutral-700/60 dark:bg-neutral-900/40 dark:text-neutral-100">
              <h1 className="text-2xl font-semibold leading-tight sm:text-3xl">
                Enhancing Synthetic IMU Generation for Human Activity Recognition
              </h1>

              <div className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-100 shadow-inner dark:border-neutral-800 dark:bg-neutral-950">
                <Image
                  src="/undergraduate thesis/undergraduate thesisHero.jpeg"
                  alt="Visualization of the synthetic IMU research project."
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
                OVERVIEW
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
                Background & Motivation
              </h2>
              <div className="space-y-3 text-sm leading-relaxed sm:text-base">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">
                  🛰️ What is IMU?
                </p>
                <figure className="mt-3 w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white/40 shadow-sm dark:border-neutral-800 dark:bg-neutral-950/60">
                  <Image
                    src="/undergraduate thesis/ImuFunction.png"
                    alt="Six-channel IMU sensing across acceleration and angular velocity axes."
                    width={1400}
                    height={880}
                    sizes="(min-width: 1280px) 60vw, (min-width: 768px) 70vw, 90vw"
                    className="h-auto w-full object-contain"
                    priority
                  />
                </figure>
                <p>
                  An IMU (Inertial Measurement Unit) captures body motion as six-channel time-series signals — 3-axis acceleration and 3-axis angular velocity. This modality is privacy-preserving, low-power, and ideal for always-on sensing without cameras. It is the same sensor that enables smartwatches to recognize activities such as walking, running, or cycling.
                </p>
                <SubDivider className="mt-6 mb-3 sm:mt-8 sm:mb-4" />
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">
                  ⚠️ Real IMU dataset cons
                </p>
                <figure className="mt-3 w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white/40 shadow-sm dark:border-neutral-800 dark:bg-neutral-950/60">
                  <Image
                    src="/undergraduate thesis/ImuRealCons.png"
                    alt="Different datasets place sensors and define activities differently, creating isolated data islands."
                    width={1400}
                    height={880}
                    sizes="(min-width: 1280px) 60vw, (min-width: 768px) 70vw, 90vw"
                    className="h-auto w-full object-contain"
                    priority
                  />
                  <figcaption className="px-4 pb-3 pt-2 text-xs text-neutral-600 dark:text-neutral-400">
                    Sensor placement and activity taxonomies differ across datasets, creating isolated IMU data islands that are hard to unify.
                  </figcaption>
                </figure>
                <p>
                  Real IMU datasets are fragmented: sensors sit on different body locations, activity labels vary, and domain gaps across collections leave models brittle and poorly generalized.
                </p>
                <SubDivider className="mt-6 mb-3 sm:mt-8 sm:mb-4" />
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">
                  ✨ Synthetic IMU pros
                </p>
                <figure className="mt-3 w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white/40 shadow-sm dark:border-neutral-800 dark:bg-neutral-950/60">
                  <Image
                    src="/undergraduate thesis/Flexible sensor placement.jpg"
                    alt="Flexible sensor placement options to align virtual and real IMU setups."
                    width={1400}
                    height={880}
                    sizes="(min-width: 1280px) 60vw, (min-width: 768px) 70vw, 90vw"
                    className="h-auto w-full object-contain"
                    priority
                  />
                </figure>
                <p>
                  If we can generate large amounts of high-quality virtual IMU signals, we can bridge those gaps, rebalance underrepresented motions, and train models that travel better across devices and datasets.
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
                Goals & Overall Approach
              </h2>
              <div className="space-y-5 text-sm leading-relaxed sm:text-base">
                <div className="space-y-3">
                  <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-50">
                    Limitations of Prior Work (IMUGPT)
                  </h3>
                  <ul className="space-y-2 pl-1">
                    <li className="flex gap-2">
                      <span className="select-none text-lg leading-none text-neutral-500">•</span>
                      <span>No feedback loop: motion and virtual IMU are generated from text with no check for semantic correctness or generation errors.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="select-none text-lg leading-none text-neutral-500">•</span>
                      <span>No evaluation or selection stage: every generated IMU signal is used as-is, without assessing quality, alignment, or plausibility before training.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="select-none text-lg leading-none text-neutral-500">•</span>
                      <span>One-way pipeline: Text → Motion → Virtual IMU stays fixed, letting noisy or inaccurate samples leak into the classifier.</span>
                    </li>
                  </ul>
                <figure className="w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white/40 shadow-sm dark:border-neutral-800 dark:bg-neutral-950/60">
                  <Image
                    src="/undergraduate thesis/limitationIMUGPT 2.jpg"
                    alt="Prior IMUGPT pipeline lacks feedback, evaluation, and selection stages."
                    width={1400}
                    height={880}
                    sizes="(min-width: 1280px) 60vw, (min-width: 768px) 70vw, 90vw"
                    className="h-auto w-full object-contain"
                  />
                </figure>
              </div>

                <SubDivider className="mt-6 mb-4 sm:mt-8 sm:mb-5" />

                <div className="space-y-3">
                  <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-50">
                    Research Goals
                  </h3>
                  <div className="grid gap-3 sm:grid-cols-3">
                    <div className="flex flex-col gap-2 rounded-2xl border border-neutral-200 bg-white/40 p-4 shadow-inner dark:border-neutral-800 dark:bg-neutral-900/40">
                      <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">
                        📊 Analyze virtual–real signal gaps
                      </p>
                      <p className="text-xs sm:text-sm">
                        Measure how synthetic IMU differs from real data using embedding and distribution metrics.
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 rounded-2xl border border-neutral-200 bg-white/40 p-4 shadow-inner dark:border-neutral-800 dark:bg-neutral-900/40">
                      <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">
                        🔁 Build an evaluation–selection loop
                      </p>
                      <p className="text-xs sm:text-sm">
                        Filter generated samples via semantic checks and calibration to keep only reliable signals.
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 rounded-2xl border border-neutral-200 bg-white/40 p-4 shadow-inner dark:border-neutral-800 dark:bg-neutral-900/40">
                      <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">
                        🌐 Validate across datasets
                      </p>
                      <p className="text-xs sm:text-sm">
                        Test how synthetic–real mixing influences activity recognition on multiple datasets.
                      </p>
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
              <h2 className={sectionHeadingClass}>
                🔍 Understanding the Gap: Virtual vs. Real IMU
              </h2>
              <div className="space-y-8 text-sm leading-relaxed sm:text-base">
                <div className="space-y-3">
                  <h3 className="text-base font-semibold text-neutral-800 dark:text-neutral-100">
                    ❗ Synthetic IMU often gets motion direction wrong
                  </h3>
                  <div className="relative w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white/40 shadow-inner dark:border-neutral-800 dark:bg-neutral-900/35">
                    <video
                      ref={directionVideoRef}
                      src="/undergraduate thesis/UpDownStairs.mov"
                      muted
                      loop
                      autoPlay
                      playsInline
                      preload="metadata"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <p>
                    Synthetic IMU frequently confuses climbing up and climbing down. In the motion embedding space, these two actions lie extremely close—often overlapping—leaving the transformer-based generator without enough physical grounding to reliably separate direction.
                  </p>
                </div>

                <SubDivider />

                <div className="space-y-3">
                  <h3 className="text-base font-semibold text-neutral-800 dark:text-neutral-100">
                    ❗ Real datasets also disagree
                  </h3>
                  <figure className="relative w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white/40 shadow-inner dark:border-neutral-800 dark:bg-neutral-900/35">
                    <Image
                      src="/undergraduate%20thesis/Comparison%20of%20two%20datasets%20(Pamap2%20vs.%20RealWorld)%20for%20the%20same%20action%20standing%20Feature%20distributions%20are%20scattered%20and%20inconsistent%20Clusters%20from%20different%20datasets%20do%20not%20overlap.jpg"
                      alt="t-SNE comparison showing PAMAP2 vs RealWorld standing actions scattered without overlapping clusters."
                      width={1400}
                      height={880}
                      sizes="(min-width: 1280px) 60vw, (min-width: 768px) 70vw, 90vw"
                      className="h-auto w-full object-contain"
                    />
                  </figure>
                  <p>
                    Even for the same action captured on the same body location, different IMU datasets scatter widely in embedding space rather than clustering together. This reveals strong cross-dataset domain shifts and inconsistent data distributions.
                  </p>
                </div>

                <SubDivider />

                <div className="space-y-3">
                  <h3 className="text-base font-semibold text-neutral-800 dark:text-neutral-100">
                    ❗ IMUGPT had a hidden axis-mapping bug
                  </h3>
                  <figure className="relative w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white/40 shadow-inner dark:border-neutral-800 dark:bg-neutral-900/35">
                    <Image
                      src="/undergraduate thesis/FID.png"
                      alt="Alignment visualization highlighting an axis-mapping bug between IMUGPT and IMUSim."
                      width={1400}
                      height={880}
                      sizes="(min-width: 1280px) 60vw, (min-width: 768px) 70vw, 90vw"
                      className="h-auto w-full object-contain"
                    />
                  </figure>
                  <p>
                    I identified an axis-misalignment in the IMUGPT → IMUSim mapping: the simulator’s axes did not match the USC-HAD specification, producing physically incorrect virtual IMU signals. Fixing this alignment significantly improved virtual–real consistency.
                  </p>
                </div>
              </div>
            </section>

            <div className="w-full self-center max-w-4xl sm:max-w-5xl lg:max-w-6xl">
              <section
                ref={(el) => {
                  sectionRefs.current[4] = el;
                }}
                className={`${baseSectionClass} gap-4 ${sectionPaddingClass}`}
              >
                <h2 className={sectionHeadingClass}>
                  🛠 System at a Glance
                </h2>
                  <div className="space-y-4 text-sm leading-relaxed sm:text-base">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                      What IMUGPT provides vs. what I improved
                    </p>
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <p className="font-semibold text-neutral-900 dark:text-neutral-50">
                        1) Text → Motion (baseline from IMUGPT)
                      </p>
                      <div className="space-y-3">
                        <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white/40 shadow-inner dark:border-neutral-800 dark:bg-neutral-900/35">
                          <video
                            src="/undergraduate%20thesis/1%203.mov"
                            muted
                            loop
                            autoPlay
                            playsInline
                            preload="metadata"
                            className="w-full rounded-2xl object-contain"
                          />
                        </div>
                        <p>
                          Generate 3D human motion from text prompts using a T2M-GPT model trained on HumanML3D. My work: reproduced this module and fixed prompt-level ambiguities (e.g., adding a [flat on ground] token for “lying”).
                        </p>
                      </div>
                    </div>
                    <SubDivider />
                    <div className="space-y-3">
                      <p className="font-semibold text-neutral-900 dark:text-neutral-50">
                        2) Motion → IMU (baseline from IMUGPT + light extension)
                      </p>
                      <div className="space-y-3">
                        <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white/40 shadow-inner dark:border-neutral-800 dark:bg-neutral-900/35">
                          <video
                            src="/undergraduate%20thesis/2%203.mov"
                            muted
                            loop
                            autoPlay
                            playsInline
                            preload="metadata"
                            className="w-full rounded-2xl object-contain"
                          />
                        </div>
                        <p>
                          Convert generated motion into 6-axis IMU signals via a physics-based simulator (IMUSim). My work: enforced consistent sensor placement across datasets and corrected the IMUGPT axis-mapping mistake; added light calibration to better match real signals (not the main contribution).
                        </p>
                      </div>
                    </div>
                    <SubDivider />
                    <div className="space-y-3">
                      <p className="font-semibold text-neutral-900 dark:text-neutral-50">
                        3) Evaluation & Filtering (my main contribution)
                      </p>
                      <figure className="relative w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white/40 shadow-inner dark:border-neutral-800 dark:bg-neutral-900/35">
                        <Image
                          src="/undergraduate%20thesis/eva1.jpg"
                          alt="Evaluation pipeline visualization showing embedding-based IMU encoder scoring."
                          width={1400}
                          height={880}
                          className="h-auto w-full object-contain"
                        />
                      </figure>
                      <p>
                        Use an embedding-based IMU encoder (ImageBind) to score semantic consistency between text, motion, and IMU signals. Only high-quality, physically plausible synthetic samples are kept, creating the feedback-and-selection loop missing in prior work.
                      </p>
                      <figure className="relative w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white/40 shadow-inner dark:border-neutral-800 dark:bg-neutral-900/35">
                        <Image
                          src="/undergraduate%20thesis/eva2.jpg"
                          alt="Sample selection results illustrating high-quality synthetic IMU retention."
                          width={1400}
                          height={880}
                          className="h-auto w-full object-contain"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <section
              ref={(el) => {
                sectionRefs.current[5] = el;
              }}
              className={`${baseSectionClass} gap-4 ${sectionPaddingClass}`}
            >
              <h2 className={sectionHeadingClass}>
                Experiments & Results
              </h2>
              <div className="space-y-4 text-sm leading-relaxed sm:text-base">
                <div className="space-y-2">
                  <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-50">Setup</h3>
                  <div className="space-y-3">
                    <p>Experiments benchmark our method against IMUGPT, the prior text-to-IMU baseline.</p>
                    <p>Evaluations are conducted on USC-HAD, PAMAP2, and RealWorld using a standard DeepConvLSTM classifier.</p>
                    <p>We compare three training regimes:</p>
                    <ul className="space-y-1 pl-4">
                      <li className="flex gap-2">
                        <span className="select-none text-lg leading-none text-neutral-500">•</span>
                        <span>R2R — real-only</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="select-none text-lg leading-none text-neutral-500">•</span>
                        <span>V2R — virtual-only (IMUGPT vs. ours)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="select-none text-lg leading-none text-neutral-500">•</span>
                        <span>Mix2R — real + curated synthetic (IMUGPT vs. ours)</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <SubDivider />
                <div className="space-y-4">
                  <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-50">
                    📈 Experiment A — Benchmark Against IMUGPT (Across Datasets)
                  </h3>
                  <figure className="relative w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white/40 shadow-inner dark:border-neutral-800 dark:bg-neutral-900/35">
                    <Image
                      src="/undergraduate%20thesis/F1%20Macronjpg.jpg"
                      alt="F1-macro comparison chart across R2R, V2R, and Mix2R regimes."
                      width={1400}
                      height={880}
                      className="h-auto w-full object-contain"
                    />
                  </figure>
                  <ul className="space-y-2">
                    <li className="flex gap-2">
                      <span className="select-none text-lg leading-none text-neutral-500">•</span>
                      <span>Our method outperforms the IMUGPT baseline on USC-HAD and PAMAP2 in both V2R and Mix2R settings.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="select-none text-lg leading-none text-neutral-500">•</span>
                      <span>The biggest gains appear in Mix2R, where curated synthetic IMU improves F1-macro by +3–4%, especially when real data is limited.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="select-none text-lg leading-none text-neutral-500">•</span>
                      <span>Even in challenging cases (e.g., RealWorld), our approach remains more stable than raw IMUGPT-generated data.</span>
                    </li>
                  </ul>
                </div>
                <SubDivider />
                <div className="space-y-4">
                  <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-50">
                    📉 Experiment B — Real Data Size vs. Performance (Mix2R vs. R2R)
                  </h3>
                  <figure className="relative w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white/40 shadow-inner dark:border-neutral-800 dark:bg-neutral-900/35">
                    <Image
                      src="/undergraduate%20thesis/ratiojpg.jpg"
                      alt="Performance vs real-data ratio comparing Mix2R and R2R."
                      width={1400}
                      height={880}
                      className="h-auto w-full object-contain"
                    />
                  </figure>
                  <ul className="space-y-2">
                    <li className="flex gap-2">
                      <span className="select-none text-lg leading-none text-neutral-500">•</span>
                      <span>With the same amount of synthetic data, Mix2R significantly boosts performance when real data is scarce (6–30 minutes).</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="select-none text-lg leading-none text-neutral-500">•</span>
                      <span>As more real data becomes available, the gap narrows but Mix2R never hurts performance, showing consistently stable improvements.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="select-none text-lg leading-none text-neutral-500">•</span>
                      <span>This suggests that curated synthetic IMU effectively fills coverage gaps and accelerates learning in low-sample regimes.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section
              ref={(el) => {
                sectionRefs.current[6] = el;
              }}
              className={`${baseSectionClass} gap-4 ${sectionPaddingClass}`}
            >
              <h2 className={sectionHeadingClass}>
                Contributions & Limitations
              </h2>
              <div className="space-y-4 text-sm leading-relaxed sm:text-base">
                <div className="space-y-2">
                  <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-50">Contributions</h3>
                  <ul className="space-y-2">
                    <li className="flex gap-2">
                      <span className="select-none text-lg leading-none text-neutral-500">•</span>
                      <span>Built the end-to-end text-to-IMU pipeline.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="select-none text-lg leading-none text-neutral-500">•</span>
                      <span>Diagnosed and fixed the hidden axis-mapping issue in IMUGPT.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="select-none text-lg leading-none text-neutral-500">•</span>
                      <span>Added a semantic evaluator to filter unreliable synthetic signals and stabilize Mix2R.</span>
                    </li>
                  </ul>
                </div>
                <SubDivider />
                <div className="space-y-2">
                  <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-50">Limitations</h3>
                  <ul className="space-y-2">
                    <li className="flex gap-2">
                      <span className="select-none text-lg leading-none text-neutral-500">•</span>
                      <span>Quality still bounded by the underlying motion generator and simulator fidelity.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="select-none text-lg leading-none text-neutral-500">•</span>
                      <span>Multi-sensor, multi-location setups remain challenging for reliable synthesis.</span>
                    </li>
                  </ul>
                </div>
                <SubDivider />
                <div className="space-y-2">
                  <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-50">Future Directions</h3>
                  <ul className="space-y-2">
                    <li className="flex gap-2">
                      <span className="select-none text-lg leading-none text-neutral-500">•</span>
                      <span>Expand the evaluator for more nuanced semantic checks.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="select-none text-lg leading-none text-neutral-500">•</span>
                      <span>Automate prompt refinement for edge-case activities.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="select-none text-lg leading-none text-neutral-500">•</span>
                      <span>Explore self-supervised alignment to reduce domain gaps without labels.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </article>
        </div>
      </div>
    </main>
  );
}
