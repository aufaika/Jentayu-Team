"use client";
import { useState } from "react";

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

  // Fungsi load more & show less
  const loadMore = () => setVisibleCount(news.length);
  const showLess = () => setVisibleCount(3);

  return (
    <div className="bg-white text-gray-800">
      {/* ================= HERO ================= */}
      <section
        className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url('/news.png')` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative z-10 text-white text-5xl md:text-6xl font-extrabold">
          NEWS
        </h1>
      </section>

      {/* ================= GRID NEWS ================= */}
      <section className="py-16 px-4 sm:px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {news.slice(0, visibleCount).map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="flex justify-center mt-10">
            {visibleCount < news.length ? (
              <button
                onClick={loadMore}
                className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition"
              >
                Lebih Banyak
              </button>
            ) : (
              <button
                onClick={showLess}
                className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition"
              >
                Lebih Sedikit
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
