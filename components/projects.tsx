"use client";

import { useEffect, useState } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

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

  const handleActivate = (index: number) => {
    if (!isMobile) return;
    setActiveIndex(index);
  };

  const handleMobileBack = () => {
    setActiveIndex(null);
  };

  return (
    <section ref={ref} id="portfolio" className="scroll-mt-28 pb-20">
      <SectionHeading>Portfolio</SectionHeading>
      <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:gap-12">
        {projectsData.map((project, index) => (
          <Project
            key={project.title}
            {...project}
            isMobile={isMobile}
            isActive={isMobile && activeIndex === index}
            onActivate={() => handleActivate(index)}
            onMobileBack={handleMobileBack}
          />
        ))}
      </div>
    </section>
  );
}
