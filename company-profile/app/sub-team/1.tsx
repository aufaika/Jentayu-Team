// Pastikan Anda sudah menginstal dan mengkonfigurasi Tailwind CSS
// import 'tailwindcss/tailwind.css';

export default function SubTeam() {
  return (
    <div className="bg-gray-100">
      {/* ========================================================= */}
      {/* BAGIAN 1: JUDUL DAN DESKRIPSI TIM RACING PLANE */}
      {/* ========================================================= */}
      <section className="min-h-screen py-20 px-8 text-center bg-white flex flex-col justify-center items-center">
        <h2
          className="text-5xl font-extrabold mb-4"
          style={{ color: "#515050" }}
        >
          RACING PLANE
        </h2>
      </section>

      {/* ========================================================= */}
      {/* BAGIAN 2: LOGO DAN DESKRIPSI TAMBAHAN */}
      {/* ========================================================= */}
      <section className="min-h-screen py-20 px-8 text-center bg-gray-100 flex flex-col justify-center items-center">
        {/* Placeholder Logo */}
        <div className="w-32 h-32 bg-gray-300 rounded-lg mb-8 flex items-center justify-center">
          logo rp
        </div>

        <h3
          className="text-4xl font-extrabold mb-4"
          style={{ color: "#515050" }}
        >
          DESCRIPTION TEAM
        </h3>

        {/* Deskripsi tim tambahan (sama dengan bagian 1, sesuai gambar) */}
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-gray-700 leading-relaxed mx-auto">
            Jentayu Racing Plane team participated in a time attack-style
            competition under the"Fast and On Track"theme. This challenge
            required participants to demonstrate both speed and precision, as
            they navigated their aircraft through a designated course. Teams had
            to launch their aircraft swiftly, maneuver through the course
            efficiently, and reach the finish line as quickly as possible, all
            while executing a smooth and controlled landing. This theme
            highlights the importance of both rapid performance and precision in
            aircraft control, making it a thrilling and high- stakes event for
            participants.
          </p>
        </div>
      </section>
      {/* ========================================================= */}
      {/* BAGIAN 3: TEAM MEMBER */}
      {/* ========================================================= */}
      <div
        className="relative w-full h-[80vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/sub.png')" }}
      >
        {/* Overlay (opsional) */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Konten TEAM MEMBER yang langsung menyambung */}
      <section className="py-20 px-8 text-center bg-gray-100 flex flex-col justify-center items-center">
        <h2
          className="text-5xl font-extrabold mb-12"
          style={{ color: "#515050" }}
        >
          TEAM MEMBER
        </h2>

        {/* CHIEF OF RACING PLANE */}
        <div className="flex flex-col items-center mb-16">
          <div className="w-32 h-32 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
            foto
          </div>
          <p className="font-bold" style={{ color: "#515050" }}>
            CHIEF OF RACING PLANE
          </p>
          <p style={{ color: "#515050" }}>M. RIZQI AUNILLAH</p>
        </div>

        {/* PROJECT MANAGER */}
        <div className="flex flex-col items-center mb-16">
          <div className="w-32 h-32 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
            foto
          </div>
          <p className="font-bold" style={{ color: "#515050" }}>
            PROJECT MANAGER
          </p>
          <p style={{ color: "#515050" }}>SUCI RAHMADANI</p>
        </div>
      </section>
      {/* ========================================================= */}
      {/* BAGIAN 4: SUB DIVISI */}
      {/* ========================================================= */}
      <section className="min-h-screen py-20 px-8 text-center bg-white flex flex-col justify-center items-center">
        {/* HEAD OF DIVISI - ELECTRICAL, DESIGN, MANUFACTURE */}
        <div className="flex flex-col md:flex-row justify-center items-start md:space-x-12 mb-16 w-full">
          {/* HEAD OF ELECTRICAL */}
          <div className="flex-1 text-center mb-16 md:mb-0">
            <p className="font-bold" style={{ color: "#515050" }}>
              HEAD OF ELECTRICAL
            </p>
            <p style={{ color: "#515050" }}>AZIS SURYA DARPITA</p>
          </div>
          {/* HEAD OF DESIGN */}
          <div className="flex-1 text-center mb-16 md:mb-0">
            <p className="font-bold" style={{ color: "#515050" }}>
              HEAD OF DESIGN
            </p>
            <p style={{ color: "#515050" }}>JOSHUA ADI PRATAMA</p>
          </div>
          {/* HEAD OF MANUFACTURE */}
          <div className="flex-1 text-center">
            <p className="font-bold" style={{ color: "#515050" }}>
              HEAD OF MANUFACTURE
            </p>
            <p style={{ color: "#515050" }}>AWALUDIN SUBEKTI</p>
          </div>
        </div>

        {/* STAFF ELECTRICAL */}
        <div className="flex flex-col items-center mb-16">
          {/* Kotak foto */}
          <div className="w-32 h-32 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
            foto
          </div>
          <p className="font-bold" style={{ color: "#515050" }}>
            STAFF ELECTRICAL
          </p>
          <p style={{ color: "#515050" }}>ABID NANTA LEGOWO</p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* BAGIAN 5: LANJUTAN SUB DIVISI - STAFF ELECTRICAL */}
      {/* ========================================================= */}
      <section className="min-h-screen py-20 px-8 text-center bg-gray-100 flex flex-col justify-center items-center">
        <div className="flex flex-col items-center mb-16">
          {/* Kotak foto */}
          <div className="w-32 h-32 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
            foto
          </div>
          <p className="font-bold" style={{ color: "#515050" }}>
            STAFF ELECTRICAL
          </p>
          <p style={{ color: "#515050" }}>NUGIE PRAMAYUDHA</p>
        </div>

        <div className="flex flex-col items-center mb-16">
          {/* Kotak foto */}
          <div className="w-32 h-32 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
            foto
          </div>
          <p className="font-bold" style={{ color: "#515050" }}>
            STAFF ELECTRICAL
          </p>
          <p style={{ color: "#515050" }}>KRISNA SATRIA UTOMO</p>
        </div>
      </section>
    </div>
  );
}
