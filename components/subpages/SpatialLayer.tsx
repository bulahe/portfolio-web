"use client";

import { useRef } from "react";
import Image from "next/image";
import PortfolioBackButton from "@/components/ui/portfolio-back-button";
import SectionIndicator from "@/components/ui/section-indicator";

const stages = [
  { number: "01", title: "The Question" },
  { number: "02", title: "Current Prototype" },
  { number: "03", title: "Design Decisions" },
  { number: "04", title: "Development Log" },
  { number: "05", title: "Next Experiment" },
];

const capabilities = [
  { title: "Create from either device", body: "Import a USDZ model on iPhone or Apple Vision Pro. Both devices are creator tools; the headset offers direct spatial manipulation, while the phone makes creation more accessible." },
  { title: "Place and move together", body: "Move a model in a shared coordinate system and see its position update on another device. Per-object editing locks prevent two people from moving the same object at once." },
  { title: "See who is editing", body: "Editor names identify occupied objects. On Vision Pro, a floating label follows the object, with its size kept readable independently of the model’s scale." },
  { title: "Save, revisit, and remove", body: "Model resources and placements are saved on a development server. Rejoining restores the scene; deleting an imported instance removes it across connected devices and persists that change." },
];

const milestones = [
  { date: "Early prototype", title: "Three spheres, one shared space", body: "Started with three colored spheres to test coordinate alignment, live movement, editing ownership, and persistence before introducing user content." },
  { date: "October 2026", title: "From test objects to creator content", body: "Added USDZ resource uploads, automatic downloads and caching, and saved model instances. Import and placement are available on both iPhone and Vision Pro." },
  { date: "October 14, 2026", title: "Completing the content lifecycle", body: "Added deletion on both devices, server-side protection for models being edited, and cancellation of pending loads so a deleted model does not reappear." },
];

const sectionClass = "scroll-mt-24 rounded-[2.25rem] border border-neutral-200/70 bg-neutral-50/55 p-6 text-neutral-800 shadow-lg backdrop-blur-sm dark:border-neutral-700/60 dark:bg-neutral-900/40 dark:text-neutral-200 sm:p-8";
const headingClass = "text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400";

