"use client";

import React from "react";
import Head from "next/head";
import { Montserrat } from "next/font/google";
import { Transition } from "@headlessui/react";
import { useInView } from "react-intersection-observer";

const montserrat = Montserrat({
  subsets: ["latin"],
});

const teamData = {
  chief: {
    role: "CHIEF OF FIXED WING",
    name: "ARIF AINURROFIQ",
    photo: "/photos/arif-ainurrofiq.jpg",
  },
  projectManager: {
    role: "PROJECT MANAGER",
    name: "SYAHMI AL-QALBY",
    photo: "/photos/syahmi-al-qalby.jpg",
  },
  media: {
    role: "MEDIA",
    name: "DEO SUHADA",
    photo: "/photos/deo-suhada.jpg",
  },
  subTeams: [
    {
      head: {
        role: "HEAD OF ELECTRICAL",
        name: "CALIH CATUR PRABOWO",
        photo: "/photos/calih-catur-prabowo.jpg",
      },
      members: [
        {
          role: "STAFF ELECTRICAL",
          name: "AHMAD RIQQY R.",
          photo: "/photos/ahmad-riqqy-r.jpg",
        },
        {
          role: "STAFF ELECTRICAL",
          name: "SURYA SAQIF P.M",
          photo: "/photos/surya-saqif-p.m.jpg",
        },
        {
          role: "STAFF ELECTRICAL",
          name: "MOHAMMAD DANISH N.F",
          photo: "/photos/mohammad-danish-n.f.jpg",
        },
        {
          role: "STAFF ELECTRICAL",
          name: "ADIGUNA ARYA L.",
          photo: "/photos/adiguna-arya-l.jpg",
        },
        {
          role: "STAFF ELECTRICAL",
          name: "MUHAMMAD ADITYA S.",
          photo: "/photos/muhammad-aditya-s.jpg",
        },
      ],
    },
    {
      head: {
        role: "HEAD OF DESIGN",
        name: "UMAR ABDUL AZIZ",
        photo: "/photos/umar-abdul-aziz.jpg",
      },
      members: [
        {
          role: "STAFF DESIGN",
          name: "NUR AR-ROUF",
          photo: "/photos/nur-ar-rouf.jpg",
        },
        {
          role: "STAFF DESIGN",
          name: "MUHAMMAD HILMI A.",
          photo: "/photos/muhammad-hilmi-a.jpg",
        },
        {
          role: "STAFF DESIGN",
          name: "ALVIN SUGIARTO",
          photo: "/photos/alvin-sugiarto.jpg",
        },
        {
          role: "STAFF DESIGN",
          name: "FIKRI FATHURROHMAN",
          photo: "/photos/fikri-fathurrohman.jpg",
        },
        {
          role: "STAFF DESIGN",
          name: "BRAGY NIZAR ADI BRATA",
          photo: "/photos/bragy-nizar-adi-brata.jpg",
        },
      ],
    },
    {
      head: {
        role: "HEAD OF MANUFACTURE",
        name: "ROBYO TRI SUHENDAR",
        photo: "/photos/robyo-tri-suhendar.jpg",
      },
      members: [
        {
          role: "STAFF MANUFACTURE",
          name: "WILLIAM ALEXANDER S.",
          photo: "/photos/william-alexander-s.jpg",
        },
        {
          role: "STAFF MANUFACTURE",
          name: "NURUL AULIA",
          photo: "/photos/nurul-aulia.jpg",
        },
        {
          role: "STAFF MANUFACTURE",
          name: "ACHMAD FAUZY R.",
          photo: "/photos/achmad-fauzy-r.jpg",
        },
        {
          role: "STAFF MANUFACTURE",
          name: "ABIYAKSA NUR FAHREZA",
          photo: "/photos/abiyaksa-nur-fahreza.jpg",
        },
        {
          role: "STAFF MANUFACTURE",
          name: "NURIZKI ARI SAPUTRA",
          photo: "/photos/nurizki-ari-saputra.jpg",
        },
      ],
    },
  ],
};

const MemberCard = ({
  role,
  name,
  photo,
  show,
  delay = 0,
}: {
  role: string;
  name: string;
  photo: string;
  show: boolean;
  delay?: number;
}) => (
  <Transition
    show={show}
    enter={`transition-all duration-700 delay-[${delay}ms]`}
    enterFrom="opacity-0 scale-90"
    enterTo="opacity-100 scale-100"
    as="div"
    className={`flex flex-col items-center text-center ${montserrat.className}`}
  >
    <div className="w-24 h-24 rounded-lg overflow-hidden shadow-lg mb-2">
      <img src={photo} alt={name} className="w-full h-full object-cover" />
    </div>
    <p className="font-bold text-gray-800 text-sm leading-tight">{role}</p>
    <p className="text-gray-600 mt-1 text-xs leading-tight">{name}</p>
  </Transition>
);

