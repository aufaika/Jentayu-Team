"use client";

import { Montserrat } from "next/font/google";
import { Transition } from "@headlessui/react";
import { useInView } from "react-intersection-observer";

import VisionMissionSection from "./VisionMissonSection";
import FilosofiLogoSection from "./FilosofiLogoSection";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function AboutPage() {
  const { ref: bannerRef, inView: bannerInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const { ref: contentRef, inView: contentInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div className={`bg-white text-gray-800 ${montserrat.className}`}>
      {/* SECTION PERTAMA: BANNER FULL HALAMAN */}
      <section
        ref={bannerRef}
        className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url('/about.png')` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <h1 className="relative z-10 text-white text-5xl md:text-6xl font-extrabold text-center leading-tight">
          <Transition
            show={bannerInView}
            enter="transition-all duration-1000 delay-300"
            enterFrom="opacity-0 -translate-y-12"
            enterTo="opacity-100 translate-y-0"
            as="span"
            className="block"
          >
            STOP DREAMING,
          </Transition>

          <Transition
            show={bannerInView}
            enter="transition-all duration-1000 delay-500"
            enterFrom="opacity-0 translate-y-12"
            enterTo="opacity-100 translate-y-0"
            as="span"
            className="block"
          >
            START FLYING
          </Transition>
        </h1>
      </section>

      {/* SECTION KEDUA: ABOUT US CONTENT */}
      <section
        ref={contentRef}
        className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 py-20"
      >
        <Transition
          show={contentInView}
          enter="transition-all duration-700 delay-200"
          enterFrom="opacity-0 translate-y-8"
          enterTo="opacity-100 translate-y-0"
          as="h2"
          className="text-4xl md:text-5xl text-dark-grey font-extrabold text-center mb-8"
        >
          About Us
        </Transition>

        <Transition
          show={contentInView}
          enter="transition-all duration-1000 delay-400"
          enterFrom="opacity-0 translate-y-12"
          enterTo="opacity-100 translate-y-0"
          as="p"
          className="max-w-3xl text-justify text-black leading-relaxed"
        >
          Jentayu Team was founded in 2017 by students of Diponegoro University.
          Initially, this team started as an Aeromodelling Club at Department of
          Mechanical Engineering but has since evolved into the university's
          leading autonomous Unmanned Aerial Vehicle (UAV) team. The Jentayu
          Team is located at Diponegoro University, Semarang, Central Java,
          Indonesia. This team was formed with a focus on innovation and
          breakthroughs in aeromodelling things by developing efficiently
          designed UAV. Operating in the appropriate rules of competition is the
          community's goal.
        </Transition>
      </section>

      {/* SECTION KETIGA: VISI DAN MISI */}
      <VisionMissionSection />

      {/* SECTION KEEMPAT: FILOSOFI LOGO */}
      <FilosofiLogoSection />
    </div>
  );
}
