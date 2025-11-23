import PortfolioBackButton from "@/components/ui/portfolio-back-button";
import SectionDivider from "@/components/section-divider";
import ImageCarousel from "@/components/ui/image-carousel";
import Image from "next/image";
import Link from "next/link";
import { generateSlug } from "@/lib/slug";

const looperSlug = generateSlug("ESP32 MIDI Foot Pedal for Live Looping");

const artCenterSongs = [
  {
    title: "Theme Song — SJTU Original Art Gala 2023",
    image: "/mySongs/WechatIMG1290.jpg",
    href:
      "https://soundcloud.com/ib474qggs5ud/theme-song-for-sjtu-original-art-2023?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&si=535b4f1ffae14d8891127dc13272134b",
  },
  {
    title: "Theme Song — SJTU Top 10 Singers 2023",
    image: "/mySongs/WechatIMG1453.jpg",
    href:
      "https://soundcloud.com/ib474qggs5ud/theme-song-for-sjtu-top-10-singers-2023?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&si=c9b5fc0d571d4f17a0daf86d4de76a57",
  },
] as const;

const luxunImages = [
  { src: "/luxun/luxun1.jpeg", alt: "Lu Xun musical team recording setup." },
  { src: "/luxun/luxun2.jpeg", alt: "Lu Xun musical actors on stage." },
  { src: "/luxun/luxun3.jpeg", alt: "Lu Xun musical performance moment." },
  { src: "/luxun/luxun4.jpeg", alt: "Lu Xun musical rehearsal scene." },
  { src: "/luxun/luxun5.jpeg", alt: "Lu Xun musical stage lighting." },
  { src: "/luxun/luxun6.jpeg", alt: "Lu Xun musical cast group shot." },
  { src: "/luxun/luxun7.jpeg", alt: "Lu Xun musical production backstage." },
] as const;

const soundEngineerImages = [
  { src: "/soundEngineer/1.jpg", alt: "FOH mixing setup at campus gala." },
  { src: "/soundEngineer/2.jpg", alt: "Sound engineer working at console." },
  { src: "/soundEngineer/3.jpg", alt: "Stage view from the mixing position." },
] as const;

const audioTechImages = [
  { src: "/AudioTech/1.jpg", alt: "Backstage audio tech managing patching." },
  { src: "/AudioTech/2.JPG", alt: "Wireless and audio rack setup backstage." },
] as const;

const processAxis = [
  {
    title: "Studio Production",
    description:
      "Handled everything from composition to arrangement, recording, editing, mixing, and mastering—covering the full studio workflow except lyric writing.",
  },
  {
    title: "Live Audio Engineering",
    description:
      "Worked as both a Front-of-House Sound Engineer and a Backstage Audio Tech, managing live mixing, patching, wireless coordination, and overall system reliability during performances.",
  },
  {
    title: "Live Performance Execution",
    description:
      "Performed across multiple roles—vocal, guitar, and keyboard—alongside using custom tools such as a Bluetooth MIDI looper for real-time looping and live sound control.",
  },
];

const genreAxis = [
  {
    title: "Acoustic Pop & Folk",
    description:
      "Composed and performed original acoustic pop/folk songs, including commissioned theme pieces for the SJTU Arts Center, released on major Chinese streaming platforms such as QQ Music and NetEase Cloud.",
  },
  {
    title: "Musical",
    description:
      "Contributed to the musical Lu Xun as an audio editor, responsible for recording, vocal cleanup, and post-production.",
  },
  {
    title: "Symphonic Heavy Metal",
    description:
      "Keyboardist in the live band supporting a symphonic heavy metal girl group, performing orchestral pads, leads, and cinematic textures.",
  },
];

