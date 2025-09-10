import Image from "next/image";

// ===================== DATA GALERI =====================
const galleryImages = [
  "/gallery1.png",
  "/gallery2.png",
  "/gallery3.png",
  "/gallery4.png",
  "/gallery5.png",
  "/gallery6.png",
  "/gallery7.png",
  "/gallery8.png",
  "/gallery9.png",
  "/gallery10.png",
  "/gallery11.png",
  "/gallery12.png",
];

// ===================== COMPONENT CARD =====================
const GalleryCard = ({ src }: { src: string }) => (
  <div
    className="relative w-full aspect-[16/9] rounded-lg overflow-hidden shadow-lg 
               transform transition duration-300 ease-in-out 
               hover:scale-105 active:scale-110"
  >
    <Image src={src} alt="" fill style={{ objectFit: "cover" }} />
  </div>
);

// ===================== PAGE =====================
export default function GalleryPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* ===================== SECTION PERTAMA: BANNER ===================== */}
      <section
        className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url('/gallery.png')` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative z-10 text-white text-5xl md:text-6xl font-extrabold">
          GALLERY
        </h1>
      </section>

      {/* ===================== SECTION KEDUA: GALERI FOTO ===================== */}
      <section className="py-16 px-4 sm:px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-6">
            {galleryImages.map((src, i) => (
              <GalleryCard key={i} src={src} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
