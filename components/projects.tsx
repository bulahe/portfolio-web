"use client";

import { useEffect, useState } from "react";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import { generateSlug } from "@/lib/slug";

export default function Projects() {
  const { ref } = useSectionInView("Portfolio", 0.2);
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const query = window.matchMedia("(max-width: 767px)");
    const handleMatch = (event?: MediaQueryListEvent) => {
      const matches = event ? event.matches : query.matches;
      setIsMobile(matches);
      if (!matches) {
        setActiveIndex(null);
      }
    };

    handleMatch();

    if (query.addEventListener) {
      query.addEventListener("change", handleMatch);
      return () => query.removeEventListener("change", handleMatch);
    }

    query.addListener(handleMatch);
    return () => query.removeListener(handleMatch);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const scrollToStoredProject = () => {
      let desiredTop: number | null = null;
      const hash = window.location.hash;

      if (hash.startsWith("#project-")) {
        const target = document.getElementById(hash.slice(1));
        if (target) {
          desiredTop = target.getBoundingClientRect().top + window.scrollY - 120;
        }
      }

      if (desiredTop === null) {
        try {
          const rawScroll = window.sessionStorage.getItem("portfolio:return-scroll");
          if (rawScroll !== null) {
            const parsed = JSON.parse(rawScroll);
            if (typeof parsed === "number") {
              desiredTop = parsed;
            }
          }
          window.sessionStorage.removeItem("portfolio:return-scroll");
        } catch {
          /* ignore */
        }
      }

      if (desiredTop === null) {
        return;
      }

      requestAnimationFrame(() => {
        const root = document.documentElement;
        const hadSmoothClass = root.classList.contains("!scroll-smooth");
        const previousBehavior = root.style.getPropertyValue("scroll-behavior");
        const previousPriority = root.style.getPropertyPriority("scroll-behavior");

        if (hadSmoothClass) {
          root.classList.remove("!scroll-smooth");
        }
        root.style.setProperty("scroll-behavior", "auto", "important");

        window.scrollTo({
          top: Math.max(0, desiredTop as number),
          behavior: "auto",
        });

        requestAnimationFrame(() => {
          if (previousBehavior) {
            root.style.setProperty(
              "scroll-behavior",
              previousBehavior,
              previousPriority || undefined
            );
          } else {
            root.style.removeProperty("scroll-behavior");
          }

          if (hadSmoothClass) {
            root.classList.add("!scroll-smooth");
          }
        });
      });

      try {
        window.sessionStorage.removeItem("portfolio:return-target");
        window.sessionStorage.removeItem("portfolio:return-scroll");
      } catch {
        /* ignore */
      }
    };

    scrollToStoredProject();
    window.addEventListener("hashchange", scrollToStoredProject);
    return () => window.removeEventListener("hashchange", scrollToStoredProject);
  }, []);

  const handleActivate = (index: number) => {
    if (!isMobile) return;
    setActiveIndex(index);
  };

  const handleMobileBack = () => {
    setActiveIndex(null);
  };

  return (
    <section ref={ref} id="portfolio" className="scroll-mt-28 w-full pb-20">
      <div className="mx-auto w-full max-w-6xl px-2 sm:px-6 lg:px-8">
        <SectionHeading>Portfolio</SectionHeading>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:gap-10">
          {projectsData.map((project, index) => (
            <Project
              key={project.title}
              {...project}
              slug={generateSlug(project.title)}
              isMobile={isMobile}
              isActive={isMobile && activeIndex === index}
              onActivate={() => handleActivate(index)}
              onMobileBack={handleMobileBack}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
