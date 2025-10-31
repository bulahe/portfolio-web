"use client";

import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Portfolio", 0.2);

  return (
    <section ref={ref} id="portfolio" className="scroll-mt-28 pb-20">
      <SectionHeading>Portfolio</SectionHeading>
      <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:gap-12">
        {projectsData.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
