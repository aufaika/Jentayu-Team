"use client";

import { Transition } from "@headlessui/react";
import { useInView } from "react-intersection-observer";

import AchievementImage from "./AchievementImage";

const AchievementCard = ({
  year,
  image,
  contest,
  awards,
}: {
  year: number;
  image: string;
  contest: string;
  awards: string[];
}) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="min-h-screen py-20 px-6 flex flex-col items-center bg-white even:bg-gray-100"
    >
      {/* Year with fade + slide up */}
      <Transition
        show={inView}
        enter="transition-all duration-700 delay-100"
        enterFrom="opacity-0 translate-y-8"
        enterTo="opacity-100 translate-y-0"
        as="h2"
        className="text-5xl font-extrabold mb-6 text-gray-800"
      >
        {year}
      </Transition>

      {/* Contest with fade + slide up */}
      <Transition
        show={inView}
        enter="transition-all duration-700 delay-200"
        enterFrom="opacity-0 translate-y-8"
        enterTo="opacity-100 translate-y-0"
        as="p"
        className="text-xl text-gray-600 mb-10 font-bold"
      >
        {contest}
      </Transition>

      {/* Image with fade + scale */}
      <Transition
        show={inView}
        enter="transition-all duration-700 delay-300"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        as="div"
      >
        <AchievementImage src={image} alt={`Achievement ${year}`} />
      </Transition>

      {/* Awards with staggered fade + slide up */}
      <ul className="text-lg space-y-2 text-gray-700 text-center max-w-2xl font-bold">
        {awards.map((award, i) => (
          <Transition
            key={i}
            show={inView}
            enter={`transition-all duration-700 delay-[${400 + i * 100}ms]`}
            enterFrom="opacity-0 translate-y-4"
            enterTo="opacity-100 translate-y-0"
            as="li"
          >
            {award}
          </Transition>
        ))}
      </ul>
    </section>
  );
};

export default AchievementCard;
