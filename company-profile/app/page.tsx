import { Montserrat } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import ContactUsFooter from "./components/ContactUsFooter";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={montserrat.className}>
      {/* HERO SECTION */}
      <section
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
          <h1 className="z-10 text-2xl md:text-5xl font-black italic mb-1 text-white">
            JENTAYU TEAM
          </h1>
          <p className="italic text-white z-10 font-bold text-xl md:text-2xl">
            UAV RESEARCH TEAM DIPONEGORO UNIVERSITY
          </p>
        </div>
      </section>

      {/* ABOUT US */}
      <section className="h-screen flex items-center justify-center bg-gray-100">
        <div className="container mx-auto p-8 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-16">
          {/* FOTO */}
          <div className="w-full md:w-1/3 flex-shrink-0">
            <div className="aspect-w-1 aspect-h-1  flex items-center justify-center p-12">
              <Image
                src="/about-us-photo.png"
                alt="About Us Image"
                height={338}
                width={549}
              />
            </div>
          </div>

          {/* DESKRIPSI ABOUT US */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl lg:text-5xl font-extrabold mb-4 text-dark-grey">
              About Us
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed text-sm md:text-base">
              This team was formed with a focus on innovation and breakthroughs
              in aeromodeling by developing efficiently designed UAVs. Operating
              within the rules of the competition is the community's goal.
            </p>

            <Link
              href="/profile/about"
              className="inline-block text-sm md:text-base bg-gray-300 text-gray-800 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-400 transition duration-300"
            >
              About
            </Link>
          </div>
        </div>
      </section>

      <section className="min-h-screen flex flex-col items-center justify-center bg-white p-8 py-16">
        <div className="w-full max-w-6xl flex flex-col items-center">
          <h2 className="text-center text-2xl md:text-5xl text-dark-grey font-extrabold mb-2 w-full">
            Our Robot
          </h2>
          <p className="text-base md:text-lg mb-8 md:mb-12 w-full text-dark-grey text-center">
            Stop Dreaming, Start Flying!
          </p>

          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-48 items-center justify-center">
            <div className="text-center">
              <div className="w-40 h-40 md:w-48 md:h-48 relative mb-4 mx-auto">
                <Image
                  src="/robot-racing.png"
                  alt="Racing Plane"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <p className="font-bold text-base md:text-lg">Racing Plane</p>
            </div>

            <div className="text-center">
              <div className="w-40 h-40 md:w-48 md:h-48 relative mb-4 mx-auto md:-mt-36">
                <Image
                  src="/robot-wing.png"
                  alt="Fixed Wing"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <p className="font-bold text-base md:text-lg">Fixed Wing</p>
            </div>

            <div className="text-center">
              <div className="w-40 h-40 md:w-48 md:h-48 relative mb-4 mx-auto">
                <Image
                  src="/robot-vtol.png"
                  alt="VTOL"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <p className="font-bold text-base md:text-lg">VTOL</p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR SPONSORED */}
      <section className="h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
        <div className="max-h-full">
          <h2 className="text-2xl md:text-5xl text-center text-dark-grey font-extrabold mb-12">
            Our Sponsored
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-4xl items-center">
            <Image
              src="/solidworks.png"
              alt="Solidworks Logo"
              width={1920}
              height={1080}
              unoptimized
            />
            <Image
              src="/ica.png"
              alt="ICA Logo"
              width={262}
              height={249}
              unoptimized
            />
            <Image
              src="/gemfan.png"
              alt="Gemfan Logo"
              width={1920}
              height={1080}
              unoptimized
            />
            <Image
              src="/cuav.png"
              alt="Cuav Logo"
              width={334}
              height={96}
              unoptimized
            />
            <Image
              src="/innovstive.png"
              alt="Innovative Logo"
              width={1920}
              height={1080}
              unoptimized
            />
            <Image
              src="/polymaker.png"
              alt="Polymaker Logo"
              width={1920}
              height={1080}
              unoptimized
            />
            <Image
              src="/buaya-aerotech.png"
              alt="Buaya Aerotech Logo"
              width={1920}
              height={1080}
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <ContactUsFooter />
    </div>
  );
}
