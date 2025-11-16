"use client";

import { useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save, Upload } from "lucide-react";
import { Montserrat } from "next/font/google";

interface TeamData {
  name: string;
  description: string;
  imageUrl: string;
}

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function EditTeamInfoPage() {
  const router = useRouter();
  const [teamName] = useState<string>("RACING PLANE");
  const [description, setDescription] = useState<string>(
    `Jentayu Racing Plane team participated in a time attack-style competition under the "Fast and On Track" theme. This challenge required participants to demonstrate both speed and precision, as they navigated their aircraft through a designated course. Teams had to launch their aircraft swiftly, maneuver through the course efficiently, and reach the finish line as quickly as possible, all while executing a smooth and controlled landing. This theme highlights the importance of both rapid performance and precision in aircraft control, making it a thrilling and high-stakes event for participants.`
  );
  const [imagePreview, setImagePreview] = useState<string>(
    "https://placehold.co/600x400"
  );
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    setIsLoading(true);

    try {
      // Simulate API call
      // const formData = new FormData();
      // formData.append('description', description);
      // if (selectedFile) {
      //   formData.append('image', selectedFile);
      // }
      // await fetch('/api/teams/update', { method: 'POST', body: formData });

      setShowSuccess(true);

      setTimeout(() => {
        router.push("/admin/manage-sub-teams");
      }, 1500);
    } catch (error) {
      console.error("Error saving team info:", error);
    } finally {
      setIsLoading(false);
    }
  };

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
              className="flex items-center px-6 py-3 hover:bg-blue-800 border-l-4 border-white"
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
              className="flex items-center px-6 py-3 bg-blue-800 transition"
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
        <div className="w-full">
          <main className="flex-1 p-8">
            <div className="max-w-4xl">
              {/* Header */}
              <div className="mb-6">
                <button
                  onClick={() => router.push("/admin/manage-sub-teams")}
                  className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 mb-4 transition"
                >
                  <ArrowLeft size={20} />
                  <span>Kembali ke Kelola Sub Tim</span>
                </button>

                <h1 className="text-3xl font-bold">
                  Edit Info Tim:{" "}
                  <span className="text-indigo-600">{teamName}</span>
                </h1>
              </div>

              {/* Success Message */}
              {showSuccess && (
                <div className="mb-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                  Info tim berhasil diperbarui!
                </div>
              )}

              {/* Form */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                {/* Description */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Deskripsi Tim
                  </label>
                  <textarea
                    value={description}
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                      setDescription(e.target.value)
                    }
                    className="w-full h-48 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                    placeholder="Masukkan deskripsi tim..."
                  />
                </div>

                {/* Image Upload */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Foto Utama Tim
                  </label>

                  <div className="mb-4">
                    <img
                      src={imagePreview}
                      alt="Team preview"
                      className="w-full max-w-3xl h-64 object-cover rounded-lg border border-gray-200"
                    />
                  </div>

                  <div className="flex items-center gap-4">
                    <label className="cursor-pointer">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <span className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                        <Upload size={20} />
                        Choose File
                      </span>
                    </label>
                    <span className="text-gray-500 text-sm">
                      {selectedFile ? selectedFile.name : "No file chosen"}
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-gray-500">
                    Biarkan kosong jika tidak ingin mengganti foto utama.
                  </p>
                </div>

                {/* Save Button */}
                <div className="flex justify-end">
                  <button
                    onClick={handleSave}
                    disabled={isLoading}
                    className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Save size={20} />
                    {isLoading ? "Menyimpan..." : "Simpan Perubahan"}
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
