"use client";

import { useState, useEffect } from "react";
import clsx from "clsx";

export type SectionStage = {
  number: string;
  title: string;
  minThreshold?: number; // Optional minimum intersection ratio threshold for this specific section (default: 0.05)
};

type SectionIndicatorProps = {
  stages: SectionStage[];
  sectionRefs: React.MutableRefObject<(HTMLElement | null)[]>;
  className?: string;
};

export default function SectionIndicator({
  stages,
  sectionRefs,
  className,
}: SectionIndicatorProps) {
  const [activeStageIndex, setActiveStageIndex] = useState<number | null>(null);
  const [hoveredStageIndex, setHoveredStageIndex] = useState<number | null>(null);

  // Track which stage is currently in view using Intersection Observer
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const visibleStages = new Map<number, { ratio: number; isIntersecting: boolean }>(); // Map of index -> { ratio, isIntersecting }
    let updateTimeout: NodeJS.Timeout | null = null;

    const updateActiveStage = () => {
      // Clear any pending updates
      if (updateTimeout) {
        clearTimeout(updateTimeout);
      }

      // Debounce the update to prevent rapid switching
      updateTimeout = setTimeout(() => {
        if (visibleStages.size === 0) {
          setActiveStageIndex(null);
          return;
        }

        // Find the stage with the highest intersection ratio among visible stages
        // For long sections, even a small ratio (e.g., 0.05) means the section is in view
        let maxRatio = 0;
        let activeIndex: number | null = null;

        visibleStages.forEach((data, index) => {
          if (data.isIntersecting) {
            // Get the minimum threshold for this section (default: 0.05)
            const minThreshold = stages[index]?.minThreshold ?? 0.05;
            
            // Only consider sections that meet their minimum threshold
            if (data.ratio >= minThreshold && data.ratio > maxRatio) {
              maxRatio = data.ratio;
              activeIndex = index;
            }
          }
        });

        // Activate the section with the highest ratio that meets its threshold
        // This ensures long sections are activated when they're in view, even if only a small portion is visible
        if (activeIndex !== null) {
          setActiveStageIndex(activeIndex);
        }
      }, 100); // 100ms debounce to prevent rapid switching
    };

    sectionRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              visibleStages.set(index, {
                ratio: entry.intersectionRatio,
                isIntersecting: true,
              });
            } else {
              visibleStages.delete(index);
            }
            updateActiveStage();
          });
        },
        {
          threshold: [0, 0.05, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
          rootMargin: "-10% 0px -10% 0px", // Trigger when element is in center 80% of viewport
        }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      if (updateTimeout) {
        clearTimeout(updateTimeout);
      }
      observers.forEach((observer) => observer.disconnect());
      visibleStages.clear();
    };
  }, [sectionRefs, stages]);

  // Handle clicking on section indicator dots to scroll to section
  const scrollToStage = (index: number) => {
    const ref = sectionRefs.current[index];
    if (ref) {
      const elementPosition = ref.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - 120; // Add 120px padding from top
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Calculate scale - only hovered dot scales, others don't
  const getDotScale = (index: number): number => {
    if (hoveredStageIndex === index) return 1.3;
    return 1;
  };

  // Calculate text scale - only hovered text scales
  const getTextScale = (index: number): number => {
    if (hoveredStageIndex === index) return 1.15;
    return 1;
  };

  return (
    <div
      className={clsx(
        "fixed left-6 top-1/2 z-10 hidden -translate-y-1/2 lg:block",
        className
      )}
      onMouseLeave={() => setHoveredStageIndex(null)}
    >
      <div
        className={clsx(
          "relative flex flex-row items-center gap-6 rounded-[1.75rem] border border-white/50 bg-white/95 p-6 shadow-lg backdrop-blur-sm dark:border-white/10 dark:bg-neutral-900/90 transition-transform duration-300 ease-out",
          hoveredStageIndex !== null ? "scale-105" : "scale-100"
        )}
        onMouseEnter={() => {
          if (hoveredStageIndex === null) {
            // Set to a dummy value to trigger container hover
            setHoveredStageIndex(-1);
          }
        }}
      >
        {/* Dots container */}
        <div className="flex flex-col items-center gap-4">
          {stages.map((stage, index) => (
            <button
              key={stage.number}
              type="button"
              onClick={() => scrollToStage(index)}
              onMouseEnter={() => setHoveredStageIndex(index)}
              style={{
                transform: `scale(${getDotScale(index)})`,
              }}
              className={clsx(
                "w-3 rounded-full transition-all duration-300 ease-out",
                activeStageIndex === index
                  ? "h-12 bg-neutral-900 dark:bg-white"
                  : "h-3 bg-neutral-300 dark:bg-neutral-600"
              )}
              aria-label={`Go to stage ${stage.number}: ${stage.title}`}
              aria-current={activeStageIndex === index}
            />
          ))}
        </div>

        {/* Text container - Only show when hovered */}
        {hoveredStageIndex !== null && (
          <div className="flex flex-col gap-4 min-w-[120px] max-w-[200px]">
            {stages.map((stage, index) => {
              // Calculate the height to match the dot's visual center
              const dotHeight = activeStageIndex === index ? 48 : 12; // h-12 or h-3
              return (
                <div
                  key={stage.number}
                  onClick={() => scrollToStage(index)}
                  onMouseEnter={() => setHoveredStageIndex(index)}
                  style={{
                    height: `${dotHeight}px`,
                    transform: `scale(${getTextScale(index)})`,
                  }}
                  className={clsx(
                    "flex items-center transition-all duration-300 ease-out cursor-pointer",
                    activeStageIndex === index
                      ? "text-neutral-900 dark:text-white"
                      : "text-neutral-500 dark:text-neutral-400"
                  )}
                >
                  <span className="text-sm font-medium leading-tight">
                    {stage.title}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

