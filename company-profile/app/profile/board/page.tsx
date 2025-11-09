import AboutUsFooter from "@/app/components/AboutUsFooter";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function BoardPage() {
  return (
    <>
      <div className={`bg-gray-100 ${montserrat.className}`}>
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
            <h2 className="text-5xl font-extrabold mb-6 text-white uppercase">
              Board of Directors
            </h2>
          </div>
        </section>
        {/* ========================================================= */}
        {/* BAGIAN KEDUA: STRUKTUR ORGANISASI */}
        {/* ========================================================= */}

        <section className="min-h-screen py-20 px-8 text-center bg-gray-100 flex flex-col justify-center items-center">
          <h2 className="text-5xl font-extrabold mb-7 text-dark-grey">
            Board Of Directors
          </h2>
          <p className="mb-12 max-w-3/4 text-justify font-medium">
            Jentayu Team is an innovative collaborative platform that combines
            the expertise of two main pillars: the Technical Division and the
            Non-Technical Division. The Technical Division, which is the
            operational heart of the team, is strengthened by experts in the
            fields of Mechanics, Electronics, and Programming. Meanwhile, the
            Non-Technical Division ensures the team's stability and reach
            through the strategic roles of Internal Affairs, External Affairs,
            and Media. The team is open to all students from various faculties
            at Diponegoro University to participate and contribute to achieving
            brilliant accomplishments.
          </p>

          <div className="flex flex-col items-center mb-20">
            <div className="w-32 h-32 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
              foto
            </div>
            <p className="font-extrabold text-dark-grey">GENERAL MANAGER</p>
            <p className="-mt-1 text-dark-grey font-light">
              MUHAMMAD ULIL AHKAM
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center md:gap-x-32 mb-16">
            <div className="text-center flex flex-col items-center">
              <div className="w-32 h-32 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
                foto
              </div>
              <p className="font-extrabold text-dark-grey">HEAD OF TECHNICAL</p>
              <p className="-mt-1 text-dark-grey font-light">
                MUHAMMAD HASAN AL FATHIN
              </p>
            </div>

            <div className="text-center flex flex-col items-center">
              <div className="w-32 h-32 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
                foto
              </div>
              <p className="font-extrabold text-dark-grey">
                HEAD OF NON TECHNICAL
              </p>
              <p className="-mt-1 text-dark-grey font-light">
                HANIFAH ADITYASARI PUTRI WIYANRES
              </p>
            </div>
          </div>

          <h3 className="text-4xl font-extrabold mt-16 mb-12 text-dark-grey">
            Non-Technical Division
          </h3>

          <div className="flex flex-col md:flex-row justify-center items-center md:gap-x-32">
            <div className="text-center flex flex-col items-center">
              <div className="w-32 h-32 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
                foto
              </div>
              <p className="font-extrabold text-dark-grey">HEAD OF INTERNAL</p>
              <p className="-mt-1 text-dark-grey font-light">
                ARIESTA PERMATASARI
              </p>
            </div>

            <div className="text-center flex flex-col items-center">
              <div className="w-32 h-32 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
                foto
              </div>
              <p className="font-extrabold text-dark-grey">HEAD OF EXTERNAL</p>
              <p className="-mt-1 text-dark-grey font-light">
                CALISTA ELECTRA NARESWARI
              </p>
            </div>

            <div className="text-center flex flex-col items-center">
              <div className="w-32 h-32 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
                foto
              </div>
              <p className="font-extrabold text-dark-grey">HEAD OF MEDIA</p>
              <p className="-mt-1 text-dark-grey font-light">
                DHAFIN RAHMAT RAMDHANI
              </p>
            </div>
          </div>
        </section>
      </div>
      <AboutUsFooter />
    </>
  );
}
