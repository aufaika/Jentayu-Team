"use client";

import Image from "next/image";
import { Transition } from "@headlessui/react";
import { useState } from "react";

const AchievementImage = ({ src, alt }: { src: string; alt: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={400}
        height={300}
        className="rounded-lg shadow-lg mb-8 object-contain cursor-pointer 
                   transform transition-transform duration-300 hover:scale-105 hover:-translate-y-1"
        onClick={() => setIsOpen(true)}
      />

      <Transition show={isOpen}>
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={() => setIsOpen(false)}
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
            <div className="absolute inset-0 bg-black/70" />
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
            <div className="relative max-w-4xl w-full p-4 z-10">
              <Image
                src={src}
                alt={alt}
                width={1200}
                height={800}
                className="rounded-lg mx-auto"
              />
            </div>
          </Transition.Child>
        </div>
      </Transition>
    </>
  );
};

export default AchievementImage;
