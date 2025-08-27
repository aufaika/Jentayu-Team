import React from "react";
import Head from "next/head";

const teamData = {
  chief: {
    role: "CHIEF OF RACING PLANE",
    name: "M. RIZQI AUNILLAH",
    photo: "/photos/m-rizqi-aunillah.jpg",
  },
  projectManager: {
    role: "PROJECT MANAGER",
    name: "SUCI RAHMADANI",
    photo: "/photos/suci-rahmadan.jpg",
  },
  media: {
    role: "MEDIA",
    name: "SYIFA KIRANIA",
    photo: "/photos/syifa-kirania.jpg",
  },
  subTeams: [
    {
      head: {
        role: "HEAD OF ELECTRICAL",
        name: "AZIS SURYA DARMTA",
        photo: "/photos/azis-surya-darmta.jpg",
      },
      members: [
        {
          role: "STAFF ELECTRICAL",
          name: "ABID NANTA LEGOWO",
          photo: "/photos/abid-nanta-legowo.jpg",
        },
        {
          role: "STAFF ELECTRICAL",
          name: "NUGIE PRANAYUDHA",
          photo: "/photos/nugie-pranayudha.jpg",
        },
        {
          role: "STAFF ELECTRICAL",
          name: "KRISNA SATRIA UTOMO",
          photo: "/photos/krisna-satria-utomo.jpg",
        },
      ],
    },
    {
      head: {
        role: "HEAD OF DESIGN",
        name: "JOSHUA ADI PRATAMA",
        photo: "/photos/joshua-adi-pratama.jpg",
      },
      members: [
        {
          role: "STAFF DESIGN",
          name: "MUHAMMAD RAFLI A.",
          photo: "/photos/muhammad-rafli-a.jpg",
        },
        {
          role: "STAFF DESIGN",
          name: "MUHAMMAD DIKTAR A.",
          photo: "/photos/muhammad-diktar-a.jpg",
        },
        {
          role: "STAFF DESIGN",
          name: "MUHAMMAD ZAKARIA A.S",
          photo: "/photos/muhammad-zakaria-as.jpg",
        },
        {
          role: "STAFF DESIGN",
          name: "BRYAN RAMADANI A.B",
          photo: "/photos/bryan-ramadani-ab.jpg",
        },
        {
          role: "STAFF DESIGN",
          name: "MUHAMMAD MIFTAHUL R.",
          photo: "/photos/muhammad-miftahul-r.jpg",
        },
      ],
    },
    {
      head: {
        role: "HEAD OF MANUFACTURE",
        name: "AWALLUDIN SUBEKTI",
        photo: "/photos/awalludin-subekti.jpg",
      },
      members: [
        {
          role: "STAFF MANUFACTURE",
          name: "ODAYAKANA UPUPHA K.",
          photo: "/photos/odayakana-upupha-k.jpg",
        },
        {
          role: "STAFF MANUFACTURE",
          name: "FAISAL MAULANA IQBAL",
          photo: "/photos/faisal-maulana-iqbal.jpg",
        },
        {
          role: "STAFF MANUFACTURE",
          name: "MIFTAHUL FALAQ",
          photo: "/photos/miftahul-falaq.jpg",
        },
        {
          role: "STAFF MANUFACTURE",
          name: "MAHARAJA DAFTI Y.L.",
          photo: "/photos/maharaja-dafti-yl.jpg",
        },
        {
          role: "STAFF MANUFACTURE",
          name: "TOMMY PRIYA PRAYOGA",
          photo: "/photos/tommy-priya-prayog.jpg",
        },
      ],
    },
  ],
};

const MemberCard = ({
  role,
  name,
  photo,
}: {
  role: string;
  name: string;
  photo: string;
}) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-24 h-24 rounded-lg overflow-hidden shadow-lg mb-2">
      {photo ? (
        <img src={photo} alt={name} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
          foto
        </div>
      )}
    </div>
    <p className="font-bold text-gray-800 text-sm leading-tight">{role}</p>
    <p className="text-gray-600 mt-1 text-xs leading-tight">{name}</p>
  </div>
);

export default function RacingPlane() {
  return (
    <div className="w-full">
      {/* ================= PAGE 1 : Racing Plane ================= */}
      <section
        className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/racing1.png')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="relative z-10 text-white text-5xl md:text-6xl font-extrabold">
          RACING PLANE
        </h1>
      </section>

      {/* ================= PAGE 2 : Description Team ================= */}
      <section
        className="relative w-full min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-6 text-center"
        style={{ backgroundImage: "url('/bg-description-team.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-4xl">
          <h2 className="text-white text-4xl md:text-5xl font-extrabold mb-6">
            DESCRIPTION TEAM
          </h2>
          <p className="text-white text-lg leading-relaxed text-justify">
            Jentayu Racing Plane team participated in a time attack-style
            competition under the "Fast and On Track" theme. This challenge
            required participants to demonstrate both speed and precision, as
            they navigated their aircraft through a designated course. Teams had
            to launch their aircraft swiftly, maneuver through the course
            efficiently, and reach the finish line as quickly as possible, all
            while executing a smooth and controlled landing. This theme
            highlights the importance of both rapid performance and precision in
            aircraft control, making it a thrilling and high-stakes event for
            participants.
          </p>
        </div>
      </section>

      {/* ================= PAGE 3 : Team Member ================= */}
      <section className="min-h-screen py-20 px-4 bg-gray-50 flex flex-col items-center text-gray-800">
        <h2 className="text-5xl font-extrabold mb-16 tracking-wide">
          TEAM MEMBER
        </h2>

        {/* Chief of Racing Plane */}
        <div className="flex justify-center mb-8">
          <MemberCard
            role={teamData.chief.role}
            name={teamData.chief.name}
            photo={teamData.chief.photo}
          />
        </div>

        {/* Project Manager and Media */}
        <div className="flex justify-around w-full max-w-3xl mb-12">
          <MemberCard
            role={teamData.projectManager.role}
            name={teamData.projectManager.name}
            photo={teamData.projectManager.photo}
          />
          <MemberCard
            role={teamData.media.role}
            name={teamData.media.name}
            photo={teamData.media.photo}
          />
        </div>

        {/* Sub-teams: Electrical, Design, Manufacture */}
        <div className="flex flex-col md:flex-row justify-between items-start w-full max-w-6xl space-y-12 md:space-y-0 md:space-x-8">
          {teamData.subTeams.map((team, index) => (
            <div key={index} className="flex flex-col items-center w-full">
              <MemberCard
                role={team.head.role}
                name={team.head.name}
                photo={team.head.photo}
              />
              <div className="flex flex-col items-center mt-8 space-y-8">
                {team.members.map((member, subIndex) => (
                  <MemberCard
                    key={subIndex}
                    role={member.role}
                    name={member.name}
                    photo={member.photo}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
