import React from "react";
import { Montserrat, Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const montserrat = Montserrat({
  subsets: ["latin"],
});

const roboto = Roboto({ subsets: ["latin"] });

const ContactUsFooter = () => {
  return (
    <footer
      className={`${montserrat.className} pt-18 h-full flex flex-col justify-between text-white bg-dark-blue`}
    >
      {/* Konten utama */}
      <div className="flex-1 flex items-center justify-center px-8">
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
                src="/map-icon.png"
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
                src="/phone-icon.png"
                alt="Phone Icon"
                className="h-6"
                width={24}
                height={24}
              />
              <p className="font-semibold">+62-822-2528-3769</p>
            </div>
            <div className="mt-2 flex flex-row space-x-3 items-center">
              <Image
                src="/gmail-icon.png"
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
              className="flex flex-row space-x-2 items-center"
              href="https://instagram.com/undipjentayu"
            >
              <Image
                src="/instagram-icon.png"
                alt="Instagram Icon"
                className="h-7"
                width={28}
                height={28}
              />
              <p className="font-semibold">undipjentayu</p>
            </Link>
            <Link
              className="-ml-1.5 flex flex-row space-x-1 items-center"
              href="https://youtube.com/@jentayuuundip7239"
            >
              <Image
                src="/youtube-icon.png"
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
                src="/tiktok-icon.png"
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

      {/* Bagian bawah */}
      <div className="w-full">
        <div className="py-3 flex items-center justify-center space-x-8">
          <img src="/logo all.png" alt="Logo" className="h-10 object-contain" />
        </div>

        {/* copyright full abu-abu */}
        <div
          className={`bg-gray-200 py-3 text-center text-sm text-[#515050] ${roboto.className}`}
        >
          Copyright © Jentayu | 2025
        </div>
      </div>
    </footer>
  );
};

export default ContactUsFooter;
