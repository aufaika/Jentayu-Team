"use client";

import Image from "next/image";
import Link from "next/link";
import { Montserrat, Roboto } from "next/font/google";
import { Transition } from "@headlessui/react";
import { useInView } from "react-intersection-observer";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function ContactPage() {
  const { ref: bannerRef, inView: bannerInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const { ref: contentRef, inView: contentInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div className="bg-white text-gray-800">
      {/* SECTION PERTAMA: BANNER FULL HALAMAN */}
      <section
        ref={bannerRef}
        className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url('/contact.png')` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <Transition
          show={bannerInView}
          enter="transition-all duration-1000 delay-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          as="h1"
          className="relative z-10 text-white text-5xl md:text-6xl font-extrabold"
        >
          CONTACT US
        </Transition>
      </section>

      {/* FOOTER */}
      <footer
        ref={contentRef}
        className={`${montserrat.className} pt-18 h-full flex flex-col justify-between text-dark-grey`}
      >
        {/* Konten utama */}
        <div className="flex-1 flex items-center justify-center px-8 pb-18">
          <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
            {/* Logo / gambar kiri */}
            <Transition
              show={contentInView}
              enter="transition-all duration-700 delay-200"
              enterFrom="opacity-0 -translate-x-12"
              enterTo="opacity-100 translate-x-0"
              as="div"
              className="bg-gray-200 w-full h-60 flex items-center justify-center"
            >
              <span className="font-bold">Logo / Image</span>
            </Transition>

            {/* Kontak */}
            <Transition
              show={contentInView}
              enter="transition-all duration-700 delay-350"
              enterFrom="opacity-0 translate-y-12"
              enterTo="opacity-100 translate-y-0"
              as="div"
            >
              <h3 className="text-2xl font-extrabold mb-4">Contact Us</h3>

              <Transition
                show={contentInView}
                enter="transition-all duration-700 delay-450"
                enterFrom="opacity-0 translate-x-8"
                enterTo="opacity-100 translate-x-0"
                as="div"
                className="flex flex-row space-x-3"
              >
                <Image
                  src="/Location.svg"
                  alt="Map Icon"
                  className="h-7"
                  width={28}
                  height={28}
                />
                <div>
                  <p className="font-bold">
                    Student Center Universitas Diponegoro
                  </p>
                  <p className="text-sm leading-relaxed font-medium">
                    Jl. Prof. Soedarto S.H, Tembalang, Kec. Tembalang, <br />
                    Kota Semarang, Jawa Tengah, 50275
                  </p>
                </div>
              </Transition>

              <Transition
                show={contentInView}
                enter="transition-all duration-700 delay-550"
                enterFrom="opacity-0 translate-x-8"
                enterTo="opacity-100 translate-x-0"
                as="div"
                className="mt-2 flex flex-row space-x-3 items-center"
              >
                <Image
                  src="/phone.svg"
                  alt="Phone Icon"
                  className="h-6"
                  width={24}
                  height={24}
                />
                <p className="font-semibold">+62-822-2528-3769</p>
              </Transition>

              <Transition
                show={contentInView}
                enter="transition-all duration-700 delay-650"
                enterFrom="opacity-0 translate-x-8"
                enterTo="opacity-100 translate-x-0"
                as="div"
                className="mt-2 flex flex-row space-x-3 items-center"
              >
                <Image
                  src="/Email.svg"
                  alt="Gmail Icon"
                  className="h-6"
                  width={24}
                  height={24}
                />
                <p className="font-semibold">undip.jentayuteam@gmail.com</p>
              </Transition>
            </Transition>

            {/* Sosmed */}
            <div className="flex flex-col space-y-4 md:pt-10">
              <Transition
                show={contentInView}
                enter="transition-all duration-700 delay-500"
                enterFrom="opacity-0 translate-x-12"
                enterTo="opacity-100 translate-x-0"
                as={Link}
                className="-ml-2 flex flex-row space-x-2 items-center hover:scale-105 transition-transform"
                href="https://instagram.com/undipjentayu"
              >
                <Image
                  src="/Instagram Circle.svg"
                  alt="Instagram Icon"
                  className="h-11"
                  width={44}
                  height={44}
                />
                <p className="-ml-1.5 font-semibold">undipjentayu</p>
              </Transition>

              <Transition
                show={contentInView}
                enter="transition-all duration-700 delay-600"
                enterFrom="opacity-0 translate-x-12"
                enterTo="opacity-100 translate-x-0"
                as={Link}
                className="-ml-1.5 flex flex-row space-x-1 items-center hover:scale-105 transition-transform"
                href="https://youtube.com/@jentayuuundip7239"
              >
                <Image
                  src="/YouTube.svg"
                  alt="Youtube Icon"
                  className="h-10"
                  width={40}
                  height={40}
                />
                <p className="font-semibold">jentayuuundip7239</p>
              </Transition>

              <Transition
                show={contentInView}
                enter="transition-all duration-700 delay-700"
                enterFrom="opacity-0 translate-x-12"
                enterTo="opacity-100 translate-x-0"
                as={Link}
                className="-ml-2 flex flex-row space-x-2 items-center hover:scale-105 transition-transform"
                href="https://tiktok.com/@jentayu.undip"
              >
                <Image
                  src="/TikTok.svg"
                  alt="Tiktok Icon"
                  className="h-11"
                  width={40}
                  height={44}
                />
                <p className="-ml-0.5 font-semibold">jentayu.undip</p>
              </Transition>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
