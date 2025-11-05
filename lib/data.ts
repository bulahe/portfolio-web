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
    title: "Managing Multi-User Interruptions in Human–Robot Interaction",
    subtitle: "An AR-simulated study of real-world service robot interactions in multi-user environments, reviewed at CHI 2026 and currently undergoing revision for resubmission.",
    tags: ["PUBLICATION","Unity", "C#","XR","MULTI-USER AR"],
    image: "/XRobot/XRobotHero.png",
  },
  {
    title: "Enhancing Synthetic IMU Generation for Human Activity Recognition",
    subtitle: "Bachelor thesis proposing a closed-loop framework for controllable virtual IMU data generation and evaluation, improving model generalization across datasets.",
    tags: [ "Undergraduate Thesis","Python", "pytorch", "Machine Learning"],
    image: "/undergraduate thesis/undergraduate thesisHero.jpeg",
  },

  {
    title: "GAME: Surprise Party",
    subtitle: "A Roblox-based multiplayer party game that won a campus game design award.",
    tags: ["Roblox", "Multiplayer", "Game Design"],
    image: "/partyGame/partyGameHero.png",
  },

  {
    title: "Modular AR Glasses with Magnetic Hand-Tracking Bands",
    subtitle: "A conceptual design envisioning lightweight AR eyewear with magnetic, detachable dual bands for full-range hand tracking.",
    tags: ['CAD',"AR"],
    image: "/glassBandDesign/glassBandDesignHero.png",
  },

  {
    title: "ESP32 MIDI Foot Pedal for Live Looping",
    subtitle: "A custom Python-powered MIDI controller designed to interface with an iPad looper app, enabling hands-free multi-track recording and playback.",
    tags: ["python", "CAD", "Creative Hardware ", "Music Technology"],
    image: "/Looper/LooperHero.png",
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
