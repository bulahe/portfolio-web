import type { IconType } from "react-icons";
import { LuGraduationCap } from "react-icons/lu";
import { TbDeviceVisionPro } from "react-icons/tb";
import { TfiWrite } from "react-icons/tfi";
import { FiHeadphones } from "react-icons/fi";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Portfolio",
    hash: "#portfolio",
  },
] as const;


export type ProjectCard = {
  title: string;
  subtitle: string;
  tags: string[];
  image?: string;
};

export const projectsData: ProjectCard[] = [
  {
    title: "CorpComment",
    subtitle: "Full-stack platform enabling public company feedback.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    image: "/projects/corpcomment.jpg",
  },
  {
    title: "Spatial Soundstage",
    subtitle: "Immersive XR performance toolkit for live artists.",
    tags: ["Unity", "visionOS", "Spatial Audio"],
    image: "/projects/spatial-soundstage.jpg",
  },
  {
    title: "SenseLab Studio",
    subtitle: "Interactive installations blending light with motion.",
    tags: ["TouchDesigner", "Hardware", "Installation"],
    image: "/projects/senselab-studio.jpg",
  },
  {
    title: "Pulse Sketch",
    subtitle: "Generative visuals responding to biometric sensors.",
    tags: ["Processing", "Arduino", "Generative Art"],
    image: "/projects/pulse-sketch.jpg",
  },
];

export type IntroHighlight = {
  icon: IconType;
  title: string;
  body: string;
};

export const introHighlights: IntroHighlight[] = [
  {
    icon: LuGraduationCap,
    title: "Undergraduate Student @ SJTU",
    body:
      "Pursuing a B.S. in Electrical and Computer Engineering (Microelectronics focus) at Shanghai Jiao Tong University.",
  },
  {
    icon: TbDeviceVisionPro,
    title: "XR Developer",
    body:
      "Designing and building immersive AR/VR experiences that blend spatial interaction and sound.",
  },
  {
    icon: TfiWrite,
    title: "HCI & AI Researcher",
    body:
      "A human–computer interaction researcher with publications in XR and digital media. My undergraduate thesis focuses on AI-related research.",
  },
  {
    icon: FiHeadphones,
    title: "Producer & Performer & Sound Engineer",
    body:
      "Mixing, producing, and performing across digital and physical stages. Building custom hardware tools for interactive performance.",
  },
];

export const introSkills = [
  "Unity",
  "visionOS",
  "PyTorch",
  "Arduino",
  "C#",
  "Python",
  "C++",
  "swift",
  "CAD",
  "Web Development"
] as const;
