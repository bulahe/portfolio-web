import type { JSX } from "react";
import { notFound } from "next/navigation";
import ExampleSubpage from "@/components/subpages/example";
import { generateSlug } from "@/lib/slug";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const pages: Record<string, JSX.Element> = {
    [generateSlug("ESP32 MIDI Foot Pedal for Live Looping")]: <ExampleSubpage />,
  };

  const page = pages[params.slug];

  if (!page) {
    notFound();
  }

  return page;
}