export default function SpatialLayerSubpage() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  return (
    <main className="relative flex w-full justify-center px-4 pb-24 pt-24 sm:px-6 lg:px-8">
      <PortfolioBackButton />
      <SectionIndicator stages={stages} sectionRefs={sectionRefs} />
      <article className="mx-auto flex w-full max-w-3xl flex-col gap-5 lg:max-w-[54%]">
        <header className="flex flex-col gap-5 rounded-[2.5rem] border border-neutral-200/70 bg-neutral-50/60 p-6 text-neutral-900 shadow-xl backdrop-blur-sm dark:border-neutral-700/60 dark:bg-neutral-900/40 dark:text-neutral-100 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="rounded-full border border-violet-300/70 bg-violet-100/70 px-3 py-1 text-xs font-semibold tracking-wide text-violet-800 dark:border-violet-700 dark:bg-violet-950/70 dark:text-violet-200">Work in Progress</span>
            <time dateTime="2026-10-15" className="text-xs text-neutral-500 dark:text-neutral-400">Progress archived · October 15, 2026</time>
          </div>
          <div>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">SpatialLayer</h1>
            <p className="mt-3 text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">Creating shared digital content that stays connected to a real place.</p>
          </div>
          <figure>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-950 dark:border-neutral-800">
              <Image src="/SpatialLayer/shared-space.svg" alt="System illustration: an iPhone and a Vision Pro share 3D content aligned to one fixed physical reference." fill priority sizes="(min-width: 1024px) 54vw, 95vw" />
            </div>
            <figcaption className="mt-3 text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">System illustration, not an application screenshot. The prototype uses a fixed physical reference to align content across devices.</figcaption>
          </figure>
          <dl className="grid gap-5 border-t border-neutral-200/70 pt-5 text-sm dark:border-neutral-700/60 sm:grid-cols-3">
            <div><dt className={headingClass}>Scope</dt><dd className="mt-2">2026 · Ongoing prototype</dd></div>
            <div><dt className={headingClass}>My role</dt><dd className="mt-2">Interaction design &amp; development</dd></div>
            <div><dt className={headingClass}>Built with</dt><dd className="mt-2">Swift, SwiftUI, RealityKit, ARKit, Python, WebSocket &amp; SQLite</dd></div>
          </dl>
        </header>

        <section ref={(el) => { sectionRefs.current[0] = el; }} className={sectionClass}>
          <h2 className={headingClass}>The Question</h2>
          <p className="mt-5 text-xl font-medium leading-relaxed sm:text-2xl">What if digital content could belong to a place—and people could create and interact with it there together?</p>
          <p className="mt-5 text-sm leading-relaxed">SpatialLayer explores how people can place their own 3D content in a physical space, share it across devices, and return to it later. I am building the interaction and persistence needed to make that possible, starting with small, controlled spaces.</p>
          <p className="mt-4 text-sm leading-relaxed">The project is designed around shared spatial experiences across devices. iPhone and Vision Pro both support creation; the interaction adapts to touch on the phone and spatial input on the headset.</p>
        </section>

        <section ref={(el) => { sectionRefs.current[1] = el; }} className={sectionClass}>
          <h2 className={headingClass}>Current Prototype</h2>
          <p className="mt-5 text-sm leading-relaxed">The current creator loop connects import, placement, persistence, and viewing on another device.</p>
          <ol className="my-6 grid grid-cols-2 gap-2 sm:grid-cols-4" aria-label="Creator workflow">
            {["Import USDZ", "Place & move", "Save to space", "Join & revisit"].map((step, index) => (
              <li key={step} className="rounded-2xl border border-neutral-200/70 bg-white/50 p-4 dark:border-neutral-700/60 dark:bg-neutral-950/30">
                <span className="text-xs text-violet-600 dark:text-violet-300">0{index + 1}</span>
                <span className="mt-2 block text-sm font-medium">{step}</span>
              </li>
            ))}
          </ol>
          <div className="grid gap-6 sm:grid-cols-2">
            {capabilities.map((item) => (
              <div key={item.title}><h3 className="text-base font-semibold">{item.title}</h3><p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">{item.body}</p></div>
            ))}
          </div>
          <aside className="mt-7 rounded-2xl border border-neutral-200/70 p-5 text-sm leading-relaxed dark:border-neutral-700/60">
            <h3 className="font-semibold">Current boundaries</h3>
            <p className="mt-2">This is a development prototype using a reachable server and a fixed reference object. Cross-device reference spaces require both devices to recognize that same physical reference. The reference must stay in place; arbitrary-room, markerless localization is not implemented.</p>
            <p className="mt-3">Models are initially sized for placement. Rotation and scale are stored, but their editing controls, behavior presets, and animation authoring are future work. The current shared-space movement does not provide collision against the physical environment.</p>
          </aside>
        </section>

        <section ref={(el) => { sectionRefs.current[2] = el; }} className={sectionClass}>
          <h2 className={headingClass}>Design Decisions</h2>
          <div className="mt-5 space-y-7 text-sm leading-relaxed">
            <div><h3 className="text-base font-semibold">Make localization a replaceable layer</h3><p className="mt-2">An early WorldMap path remains available on iPhone, but it did not provide the shared iPhone–Vision Pro workflow I needed. I introduced reference-object localization and store content relative to the space coordinate frame. This keeps the content model separate from device-specific anchors.</p></div>
            <div><h3 className="text-base font-semibold">Get one creator loop working</h3><p className="mt-2">It was tempting to pursue multi-marker registration and a full spatial editor immediately. I narrowed the next milestone to importing a personal model, moving it, saving it, and seeing it on another device. This made the product question concrete before investing further in localization infrastructure.</p></div>
            <div><h3 className="text-base font-semibold">Treat collaboration as part of the interaction</h3><p className="mt-2">A shared object needs clear ownership while it is moving. Per-object locks and editor labels communicate who is acting, while saved final positions let the next participant continue from a consistent state.</p></div>
          </div>
        </section>

        <section ref={(el) => { sectionRefs.current[3] = el; }} className={sectionClass}>
          <h2 className={headingClass}>Development Log</h2>
          <ol className="mt-6 space-y-7 border-l border-violet-200 pl-5 dark:border-violet-800">
            {milestones.map((item) => (
              <li key={item.title}>
                <p className="text-xs font-medium text-violet-700 dark:text-violet-300">{item.date}</p>
                <h3 className="mt-2 text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">{item.body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-7 border-t border-neutral-200/70 pt-5 text-sm leading-relaxed dark:border-neutral-700/60">
            <h3 className="font-semibold">Verification at this milestone</h3>
            <p className="mt-2">Both apps compile for their simulators. The server has 31 passing automated tests covering existing behavior and content workflows, including movement, lock contention, deletion, and restart persistence. Tracking accuracy, model-specific interaction, and comfort still need physical-device evaluation; this is not yet a completed usability study.</p>
          </div>
        </section>

        <section ref={(el) => { sectionRefs.current[4] = el; }} className={sectionClass}>
          <h2 className={headingClass}>Next Experiment</h2>
          <h3 className="mt-5 text-xl font-semibold">Give the shared space a specific purpose.</h3>
          <p className="mt-4 text-sm leading-relaxed">I am considering a spatial chessboard with a shared chess clock as the next experiment. Two people trying to finish one game would make turn-taking, selection, alignment, and interruptions easier to evaluate.</p>
          <p className="mt-4 text-sm leading-relaxed">The first version would focus on moving pieces between squares and switching the clock, with players judging legal moves. Chess rules automation, AI opponents, and matchmaking are outside that initial scope. This experiment is planned, not implemented.</p>
          <p className="mt-4 text-sm leading-relaxed">The questions I want to answer are practical: can both people act comfortably, can they tell whose turn it is, and does using a phone or headset help the shared activity? Those observations will guide which creator tools to build next.</p>
        </section>
      </article>
    </main>
  );
}
