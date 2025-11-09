"use client";

import Link from "next/link";
import { Roboto } from "next/font/google";
import { useState } from "react";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";

const roboto = Roboto({ subsets: ["latin"] });

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<null | "profile" | "sub">(null);
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  const [isSubTeamOpen, setIsSubTeamOpen] = useState<boolean>(false);

  return (
    <nav
      className={`fixed w-full z-10 shadow-md bg-main-blue ${roboto.className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
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
          <div className="flex space-x-6 items-center text-sm font-medium relative">
            <Link
              href="/"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              HOME
            </Link>

            {/* Popover Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsProfileOpen(true)}
              onMouseLeave={() => setIsProfileOpen(false)}
            >
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <PopoverButton
                      className={`flex items-center cursor-pointer data-active:outline-none data-hover:text-white data-active:text-white ${
                        isProfileOpen ? "text-white" : "text-gray-300"
                      } transition-colors duration-200`}
                    >
                      PROFILE
                    </PopoverButton>
                    <Transition
                      show={isProfileOpen}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <PopoverPanel
                        anchor="top"
                        className="z-10 divide-y divide-white/5 rounded-xl bg-white text-sm/6 transition duration-200 ease-in-out [--anchor-gap:--spacing(5)] data-closed:-translate-y-1 data-closed:opacity-0"
                      >
                        <Link
                          href="/profile/about"
                          onClick={() => setIsProfileOpen(false)}
                          className="block px-4 py-2 text-gray-800 hover:text-black hover:bg-gray-100 transition-all whitespace-nowrap"
                        >
                          ABOUT US
                        </Link>
                        <Link
                          href="/profile/board"
                          onClick={() => setIsProfileOpen(false)}
                          className="block px-4 py-2 text-gray-800 hover:text-black hover:bg-gray-100 transition-all whitespace-nowrap"
                        >
                          BOARD OF DIRECTORS
                        </Link>
                      </PopoverPanel>
                    </Transition>
                  </>
                )}
              </Popover>
            </div>

            {/* Popover SUB TEAM  */}
            <div
              className="relative"
              onMouseEnter={() => setIsSubTeamOpen(true)}
              onMouseLeave={() => setIsSubTeamOpen(false)}
            >
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <PopoverButton
                      className={`flex items-center cursor-pointer data-active:outline-none data-hover:text-white data-active:text-white ${
                        isSubTeamOpen ? "text-white" : "text-gray-300"
                      } transition-colors duration-200`}
                    >
                      SUB TEAM
                    </PopoverButton>
                    <Transition
                      show={isSubTeamOpen}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <PopoverPanel
                        anchor="top"
                        className="z-10 divide-y divide-white/5 rounded-xl bg-white text-sm/6 transition duration-200 ease-in-out [--anchor-gap:--spacing(5)] data-closed:-translate-y-1 data-closed:opacity-0"
                      >
                        <Link
                          href="/sub-team/racing-plane"
                          onClick={() => setIsSubTeamOpen(false)}
                          className="block px-4 py-2 text-gray-800 hover:text-black hover:bg-gray-100 transition-all whitespace-nowrap"
                        >
                          RACING PLANE
                        </Link>
                        <Link
                          href="/sub-team/aeromapper"
                          onClick={() => setIsSubTeamOpen(false)}
                          className="block px-4 py-2 text-gray-800 hover:text-black hover:bg-gray-100 transition-all whitespace-nowrap"
                        >
                          FIXED WING
                        </Link>
                        <Link
                          href="/sub-team/copter"
                          onClick={() => setIsSubTeamOpen(false)}
                          className="block px-4 py-2 text-gray-800 hover:text-black hover:bg-gray-100 transition-all whitespace-nowrap"
                        >
                          VTOL
                        </Link>
                      </PopoverPanel>
                    </Transition>
                  </>
                )}
              </Popover>
            </div>

            <Link
              href="/achievement"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              ACHIEVEMENT
            </Link>
            <Link
              href="/gallery"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              GALLERY
            </Link>
            <Link
              href="/news"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              NEWS
            </Link>
            <Link
              href="/contact"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
