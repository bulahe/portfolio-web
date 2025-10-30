"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";
import { useSectionInView } from "@/lib/hooks";
import { brandVarStyles } from "@/lib/theme";

const HIGHLIGHTS = [
  {
    emoji: "🎓",
    title: "Undergraduate Student @ Shanghai Jiao Tong University",
    body:
      "Studying Electrical and Computer Engineering (Microelectronics focus), exploring creative computing and interactive systems.",
  },
  {
    emoji: "🥽",
    title: "XR Developer / Creative Technologist",
    body:
      "Designing and building immersive AR/VR experiences that blend spatial interaction, sound, and narrative design.",
  },
  {
    emoji: "🧠",
    title: "HCI & AI Researcher",
    body:
      "I’m a human–computer interaction researcher with publications in XR and digital media. My undergraduate thesis explores AI-driven motion generation, optimizing GPT-based text-to-motion models for virtual IMU data.",
  },
  {
    emoji: "🎧",
    title: "Performer & Sound Technologist",
    body:
      "Mixing, producing, and performing across digital and physical stages. I also build custom hardware tools—like an Arduino-based MIDI looper—to bring interactivity to live performance.",
  },
];

const SKILLS = [
  "Unity",
  "visionOS",
  "PyTorch",
  "Arduino",
  "C#",
  "Python",
  "C++",
  "User Study",
  "Sensor Integration",
];

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.65);

  return (
    <section
      ref={ref}
      id="home"
      className="scroll-mt-[100rem]"
      style={brandVarStyles}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 md:flex-row md:items-start md:gap-16">
        <motion.aside
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.4, delay: 0.1 }}
          className="flex w-full max-w-md flex-col items-center md:max-w-xs md:basis-[35%] md:self-start md:sticky md:top-24 md:items-stretch"
        >
          <div className="w-full rounded-3xl border border-neutral-200/70 bg-white/95 p-5 shadow-lg dark:border-neutral-800/60 dark:bg-neutral-900/80 md:hidden">
            <div className="flex items-center gap-4">
              <div className="relative aspect-square w-24 flex-shrink-0 overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800">
                <Image
                  alt="Portrait of Yu-Chen bulahe Chung"
                  src="/me.jpg"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex-1 space-y-2 min-w-[60%]">
                <div className="space-y-1">
                  <p className="text-base font-semibold text-neutral-900 dark:text-white">
                    Yu-Chen “bulahe” Chung
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    Creative technologist & XR developer
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="mailto:a539907687@icloud.com"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-400 shadow-sm transition hover:border-[var(--brand-hover)] hover:text-[var(--brand-primary)] dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-500 dark:hover:border-[var(--brand-secondary)] dark:hover:text-[var(--brand-secondary)]"
                    aria-label="Email Yu-Chen “bulahe” Chung"
                  >
                    <FiMail className="text-lg" />
                  </a>
                  <span className="text-xs text-neutral-400 dark:text-neutral-500">
                    Tap to email
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden w-full flex-col gap-6 rounded-3xl border border-neutral-200/70 bg-white/95 p-6 text-left shadow-lg dark:border-neutral-800/60 dark:bg-neutral-900/80 md:flex">
            <div className="relative mx-auto aspect-square w-40 overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800">
              <Image
                alt="Portrait of Yu-Chen bulahe Chung"
                src="/me.jpg"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <p className="text-xl font-semibold text-neutral-900 dark:text-white">
                Yu-Chen “bulahe” Chung
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                Creative technologist & XR developer
              </p>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl border border-neutral-200/60 bg-white/80 p-4 dark:border-neutral-800/60 dark:bg-neutral-900/60">
                <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                  Email
                </p>
                <a
                  href="mailto:a539907687@icloud.com"
                  className="mt-1 flex items-center gap-2 text-sm font-medium text-neutral-800 hover:text-[var(--brand-primary)] dark:text-neutral-100 dark:hover:text-[var(--brand-secondary)]"
                >
                  <FiMail className="text-[var(--brand-primary)] dark:text-[var(--brand-secondary)]" />
                  a539907687@icloud.com
                </a>
              </div>
              <div className="rounded-2xl border border-neutral-200/60 bg-white/70 p-4 dark:border-neutral-800/60 dark:bg-neutral-900/60">
                <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                  Birthday
                </p>
                <p className="mt-1 text-sm font-medium text-neutral-800 dark:text-neutral-100">
                  2002/10/01
                </p>
              </div>
              <div className="rounded-2xl border border-neutral-200/60 bg-white/70 p-4 dark:border-neutral-800/60 dark:bg-neutral-900/60">
                <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                  Location
                </p>
                <p className="mt-1 text-sm font-medium text-neutral-800 dark:text-neutral-100">
                  Shanghai, China
                </p>
              </div>
            </div>
          </div>
        </motion.aside>

        <div className="flex w-full flex-col gap-6 text-left md:basis-[65%]">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.4, delay: 0.15 }}
            className="text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white"
          >
            Hey, I&apos;m{" "}
            <span className="text-[var(--brand-primary)] dark:text-[var(--brand-accent)]">
              Yu-Chen “bulahe” Chung
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.4, delay: 0.25 }}
            className="relative pl-6 text-lg leading-relaxed text-neutral-700 before:absolute before:left-0 before:top-2 before:text-xl before:font-medium before:text-neutral-400 before:content-['—'] dark:text-neutral-200 dark:before:text-neutral-500"
          >
            A creative technologist exploring the intersection of AR/VR, sound, and
            human–computer interaction.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.4, delay: 0.3 }}
            className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300"
          >
            I build immersive experiences, design interactive tools, and experiment with how technology can feel expressive and human.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.4, delay: 0.35 }}
            className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-400"
          >
            I&apos;m currently studying{" "}
            <span className="font-medium text-neutral-900 dark:text-neutral-100">
              Electrical and Computer Engineering (Microelectronics focus)
            </span>{" "}
            at{" "}
            <span className="font-medium text-neutral-900 dark:text-neutral-100">
              Shanghai Jiao Tong University
            </span>
            .
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.4, delay: 0.45 }}
            className="grid gap-4 rounded-3xl bg-neutral-50/60 p-6 backdrop-blur-sm dark:bg-neutral-900/40"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {HIGHLIGHTS.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ease: "easeOut", duration: 0.4, delay: 0.55 + index * 0.05 }}
                  className="flex h-full flex-col gap-4 rounded-2xl border border-neutral-200/70 bg-white/90 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-neutral-800/70 dark:bg-neutral-900/70"
                >
                  <div className="text-3xl">{item.emoji}</div>
                  <div>
                    <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                      {item.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {SKILLS.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ease: "easeOut", duration: 0.3, delay: 0.75 + index * 0.03 }}
                  className="rounded-full border border-neutral-300 bg-white px-4 py-1 text-sm font-medium text-neutral-700 shadow-sm dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
