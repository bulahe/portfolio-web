import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bulahe Chung Portfolio",
  description: "Hi~",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="!scroll-smooth overflow-x-hidden md:overflow-x-visible"
    >
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 text-opacity-90 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 min-h-screen overflow-x-hidden md:overflow-x-visible`}
      >
        <div className="absolute left-1/2 top-[-5rem] -z-10 h-[18rem] w-[80vw] max-w-[22rem] -translate-x-1/2 rounded-full bg-[#fbe2e3] blur-[8rem] dark:bg-[#946263] sm:left-auto sm:right-[11rem] sm:top-[-6rem] sm:h-[31.25rem] sm:w-[31.25rem] sm:max-w-none sm:translate-x-0 sm:blur-[10rem] lg:w-[40rem]"></div>
        <div className="absolute left-1/2 top-[6rem] -z-10 h-[22rem] w-[85vw] max-w-[26rem] -translate-x-1/2 rounded-full bg-[#dbd7fb] blur-[8rem] dark:bg-[#676394] sm:left-[-35rem] sm:top-[-1rem] sm:h-[31.25rem] sm:w-[68.75rem] sm:max-w-none sm:translate-x-0 sm:blur-[10rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

        <ActiveSectionContextProvider>
          <Header />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
