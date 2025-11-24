"use client";

import Image from "next/image";
import { Transition } from "@headlessui/react";
import { useInView } from "react-intersection-observer";

export default function FilosofiLogoSection() {
  const { ref: logoRef, inView: logoInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const philosophies = [
    {
      title: "Siluet Gambar Pesawat",
      description:
        "Menggambarkan fokus kita terhadap pengembangan teknologi berbasis kedirgantaraan.",
    },
    {
      title: "Sayap Pesawat",
      description:
        'Sayap pesawat yang terlihat seperti kerangka yang saling menyatu, dan ada tulisan "Jentayu". Menggambarkan keberhasilan dicapai dengan semangat kesatuan antar tim Jentayu.',
    },
    {
      title: "Arah Terbang Pesawat",
      description:
        "Arah terbang pesawat yang selalu ke atas yang menggambarkan cita-cita dan fokus tim untuk selalu mengarah ke yang lebih baik dengan prestasi yang tinggi.",
    },
    {
      title: "Warna Biru",
      description:
        "Warna biru menggambarkan kegagahan dan kemegahan Jentayu saat berada di langit.",
    },
    {
      title: "Lingkaran",
      description:
        "Lingkaran menggambarkan kebulatan tekad dan kesatuan hati tim Jentayu untuk mencapai cita-cita.",
    },
  ];

  return (
    <section
      ref={logoRef}
      className="w-full min-h-screen bg-white px-6 py-20 flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <Transition
          show={logoInView}
          enter="transition-all duration-700 delay-200"
          enterFrom="opacity-0 translate-y-8"
          enterTo="opacity-100 translate-y-0"
          as="h2"
          className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-gray-800"
        >
          Filosofi Logo
        </Transition>

        {/* Logo di tengah atas */}
        <Transition
          show={logoInView}
          enter="transition-all duration-1000 delay-400"
          enterFrom="opacity-0 scale-90"
          enterTo="opacity-100 scale-100"
        >
          <div className="flex justify-center mb-12">
            <Image
              src="/jentayu-logo.png"
              alt="Logo Jentayu"
              width={1920}
              height={1080}
              className="w-[250px] md:w-[429px] h-[250px] md:h-[429px]"
            />
          </div>
        </Transition>

        {/* Grid Cards - 3 atas, 2 bawah */}
        <div className="space-y-6">
          {/* Baris pertama - 3 cards */}
          <div className="grid md:grid-cols-3 gap-12">
            {philosophies.slice(0, 3).map((item, index) => (
              <Transition
                key={index}
                show={logoInView}
                enter={`transition-all duration-1000 delay-[${
                  600 + index * 150
                }ms]`}
                enterFrom="opacity-0 translate-y-12"
                enterTo="opacity-100 translate-y-0"
              >
                <div className="bg-bg-black text-white rounded-2xl p-6 shadow-xl md:h-[326px]">
                  <h3 className="text-lg md:text-2xl mb-4 text-center font-black">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-justify">
                    {item.description}
                  </p>
                </div>
              </Transition>
            ))}
          </div>

          {/* Baris kedua - 2 cards centered */}
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {philosophies.slice(3, 5).map((item, index) => (
              <Transition
                key={index + 3}
                show={logoInView}
                enter={`transition-all duration-1000 delay-[${
                  1050 + index * 150
                }ms]`}
                enterFrom="opacity-0 translate-y-12"
                enterTo="opacity-100 translate-y-0"
              >
                <div className="bg-bg-black text-white rounded-2xl p-6 shadow-xl md:h-[326px]">
                  <h3 className="text-lg md:text-2xl mb-4 text-center font-black">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-justify">
                    {item.description}
                  </p>
                </div>
              </Transition>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
