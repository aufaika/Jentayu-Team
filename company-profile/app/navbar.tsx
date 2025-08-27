"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<null | "profile" | "sub">(null);

  return (
    <nav
      className="fixed w-full z-10 shadow-md"
      style={{ backgroundColor: "#909092" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/logo jentayu.png"
              alt="Logo"
              className="h-20 w-auto mr-3"
            />
          </div>

          {/* Menu */}
          <div className="flex space-x-6 items-center font-medium relative">
            <Link
              href="/"
              className="text-white hover:text-gray-300 transition-colors duration-200"
            >
              HOME
            </Link>

            {/* PROFILE Dropdown */}
            <div className="relative">
              <button
                onClick={() =>
                  setOpenMenu(openMenu === "profile" ? null : "profile")
                }
                className="flex items-center text-white focus:outline-none hover:text-gray-300 transition-colors duration-200"
              >
                PROFILE
                <span
                  className={`ml-1 transform transition-transform duration-200 ${
                    openMenu === "profile" ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {openMenu === "profile" && (
                <div
                  className="absolute top-full mt-2 rounded shadow-lg min-w-[250px]"
                  style={{ backgroundColor: "#909092" }}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <Link
                    href="/profile/about"
                    className="block px-4 py-2 text-white hover:bg-gray-300 hover:text-black whitespace-nowrap"
                  >
                    ABOUT US
                  </Link>
                  <Link
                    href="/profile/board"
                    className="block px-4 py-2 text-white hover:bg-gray-300 hover:text-black whitespace-nowrap"
                  >
                    BOARD OF DIRECTORS
                  </Link>
                </div>
              )}
            </div>

            {/* SUB TEAM Dropdown */}
            <div className="relative">
              <button
                onClick={() => setOpenMenu(openMenu === "sub" ? null : "sub")}
                className="flex items-center text-white focus:outline-none hover:text-gray-300 transition-colors duration-200"
              >
                SUB TEAM
                <span
                  className={`ml-1 transform transition-transform duration-200 ${
                    openMenu === "sub" ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {openMenu === "sub" && (
                <div
                  className="absolute top-full mt-2 rounded shadow-lg min-w-[200px]"
                  style={{ backgroundColor: "#909092" }}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <Link
                    href="/sub-team/racing-plane"
                    className="block px-4 py-2 text-white hover:bg-gray-300 hover:text-black"
                  >
                    RACING PLANE
                  </Link>
                  <Link
                    href="/sub-team/aeromapper"
                    className="block px-4 py-2 text-white hover:bg-gray-300 hover:text-black"
                  >
                    AEROMAPPER
                  </Link>
                  <Link
                    href="/sub-team/copter"
                    className="block px-4 py-2 text-white hover:bg-gray-300 hover:text-black"
                  >
                    COPTER
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/achievement"
              className="text-white hover:text-gray-300 transition-colors duration-200"
            >
              ACHIEVEMENT
            </Link>
            <Link
              href="/gallery"
              className="text-white hover:text-gray-300 transition-colors duration-200"
            >
              GALLERY
            </Link>
            <Link
              href="/news"
              className="text-white hover:text-gray-300 transition-colors duration-200"
            >
              NEWS
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-gray-300 transition-colors duration-200"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
