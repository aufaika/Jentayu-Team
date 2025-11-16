"use client";

import { useRouter } from "next/navigation";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function ManageSubTeams() {
  const router = useRouter();

  return (
    <div className={`bg-gray-50 ${montserrat.className}`}>
      <div className="flex min-h-screen">
        <aside className="w-64 bg-blue-900 text-white">
          <div className="p-6">
            <h1 className="text-2xl font-bold">ADMIN PANEL</h1>
          </div>

          <nav className="mt-6">
            <a
              href="/admin"
              className="flex items-center px-6 py-3 hover:bg-blue-800 transition"
            >
              <svg
                className="w-5 h-5 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                ></path>
              </svg>
              Dashboard
            </a>

            <div className="px-6 py-3 text-xs text-gray-400 font-semibold uppercase tracking-wider">
              KELOLA KONTEN
            </div>

            <a
              href="/admin/manage-gallery"
              className="flex items-center px-6 py-3 hover:bg-blue-800 transition"
            >
              <svg
                className="w-5 h-5 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
              Kelola Galeri
            </a>

            <a
              href="/admin/manage-news"
              className="flex items-center px-6 py-3 hover:bg-blue-800 transition"
            >
              <svg
                className="w-5 h-5 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                ></path>
              </svg>
              Kelola Berita
            </a>

            <a
              href="/admin/manage-achievements"
              className="flex items-center px-6 py-3 hover:bg-blue-800 transition"
            >
              <svg
                className="w-5 h-5 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                ></path>
              </svg>
              Kelola Achievement
            </a>

            <a
              href="/admin/manage-sponsors"
              className="flex items-center px-6 py-3 hover:bg-blue-800 transition"
            >
              <svg
                className="w-5 h-5 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                ></path>
              </svg>
              Kelola Sponsor
            </a>

            <a
              href="/admin/manage-sub-teams"
              className="flex items-center px-6 py-3 bg-blue-800 border-l-4 border-white"
            >
              <svg
                className="w-5 h-5 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
              Kelola Sub Tim
            </a>

            <a
              href="/admin/manage-board"
              className="flex items-center px-6 py-3 hover:bg-blue-800 transition"
            >
              <svg
                className="w-5 h-5 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                ></path>
              </svg>
              Kelola Direksi
            </a>
          </nav>
        </aside>
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Kelola Sub Tim
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="flex items-center p-6 border-b border-gray-200">
                  <img
                    src="https://placehold.co/600x400?text=Racing+Plane"
                    alt="Racing Plane"
                    className="w-32 h-20 rounded object-cover mr-6"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800">
                      RACING PLANE
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Jentayu Racing Plane team participated in a ti...
                    </p>
                    <p className="text-indigo-600 text-sm font-semibold mt-2">
                      19 Anggota
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition flex items-center">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        ></path>
                      </svg>
                      Edit Info
                    </button>
                    <button
                      className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition flex items-center"
                      onClick={() => {
                        router.push("/admin/manage-team-members/racing-plane");
                      }}
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        ></path>
                      </svg>
                      Kelola Anggota
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="flex items-center p-6 border-b border-gray-200">
                  <img
                    src="https://placehold.co/600x400?text=Fixed+Wing"
                    alt="Fixed Wing"
                    className="w-32 h-20 rounded object-cover mr-6"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800">
                      FIXED WING
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Jentayu Aeromapper is a fixed-wing model UA...
                    </p>
                    <p className="text-indigo-600 text-sm font-semibold mt-2">
                      21 Anggota
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition flex items-center">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        ></path>
                      </svg>
                      Edit Info
                    </button>
                    <button
                      className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition flex items-center"
                      onClick={() => {
                        router.push("/manage-team-members/fixed-wing");
                      }}
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        ></path>
                      </svg>
                      Kelola Anggota
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="flex items-center p-6 border-b border-gray-200">
                  <img
                    src="https://placehold.co/600x400?text=VTOL"
                    alt="VTOL"
                    className="w-32 h-20 rounded object-cover mr-6"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800">VTOL</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Jentayu Copter Team, specializing in Vertical ...
                    </p>
                    <p className="text-indigo-600 text-sm font-semibold mt-2">
                      21 Anggota
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition flex items-center">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        ></path>
                      </svg>
                      Edit Info
                    </button>
                    <button
                      className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition flex items-center"
                      onClick={() => {
                        router.push("/admin/manage-team-members/vtol");
                      }}
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        ></path>
                      </svg>
                      Kelola Anggota
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
