'use client';

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import PortfolioBackButton from "@/components/ui/portfolio-back-button";
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

            <section className={`${baseSectionClass} gap-3 ${sectionPaddingClass}`}>
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

            <section className={`${baseSectionClass} gap-3 ${sectionPaddingClass}`}>
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
                <div
                  className="mt-6 border-t pb-1 pt-3 sm:mt-8 sm:pb-2 sm:pt-4"
                  style={{ borderColor: brandTheme.secondary }}
                />
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
                <div
                  className="mt-6 border-t pb-1 pt-3 sm:mt-8 sm:pb-2 sm:pt-4"
                  style={{ borderColor: brandTheme.secondary }}
                />
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

            <section className={`${baseSectionClass} gap-3 ${sectionPaddingClass}`}>
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

                <div
                  className="mt-6 border-t pb-2 pt-4 sm:mt-8 sm:pb-3 sm:pt-5"
                  style={{ borderColor: brandTheme.secondary }}
                />

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

            <section className={`${baseSectionClass} gap-4 ${sectionPaddingClass}`}>
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

            <section className={`${baseSectionClass} gap-4 ${sectionPaddingClass}`}>
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
                    <div className="grid gap-3 sm:grid-cols-[1.05fr,1fr] sm:items-center">
                      <p>
                        Generate 3D human motion from text prompts using a T2M-GPT model trained on HumanML3D. My work: reproduced this module and fixed prompt-level ambiguities (e.g., adding a [flat on ground] token for “lying”).
                      </p>
                      <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white/40 shadow-inner dark:border-neutral-800 dark:bg-neutral-900/35">
                        <video
                          src="/undergraduate%20thesis/1%202.mov"
                          muted
                          loop
                          autoPlay
                          playsInline
                          preload="metadata"
                          className="w-full rounded-2xl object-contain"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-neutral-200/70 dark:border-neutral-800" />
                  <div className="space-y-3">
                    <p className="font-semibold text-neutral-900 dark:text-neutral-50">
                      2) Motion → IMU (baseline from IMUGPT + light extension)
                    </p>
                    <div className="grid gap-3 sm:grid-cols-[1fr,1.05fr] sm:items-center">
                      <div className="relative order-2 overflow-hidden rounded-2xl border border-neutral-200 bg-white/40 shadow-inner sm:order-1 dark:border-neutral-800 dark:bg-neutral-900/35">
                        <video
                          src="/undergraduate%20thesis/2%202.mov"
                          muted
                          loop
                          autoPlay
                          playsInline
                          preload="metadata"
                          className="w-full rounded-2xl object-contain"
                        />
                      </div>
                      <p className="order-1 sm:order-2">
                        Convert generated motion into 6-axis IMU signals via a physics-based simulator (IMUSim). My work: enforced consistent sensor placement across datasets and corrected the IMUGPT axis-mapping mistake; added light calibration to better match real signals (not the main contribution).
                      </p>
                    </div>
                  </div>
                  <div className="border-t border-neutral-200/70 dark:border-neutral-800" />
                  <div className="space-y-2">
                    <p className="font-semibold text-neutral-900 dark:text-neutral-50">
                      3) Evaluation & Filtering (my main contribution)
                    </p>
                    <p>
                      Use an embedding-based IMU encoder (ImageBind) to score semantic consistency between text, motion, and IMU signals. Only high-quality, physically plausible synthetic samples are kept, creating the feedback-and-selection loop missing in prior work.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className={`${baseSectionClass} gap-4 ${sectionPaddingClass}`}>
              <h2 className={sectionHeadingClass}>
                Experiments & Results
              </h2>
              <div className="space-y-4 text-sm leading-relaxed sm:text-base">
                <div className="space-y-2">
                  <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-50">Setup</h3>
                  <p>
                    Evaluated on USC-HAD and related IMU benchmarks using a DeepConvLSTM classifier, F1-macro as the main metric, and comparisons across R2R (real-only), V2R (virtual-only), and Mix2R (real + curated virtual) training regimes.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-50">Key Findings</h3>
                  <ul className="space-y-2 rounded-2xl bg-white/40 p-4 shadow-inner dark:bg-neutral-900/35">
                    <li className="flex gap-2">
                      <span className="select-none text-lg leading-none text-neutral-500">•</span>
                      <span>In low-sample settings, Mix2R significantly lifts F1-macro compared with real-only baselines.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="select-none text-lg leading-none text-neutral-500">•</span>
                      <span>Virtual-only (V2R) yields modest gains but is less stable than the curated mix strategy.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="select-none text-lg leading-none text-neutral-500">•</span>
                      <span>Calibration sharpens performance for stair-related and lying activities where raw virtual signals were most off.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="select-none text-lg leading-none text-neutral-500">•</span>
                      <span>Distribution alignment reduces intra-class variance, making cross-dataset validation less brittle.</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-50">Interpretation</h3>
                  <p>
                    Synthetic IMU serves as targeted coverage for blind spots in real wearables, improving robustness to placement and label inconsistencies without inflating privacy or data collection costs.
                  </p>
                  <p>
                    Challenges remain for complex multi-channel datasets, but calibrated generation plus semantic filtering meaningfully reduces domain mismatch and accelerates model transfer across sensor setups.
                  </p>
                </div>
              </div>
            </section>

            <section className={`${baseSectionClass} gap-4 ${sectionPaddingClass}`}>
              <h2 className={sectionHeadingClass}>
                Contributions & Limitations
              </h2>
              <div className="space-y-4 text-sm leading-relaxed sm:text-base">
                <div className="space-y-2">
                  <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-50">What I Contributed</h3>
                  <ul className="space-y-2 rounded-2xl bg-white/40 p-4 shadow-inner dark:bg-neutral-900/35">
                    <li className="flex gap-2">
                      <span className="select-none text-lg leading-none text-neutral-500">•</span>
                      <span>Designed the end-to-end text-to-synthetic-IMU pipeline.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="select-none text-lg leading-none text-neutral-500">•</span>
                      <span>Diagnosed and fixed axis misalignment in existing simulation workflows.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="select-none text-lg leading-none text-neutral-500">•</span>
                      <span>Combined semantic filtering with statistical calibration for distribution alignment.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="select-none text-lg leading-none text-neutral-500">•</span>
                      <span>Ran cross-dataset experiments to quantify virtual-real gaps and improvements.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="select-none text-lg leading-none text-neutral-500">•</span>
                      <span>Packaged the pipeline into a reusable workflow for downstream HAR tasks.</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-50">Limitations</h3>
                  <ul className="space-y-2 rounded-2xl bg-white/40 p-4 shadow-inner dark:bg-neutral-900/35">
                    <li className="flex gap-2">
                      <span className="select-none text-lg leading-none text-neutral-500">•</span>
                      <span>Calibration still leans on dataset-specific heuristics and may not generalize to all sensors.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="select-none text-lg leading-none text-neutral-500">•</span>
                      <span>Multi-sensor, multi-location scenarios remain challenging for stable synthesis.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="select-none text-lg leading-none text-neutral-500">•</span>
                      <span>Generation quality is bounded by the underlying motion model and simulator fidelity.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className={`${baseSectionClass} gap-4 ${sectionPaddingClass}`}>
              <h2 className={sectionHeadingClass}>
                Future Directions & Personal Reflection
              </h2>
              <div className="space-y-4 text-sm leading-relaxed sm:text-base">
                <div className="space-y-2">
                  <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-50">Future Directions</h3>
                  <ul className="space-y-2 rounded-2xl bg-white/40 p-4 shadow-inner dark:bg-neutral-900/35">
                    <li className="flex gap-2">
                      <span className="select-none text-lg leading-none text-neutral-500">•</span>
                      <span>Automate prompt generation and refinement to cover edge-case activities systematically.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="select-none text-lg leading-none text-neutral-500">•</span>
                      <span>Explore self-supervised alignment objectives that adapt calibration without labels.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="select-none text-lg leading-none text-neutral-500">•</span>
                      <span>Advance multi-sensor modeling to capture inter-sensor correlations and timing offsets.</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-50">Personal Reflection</h3>
                  <p>
                    This project stretched my understanding of multimodal representation learning, generative modeling, and sensor simulation, forcing me to reason from language semantics down to signal-level fidelity.
                  </p>
                  <p>
                    It also clarified how these skills map to future work in AR, wearable sensing, and human understanding, where trustworthy synthetic data can accelerate iteration without sacrificing privacy.
                  </p>
                </div>
              </div>
            </section>
          </article>
        </div>
      </div>
    </main>
  );
}
