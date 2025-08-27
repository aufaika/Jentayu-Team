import Image from "next/image";

// ===================== DATA ACHIEVEMENT =====================
const achievements = [
  {
    year: 2024,
    image: "/images/achievement-2024.jpg",
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
    image: "/images/achievement-2023.jpg",
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
    year: 2022,
    image: "/images/achievement-2022.jpg",
    contest: "KONTES ROBOT TERBANG INDONESIA",
    awards: [
      "FINALIS NASIONAL KRTI 2022 - [ISI]",
      "[Tambahkan pencapaian lain]",
    ],
  },
  {
    year: 2021,
    image: "/images/achievement-2021.jpg",
    contest: "KONTES ROBOT TERBANG INDONESIA",
    awards: [
      "FINALIS NASIONAL KRTI 2021 - [ISI]",
      "[Tambahkan pencapaian lain]",
    ],
  },
  {
    year: 2020,
    image: "/images/achievement-2020.jpg",
    contest: "KONTES ROBOT TERBANG INDONESIA",
    awards: [
      "FINALIS NASIONAL KRTI 2020 - [ISI]",
      "[Tambahkan pencapaian lain]",
    ],
  },
  {
    year: 2019,
    image: "/images/achievement-2019.jpg",
    contest: "KONTES ROBOT TERBANG INDONESIA",
    awards: [
      "FINALIS NASIONAL KRTI 2019 - [ISI]",
      "[Tambahkan pencapaian lain]",
    ],
  },
  {
    year: 2018,
    image: "/images/achievement-2018.jpg",
    contest: "KONTES ROBOT TERBANG INDONESIA",
    awards: [
      "FINALIS NASIONAL KRTI 2018 - [ISI]",
      "[Tambahkan pencapaian lain]",
    ],
  },
];

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
    {/* Tahun bold abu gelap */}
    <h2 className="text-5xl font-extrabold mb-6 text-gray-800">{year}</h2>

    <p className="text-xl text-gray-600 mb-10">{contest}</p>
    <Image
      src={image}
      alt={`Achievement ${year}`}
      width={400}
      height={300}
      className="rounded-lg shadow-lg mb-8 object-contain"
    />
    <ul className="text-lg space-y-2 text-gray-700 text-center max-w-2xl">
      {awards.map((award, i) => (
        <li key={i} className={i === 0 ? "font-semibold" : ""}>
          {award}
        </li>
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
        className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url('/achiev.png')` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="relative z-10 text-white text-5xl md:text-6xl font-extrabold">
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