export default function MusicSubpage() {
  return (
    <main className="px-4 pb-16 pt-12 sm:px-6 lg:px-10 lg:pt-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <PortfolioBackButton label="Back" />

        <section className="relative overflow-hidden rounded-[2.4rem] border border-white/40 bg-gradient-to-br from-indigo-50 via-white to-amber-50 p-6 shadow-[0_25px_80px_-40px_rgba(46,16,101,0.35)] backdrop-blur-md sm:p-8 md:p-10 dark:border-white/10 dark:from-slate-900 dark:via-slate-950 dark:to-amber-950/20 dark:shadow-[0_25px_80px_-40px_rgba(0,0,0,0.7)]">
          <div className="pointer-events-none absolute -left-24 -top-28 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-300/35 via-purple-300/30 to-transparent blur-3xl dark:from-indigo-400/25 dark:via-purple-500/15" />
          <div className="pointer-events-none absolute -right-16 top-20 h-64 w-64 rounded-full bg-gradient-to-tr from-amber-300/35 via-orange-200/30 to-transparent blur-3xl dark:from-amber-400/25 dark:via-orange-500/15" />
          <div className="pointer-events-none absolute inset-x-16 bottom-[-18rem] h-96 rounded-full bg-gradient-to-t from-sky-200/40 via-transparent to-transparent blur-3xl dark:from-sky-500/15" />

          <div className="relative space-y-4 sm:space-y-5 md:space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-900 shadow-sm backdrop-blur dark:bg-white/10 dark:text-indigo-100">
              From notes to notion
            </div>
            <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
              <div className="space-y-2">
                <h1 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl sm:leading-[1.05] lg:text-[2.65rem] dark:text-white">
                  Biaxial Music Fusion
                </h1>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-white/70 px-4 py-3 text-sm text-slate-800 shadow-sm backdrop-blur md:text-base dark:bg-white/10 dark:text-white">
                <span className="rounded-full bg-indigo-100 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-widest text-indigo-900 shadow-sm dark:bg-indigo-900/40 dark:text-indigo-50">
                  Dual focus
                </span>
                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200/80">
                  Designing music with both craft depth and genre reach.
                </p>
              </div>
            </div>
          </div>

          <div className="relative mt-10 grid gap-8 lg:grid-cols-2 lg:gap-10">
            <div className="relative overflow-hidden rounded-2xl border border-white/60 bg-white/80 p-6 shadow-lg backdrop-blur-sm sm:p-7 dark:border-white/10 dark:bg-white/5">
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-indigo-100/60 blur-3xl transition-all duration-500 group-hover:scale-125 dark:bg-indigo-500/20" />
              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-800/80 dark:text-indigo-100/80">
                    Process axis
                  </p>
                </div>
                <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-900 shadow-sm dark:bg-indigo-900/40 dark:text-indigo-100">
                  Depth
                </span>
              </div>
              <div className="mt-6 flex flex-col gap-5 sm:gap-6">
                {processAxis.map((item, index) => (
                  <div
                    key={item.title}
                    className="relative rounded-xl bg-white/70 p-4 shadow-sm ring-1 ring-white/60 backdrop-blur transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-200/40 dark:bg-white/5 dark:ring-white/10 dark:hover:shadow-indigo-900/30"
                  >
                    <div className="mb-2 flex items-center gap-2 text-base font-semibold text-slate-900 dark:text-white">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-100 text-xs font-semibold text-indigo-900 shadow-sm dark:bg-indigo-900/60 dark:text-indigo-50">
                        {index + 1}
                      </span>
                      {item.title}
                    </div>
                    <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200/80">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-white/60 bg-white/80 p-6 shadow-lg backdrop-blur-sm sm:p-7 dark:border-white/10 dark:bg-white/5">
              <div className="pointer-events-none absolute -left-12 -bottom-10 h-36 w-36 rounded-full bg-amber-100/60 blur-3xl transition-all duration-500 group-hover:scale-125 dark:bg-amber-500/20" />
              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-900/80 dark:text-amber-100/80">
                    Genre axis
                  </p>
                </div>
                <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-900 shadow-sm dark:bg-amber-900/40 dark:text-amber-100">
                  Breadth
                </span>
              </div>
              <div className="mt-6 flex flex-col gap-5 sm:gap-6">
                {genreAxis.map((item, index) => (
                  <div
                    key={item.title}
                    className="relative rounded-xl bg-white/70 p-4 shadow-sm ring-1 ring-white/60 backdrop-blur transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-200/45 dark:bg-white/5 dark:ring-white/10 dark:hover:shadow-amber-900/30"
                  >
                    <div className="mb-2 flex items-center gap-2 text-base font-semibold text-slate-900 dark:text-white">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-100 text-xs font-semibold text-amber-900 shadow-sm dark:bg-amber-900/60 dark:text-amber-50">
                        {index + 1}
                      </span>
                      {item.title}
                    </div>
                    <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200/80">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="mt-12 flex flex-col items-center gap-1">
          <SectionDivider />
          <p className="text-lg font-semibold tracking-wide text-slate-600 dark:text-slate-200/80">
            2022
          </p>
          <div className="w-full max-w-3xl overflow-hidden rounded-[1.75rem] border border-white/50 bg-white/80 p-5 shadow-lg backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
            <p className="mb-4 text-base font-medium text-slate-800 dark:text-slate-100">
              Check out how I built a custom looper system—an ESP32-based MIDI foot pedal—to
              power the live looping performances I've loved since high school.
            </p>
            <div className="group relative aspect-[3/2] w-full overflow-hidden rounded-2xl border border-white/40 bg-neutral-200 shadow-inner dark:border-white/10 dark:bg-neutral-900">
              <img
                src="/Looper/LooperHero.png"
                alt="ESP32 MIDI foot pedal looper system montage."
                className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
              />
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/35 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                <Link
                  href={`/projects/${looperSlug}`}
                  className="inline-flex items-center gap-2 rounded-full bg-white/90 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-slate-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-white"
                >
                  View project details
                </Link>
              </div>
            </div>
          </div>
          <SectionDivider />
          <p className="text-lg font-semibold tracking-wide text-slate-600 dark:text-slate-200/80">
            2023
          </p>
          <div className="w-full max-w-5xl overflow-hidden rounded-[1.75rem] border border-white/50 bg-white/75 p-6 text-slate-900 shadow-lg backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:text-white sm:p-7">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold leading-tight sm:text-[1.65rem]">
                Joined the Lu Xun musical production team <span className="text-base font-medium text-slate-600 dark:text-slate-200/80">(2023–2024)</span>
              </h3>
              <div className="space-y-3 text-left text-sm leading-relaxed text-slate-800 dark:text-slate-100">
                <p className="font-semibold text-slate-900 dark:text-white">
                  About Lu Xun — An Original SJTU Student Musical
                </p>
                <p>
                  Lu Xun is an original student-written musical produced at Shanghai Jiao Tong University, featuring a fully student-created script, score, and stage production. The show attracted strong attention on campus for its contemporary reinterpretation of Lu Xun’s life and its unusually large, professionally organized student team. After its successful premiere, the production moved into a studio-recording phase to create an official soundtrack.
                </p>
                <div className="space-y-1">
                  <p className="font-semibold text-slate-900 dark:text-white">My Role</p>
                  <p>
                    After the musical’s successful premiere, I joined the production team during the transition from live performance to studio recording. This marked the beginning of my work in studio production and live audio engineering. I assisted in recording sessions, organized multi-track materials, prepared stems for mixing, and helped translate the musical’s on-stage acoustics into a polished studio sound.
                  </p>
                </div>
              </div>
              <div className="mt-4 grid w-full items-start gap-6 sm:grid-cols-2">
                <ImageCarousel
                  images={luxunImages}
                  aspectClassName="aspect-[4/3]"
                  sizes="(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 90vw"
                  containerClassName="px-0 py-0"
                  ariaLabel="Lu Xun musical photo highlights"
                  showIndicators
                  showControls
                />
                <iframe
                  title="Spotify album: 4hVAW0ZD2PZvBuIWvb4t9u"
                  data-testid="embed-iframe"
                  style={{ borderRadius: "18px" }}
                  src="https://open.spotify.com/embed/album/4hVAW0ZD2PZvBuIWvb4t9u?utm_source=generator"
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </div>
              <h3 className="text-2xl font-semibold leading-tight sm:text-[1.65rem]">
                Joined the SJTU Art Center <span className="text-base font-medium text-slate-600 dark:text-slate-200/80">(2023–2025)</span>
              </h3>
              <div className="space-y-3 text-left text-sm leading-relaxed text-slate-800 dark:text-slate-100">
                <p className="font-semibold text-slate-900 dark:text-white">
                  About the SJTU Art Center
                </p>
                <p>
                  The SJTU Art Center is the university’s central student organization responsible for producing large-scale campus events, including the Freshmen Gala, Top 10 Singers competition, Graduation Gala, Oasis Music Festival, Military Training Gala, and the Original Art Gala. It brings together students across directing, music, stagecraft, lighting, and production to create university-level performances.
                </p>
                <p className="font-semibold text-slate-900 dark:text-white">
                  Role — Music Production
                </p>
                <p>
                  Many of the core members of the Lu Xun musical team were long-time leaders of the SJTU Art Center. Because I had already developed full-chain music production skills during the Lu Xun project, I entered the Art Center’s music division (“Sofa Department”) as one of its most versatile members from day one. I quickly became a core contributor, taking on responsibilities across composition, arrangement, production, and technical execution.
                </p>
                <p>
                  In 2023, I composed and produced two official theme songs for university galas. Aside from lyric writing and the final vocal performance, every part of the music—composition, arranging, demo recording, production, and mixing—was done by me.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {artCenterSongs.map((song) => (
                    <Link
                      key={song.title}
                      href={song.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group relative overflow-hidden rounded-2xl border border-white/30 bg-white/70 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                    >
                      <div className="relative h-48 w-full">
                        <Image
                          src={song.image}
                          alt={song.title}
                          fill
                          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 40vw, 90vw"
                          className="object-cover transition duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent opacity-80 transition group-hover:opacity-100" />
                        <div className="absolute inset-x-0 bottom-0 p-4">
                          <p className="text-base font-semibold text-white drop-shadow">{song.title}</p>
                          <span className="mt-2 inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-900 shadow-sm transition group-hover:-translate-y-0.5 group-hover:bg-white">
                            Listen on SoundCloud
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                <p className="font-semibold text-slate-900 dark:text-white">
                  Role — Sound Engineering
                </p>
                <p>
                  In addition to music production, I also worked extensively on the technical side of live performances. As the Art Center is responsible for producing major university events, reliable and high-quality live audio is essential. I served both as a Front-of-House (FOH) Sound Engineer and a Backstage Audio Technician, handling live mixing, system setup, and cue coordination for large-scale campus galas.
                </p>
                <p>
                  I am familiar with several professional digital mixing consoles, including Yamaha, DiGiCo, and Midas, and experienced in operating audio networks and routing based on Dante, MADI, and other digital protocols. These projects gave me practical, end-to-end experience across live sound workflows—from stage inputs and microphone management to FOH mixing and backstage communication.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <ImageCarousel
                    images={soundEngineerImages}
                    aspectClassName="aspect-[4/3]"
                    sizes="(min-width: 1024px) 40vw, (min-width: 640px) 45vw, 90vw"
                    containerClassName="px-0 py-0"
                    imageClassName="object-contain bg-black"
                    ariaLabel="Sound engineering photos"
                  />
                  <ImageCarousel
                    images={audioTechImages}
                    aspectClassName="aspect-[4/3]"
                    sizes="(min-width: 1024px) 40vw, (min-width: 640px) 45vw, 90vw"
                    containerClassName="px-0 py-0"
                    ariaLabel="Audio tech backstage photos"
                  />
                </div>
              </div>
            </div>
          </div>
          <SectionDivider />
          <p className="text-lg font-semibold tracking-wide text-slate-600 dark:text-slate-200/80">
            2024
          </p>
        </div>
      </div>
    </main>
  );
}
