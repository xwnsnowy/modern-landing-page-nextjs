import React from "react";
import FeatureCard from "@/components/FeatureCard";
import Tag from "@/components/Tag";
import Image from "next/image";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/assets/images/avatar-lula-meyers.jpg";
import avatar3 from "@/assets/images/avatar-florence-shaw.jpg";
import Avatar from "@/components/Avatar";
import Key from "@/components/Key";

interface Feature {
  title: string;
  description: string;
  children?: React.ReactNode;
}

const features = [
  "Asset Library",
  "Code Preview",
  "Flow Mode",
  "Smart Sync",
  "Auto Layout",
  "Fast Search",
  "Smart Guides",
];

const data: Feature[] = [
  {
    title: "Real-time",
    description: "Work together seamlessly with conflict resolution",
    children: (
      <div className="aspect-video flex items-center justify-center">
        <Avatar className="-ml-0 border-red-500 z-40">
          <Image src={avatar1} alt="Real-time" className="rounded-full" />
        </Avatar>
        <Avatar className="-ml-6 border-indigo-500 z-30">
          <Image src={avatar2} alt="Real-time" className="rounded-full" />
        </Avatar>
        <Avatar className="-ml-6 border-amber-500 z-20">
          <Image src={avatar3} alt="Real-time" className="rounded-full" />
        </Avatar>
        <Avatar className="-ml-6 border-transparent">
          <div className="size-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1">
            {Array.from({ length: 3 }).map((_, index) => (
              <span
                className="size-1.5 rounded-full bg-white"
                key={index}
              ></span>
            ))}
          </div>
        </Avatar>
      </div>
    ),
  },
  {
    title: "Interactive Prototyping",
    description: "Engage your clients with prototypes that look like your app",
    children: (
      <div className="aspect-video flex items-center justify-center">
        <p className="text-4xl font-extrabold text-white/20 text-center">
          We&apos;ve achieved{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            incredible
          </span>{" "}
          growth this year
        </p>
      </div>
    ),
  },
  {
    title: "Keyboard Quick Actions",
    description: "Powerful commands to help you get things done",
    children: (
      <div className="aspect-video flex items-center justify-center gap-4">
        <Key className="w-28">shift</Key>
        <Key>alt</Key>
        <Key>C</Key>
      </div>
    ),
  },
];

export default function Features() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Features</Tag>
        </div>
        <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl mx-auto">
          Where power meets <span className="text-lime-400">simplicity</span>
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-6">
          {data.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              className={
                index === data.length - 1
                  ? "md:col-span-2 md:col-start-2 lg:col-span-1"
                  : index === data.length - 2
                  ? "md:col-span-2 lg:col-span-1"
                  : index === data.length - 3
                  ? "md:col-span-2 lg:col-span-1"
                  : ""
              }
            >
              {feature.children}
            </FeatureCard>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          {features.map((feature) => (
            <div
              key={feature}
              className="bg-neutral-900 border border-white/10 px-3 py-1.5 rounded-2xl inline-flex items-center gap-4 md:px-5 md:py-2.5"
            >
              <span className="bg-lime-400 text-neutral-950 size-5 inline-flex rounded-full items-center justify-center text-xl">
                &#10038;
              </span>
              <span className="font-medium md:text-lg">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
