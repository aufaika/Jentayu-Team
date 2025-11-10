"use client";


import { Montserrat } from "next/font/google";
import { Transition } from "@headlessui/react";

import ContactUsFooter from "../components/ContactUsFooter";
import AchievementImage from "./AchievementImage";
import AchievementCard from "./AchievementCard";

const montserrat = Montserrat({
  subsets: ["latin"],
});

// Data Achievement
const achievements = [
  {
    year: 2024,
    image: "/2024.png",
    contest: "KONTES ROBOT TERBANG INDONESIA",
    awards: [
      "FINALIS NASIONAL KRTI 2024 - RACING PLANE",
      "3RD PLACE WILAYAH 1 KRTI 2024 - VTOL",
      "FINALIS NASIONAL KRTI 2024 - VTOL",
      "FINALIS NASIONAL KRTI 2024 - FIXED WING",
    ],
  },
  {
    year: 2023,
    image: "/2023.png",
    contest: "KONTES ROBOT TERBANG INDONESIA",
    awards: [
      "2ND PLACE WILAYAH 1 KRTI 2023 - RACING PLANE",
      "FINALIS NASIONAL KRTI 2023 - RACING PLANE",
      "BEST PILOT KRTI 2023 - RACING PLANE",
      "FINALIS NASIONAL KRTI 2023 TECHNOLOGY DEVELOPMENT - VTOL",
      "FINALIS NASIONAL KRTI 2023 - VTOL",
    ],
  },
  {
    year: 2021,
    image: "/2021.png",
    contest: "KONTES ROBOT TERBANG INDONESIA",
    awards: [
      "BEST DESIGN KRTI 2021 - RACING PLANE",
      "FINALIS NASIONAL KRTI 2021 - RACING PLANE",
      "FINALIS NASIONAL KRTI 2021 - VTOL",
      "FINALIS NASIONAL KRTI 2021 - FIXED WING ",
    ],
  },
  {
    year: 2020,
    image: "/2020.png",
    contest: "KONTES ROBOT TERBANG INDONESIA",
    awards: [
      "FINALIS NASIONAL KRTI 2020 - RACING PLANE",
      "FINALIS NASIONAL KRTI 2020 - VTOL",
    ],
  },
  {
    year: 2019,
    image: "/2019.png",
    contest: "KONTES ROBOT TERBANG INDONESIA",
    awards: [
      "FINALIS NASIONAL KRTI 2019 - RACING PLANE",
      "FINALIS NASIONAL KRTI 2019 - VTOL",
    ],
  },
  {
    year: 2018,
    image: "/2018.png",
    contest: "KONTES ROBOT TERBANG INDONESIA",
    awards: [
      "FINALIS NASIONAL KRTI 2018 - RACING PLANE",
      "FINALIS NASIONAL KRTI 2018 - VTOL",
    ],
  },
];

export default function AchievementPage() {
  return (
    <div className={`bg-white text-gray-800 ${montserrat.className}`}>
      {/* SECTION PERTAMA: BANNER */}
      <section
        className="relative w-full h-screen bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url('/achiev.png')` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <Transition
          appear={true}
          show={true}
          enter="transition-all duration-1000 delay-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          as="h1"
          className="absolute inset-0 flex items-center justify-center text-white text-5xl md:text-6xl font-extrabold z-10"
        >
          ACHIEVEMENT
        </Transition>
      </section>

      {/* SECTION KEDUA: LIST ACHIEVEMENT */}
      {achievements.map((ach, i) => (
        <AchievementCard key={i} {...ach} />
      ))}
      <ContactUsFooter />
    </div>
  );
}