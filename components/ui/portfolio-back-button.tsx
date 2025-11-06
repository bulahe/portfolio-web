"use client";

import clsx from "clsx";
import { useRouter } from "next/navigation";

type PortfolioBackButtonProps = {
  className?: string;
  label?: string;
};

export default function PortfolioBackButton({
  className,
  label = "Back",
}: PortfolioBackButtonProps) {
  const router = useRouter();

  const handleBack = () => {
    let targetUrl = "/#portfolio";
    if (typeof window !== "undefined") {
      try {
        const raw = window.sessionStorage.getItem("portfolio:return-target");
        if (raw) {
          const data = JSON.parse(raw) as {
            path?: string;
            hash?: string;
            scroll?: number;
          };

          const path = data.path || "/";
          const hash = data.hash ? `#${data.hash}` : "";
          targetUrl = `${path}${hash}`;

          if (typeof data.scroll === "number") {
            window.sessionStorage.setItem(
              "portfolio:return-scroll",
              JSON.stringify(data.scroll)
            );
          } else {
            window.sessionStorage.removeItem("portfolio:return-scroll");
          }

          window.sessionStorage.removeItem("portfolio:return-target");
        } else {
          window.sessionStorage.removeItem("portfolio:return-scroll");
        }
      } catch {
        window.sessionStorage.removeItem("portfolio:return-scroll");
      }
    }

    router.push(targetUrl, { scroll: false });
  };

  return (
    <button
      type="button"
      onClick={handleBack}
      className={clsx(
        "fixed left-3 top-6 z-50 inline-flex items-center gap-2 rounded-full border border-neutral-200/70 bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-neutral-800 shadow-md backdrop-blur transition hover:-translate-x-1 hover:shadow-lg dark:border-neutral-700/70 dark:bg-neutral-900/80 dark:text-neutral-100 sm:left-6 sm:top-8 sm:px-5 sm:py-2.5 sm:text-sm lg:left-8",
        className
      )}
    >
      <span aria-hidden>←</span>
      {label}
    </button>
  );
}
