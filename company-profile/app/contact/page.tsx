"use client";

import { Montserrat, Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import ContactUsFooter from "../components/ContactUsFooter";
const roboto = Roboto({ subsets: ["latin"] });

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function ContactPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* SECTION PERTAMA: BANNER FULL HALAMAN */}
      <section
        className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url('/contact.png')` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative z-10 text-white text-5xl md:text-6xl font-extrabold">
          CONTACT US
        </h1>
      </section>

      {/* FOOTER */}
      <footer
        className={`${montserrat.className} pt-18 h-full flex flex-col justify-between text-dark-grey`}
      >
        {/* Konten utama */}
        <div className="flex-1 flex items-center justify-center px-8 pb-18">
          <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
            {/* Logo / gambar kiri */}
            <div className="bg-gray-200 w-full h-60 flex items-center justify-center">
              <span className="font-bold">Logo / Image</span>
            </div>

            {/* Kontak */}
            <div>
              <h3 className="text-2xl font-extrabold mb-4">Contact Us</h3>
              <div className="flex flex-row space-x-3">
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
              </div>
              <div className="mt-2 flex flex-row space-x-3 items-center">
                <Image
                  src="/phone.svg"
                  alt="Phone Icon"
                  className="h-6"
                  width={24}
                  height={24}
                />
                <p className="font-semibold">+62-822-2528-3769</p>
              </div>
              <div className="mt-2 flex flex-row space-x-3 items-center">
                <Image
                  src="/Email.svg"
                  alt="Gmail Icon"
                  className="h-6"
                  width={24}
                  height={24}
                />
                <p className="font-semibold">undip.jentayuteam@gmail.com</p>
              </div>
            </div>

            {/* Sosmed */}
            <div className="flex flex-col space-y-4 md:pt-10">
              <Link
                className="-ml-2 flex flex-row space-x-2 items-center"
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
              </Link>
              <Link
                className="-ml-1.5 flex flex-row space-x-1 items-center"
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
              </Link>
              <Link
                className="-ml-2 flex flex-row space-x-2 items-center"
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
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <ContactUsFooter />
    </div>
  );
}
