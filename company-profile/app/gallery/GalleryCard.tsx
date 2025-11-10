import Image from "next/image";
import { Transition } from "@headlessui/react";

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

export default GalleryCard;
