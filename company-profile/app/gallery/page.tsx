"use client";

import Image from "next/image";
import { Montserrat } from "next/font/google";
import { Transition } from "@headlessui/react";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import ContactUsFooter from "../components/ContactUsFooter";

const montserrat = Montserrat({
  subsets: ["latin"],
});

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
const GalleryCard = ({
  src,
  show,
  delay,
  onClick,
}: {
  src: string;
  show: boolean;
  delay: number;
  onClick: () => void;
}) => (
  <Transition
    show={show}
    enter={`transition-all duration-700 delay-[${delay}ms]`}
    enterFrom="opacity-0 scale-90"
    enterTo="opacity-100 scale-100"
    as="div"
  >
    <div
      className="relative w-full aspect-[16/9] rounded-lg overflow-hidden shadow-lg 
                 transform transition duration-300 ease-in-out 
                 hover:scale-105 active:scale-110 cursor-pointer"
      onClick={onClick}
    >
      <Image src={src} alt="" fill style={{ objectFit: "cover" }} />
    </div>
  </Transition>
);

// ===================== LIGHTBOX MODAL =====================
const Lightbox = ({
  isOpen,
  imageSrc,
  onClose,
}: {
  isOpen: boolean;
  imageSrc: string;
  onClose: () => void;
}) => (
  <Transition show={isOpen}>
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Background overlay with fade */}
      <Transition.Child
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="absolute inset-0 bg-black/90" />
      </Transition.Child>

      {/* Image with scale and fade */}
      <Transition.Child
        enter="ease-out duration-300"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="relative max-w-6xl w-full h-[90vh] p-4 z-10">
          <div className="relative w-full h-full">
            <Image
              src={imageSrc}
              alt=""
              fill
              style={{ objectFit: "contain" }}
              className="rounded-lg"
            />
          </div>
        </div>
      </Transition.Child>
    </div>
  </Transition>
);

// ===================== PAGE =====================
export default function GalleryPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const { ref: bannerRef, inView: bannerInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const { ref: galleryRef, inView: galleryInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const openLightbox = (src: string) => {
    setSelectedImage(src);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <div className={`bg-white text-gray-800 ${montserrat.className}`}>
      {/* ===================== SECTION PERTAMA: BANNER ===================== */}
      <section
        ref={bannerRef}
        className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url('/gallery.png')` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <Transition
          show={bannerInView}
          enter="transition-all duration-1000 delay-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          as="h1"
          className="relative z-10 text-white text-5xl md:text-6xl font-extrabold"
        >
          GALLERY
        </Transition>
      </section>

      {/* ===================== SECTION KEDUA: GALERI FOTO ===================== */}
      <section ref={galleryRef} className="py-16 px-4 sm:px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-6">
            {galleryImages.map((src, i) => (
              <GalleryCard
                key={i}
                src={src}
                show={galleryInView}
                delay={100 + i * 100}
                onClick={() => openLightbox(src)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        imageSrc={selectedImage}
        onClose={closeLightbox}
      />

      <ContactUsFooter />
    </div>
  );
}