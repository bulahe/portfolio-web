"use client";
import type { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";
import { LuGraduationCap } from "react-icons/lu";
import { TbDeviceVisionPro } from "react-icons/tb";
import { TfiWrite } from "react-icons/tfi";
import { FiHeadphones } from "react-icons/fi";
import { useSectionInView } from "@/lib/hooks";
import { brandVarStyles } from "@/lib/theme";


type HighlightItem = {
  icon: ReactNode;
  title: string;
  body: string;
};

const HIGHLIGHTS: HighlightItem[] = [
  {
    icon: (
      <LuGraduationCap className="h-7 w-7 text-[var(--brand-primary)] dark:text-[var(--brand-accent)]" />
    ),
    title: "Undergraduate Student @ Shanghai Jiao Tong University",
    body:
      "Studying Electrical and Computer Engineering (Microelectronics focus), exploring creative computing and interactive systems.",
  },
  {
    icon: (
      <TbDeviceVisionPro className="h-7 w-7 text-[var(--brand-primary)] dark:text-[var(--brand-accent)]" />
    ),
    title: "XR Developer / Creative Technologist",
    body:
      "Designing and building immersive AR/VR experiences that blend spatial interaction and sound.",
  },
  {
    icon: (
      <TfiWrite className="h-7 w-7 text-[var(--brand-primary)] dark:text-[var(--brand-accent)]" />
    ),
    title: "HCI & AI Researcher",
    body:
      "A human–computer interaction researcher with publications in XR and digital media.My undergraduate thesis focuses on AI-related research.",
  },
  {
    icon: (
      <FiHeadphones className="h-7 w-7 text-[var(--brand-primary)] dark:text-[var(--brand-accent)]" />
    ),
    title: "Performer & Sound Technologist",
    body:
      "Mixing, producing, and performing across digital and physical stages.Building custom hardware tools for interactive performance.",
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
];

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.3);

  return (
    <section
      ref={ref}
      id="home"
      className="scroll-mt-[100rem]"
      style={brandVarStyles}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-0 sm:px-6 md:flex-row md:items-start md:gap-9">
        <motion.aside
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.4, delay: 0.1 }}
          className="flex w-full flex-col items-start -mt-24 md:mt-0 md:w-[19rem] md:flex-none md:self-start md:sticky md:top-24 md:items-stretch"
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
              <div className="flex flex-1 flex-col items-center justify-center gap-1">
                <p className="text-base font-semibold text-neutral-900 dark:text-white">
                  Yu-Chen “bulahe” Chung
                </p>
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

        <div className="flex w-full flex-col gap-6 text-left md:flex-1">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.4, delay: 0.15 }}
            className="flex flex-col gap-6 rounded-3xl border border-neutral-200/70 bg-neutral-50/60 p-6 backdrop-blur-sm dark:border-neutral-800/60 dark:bg-neutral-900/40"
          >
            <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white">
              Hey, I&apos;m{" "}
              <span className="text-[var(--brand-primary)] dark:text-[var(--brand-accent)]">
                bulahe Chung
              </span>
            </h1>
            <div className="space-y-3 text-neutral-700 dark:text-neutral-200">
              <p className="text-lg leading-relaxed">
                A creative technologist exploring the intersection of AR/VR, sound, and
                human–computer interaction.
              </p>
              <p className="text-base leading-relaxed">
                I build immersive experiences, design interactive tools, and experiment with how technology can feel expressive and human.
              </p>
              <p className="text-sm leading-relaxed">
                I&apos;m currently studying{" "}
                <span className="font-medium text-inherit">
                  Electrical and Computer Engineering (Microelectronics focus)
                </span>{" "}
                at{" "}
                <span className="font-medium text-inherit">
                  Shanghai Jiao Tong University
                </span>
                .
              </p>
            </div>

            <div
              className="border-t pt-6"
              style={{ borderColor: "var(--brand-secondary)" }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                {HIGHLIGHTS.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeOut", duration: 0.4, delay: 0.55 + index * 0.05 }}
                    className="flex h-full flex-col gap-3 rounded-2xl border border-neutral-200/70 bg-white/90 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-neutral-800/70 dark:bg-neutral-900/70"
                  >
                    <div className="flex min-h-[3.5rem] items-start gap-3">
                      <div className="flex items-start justify-center text-neutral-700 dark:text-neutral-200">
                        {item.icon}
                      </div>
                      <h2 className="flex-1 text-lg font-semibold text-neutral-900 dark:text-white">
                        {item.title}
                      </h2>
                    </div>
                    <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                      {item.body}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div
              className="border-t pt-6"
              style={{ borderColor: "var(--brand-secondary)" }}
            >
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeOut", duration: 0.3, delay: 0.75 + index * 0.03 }}
                    className="rounded-full border border-neutral-300 bg-white px-4 py-1 text-sm font-medium text-[var(--brand-primary)] shadow-sm transition-colors duration-200 hover:border-[var(--brand-primary)] hover:bg-[var(--brand-secondary)]/30 hover:text-[var(--brand-hover)] dark:border-neutral-700 dark:bg-neutral-800 dark:text-[var(--brand-accent)] dark:hover:border-[var(--brand-accent)] dark:hover:bg-[var(--brand-accent)]/20 dark:hover:text-[var(--brand-secondary)]"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
