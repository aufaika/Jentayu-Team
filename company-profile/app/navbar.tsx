"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white fixed w-full z-10 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo + Name */}
          <div className="flex items-center">
            <img
              src="/logo jentayu.png"
              alt="Logo"
              className="h-20 w-auto mr-3"
            />
          </div>

          {/* Menu */}
          <div className="flex space-x-6 items-center font-medium relative">
            <Link href="/" className="text-black hover:text-red-600">
              HOME
            </Link>
            <Link href="/profile" className="text-black hover:text-red-600">
              PROFILE
            </Link>

            {/* SUB TEAM Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 focus:outline-none hover:text-red-600 transition-colors duration-200"
              >
                SUB TEAM
              </button>

              {isOpen && (
                <div
                  className="absolute top-full mt-2 bg-white border rounded shadow-lg w-48"
                  onMouseLeave={() => setIsOpen(false)}
                >
                  <Link
                    href="/sub-team/racing-plane"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-600"
                  >
                    RACING PLANE
                  </Link>
                  <Link
                    href="/sub-team/aeromapper"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-600"
                  >
                    AEROMAPPER
                  </Link>
                  <Link
                    href="/sub-team/copter"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-600"
                  >
                    COPTER
                  </Link>
                </div>
              )}
            </div>

            <Link href="/achievement" className="text-black hover:text-red-600">
              ACHIEVEMENT
            </Link>
            <Link href="/gallery" className="text-black hover:text-red-600">
              GALLERY
            </Link>
            <Link href="/news" className="text-black hover:text-red-600">
              NEWS
            </Link>
            <Link href="/contact" className="text-black hover:text-red-600">
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
