"use client";

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
            Copyright © Jentayu | 2025
          </div>
        </div>
      </footer>
    </div>
  );
}
