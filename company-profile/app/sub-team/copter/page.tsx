import React from "react";
import Head from "next/head";

const teamData = {
  chief: {
    role: "CHIEF OF VTOL",
    name: "RIFQI NURRAHMAN PUTRA",
    photo: "/photos/rifqi-nurrahman-putra.jpg", // Example path
  },
  projectManager: {
    role: "PROJECT MANAGER",
    name: "SAFA HAFIZHAN SINTIJI",
    photo: "/photos/safa-hafizhan-sintiji.jpg", // Example path
  },
  media: {
    role: "MEDIA",
    name: "FAJAR HERDIANSYAH",
    photo: "/photos/fajar-herdiansyah.jpg", // Example path
  },
  subTeams: [
    {
      head: {
        role: "HEAD OF ELECTRICAL",
        name: "MUHAMMAD HUMAM FAIZ",
        photo: "/photos/muhammad-humam-faiz.jpg", // Example path
      },
      members: [
        {
          role: "STAFF ELECTRICAL",
          name: "IRHAM NUR ILHAM A.P",
          photo: "/photos/irham-nur-ilham-ap.jpg",
        },
        {
          role: "STAFF ELECTRICAL",
          name: "RIDHO PRASTYDIATI",
          photo: "/photos/ridho-prastydiati.jpg",
        },
        {
          role: "STAFF ELECTRICAL",
          name: "SYAUQI HIYAM NOUFAL",
          photo: "/photos/syauqi-hiyam-noufal.jpg",
        },
        {
          role: "STAFF ELECTRICAL",
          name: "FEBRY GADING R.",
          photo: "/photos/febry-gading-r.jpg",
        },
      ],
    },
    {
      head: {
        role: "HEAD OF PROGRAM",
        name: "MUHAMMAD TSAQIF H.",
        photo: "/photos/muhammad-tsaqif-h.jpg", // Example path
      },
      members: [
        {
          role: "STAFF PROGRAM",
          name: "ATHALLAH AHZA FALAH",
          photo: "/photos/athallah-ahza-falah.jpg",
        },
        {
          role: "STAFF PROGRAM",
          name: "GIBSON LASANI CEA",
          photo: "/photos/gibson-lasani-cea.jpg",
        },
        {
          role: "STAFF PROGRAM",
          name: "RAKA ELDIANSYAH PUTRA",
          photo: "/photos/raka-eldiansyah-putra.jpg",
        },
        {
          role: "STAFF PROGRAM",
          name: "MUHAMMAD NASIPAL S.W.",
          photo: "/photos/muhammad-nasipal-sw.jpg",
        },
        {
          role: "STAFF PROGRAM",
          name: "FAHRI ALLIZZUDDIN",
          photo: "/photos/fahri-allizzuddin.jpg",
        },
        {
          role: "STAFF PROGRAM",
          name: "MOKHAMMAD KHOIRUL B.",
          photo: "/photos/mokhammad-khoirul-b.jpg",
        },
        {
          role: "STAFF PROGRAM",
          name: "YUNUS MARDIANSYAH",
          photo: "/photos/yunus-mardiansyah.jpg",
        },
      ],
    },
    {
      head: {
        role: "HEAD OF MECHANICS",
        name: "FRANKLYN LOKLAS M.",
        photo: "/photos/franklyn-loklas-m.jpg", // Example path
      },
      members: [
        {
          role: "STAFF MECHANICS",
          name: "PRADIPTA WIRAYUDA",
          photo: "/photos/pradipta-wirayuda.jpg",
        },
        {
          role: "STAFF MECHANICS",
          name: "ZAKI AHMAD FITRIAWAN",
          photo: "/photos/zaki-ahmad-fitriawan.jpg",
        },
        {
          role: "STAFF MECHANICS",
          name: "FAJAR BAYU MUSTAKIM",
          photo: "/photos/fajar-bayu-mustakim.jpg",
        },
        {
          role: "STAFF MECHANICS",
          name: "PANDITO TRI OKTAVIO",
          photo: "/photos/pandito-tri-oktavio.jpg",
        },
        {
          role: "STAFF MECHANICS",
          name: "NURIZKI ARI SAPUTRA",
          photo: "/photos/nurizki-ari-saputra.jpg",
        },
      ],
    },
  ],
};

// MemberCard component now accepts a 'photo' prop
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
      {/* Conditionally render image if photo path is provided */}
      {photo ? (
        <img src={photo} alt={name} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
          No Photo
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
      <Head>
        <title>Copter Team</title>
      </Head>

      {/* ================= PAGE 1 : copter ================= */}
      <section
        className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/copter1.png')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <h1 className="relative z-10 text-white text-5xl md:text-6xl font-extrabold">
          VTOL
        </h1>
      </section>

      {/* ================= PAGE 2 : Description Team ================= */}
      <section
        className="relative w-full min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-6 text-center"
        style={{ backgroundImage: "url('/bg-description-team.jpg')" }} // << FOTO BG 2
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-4xl">
          <h2 className="text-white text-4xl md:text-5xl font-extrabold mb-6">
            DESCRIPTION TEAM
          </h2>

          <p className="text-white text-lg leading-relaxed text-justify">
            Jentayu Copter Team, specializing in Vertical Take-Off Landing
            (VTOL) technology, focused on designing and developing a quad-copter
            style drone for the competition. The theme for this year, "Long-
            Range Autonomous Flight Mission with Indoor Flight Capabilities,"
            required teams to operate their drones autonomously within a
            designated area divided into two sections: one indoor and one
            outdoor. The competition tested teams' abilities to manage their
            aircraft across both environments. Indoor operations demanded
            precise control due to the confined spaces, while outdoor missions
            emphasized endurance and range.
          </p>
        </div>
      </section>

      {/* ================= PAGE 3 : Team Member ================= */}
      <section className="min-h-screen py-20 px-4 bg-gray-50 flex flex-col items-center text-gray-800">
        <h2 className="text-5xl font-extrabold mb-16 tracking-wide">
          TEAM MEMBER
        </h2>

        {/* Chief of VTOL */}
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

        {/* Sub-teams: Electrical, Program, Mechanics */}
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
