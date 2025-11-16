"use client";

import React, { useState } from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
});

interface Sponsor {
  id: string;
  name: string;
  logo: string | null;
}

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default function EditSponsorsPage({ params }: PageProps) {
  const sponsors: Sponsor[] = [
    { id: "0", name: "BUAYA", logo: "https://placehold.co/600x400?text=BUAYA" },
    { id: "1", name: "ICA", logo: null },
    {
      id: "2",
      name: "GEMFAN",
      logo: "https://placehold.co/600x400?text=GEMFAN",
    },
    {
      id: "3",
      name: "SOLIDWORKS",
      logo: "https://placehold.co/600x400?text=SOLIDWORKS",
    },
  ];

  const { id: sponsorId } = React.use(params);
  const currentSponsor = sponsors.find((s) => s.id === sponsorId);

  const [editSponsor, setEditSponsor] = useState<{
    name: string;
    logo: string | null;
  }>({
    name: currentSponsor?.name || "",
    logo: currentSponsor?.logo || null,
  });
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [editFileName, setEditFileName] = useState<string>(
    currentSponsor?.logo ? "Current logo" : "No file chosen"
  );

  const handleEditFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditSponsor({ ...editSponsor, logo: reader.result as string });
      };
      reader.readAsDataURL(file);
      setEditFileName(file.name);
    }
  };

  const handleSaveEdit = (): void => {
    // In real app, save to API/database here
    setShowSuccess(true);

    // Redirect back to list after 1 second
    setTimeout(() => {
      window.location.href = "/admin/manage-sponsors";
    }, 1000);
  };

  const handleCancelEdit = (): void => {
    window.location.href = "/admin/manage-sponsors";
  };

  return (
    <div className={`bg-gray-50 min-h-screen ${montserrat.className}`}>
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                ></path>
              </svg>
              Kelola Achievement
            </a>

            <a
              href="/admin/manage-sponsors"
              className="flex items-center px-6 py-3 bg-blue-800 border-l-4 border-white"
            >
              <svg
                className="w-5 h-5 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                ></path>
              </svg>
              Kelola Sponsor
            </a>

            <a
              href="/admin/manage-sub-teams"
              className="flex items-center px-6 py-3 hover:bg-blue-800 transition"
            >
              <svg
                className="w-5 h-5 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                ></path>
              </svg>
              Kelola Direksi
            </a>
          </nav>
        </aside>

        <main className="flex-1 p-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Edit Sponsor
            </h2>

            {showSuccess && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                Sponsor berhasil diperbarui!
              </div>
            )}

            <div className="bg-white rounded-lg shadow p-6">
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Nama Sponsor
                </label>
                <input
                  type="text"
                  value={editSponsor.name}
                  onChange={(e) =>
                    setEditSponsor({ ...editSponsor, name: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Ganti Logo (Opsional)
                </label>
                <div className="flex items-center gap-2 mb-4">
                  <label className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-50 transition text-sm">
                    Choose File
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleEditFileChange}
                    />
                  </label>
                  <span className="text-gray-500 text-sm">{editFileName}</span>
                </div>

                {editSponsor.logo && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-600 mb-2">Logo saat ini:</p>
                    <div className="border rounded-lg p-4 inline-block">
                      <img
                        src={editSponsor.logo}
                        alt="Current logo"
                        className="h-20 object-contain"
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleSaveEdit}
                  className="flex-1 bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
                >
                  Simpan Perubahan
                </button>
                <button
                  onClick={handleCancelEdit}
                  className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-400 transition"
                >
                  Batal
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
