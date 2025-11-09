"use client";

import { Montserrat } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import { useInView } from "react-intersection-observer";
import ContactUsFooter from "./components/ContactUsFooter";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  // Intersection observers for each section
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const { ref: aboutRef, inView: aboutInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const { ref: robotRef, inView: robotInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: sponsorRef, inView: sponsorInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div className={montserrat.className}>
      {/* HERO SECTION */}
      <section
        ref={heroRef}
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/page1.png')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Konten */}
        <div
          style={{
            backgroundImage: 'url("/bg1.png")',
          }}
          className="text-white pl-20 justify-center flex flex-col h-screen bg-center bg-cover"
        >
          <Transition
            show={heroInView}
            enter="transition-all duration-1000 delay-300"
            enterFrom="opacity-0 -translate-x-12"
            enterTo="opacity-100 translate-x-0"
            as="h1"
            className="z-10 text-2xl md:text-5xl font-black italic mb-1 text-white"
          >
            JENTAYU TEAM
          </Transition>

          <Transition
            show={heroInView}
            enter="transition-all duration-1000 delay-500"
            enterFrom="opacity-0 -translate-x-12"
            enterTo="opacity-100 translate-x-0"
            as="p"
            className="italic text-white z-10 font-bold text-xl md:text-2xl"
          >
            UAV RESEARCH TEAM DIPONEGORO UNIVERSITY
          </Transition>
        </div>
      </section>

      {/* ABOUT US */}
      <section
        ref={aboutRef}
        className="h-screen flex items-center justify-center bg-gray-100"
      >
        <div className="container mx-auto p-8 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-16">
          {/* FOTO */}
          <Transition
            show={aboutInView}
            enter="transition-all duration-700 delay-200"
            enterFrom="opacity-0 -translate-x-12"
            enterTo="opacity-100 translate-x-0"
            as="div"
            className="w-full md:w-1/3 flex-shrink-0"
          >
            <div className="aspect-w-1 aspect-h-1 flex items-center justify-center p-12">
              <Image
                src="/about-us-photo.png"
                alt="About Us Image"
                height={338}
                width={549}
              />
            </div>
          </Transition>

          {/* DESKRIPSI ABOUT US */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <Transition
              show={aboutInView}
              enter="transition-all duration-700 delay-300"
              enterFrom="opacity-0 translate-y-8"
              enterTo="opacity-100 translate-y-0"
              as="h2"
              className="text-2xl lg:text-5xl font-extrabold mb-4 text-dark-grey"
            >
              About Us
            </Transition>

            <Transition
              show={aboutInView}
              enter="transition-all duration-700 delay-400"
              enterFrom="opacity-0 translate-y-8"
              enterTo="opacity-100 translate-y-0"
              as="p"
              className="text-gray-700 mb-6 leading-relaxed text-sm md:text-base"
            >
              This team was formed with a focus on innovation and breakthroughs
              in aeromodeling by developing efficiently designed UAVs. Operating
              within the rules of the competition is the community's goal.
            </Transition>

            <Transition
              show={aboutInView}
              enter="transition-all duration-700 delay-500"
              enterFrom="opacity-0 translate-y-8"
              enterTo="opacity-100 translate-y-0"
              as="div"
            >
              <Link
                href="/profile/about"
                className="inline-block text-sm md:text-base bg-gray-300 text-gray-800 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-400 transition duration-300"
              >
                About
              </Link>
            </Transition>
          </div>
        </div>
      </section>

      {/* OUR ROBOT */}
      <section
        ref={robotRef}
        className="min-h-screen flex flex-col items-center justify-center bg-white p-8 py-16"
      >
        <div className="w-full max-w-6xl flex flex-col items-center">
          <Transition
            show={robotInView}
            enter="transition-all duration-700 delay-100"
            enterFrom="opacity-0 translate-y-8"
            enterTo="opacity-100 translate-y-0"
            as="h2"
            className="text-center text-2xl md:text-5xl text-dark-grey font-extrabold mb-2 w-full"
          >
            Our Robot
          </Transition>

          <Transition
            show={robotInView}
            enter="transition-all duration-700 delay-200"
            enterFrom="opacity-0 translate-y-8"
            enterTo="opacity-100 translate-y-0"
            as="p"
            className="text-base md:text-lg mb-8 md:mb-12 w-full text-dark-grey text-center"
          >
            Stop Dreaming, Start Flying!
          </Transition>

          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-48 items-center justify-center">
            {/* Racing Plane */}
            <Transition
              show={robotInView}
              enter="transition-all duration-700 delay-300"
              enterFrom="opacity-0 scale-90 translate-y-8"
              enterTo="opacity-100 scale-100 translate-y-0"
              as="div"
              className="text-center"
            >
              <div className="w-40 h-40 md:w-48 md:h-48 relative mb-4 mx-auto">
                <Image
                  src="/robot-racing.png"
                  alt="Racing Plane"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <p className="font-bold text-base md:text-lg">Racing Plane</p>
            </Transition>

            {/* Fixed Wing */}
            <Transition
              show={robotInView}
              enter="transition-all duration-700 delay-400"
              enterFrom="opacity-0 scale-90 translate-y-8"
              enterTo="opacity-100 scale-100 translate-y-0"
              as="div"
              className="text-center"
            >
              <div className="w-40 h-40 md:w-48 md:h-48 relative mb-4 mx-auto md:-mt-36">
                <Image
                  src="/robot-wing.png"
                  alt="Fixed Wing"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <p className="font-bold text-base md:text-lg">Fixed Wing</p>
            </Transition>

            {/* VTOL */}
            <Transition
              show={robotInView}
              enter="transition-all duration-700 delay-500"
              enterFrom="opacity-0 scale-90 translate-y-8"
              enterTo="opacity-100 scale-100 translate-y-0"
              as="div"
              className="text-center"
            >
              <div className="w-40 h-40 md:w-48 md:h-48 relative mb-4 mx-auto">
                <Image
                  src="/robot-vtol.png"
                  alt="VTOL"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <p className="font-bold text-base md:text-lg">VTOL</p>
            </Transition>
          </div>
        </div>
      </section>

      {/* OUR SPONSORED */}
      <section
        ref={sponsorRef}
        className="h-screen flex flex-col items-center justify-center bg-gray-100 p-8"
      >
        <div className="max-h-full">
          <Transition
            show={sponsorInView}
            enter="transition-all duration-700 delay-100"
            enterFrom="opacity-0 translate-y-8"
            enterTo="opacity-100 translate-y-0"
            as="h2"
            className="text-2xl md:text-5xl text-center text-dark-grey font-extrabold mb-12"
          >
            Our Sponsored
          </Transition>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-4xl items-center">
            {[
              { src: "/solidworks.png", alt: "Solidworks Logo", w: 1920, h: 1080 },
              { src: "/ica.png", alt: "ICA Logo", w: 262, h: 249 },
              { src: "/gemfan.png", alt: "Gemfan Logo", w: 1920, h: 1080 },
              { src: "/cuav.png", alt: "Cuav Logo", w: 334, h: 96 },
              { src: "/innovstive.png", alt: "Innovative Logo", w: 1920, h: 1080 },
              { src: "/polymaker.png", alt: "Polymaker Logo", w: 1920, h: 1080 },
              { src: "/buaya-aerotech.png", alt: "Buaya Aerotech Logo", w: 1920, h: 1080 },
            ].map((logo, i) => (
              <Transition
                key={i}
                show={sponsorInView}
                enter={`transition-all duration-700 delay-[${200 + i * 100}ms]`}
                enterFrom="opacity-0 scale-90"
                enterTo="opacity-100 scale-100"
                as="div"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.w}
                  height={logo.h}
                  unoptimized
                />
              </Transition>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <ContactUsFooter />
    </div>
  );
}