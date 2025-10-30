"use client";

import React, { useRef } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
    const { ref } = useSectionInView("Portfolio", 0.5);
    return(
        <section ref={ref} id="portfolio" className="scroll-mt-28">
            <SectionHeading>Portfolio </SectionHeading>
            <div>
                {
                    projectsData.map((project, index)=>(
                    <React.Fragment key={index}>   
                        <Project {...project} />
                    </React.Fragment>
                    ))
                }
            </div>
        </section>
    )
}

