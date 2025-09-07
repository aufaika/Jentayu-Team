import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
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
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: "80px",
            color: "white",
          }}
        >
          <h1
            style={{
              fontSize: "4rem",
              fontWeight: "900",
              fontStyle: "italic",
              marginBottom: "0.2rem",
              color: "#FFFFFF",
            }}
          >
            JENTAYU TEAM
          </h1>
          <p
            style={{
              fontSize: "1.5rem",
              fontWeight: "700",
              fontStyle: "italic",
              color: "#FFFFFF",
            }}
          >
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
              className="text-5xl font-extrabold mb-4"
              style={{ color: "#515050" }}
            >
              About Us
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              This team was formed with a focus on innovation and breakthroughs
              in aeromodeling by developing efficiently designed UAVs. Operating
              within the rules of the competition is the community's goal.
            </p>

            <Link
              href="/profile/about"
              className="inline-block bg-gray-300 text-gray-800 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-400 transition duration-300"
            >
              About
            </Link>
          </div>
        </div>
      </section>

      <section className="h-screen flex flex-col items-center justify-center bg-white p-8">
        <h2
          className="text-5xl font-extrabold mb-2"
          style={{ color: "#515050" }}
        >
          Our Robot
        </h2>
        <p className="text-lg mb-12" style={{ color: "#515050" }}>
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
            <p className="font-bold text-lg">Racing Plane</p>
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
            <p className="font-bold text-lg">Fixed Wing</p>
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
            <p className="font-bold text-lg">VTOL</p>
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
      <footer className="h-screen flex flex-col justify-between text-[#515050] bg-white">
        {/* Konten utama */}
        <div className="flex-1 flex items-center justify-center px-8">
          <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Logo / gambar kiri */}
            <div className="bg-gray-200 w-full h-60 flex items-center justify-center">
              <span className="font-bold">Logo / Image</span>
            </div>

            {/* Kontak */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
              <p className="font-bold">Student Center Universitas Diponegoro</p>
              <p className="text-sm leading-relaxed">
                Jl. Prof. Soedarto S.H, Tembalang, Kec. Tembalang, <br />
                Kota Semarang, Jawa Tengah, 50275
              </p>
              <p className="mt-4">📞 +62-822-2528-3769</p>
              <p className="mt-2">✉️ undip.jentayuteam@gmail.com</p>
            </div>

            {/* Sosmed */}
            <div className="flex flex-col space-y-4">
              <a
                href="https://instagram.com/undipjentayu"
                target="_blank"
                className="flex items-center space-x-2"
              >
                <span className="text-xl">📷</span>
                <span>undipjentayu</span>
              </a>
              <a
                href="https://youtube.com/@jentayuuundip7239"
                target="_blank"
                className="flex items-center space-x-2"
              >
                <span className="text-xl">▶️</span>
                <span>jentayuuundip7239</span>
              </a>
              <a
                href="https://tiktok.com/@jentayu.undip"
                target="_blank"
                className="flex items-center space-x-2"
              >
                <span className="text-xl">🎵</span>
                <span>jentayu.undip</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bagian bawah */}
        <div className="w-full">
          <div className="py-3 flex items-center justify-center space-x-8">
            <img
              src="/logo all.png"
              alt="Logo"
              className="h-10 object-contain"
            />
          </div>

          {/* copyright full abu-abu */}
          <div className="bg-gray-200 py-3 text-center text-sm text-[#515050]">
            © 2025 Jentayu. All Rights Reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
