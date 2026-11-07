"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";
import { useSectionInView } from "@/lib/hooks";
import { brandVarStyles } from "@/lib/theme";
import SubDivider from "@/components/sub-divider";
import { introHighlights, introSkills } from "@/lib/data";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.3);

  return (
    <section
      ref={ref}
      id="home"
      className="scroll-mt-[100rem]"
      style={brandVarStyles}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-2 sm:px-6 md:flex-row md:items-start md:gap-16">
        <motion.aside
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.4, delay: 0.1 }}
          className="flex w-full flex-col items-start mt-0 md:mt-0 md:w-[15rem] md:flex-none md:self-start md:sticky md:top-24 md:items-stretch"
        >
          <div className="w-full pb-6 border-b border-neutral-300/40 dark:border-neutral-700/60 md:hidden">
            <div className="flex items-center gap-4">
              <div className="relative aspect-square w-24 flex-shrink-0 overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800">
                <Image
                  alt="Portrait of Brian Chung"
                  src="/me.jpg"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex flex-1 flex-col items-center justify-center gap-1">
                <p className="text-base font-semibold text-neutral-900 dark:text-white">
                  Brian Chung
                </p>
              </div>
            </div>
          </div>

          <div className="hidden w-full flex-col gap-8 text-left md:flex">
            <div className="relative aspect-square w-32 overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800">
              <Image
                alt="Portrait of Brian Chung"
                src="/me.jpg"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <p className="text-xl font-semibold text-neutral-900 dark:text-white">
                Brian Chung
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
               
              </p>
            </div>
            <div className="space-y-4">
              <div className="py-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                  Email
                </p>
                <a
                  href="mailto:a539907687@icloud.com"
                  className="mt-1 flex items-center gap-2 text-sm font-medium text-neutral-800 hover:text-[var(--brand-accent)] dark:text-neutral-100 dark:hover:text-[var(--brand-accent)]"
                >
                  <FiMail className="text-[var(--brand-accent)]" />
                  bulahechung2002@gmail.com
                </a>
              </div>
              <div className="py-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                  Birthday
                </p>
                <p className="mt-1 text-sm font-medium text-neutral-800 dark:text-neutral-100">
                  2002/10/01
                </p>
              </div>
              <div className="py-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                  Location
                </p>
                <p className="mt-1 text-sm font-medium text-neutral-800 dark:text-neutral-100">
                  Shanghai / Taipei / New York
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
            className="flex flex-col gap-10"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-neutral-900 dark:text-white">
              Hey, I&apos;m{" "}
              <span className="text-[var(--brand-accent)]">
                Brian Chung
              </span>
            </h1>
            <div className="space-y-3 text-neutral-700 dark:text-neutral-200">
              <p className="text-base leading-relaxed">
                I&apos;m working toward a world-scale spatial computing layer — a persistent system that lets digital objects, anchors, and interactions maintain shared meaning across people, devices, and environments.
              </p>
              <p className="text-base leading-relaxed">
                Every project I build—whether AR systems, multimodal sensing, or performance technology—is a step toward this long-term goal of creating the foundational infrastructure for future spatial computing.
              </p>
            </div>

            <div className="space-y-6">
              <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
                {introHighlights.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ ease: "easeOut", duration: 0.4, delay: 0.55 + index * 0.05 }}
                      className="flex h-full flex-col gap-4 border-t border-neutral-300/50 pt-6 dark:border-neutral-700/60"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex items-start justify-center text-neutral-700 dark:text-neutral-200">
                          <Icon className="h-7 w-7 text-[var(--brand-accent)]" />
                        </div>
                        <h2 className="flex-1 text-lg font-semibold text-neutral-900 dark:text-white">
                          {item.title}
                        </h2>
                      </div>
                      {item.details ? (
                        <div className="space-y-2.5 text-sm leading-snug">
                          {item.details.map((detail) => (
                            <div key={detail.label}>
                              <p className="font-medium text-neutral-800 dark:text-neutral-100">
                                {detail.label}
                              </p>
                              <p className="mt-0.5 text-neutral-600 dark:text-neutral-300">
                                {detail.value}
                              </p>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                          {item.body}
                        </p>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="space-y-6">
              <SubDivider />
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {introSkills.map((skill, index) => (
                    <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeOut", duration: 0.3, delay: 0.75 + index * 0.03 }}
                    className="text-sm font-medium text-neutral-600 dark:text-neutral-400"
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
