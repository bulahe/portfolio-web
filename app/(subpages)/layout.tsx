import type { ReactNode } from "react";

type SubpageLayoutProps = {
  children: ReactNode;
};

export default function SubpageLayout({ children }: SubpageLayoutProps) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-[-5rem] -z-10 h-[18rem] w-[80vw] max-w-[22rem] -translate-x-1/2 rounded-full bg-[#fbe2e3] blur-[8rem] dark:bg-[#946263] sm:left-auto sm:right-[11rem] sm:top-[-6rem] sm:h-[31.25rem] sm:w-[31.25rem] sm:max-w-none sm:translate-x-0 sm:blur-[10rem] lg:w-[40rem]" />
      <div className="pointer-events-none absolute left-1/2 top-[6rem] -z-10 h-[22rem] w-[85vw] max-w-[26rem] -translate-x-1/2 rounded-full bg-[#dbd7fb] blur-[8rem] dark:bg-[#676394] sm:left-[-35rem] sm:top-[-1rem] sm:h-[31.25rem] sm:w-[68.75rem] sm:max-w-none sm:translate-x-0 sm:blur-[10rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]" />
      {children}
    </div>
  );
}
