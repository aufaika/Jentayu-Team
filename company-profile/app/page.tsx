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
            <div className="aspect-w-1 aspect-h-1 bg-gray-300 flex items-center justify-center p-12">
              <span className="text-xl font-bold">foto</span>
            </div>
          </div>

          {/* DESKRIPSI ABOUT US */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2
              className="text-2xl lg:text-5xl font-extrabold mb-4 text-dark-grey"
            >
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

      <section className="h-screen flex flex-col items-center justify-center bg-white p-8">
        <h2
          className="text-2xl md:text-5xl font-extrabold mb-2"
          style={{ color: "#515050" }}
        >
          Our Robot
        </h2>
        <p className="text-base md:text-lg mb-12" style={{ color: "#515050" }}>
          Stop Dreaming, Start Flying!
        </p>

        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16">
          <div className="text-center">
            <div className="w-48 h-48 relative mb-4">
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
            <div className="w-48 h-48 relative mb-4">
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
            <div className="w-48 h-48 relative mb-4">
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
      </section>

      {/* OUR SPONSORED */}
      <section className="h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
        <h2
          className="text-5xl font-extrabold mb-12"
          style={{ color: "#515050" }}
        >
          Our Sponsored
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-4xl">
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="w-32 h-32 bg-gray-200 flex items-center justify-center"
              >
                {/* Tempat Logo Sponsor */}
              </div>
            ))}
        </div>
      </section>

      {/* FOOTER */}
      <ContactUsFooter />
    </div>
  );
}