export default function Aeromapper() {
  const { ref: bannerRef, inView: bannerInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const { ref: descRef, inView: descInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const { ref: teamRef, inView: teamInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: chiefRef, inView: chiefInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const { ref: managersRef, inView: managersInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const { ref: subTeamsRef, inView: subTeamsInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div className={`w-full ${montserrat.className}`}>
      <Head>
        <title>FIXED WING</title>
      </Head>

      {/* Page 1: Jumbotron */}
      <section
        ref={bannerRef}
        className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url('/aeromapper1.png')` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <Transition
          show={bannerInView}
          enter="transition-all duration-1000 delay-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          as="h1"
          className="relative z-10 text-white text-5xl md:text-6xl font-extrabold"
        >
          FIXED WING
        </Transition>
      </section>

      {/* Page 2: Description Team */}
      <section
        ref={descRef}
        className="relative w-full min-h-screen bg-cover bg-center flex flex-col items-center justify-center p-8 text-center"
        style={{ backgroundImage: `url('/bg-description-team.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-4xl">
          <Transition
            show={descInView}
            enter="transition-all duration-700 delay-200"
            enterFrom="opacity-0 translate-y-8"
            enterTo="opacity-100 translate-y-0"
            as="h2"
            className="text-white text-4xl md:text-5xl font-extrabold mb-6"
          >
            DESCRIPTION TEAM
          </Transition>
          <Transition
            show={descInView}
            enter="transition-all duration-1000 delay-400"
            enterFrom="opacity-0 translate-y-12"
            enterTo="opacity-100 translate-y-0"
            as="p"
            className="text-white text-lg leading-relaxed text-justify"
          >
            Jentayu Aeromapper is a fixed-wing model UAV (Unmanned Aerial
            Vehicle) Team focused on both remote piloting and autonomous flight
            operations. It is equipped with capabilities to carry out various
            missions, such as monitoring, mapping, and payload delivery. In
            2024, Jentayu Aeromapper participated in the Kontes Robot Terbang
            Indonesia (KRTI), where the theme of the competition was "First
            Responder in River Disaster Areas." This mission was designed to
            test and demonstrate the UAV's capabilities in addressing the
            challenges of disaster response in river regions.
          </Transition>
        </div>
      </section>

      {/* Page 3: Team Member */}
      <section
        ref={teamRef}
        className="min-h-screen py-20 px-4 bg-gray-50 flex flex-col items-center text-gray-800"
      >
        <Transition
          show={teamInView}
          enter="transition-all duration-700 delay-100"
          enterFrom="opacity-0 translate-y-8"
          enterTo="opacity-100 translate-y-0"
          as="h2"
          className="text-5xl font-extrabold mb-16 tracking-wide"
        >
          TEAM MEMBER
        </Transition>

        {/* Chief of Fixed Wing */}
        <div ref={chiefRef} className="flex justify-center mb-8">
          <MemberCard
            role={teamData.chief.role}
            name={teamData.chief.name}
            photo={teamData.chief.photo}
            show={chiefInView}
            delay={200}
          />
        </div>

        {/* Project Manager and Media */}
        <div ref={managersRef} className="flex justify-around w-full max-w-3xl mb-12">
          <MemberCard
            role={teamData.projectManager.role}
            name={teamData.projectManager.name}
            photo={teamData.projectManager.photo}
            show={managersInView}
            delay={200}
          />
          <MemberCard
            role={teamData.media.role}
            name={teamData.media.name}
            photo={teamData.media.photo}
            show={managersInView}
            delay={350}
          />
        </div>

        {/* Sub-teams: Electrical, Design, Manufacture */}
        <div
          ref={subTeamsRef}
          className="flex flex-col md:flex-row justify-between items-start w-full max-w-6xl space-y-12 md:space-y-0 md:space-x-8"
        >
          {teamData.subTeams.map((team, index) => (
            <div key={index} className="flex flex-col items-center w-full">
              <MemberCard
                role={team.head.role}
                name={team.head.name}
                photo={team.head.photo}
                show={subTeamsInView}
                delay={200 + index * 150}
              />
              <div className="flex flex-col items-center mt-8 space-y-8">
                {team.members.map((member, subIndex) => (
                  <MemberCard
                    key={subIndex}
                    role={member.role}
                    name={member.name}
                    photo={member.photo}
                    show={subTeamsInView}
                    delay={400 + index * 150 + subIndex * 100}
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