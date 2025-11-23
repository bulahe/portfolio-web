'use client';

import Image from "next/image";
import clsx from "clsx";
import {
  useRef,
  useState,
  type KeyboardEvent,
  type TouchEvent,
} from "react";

type CarouselImage = {
  src: string;
  alt: string;
  priority?: boolean;
};

type ImageCarouselProps = {
  images: readonly CarouselImage[];
  aspectClassName?: string;
  containerClassName?: string;
  sizes?: string;
  ariaLabel?: string;
  initialIndex?: number;
  activeIndicatorClassName?: string;
  inactiveIndicatorClassName?: string;
  showIndicators?: boolean;
  showControls?: boolean;
  imageClassName?: string;
};

const SWIPE_THRESHOLD_PX = 40;

export default function ImageCarousel({
  images,
  aspectClassName = "aspect-video",
  containerClassName = "",
  sizes = "(min-width: 1024px) 60vw, 90vw",
  ariaLabel = "Image gallery",
  initialIndex = 0,
  activeIndicatorClassName = "w-8 bg-neutral-900 dark:bg-white",
  inactiveIndicatorClassName = "w-2 bg-neutral-300 dark:bg-neutral-600",
  showIndicators = true,
  showControls = true,
  imageClassName = "object-cover",
}: ImageCarouselProps) {
  const [index, setIndex] = useState(
    Math.min(Math.max(initialIndex, 0), Math.max(images.length - 1, 0))
  );
  const touchStartX = useRef<number | null>(null);
  const hasMultiple = images.length > 1;

  const goPrev = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goNext = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!hasMultiple) return;
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goPrev();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      goNext();
    }
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    if (!hasMultiple) return;
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (!hasMultiple) return;
    if (touchStartX.current === null) return;

    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const deltaX = endX - touchStartX.current;

    if (Math.abs(deltaX) > SWIPE_THRESHOLD_PX) {
      if (deltaX > 0) {
        goPrev();
      } else {
        goNext();
      }
    }

    touchStartX.current = null;
  };

  return (
    <div className={clsx("flex flex-col items-center gap-3", containerClassName)}>
      <div
        className="group relative w-full overflow-hidden rounded-3xl border border-neutral-200/60 bg-neutral-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)] focus:ring-offset-2 focus:ring-offset-neutral-100 dark:border-neutral-700/60 dark:bg-neutral-900/35 dark:focus:ring-offset-neutral-900"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        role="region"
        aria-label={ariaLabel}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${index * 100}%)`,
          }}
        >
          {images.map((image) => (
            <div
              key={image.src}
              className={clsx(
                "relative w-full flex-shrink-0 bg-neutral-950/5 dark:bg-neutral-100/5",
                aspectClassName
              )}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes={sizes}
                className={clsx(imageClassName)}
                priority={image.priority}
              />
            </div>
          ))}
        </div>

        {showControls && hasMultiple && (
          <>
            <button
              type="button"
              onClick={goPrev}
              className="absolute left-3 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white/80 p-2 text-lg text-neutral-700 shadow-sm transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)] dark:border-neutral-700 dark:bg-neutral-900/80 dark:text-neutral-200"
              aria-label="View previous image"
            >
              <span aria-hidden>‹</span>
            </button>
            <button
              type="button"
              onClick={goNext}
              className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white/80 p-2 text-lg text-neutral-700 shadow-sm transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)] dark:border-neutral-700 dark:bg-neutral-900/80 dark:text-neutral-200"
              aria-label="View next image"
            >
              <span aria-hidden>›</span>
            </button>
          </>
        )}
      </div>

      {showIndicators && hasMultiple && (
        <div className="flex items-center justify-center gap-2">
          {images.map((_, indicatorIndex) => (
            <button
              key={indicatorIndex}
              type="button"
              onClick={() => setIndex(indicatorIndex)}
              className={clsx(
                "h-2 rounded-full transition-all duration-300",
                indicatorIndex === index
                  ? activeIndicatorClassName
                  : inactiveIndicatorClassName
              )}
              aria-label={`Go to image ${indicatorIndex + 1} of ${images.length}`}
              aria-current={indicatorIndex === index}
            />
          ))}
        </div>
      )}
    </div>
  );
}
