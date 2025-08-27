export default function BoardPage() {
  return (
    <div className="bg-gray-100">
      {/* ========================================================= */}
      {/* BAGIAN PERTAMA: DESKRIPSI BOARD OF DIRECTORS */}
      {/* ========================================================= */}
      <section
        className="relative w-full h-screen bg-cover bg-center flex flex-col items-center justify-center text-center"
        style={{ backgroundImage: "url('/board1.png')" }}
      >
        {/* Overlay hitam transparan */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Konten */}
        <div className="relative z-10 max-w-3xl px-6">
          {/* Judul */}
          <h2 className="text-5xl font-extrabold mb-6 text-white">
            Board of Directors
          </h2>

          {/* Paragraf */}
          <p className="text-lg text-white leading-relaxed text-justify">
            Jentayu Team is an innovative collaborative platform that combines
            the expertise of two main pillars: the Technical Division and the
            Non-Technical Division. The Technical Division, which is the
            operational heart of the team, is strengthened by experts in the
            fields of Mechanics, Electronics, and Programming. Meanwhile, the
            Non-Technical Division ensures the team's stability and reach
            through the strategic roles of Internal Affairs, External Affairs,
            and Media. We open doors to all students from various faculties at
            Diponegoro University to participate and contribute to achieving
            brilliant accomplishments.
          </p>
        </div>
      </section>
      {/* ========================================================= */}
      {/* BAGIAN KEDUA: STRUKTUR ORGANISASI */}
      {/* ========================================================= */}

      <section className="min-h-screen py-20 px-8 text-center bg-gray-100 flex flex-col justify-center items-center">
        <h2
          className="text-5xl font-extrabold mb-12"
          style={{ color: "#515050" }}
        >
          Board Of Directors
        </h2>

        <div className="flex flex-col items-center mb-20">
          <div className="w-32 h-32 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
            foto
          </div>
          <p className="font-bold" style={{ color: "#515050" }}>
            GENERAL MANAGER
          </p>
          <p style={{ color: "#515050" }}>MUHAMMAD ULIL AHKAM</p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center md:gap-x-32 mb-16">
          <div className="text-center flex flex-col items-center">
            <div className="w-32 h-32 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
              foto
            </div>
            <p className="font-bold" style={{ color: "#515050" }}>
              HEAD OF TECHNICAL
            </p>
            <p style={{ color: "#515050" }}>MUHAMMAD HASAN AL FATHIN</p>
          </div>

          <div className="text-center flex flex-col items-center">
            <div className="w-32 h-32 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
              foto
            </div>
            <p className="font-bold" style={{ color: "#515050" }}>
              HEAD OF NON TECHNICAL
            </p>
            <p style={{ color: "#515050" }}>
              HANIFAH ADITYASARI PUTRI WIYANRES
            </p>
          </div>
        </div>

        <h3
          className="text-4xl font-extrabold mt-16 mb-12"
          style={{ color: "#515050" }}
        >
          Non-Technical Division
        </h3>

        <div className="flex flex-col md:flex-row justify-center items-center md:gap-x-32">
          <div className="text-center flex flex-col items-center">
            <div className="w-32 h-32 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
              foto
            </div>
            <p className="font-bold" style={{ color: "#515050" }}>
              HEAD OF INTERNAL
            </p>
            <p style={{ color: "#515050" }}>ARIESTA PERMATASARI</p>
          </div>

          <div className="text-center flex flex-col items-center">
            <div className="w-32 h-32 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
              foto
            </div>
            <p className="font-bold" style={{ color: "#515050" }}>
              HEAD OF EKSTERNAL
            </p>
            <p style={{ color: "#515050" }}>CALISTA ELECTRA NARESWARI</p>
          </div>

          <div className="text-center flex flex-col items-center">
            <div className="w-32 h-32 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
              foto
            </div>
            <p className="font-bold" style={{ color: "#515050" }}>
              HEAD OF MEDIA
            </p>
            <p style={{ color: "#515050" }}>DHAFIN RAHMAT RAMDHANI</p>
          </div>
        </div>
      </section>
    </div>
  );
}
