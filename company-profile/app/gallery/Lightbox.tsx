import Image from "next/image";
import { Transition } from "@headlessui/react";

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

export default Lightbox;
