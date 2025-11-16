"use client";

import { Montserrat } from "next/font/google";
import { useState } from "react";

interface BoardMember {
  id: string;
  position: string;
  name: string;
  order: number;
  group: "Directors" | "Non-Technical";
  photo: string | null;
}

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function ManageBoard() {
  const [members, setMembers] = useState<BoardMember[]>([
    {
      id: "1",
      position: "GENERAL MANAGER",
      name: "MUHAMMAD ULIL AHKAM",
      order: 1,
      group: "Directors",
      photo: null,
    },
    {
      id: "2",
      position: "HEAD OF INTERNAL",
      name: "ARIESTA PERMATASARI",
      order: 2,
      group: "Non-Technical",
      photo: null,
    },
    {
      id: "3",
      position: "HEAD OF TECHNICAL",
      name: "MUHAMMAD HASAN AL FATHIN",
      order: 3,
      group: "Directors",
      photo: null,
    },
    {
      id: "4",
      position: "HEAD OF EKSTERNAL",
      name: "CALISTA ELECTRA NARESWARI",
      order: 4,
      group: "Non-Technical",
      photo: null,
    },
    {
      id: "5",
      position: "HEAD OF NON TECHNICAL",
      name: "HANIFAH ADITYASARI PUTRI WIYANRES",
      order: 5,
      group: "Directors",
      photo: null,
    },
    {
      id: "6",
      position: "HEAD OF MEDIA",
      name: "DHAFIN RAHMAT RAMDHANI",
      order: 6,
      group: "Non-Technical",
      photo: null,
    },
  ]);

  const [formData, setFormData] = useState({
    position: "",
    name: "",
    order: 0,
    group: "Directors" as "Directors" | "Non-Technical",
    photo: null as string | null,
  });

  const [fileName, setFileName] = useState("No file chosen");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "order" ? parseInt(value) || 0 : value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          photo: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (!formData.position || !formData.name) {
      alert("Mohon isi jabatan dan nama anggota");
      return;
    }

    const newMember: BoardMember = {
      id: Date.now().toString(),
      position: formData.position,
      name: formData.name,
      order: formData.order,
      group: formData.group,
      photo: formData.photo,
    };

    setMembers((prev) => [...prev, newMember]);

    // Clear form
    setFormData({
      position: "",
      name: "",
      order: 0,
      group: "Directors",
      photo: null,
    });
    setFileName("No file chosen");
  };

  return (
    <div className={`bg-gray-50 font-sans ${montserrat.className}`}>
      <div className="flex min-h-screen">
        {/* Sidebar */}
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
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                ></path>
              </svg>
              Kelola Direksi
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Tambah Anggota Direksi
                </h2>

                <div className="bg-white rounded-lg shadow p-6">
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Jabatan
                    </label>
                    <input
                      type="text"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Contoh: GENERAL MANAGER"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Nama Anggota
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Nama lengkap"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Urutan
                    </label>
                    <input
                      type="number"
                      name="order"
                      value={formData.order}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Grup
                    </label>
                    <select
                      name="group"
                      value={formData.group}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    >
                      <option value="Directors">Directors</option>
                      <option value="Non-Technical">Non-Technical</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Foto Anggota
                    </label>
                    <div className="flex items-center gap-2">
                      <label className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-50 transition text-sm">
                        Choose File
                        <input
                          type="file"
                          className="hidden"
                          accept="image/*"
                          onChange={handleFileChange}
                        />
                      </label>
                      <span className="text-gray-500 text-sm">{fileName}</span>
                    </div>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition flex items-center justify-center"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4v16m8-8H4"
                      ></path>
                    </svg>
                    Tambah Anggota
                  </button>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Daftar Direksi Saat Ini
                </h2>

                <div className="bg-white rounded-lg shadow overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          FOTO
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          JABATAN
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          NAMA
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          GRUP
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {[...members]
                        .sort((a, b) => a.order - b.order)
                        .map((member) => (
                          <tr key={member.id}>
                            <td className="px-4 py-3 whitespace-nowrap">
                              {member.photo ? (
                                <img
                                  src={member.photo}
                                  alt={member.name}
                                  className="w-10 h-10 rounded-full object-cover"
                                />
                              ) : (
                                <div
                                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                    member.group === "Directors"
                                      ? "bg-blue-900"
                                      : "bg-yellow-600"
                                  }`}
                                >
                                  <svg
                                    className="w-6 h-6 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    ></path>
                                  </svg>
                                </div>
                              )}
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap">
                              <div className="text-xs font-medium text-gray-900">
                                {member.position}
                              </div>
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap">
                              <div className="text-xs text-gray-900">
                                {member.name}
                              </div>
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap">
                              <span
                                className={`px-2 py-1 text-xs font-semibold rounded-full ${
                                  member.group === "Directors"
                                    ? "bg-blue-100 text-blue-800"
                                    : "bg-green-100 text-green-800"
                                }`}
                              >
                                {member.group}
                              </span>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
