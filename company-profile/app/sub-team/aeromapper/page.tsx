export default function RacingPlane() {
  return (
    <div className="w-full">
      {/* ================= PAGE 1 : aeromapper ================= */}
      <section
        className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/aeromapper1.png')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <h1 className="relative z-10 text-white text-5xl md:text-6xl font-extrabold">
          AEROMAPPER
        </h1>
      </section>

      {/* ================= PAGE 2 : Description Team ================= */}
      <section
        className="relative w-full min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-6 text-center"
        style={{ backgroundImage: "url('/bg-description-team.jpg')" }} // << FOTO BG 2
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-4xl">
          <h2 className="text-white text-4xl md:text-5xl font-extrabold mb-6">
            DESCRIPTION TEAM
          </h2>

          <p className="text-white text-lg leading-relaxed text-justify">
            Jentayu Aeromapper is a fixed-wing model UAV (Unmanned Aerial
            Vehicle) Team focused on both remote piloting and autonomous flight
            operations. It is equipped with capabilities to carry out various
            missions, such as monitoring, mapping, and payload delivery. In
            2024, Jentayu Aeromapper participated in the Kontes Robot Terbang
            Indonesia (KRTI), where the theme of the competition was "First
            Responder in River Disaster Areas. " This mission was designed to
            test and demonstrate the UAV’s capabilities in addressing the
            challenges of disaster response in river regions.
          </p>
        </div>
      </section>
      {/* ================= PAGE 3 : Team Member ================= */}
      <section className="min-h-screen py-20 px-8 bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center">
        {/* TITLE */}
        <h2 className="text-5xl font-extrabold mb-16 text-gray-800 tracking-wide">
          TEAM MEMBER
        </h2>

        {/* GENERAL MANAGER */}
        <div className="flex flex-col items-center mb-4">
          <div className="w-40 h-40 rounded-lg overflow-hidden shadow-lg mb-4">
            <img
              src="/team/ulil.jpg"
              alt="General Manager"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="font-bold text-gray-800">GENERAL MANAGER</p>
          <p className="text-gray-600 mt-2">MUHAMMAD ULIL AHKAM</p>
        </div>

        {/* FIRST ROW */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {/* INTERNAL */}
          <div className="text-center flex flex-col items-center">
            <div className="w-28 h-28 rounded-lg overflow-hidden shadow-md mb-4">
              <img
                src="/team/ariesta.jpg"
                alt="Head of Internal"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-bold text-gray-800">HEAD OF INTERNAL</p>
            <p className="text-gray-600 mt-2">ARIESTA PERMATASARI</p>
          </div>

          {/* EKSTERNAL */}
          <div className="text-center flex flex-col items-center">
            <div className="w-28 h-28 rounded-lg overflow-hidden shadow-md mb-4">
              <img
                src="/team/calista.jpg"
                alt="Head of Eksternal"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-bold text-gray-800">HEAD OF EKSTERNAL</p>
            <p className="text-gray-600 mt-2">CALISTA ELECTRA NARESWARI</p>
          </div>

          {/* MEDIA */}
          <div className="text-center flex flex-col items-center">
            <div className="w-28 h-28 rounded-lg overflow-hidden shadow-md mb-4">
              <img
                src="/team/dhafin.jpg"
                alt="Head of Media"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-bold text-gray-800">HEAD OF MEDIA</p>
            <p className="text-gray-600 mt-2">DHAFIN RAHMAT RAMDHANI</p>
          </div>
        </div>

        {/* SECOND ROW */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-16">
          {/* INTERNAL */}
          <div className="text-center flex flex-col items-center">
            <div className="w-28 h-28 rounded-lg overflow-hidden shadow-md mb-4">
              <img
                src="/team/ariesta.jpg"
                alt="Head of Internal"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-bold text-gray-800">HEAD OF INTERNAL</p>
            <p className="text-gray-600 mt-2">ARIESTA PERMATASARI</p>
          </div>

          {/* EKSTERNAL */}
          <div className="text-center flex flex-col items-center">
            <div className="w-28 h-28 rounded-lg overflow-hidden shadow-md mb-4">
              <img
                src="/team/calista.jpg"
                alt="Head of Eksternal"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-bold text-gray-800">HEAD OF EKSTERNAL</p>
            <p className="text-gray-600 mt-2">CALISTA ELECTRA NARESWARI</p>
          </div>

          {/* MEDIA */}
          <div className="text-center flex flex-col items-center">
            <div className="w-28 h-28 rounded-lg overflow-hidden shadow-md mb-4">
              <img
                src="/team/dhafin.jpg"
                alt="Head of Media"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-bold text-gray-800">HEAD OF MEDIA</p>
            <p className="text-gray-600 mt-2">DHAFIN RAHMAT RAMDHANI</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-16">
          {/* INTERNAL */}
          <div className="text-center flex flex-col items-center">
            <div className="w-28 h-28 rounded-lg overflow-hidden shadow-md mb-4">
              <img
                src="/team/ariesta.jpg"
                alt="Head of Internal"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-bold text-gray-800">HEAD OF INTERNAL</p>
            <p className="text-gray-600 mt-2">ARIESTA PERMATASARI</p>
          </div>

          {/* EKSTERNAL */}
          <div className="text-center flex flex-col items-center">
            <div className="w-28 h-28 rounded-lg overflow-hidden shadow-md mb-4">
              <img
                src="/team/calista.jpg"
                alt="Head of Eksternal"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-bold text-gray-800">HEAD OF EKSTERNAL</p>
            <p className="text-gray-600 mt-2">CALISTA ELECTRA NARESWARI</p>
          </div>

          {/* MEDIA */}
          <div className="text-center flex flex-col items-center">
            <div className="w-28 h-28 rounded-lg overflow-hidden shadow-md mb-4">
              <img
                src="/team/dhafin.jpg"
                alt="Head of Media"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-bold text-gray-800">HEAD OF MEDIA</p>
            <p className="text-gray-600 mt-2">DHAFIN RAHMAT RAMDHANI</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-16">
          {/* INTERNAL */}
          <div className="text-center flex flex-col items-center">
            <div className="w-28 h-28 rounded-lg overflow-hidden shadow-md mb-4">
              <img
                src="/team/ariesta.jpg"
                alt="Head of Internal"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-bold text-gray-800">HEAD OF INTERNAL</p>
            <p className="text-gray-600 mt-2">ARIESTA PERMATASARI</p>
          </div>

          {/* EKSTERNAL */}
          <div className="text-center flex flex-col items-center">
            <div className="w-28 h-28 rounded-lg overflow-hidden shadow-md mb-4">
              <img
                src="/team/calista.jpg"
                alt="Head of Eksternal"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-bold text-gray-800">HEAD OF EKSTERNAL</p>
            <p className="text-gray-600 mt-2">CALISTA ELECTRA NARESWARI</p>
          </div>

          {/* MEDIA */}
          <div className="text-center flex flex-col items-center">
            <div className="w-28 h-28 rounded-lg overflow-hidden shadow-md mb-4">
              <img
                src="/team/dhafin.jpg"
                alt="Head of Media"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-bold text-gray-800">HEAD OF MEDIA</p>
            <p className="text-gray-600 mt-2">DHAFIN RAHMAT RAMDHANI</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-16">
          {/* INTERNAL */}
          <div className="text-center flex flex-col items-center">
            <div className="w-28 h-28 rounded-lg overflow-hidden shadow-md mb-4">
              <img
                src="/team/ariesta.jpg"
                alt="Head of Internal"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-bold text-gray-800">HEAD OF INTERNAL</p>
            <p className="text-gray-600 mt-2">ARIESTA PERMATASARI</p>
          </div>

          {/* EKSTERNAL */}
          <div className="text-center flex flex-col items-center">
            <div className="w-28 h-28 rounded-lg overflow-hidden shadow-md mb-4">
              <img
                src="/team/calista.jpg"
                alt="Head of Eksternal"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-bold text-gray-800">HEAD OF EKSTERNAL</p>
            <p className="text-gray-600 mt-2">CALISTA ELECTRA NARESWARI</p>
          </div>

          {/* MEDIA */}
          <div className="text-center flex flex-col items-center">
            <div className="w-28 h-28 rounded-lg overflow-hidden shadow-md mb-4">
              <img
                src="/team/dhafin.jpg"
                alt="Head of Media"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-bold text-gray-800">HEAD OF MEDIA</p>
            <p className="text-gray-600 mt-2">DHAFIN RAHMAT RAMDHANI</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-16">
          {/* INTERNAL */}
          <div className="text-center flex flex-col items-center">
            <div className="w-28 h-28 rounded-lg overflow-hidden shadow-md mb-4">
              <img
                src="/team/ariesta.jpg"
                alt="Head of Internal"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-bold text-gray-800">HEAD OF INTERNAL</p>
            <p className="text-gray-600 mt-2">ARIESTA PERMATASARI</p>
          </div>

          {/* EKSTERNAL */}
          <div className="text-center flex flex-col items-center">
            <div className="w-28 h-28 rounded-lg overflow-hidden shadow-md mb-4">
              <img
                src="/team/calista.jpg"
                alt="Head of Eksternal"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-bold text-gray-800">HEAD OF EKSTERNAL</p>
            <p className="text-gray-600 mt-2">CALISTA ELECTRA NARESWARI</p>
          </div>

          {/* MEDIA */}
          <div className="text-center flex flex-col items-center">
            <div className="w-28 h-28 rounded-lg overflow-hidden shadow-md mb-4">
              <img
                src="/team/dhafin.jpg"
                alt="Head of Media"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-bold text-gray-800">HEAD OF MEDIA</p>
            <p className="text-gray-600 mt-2">DHAFIN RAHMAT RAMDHANI</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-16">
          {/* INTERNAL */}
          <div className="text-center flex flex-col items-center">
            <div className="w-28 h-28 rounded-lg overflow-hidden shadow-md mb-4">
              <img
                src="/team/ariesta.jpg"
                alt="Head of Internal"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-bold text-gray-800">HEAD OF INTERNAL</p>
            <p className="text-gray-600 mt-2">ARIESTA PERMATASARI</p>
          </div>

          {/* EKSTERNAL */}
          <div className="text-center flex flex-col items-center">
            <div className="w-28 h-28 rounded-lg overflow-hidden shadow-md mb-4">
              <img
                src="/team/calista.jpg"
                alt="Head of Eksternal"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-bold text-gray-800">HEAD OF EKSTERNAL</p>
            <p className="text-gray-600 mt-2">CALISTA ELECTRA NARESWARI</p>
          </div>

          {/* MEDIA */}
          <div className="text-center flex flex-col items-center">
            <div className="w-28 h-28 rounded-lg overflow-hidden shadow-md mb-4">
              <img
                src="/team/dhafin.jpg"
                alt="Head of Media"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-bold text-gray-800">HEAD OF MEDIA</p>
            <p className="text-gray-600 mt-2">DHAFIN RAHMAT RAMDHANI</p>
          </div>
        </div>
      </section>
    </div>
  );
}
