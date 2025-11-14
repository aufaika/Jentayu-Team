"use client";

import { useState, useEffect } from "react";
import { Montserrat } from "next/font/google";
import { Transition } from "@headlessui/react";
import { useInView } from "react-intersection-observer";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function NewsPage() {
  // Data dummy news (12 total)
  const news = [
    { id: 1, title: "Berita 1", image: "/news/news1.jpg" },
    { id: 2, title: "Berita 2", image: "/news/news2.jpg" },
    { id: 3, title: "Berita 3", image: "/news/news3.jpg" },
    { id: 4, title: "Berita 4", image: "/news/news4.jpg" },
    { id: 5, title: "Berita 5", image: "/news/news5.jpg" },
    { id: 6, title: "Berita 6", image: "/news/news6.jpg" },
    { id: 7, title: "Berita 7", image: "/news/news7.jpg" },
    { id: 8, title: "Berita 8", image: "/news/news8.jpg" },
    { id: 9, title: "Berita 9", image: "/news/news9.jpg" },
    { id: 10, title: "Berita 10", image: "/news/news10.jpg" },
    { id: 11, title: "Berita 11", image: "/news/news11.jpg" },
    { id: 12, title: "Berita 12", image: "/news/news12.jpg" },
  ];

  // State untuk jumlah berita yang tampil
  const [visibleCount, setVisibleCount] = useState(3);
  const [animateCards, setAnimateCards] = useState(false);

  const { ref: bannerRef, inView: bannerInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const { ref: newsRef, inView: newsInView } = useInView({
    threshold: 0.1,
    triggerOnce: false, // Allow re-animation when new items load
  });

  // Trigger animation when cards change
  useEffect(() => {
    setAnimateCards(false);
    const timer = setTimeout(() => setAnimateCards(true), 50);
    return () => clearTimeout(timer);
  }, [visibleCount]);

  // Fungsi load more & show less
  const loadMore = () => setVisibleCount(news.length);
  const showLess = () => {
    setVisibleCount(3);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`bg-white text-gray-800 ${montserrat.className}`}>
      {/* Hero */}
      <section
        ref={bannerRef}
        className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url('/news.png')` }}
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
          NEWS
        </Transition>
      </section>

      {/* Grid News */}
      <section ref={newsRef} className="py-16 px-4 sm:px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {news.slice(0, visibleCount).map((item, index) => (
              <Transition
                key={item.id}
                show={newsInView && animateCards}
                enter={`transition-all duration-700 delay-[${100 + (index % visibleCount) * 100}ms]`}
                enterFrom="opacity-0 scale-90 translate-y-8"
                enterTo="opacity-100 scale-100 translate-y-0"
                as="div"
              >
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold">{item.title}</h3>
                  </div>
                </div>
              </Transition>
            ))}
          </div>

          {/* Button */}
          <Transition
            show={newsInView && animateCards}
            enter="transition-all duration-700 delay-500"
            enterFrom="opacity-0 translate-y-8"
            enterTo="opacity-100 translate-y-0"
            as="div"
            className="flex justify-center mt-10"
          >
            {visibleCount < news.length ? (
              <button
                onClick={loadMore}
                className="px-6 py-3 bg-gray-700 text-white rounded-full hover:bg-gray-800 hover:scale-105 transition-all duration-300"
              >
                Lebih Banyak
              </button>
            ) : (
              <button
                onClick={showLess}
                className="px-6 py-3 bg-gray-700 text-white rounded-full hover:bg-gray-800 hover:scale-105 transition-all duration-300"
              >
                Lebih Sedikit
              </button>
            )}
          </Transition>
        </div>
      </section>
    </div>
  );
}