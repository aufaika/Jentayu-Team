"use client";

import Image from "next/image";
import { useState } from "react";

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

// ===================== COMPONENT IMAGE (hover + popup) =====================
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

      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative max-w-4xl w-full p-4">
            <Image
              src={src}
              alt={alt}
              width={1200}
              height={800}
              className="rounded-lg mx-auto"
            />
          </div>
        </div>
      )}
    </>
  );
};

// ===================== COMPONENT CARD =====================
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
}) => (
  <section className="min-h-screen py-20 px-6 flex flex-col items-center bg-white even:bg-gray-100">
    {/* Tahun bold paling tebal */}
    <h2 className="text-5xl font-extrabold mb-6 text-gray-800">{year}</h2>

    {/* Contest agak bold */}
    <p className="text-xl text-gray-600 mb-10 font-semibold">{contest}</p>

    <AchievementImage src={image} alt={`Achievement ${year}`} />

    {/* Awards agak bold */}
    <ul className="text-lg space-y-2 text-gray-700 text-center max-w-2xl font-semibold">
      {awards.map((award, i) => (
        <li key={i}>{award}</li>
      ))}
    </ul>
  </section>
);

// ===================== PAGE =====================
export default function AchievementPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* SECTION PERTAMA: BANNER */}
      <section
        className="relative w-full h-screen bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url('/achiev.png')` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Judul statis kayak tahun, tapi tetap putih */}
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-5xl md:text-6xl font-extrabold z-10">
          ACHIEVEMENT
        </h1>
      </section>

      {/* SECTION KEDUA: LIST ACHIEVEMENT */}
      {achievements.map((ach, i) => (
        <AchievementCard key={i} {...ach} />
      ))}
    </div>
  );
}
