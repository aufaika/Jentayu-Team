export default function Profile() {
  return (
    <div className="bg-gray-100">
      {/* ========================================================= */}
      {/* BAGIAN PERTAMA: DESKRIPSI BOARD OF DIRECTORS */}
      {/* ========================================================= */}
      <section className="min-h-screen py-20 px-8 text-center bg-white flex flex-col justify-center">
        <h2
          className="text-5xl font-extrabold mb-4"
          style={{ color: "#515050" }}
        >
          Board Of Directors
        </h2>
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-gray-700 leading-relaxed mx-auto">
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
      {/* BAGIAN KEDUA: STRUKTUR ORGANISASI LENGKAP */}
      {/* ========================================================= */}
      {/* Pastikan container utama memiliki Flexbox untuk memusatkan semua konten di dalamnya */}
      // Bagian Kedua: STRUKTUR ORGANISASI LENGKAP
      <section className="min-h-screen py-20 px-8 text-center bg-gray-100 flex flex-col justify-center items-center">
        <h2
          className="text-5xl font-extrabold mb-12"
          style={{ color: "#515050" }}
        >
          Board Of Directors
        </h2>

        {/* GENERAL MANAGER */}
        <div className="flex flex-col items-center mb-20">
          <div className="w-32 h-32 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
            foto
          </div>
          <p className="font-bold" style={{ color: "#515050" }}>
            GENERAL MANAGER
          </p>
          <p style={{ color: "#515050" }}>MUHAMMAD ULIL AHKAM</p>
        </div>

        {/* HEADS */}
        <div className="flex flex-col md:flex-row justify-center items-center md:gap-x-32 mb-16">
          {/* HEAD OF TECHNICAL - Wrapped in a div for consistent height */}
          <div className="text-center flex flex-col items-center">
            <div className="w-32 h-32 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
              foto
            </div>
            <p className="font-bold" style={{ color: "#515050" }}>
              HEAD OF TECHNICAL
            </p>
            <p style={{ color: "#515050" }}>MUHAMMAD HASAN AL FATHIN</p>
          </div>
          {/* HEAD OF NON TECHNICAL - Wrapped in a div for consistent height */}
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

        {/* NON-TECHNICAL SUB-HEADS */}
        <div className="flex flex-col md:flex-row justify-center items-center md:gap-x-32">
          {/* HEAD OF INTERNAL - Menambahkan flex dan items-center */}
          <div className="text-center flex flex-col items-center">
            <div className="w-32 h-32 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
              foto
            </div>
            <p className="font-bold" style={{ color: "#515050" }}>
              HEAD OF INTERNAL
            </p>
            <p style={{ color: "#515050" }}>ARIESTA PERMATASARI</p>
          </div>
          {/* HEAD OF EKSTERNAL - Menambahkan flex dan items-center */}
          <div className="text-center flex flex-col items-center">
            <div className="w-32 h-32 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
              foto
            </div>
            <p className="font-bold" style={{ color: "#515050" }}>
              HEAD OF EKSTERNAL
            </p>
            <p style={{ color: "#515050" }}>CALISTA ELECTRA NARESWARI</p>
          </div>
          {/* HEAD OF MEDIA - Menambahkan flex dan items-center */}
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
