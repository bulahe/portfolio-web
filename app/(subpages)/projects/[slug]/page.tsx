import type { JSX } from "react";
import { notFound } from "next/navigation";
import LooperSubpage from "@/components/subpages/Looper";
import ModularArGlassesSubpage from "@/components/subpages/ModularArGlasses";
import MultiUserInterruptionsSubpage from "@/components/subpages/MultiUserInterruptions";
import SurprisePartySubpage from "@/components/subpages/SurpriseParty";
import SyntheticImuSubpage from "@/components/subpages/SyntheticImu";
import Where2EatSubpage from "@/components/subpages/where2eat";
import { generateSlug } from "@/lib/slug";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const pages: Record<string, JSX.Element> = {
    [generateSlug("Managing Multi-User Interruptions in Human–Robot Interaction")]: <MultiUserInterruptionsSubpage />,
    [generateSlug("Enhancing Synthetic IMU Generation for Human Activity Recognition")]:  <SyntheticImuSubpage /> ,
    [generateSlug("GAME: Surprise Party")]: <SurprisePartySubpage />,
    [generateSlug("Modular AR Glasses with Magnetic Hand-Tracking Bands")]:  <ModularArGlassesSubpage />,
    [generateSlug("ESP32 MIDI Foot Pedal for Live Looping")]: <LooperSubpage />,
    [generateSlug("Cafeteria Seat-Finding System")]: <Where2EatSubpage />,
  };

  const page = pages[params.slug];

  if (!page) {
    notFound();
  }

  return page;
}
