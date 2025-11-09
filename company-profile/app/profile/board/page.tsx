"use client";

import ContactUsFooter from "@/app/components/ContactUsFooter";
import { Montserrat } from "next/font/google";
import { Transition } from "@headlessui/react";
import { useInView } from "react-intersection-observer";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function BoardPage() {
  const { ref: bannerRef, inView: bannerInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const { ref: contentRef, inView: contentInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: gmRef, inView: gmInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const { ref: headsRef, inView: headsInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const { ref: nonTechRef, inView: nonTechInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <>
      <div className={`bg-gray-100 ${montserrat.className}`}>
        {/* ========================================================= */}
        {/* BAGIAN PERTAMA: DESKRIPSI BOARD OF DIRECTORS */}
        {/* ========================================================= */}
        <section
          ref={bannerRef}
          className="relative w-full h-screen bg-cover bg-center flex flex-col items-center justify-center text-center"
          style={{ backgroundImage: "url('/board1.png')" }}
        >
          {/* Overlay hitam transparan */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Konten */}
          <div className="relative z-10 max-w-3xl px-6">
            {/* Judul */}
            <Transition
              show={bannerInView}
              enter="transition-all duration-1000 delay-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              as="h2"
              className="text-5xl font-extrabold mb-6 text-white uppercase"
            >
              Board of Directors
            </Transition>
          </div>
        </section>

        {/* ========================================================= */}
        {/* BAGIAN KEDUA: STRUKTUR ORGANISASI */}
        {/* ========================================================= */}

        <section
          ref={contentRef}
          className="min-h-screen py-20 px-8 text-center bg-gray-100 flex flex-col justify-center items-center"
        >
          <Transition
            show={contentInView}
            enter="transition-all duration-700 delay-100"
            enterFrom="opacity-0 translate-y-8"
            enterTo="opacity-100 translate-y-0"
            as="h2"
            className="text-2xl md:text-5xl font-extrabold mb-7 text-dark-grey"
          >
            Board Of Directors
          </Transition>

          <Transition
            show={contentInView}
            enter="transition-all duration-700 delay-200"
            enterFrom="opacity-0 translate-y-8"
            enterTo="opacity-100 translate-y-0"
            as="p"
            className="mb-12 max-w-3/4 text-justify font-medium text-black text-sm md:text-base"
          >
            Jentayu Team is an innovative collaborative platform that combines
            the expertise of two main pillars: the Technical Division and the
            Non-Technical Division. The Technical Division, which is the
            operational heart of the team, is strengthened by experts in the
            fields of Mechanics, Electronics, and Programming. Meanwhile, the
            Non-Technical Division ensures the team's stability and reach
            through the strategic roles of Internal Affairs, External Affairs,
            and Media. The team is open to all students from various faculties
            at Diponegoro University to participate and contribute to achieving
            brilliant accomplishments.
          </Transition>

          {/* General Manager */}
          <Transition
            show={gmInView}
            enter="transition-all duration-700 delay-300"
            enterFrom="opacity-0 scale-90"
            enterTo="opacity-100 scale-100"
            as="div"
            className="flex flex-col items-center mb-20"
          >
            <div ref={gmRef} className="w-32 h-32 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
              foto
            </div>
            <p className="font-extrabold text-sm md:text-base text-dark-grey">
              GENERAL MANAGER
            </p>
            <p className="-mt-1 text-dark-grey text-sm md:text-base font-light">
              MUHAMMAD ULIL AHKAM
            </p>
          </Transition>

          {/* Head of Technical & Non-Technical */}
          <div
            ref={headsRef}
            className="flex flex-col md:flex-row justify-center items-center md:gap-x-32 mb-16"
          >
            <Transition
              show={headsInView}
              enter="transition-all duration-700 delay-200"
              enterFrom="opacity-0 -translate-x-12"
              enterTo="opacity-100 translate-x-0"
              as="div"
              className="text-center flex flex-col items-center"
            >
              <div className="w-32 h-32 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
                foto
              </div>
              <p className="font-extrabold text-dark-grey text-sm md:text-base">
                HEAD OF TECHNICAL
              </p>
              <p className="-mt-1 text-sm md:text-base text-dark-grey font-light">
                MUHAMMAD HASAN AL FATHIN
              </p>
            </Transition>

            <Transition
              show={headsInView}
              enter="transition-all duration-700 delay-400"
              enterFrom="opacity-0 translate-x-12"
              enterTo="opacity-100 translate-x-0"
              as="div"
              className="text-center flex flex-col items-center"
            >
              <div className="w-32 h-32 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
                foto
              </div>
              <p className="font-extrabold text-sm md:text-base text-dark-grey">
                HEAD OF NON TECHNICAL
              </p>
              <p className="-mt-1 text-sm md:text-base text-dark-grey font-light">
                HANIFAH ADITYASARI PUTRI WIYANRES
              </p>
            </Transition>
          </div>

          {/* Non-Technical Division Title */}
          <Transition
            show={nonTechInView}
            enter="transition-all duration-700 delay-100"
            enterFrom="opacity-0 translate-y-8"
            enterTo="opacity-100 translate-y-0"
            as="h3"
            className="text-xl md:text-4xl font-extrabold mt-16 mb-12 text-dark-grey"
          >
            Non-Technical Division
          </Transition>

          {/* Non-Technical Division Members */}
          <div
            ref={nonTechRef}
            className="flex flex-col md:flex-row justify-center items-center md:gap-x-32"
          >
            <Transition
              show={nonTechInView}
              enter="transition-all duration-700 delay-200"
              enterFrom="opacity-0 scale-90"
              enterTo="opacity-100 scale-100"
              as="div"
              className="text-center flex flex-col items-center"
            >
              <div className="w-32 h-32 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
                foto
              </div>
              <p className="font-extrabold text-sm md:text-base text-dark-grey">
                HEAD OF INTERNAL
              </p>
              <p className="-mt-1 text-sm md:text-base text-dark-grey font-light">
                ARIESTA PERMATASARI
              </p>
            </Transition>

            <Transition
              show={nonTechInView}
              enter="transition-all duration-700 delay-350"
              enterFrom="opacity-0 scale-90"
              enterTo="opacity-100 scale-100"
              as="div"
              className="text-center flex flex-col items-center"
            >
              <div className="w-32 h-32 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
                foto
              </div>
              <p className="font-extrabold text-sm md:text-base text-dark-grey">
                HEAD OF EXTERNAL
              </p>
              <p className="-mt-1 text-sm md:text-base text-dark-grey font-light">
                CALISTA ELECTRA NARESWARI
              </p>
            </Transition>

            <Transition
              show={nonTechInView}
              enter="transition-all duration-700 delay-500"
              enterFrom="opacity-0 scale-90"
              enterTo="opacity-100 scale-100"
              as="div"
              className="text-center flex flex-col items-center"
            >
              <div className="w-32 h-32 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
                foto
              </div>
              <p className="font-extrabold text-sm md:text-base text-dark-grey">
                HEAD OF MEDIA
              </p>
              <p className="-mt-1 text-sm md:text-base text-dark-grey font-light">
                DHAFIN RAHMAT RAMDHANI
              </p>
            </Transition>
          </div>
        </section>
      </div>
      <ContactUsFooter />
    </>
  );
}