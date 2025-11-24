"use client";

import Image from "next/image";
import { Transition } from "@headlessui/react";
import { useInView } from "react-intersection-observer";

export default function VisionMissionSection() {
  const { ref: visionRef, inView: visionInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section
      ref={visionRef}
      className="w-full min-h-screen bg-gray-50 px-6 py-20 flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <Transition
          show={visionInView}
          enter="transition-all duration-700 delay-200"
          enterFrom="opacity-0 translate-y-8"
          enterTo="opacity-100 translate-y-0"
          as="h2"
          className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-gray-800"
        >
          Vision & Mission
        </Transition>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LOGO JENTAYU - KIRI */}
          <Transition
            show={visionInView}
            enter="transition-all duration-1000 delay-400"
            enterFrom="opacity-0 -translate-x-12"
            enterTo="opacity-100 translate-x-0"
          >
            <div className="flex flex-col items-center">
              <Image
                src="/jentayu-logo.png"
                alt="Logo Jentayu"
                width={1920}
                height={1080}
                className="w-[250px] md:w-[429px] h-[250px] md:h-[429px]"
              />
              <h3 className="md:mt-12 text-3xl md:text-5xl font-black text-gray-800">
                Jentayu UNDIP
              </h3>
            </div>
          </Transition>

          {/* VISI DAN MISI - KANAN */}
          <div className="space-y-6">
            <Transition
              show={visionInView}
              enter="transition-all duration-1000 delay-600"
              enterFrom="opacity-0 translate-x-12"
              enterTo="opacity-100 translate-x-0"
            >
              <div className="bg-navy text-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-xl md:text-3xl font-bold mb-4">Vision</h3>
                <p className="text-sm md:text-base leading-relaxed text-justify">
                  Jentayu UNDIP 2025 as a close, collaborative, and outstanding
                  organization that serves as a platform for research and
                  innovation development in the field of UAVs
                </p>
              </div>
            </Transition>

            <Transition
              show={visionInView}
              enter="transition-all duration-1000 delay-800"
              enterFrom="opacity-0 translate-x-12"
              enterTo="opacity-100 translate-x-0"
            >
              <div className="bg-navy text-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-xl md:text-3xl font-bold mb-4">Mission</h3>
                <ol className="space-y-3 text-sm md:text-base leading-relaxed list-decimal list-inside text-justify">
                  <li>
                    To foster an internal spirit of pride, professionalism, and
                    solidarity among all members of Jentayu UNDIP.
                  </li>
                  <li>
                    To enhance the capacity and competence of members through
                    training, mentoring, and research activities that are
                    adaptive to UAV technological advancements.
                  </li>
                  <li>
                    To establish collaborative networks with internal and
                    external partners to strengthen the UAV research ecosystem
                    within Jentayu UNDIP.
                  </li>
                  <li>
                    To implement a structured and sustainable research system
                    aimed at producing scientific works, innovations, and UAV
                    products that are applicable and competitive.
                  </li>
                </ol>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </section>
  );
}
