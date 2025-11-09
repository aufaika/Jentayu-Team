"use client";

import Image from "next/image";
import { useState } from "react";
import { Montserrat } from "next/font/google";
import { Transition } from "@headlessui/react";
import { useInView } from "react-intersection-observer";
import ContactUsFooter from "../components/ContactUsFooter";

const montserrat = Montserrat({
  subsets: ["latin"],
});

// ===================== DATA ACHIEVEMENT =====================
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

// ===================== COMPONENT IMAGE (hover + popup with animation) =====================
const AchievementImage = ({ src, alt }: { src: string; alt: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={400}
        height={300}
        className="rounded-lg shadow-lg mb-8 object-contain cursor-pointer 
                   transform transition-transform duration-300 hover:scale-105 hover:-translate-y-1"
        onClick={() => setIsOpen(true)}
      />

      <Transition show={isOpen}>
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={() => setIsOpen(false)}
        >
          {/* Background overlay with fade */}
          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="absolute inset-0 bg-black/70" />
          </Transition.Child>

          {/* Image with scale and fade */}
          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="relative max-w-4xl w-full p-4 z-10">
              <Image
                src={src}
                alt={alt}
                width={1200}
                height={800}
                className="rounded-lg mx-auto"
              />
            </div>
          </Transition.Child>
        </div>
      </Transition>
    </>
  );
};

// ===================== COMPONENT CARD (with scroll animation) =====================
const AchievementCard = ({
  year,
  image,
  contest,
  awards,
}: {
  year: number;
  image: string;
  contest: string;
  awards: string[];
}) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="min-h-screen py-20 px-6 flex flex-col items-center bg-white even:bg-gray-100"
    >
      {/* Year with fade + slide up */}
      <Transition
        show={inView}
        enter="transition-all duration-700 delay-100"
        enterFrom="opacity-0 translate-y-8"
        enterTo="opacity-100 translate-y-0"
        as="h2"
        className="text-5xl font-extrabold mb-6 text-gray-800"
      >
        {year}
      </Transition>

      {/* Contest with fade + slide up */}
      <Transition
        show={inView}
        enter="transition-all duration-700 delay-200"
        enterFrom="opacity-0 translate-y-8"
        enterTo="opacity-100 translate-y-0"
        as="p"
        className="text-xl text-gray-600 mb-10 font-bold"
      >
        {contest}
      </Transition>

      {/* Image with fade + scale */}
      <Transition
        show={inView}
        enter="transition-all duration-700 delay-300"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        as="div"
      >
        <AchievementImage src={image} alt={`Achievement ${year}`} />
      </Transition>

      {/* Awards with staggered fade + slide up */}
      <ul className="text-lg space-y-2 text-gray-700 text-center max-w-2xl font-bold">
        {awards.map((award, i) => (
          <Transition
            key={i}
            show={inView}
            enter={`transition-all duration-700 delay-[${400 + i * 100}ms]`}
            enterFrom="opacity-0 translate-y-4"
            enterTo="opacity-100 translate-y-0"
            as="li"
          >
            {award}
          </Transition>
        ))}
      </ul>
    </section>
  );
};

// ===================== PAGE =====================
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