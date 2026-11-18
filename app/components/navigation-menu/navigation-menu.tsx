"use client";

import { useState } from "react";

export default function NavigationMenu() {
  const [openJurusan, setOpenJurusan] = useState(false);

  return (
    <nav className="flex items-center gap-8 text-white font-medium">
      <a href="/" className="hover:opacity-80 transition">
        Home
      </a>

      <div
        className="relative"
        onMouseEnter={() => setOpenJurusan(true)}
        onMouseLeave={() => setOpenJurusan(false)}
      >
        <button className="flex items-center gap-1 hover:opacity-80 transition">
          Jurusan
        </button>

        {openJurusan && (
          <div className="absolute top-full left-0 mt-2 w-48 bg-white text-blue-800 rounded-xl shadow-lg py-2 z-50">
            <a href="/jurusan/rpl" className="block px-4 py-2 hover:bg-blue-50">
              RPL
            </a>
            <a href="/jurusan/tkj" className="block px-4 py-2 hover:bg-blue-50">
              TKJ
            </a>
            <a href="/jurusan/mm" className="block px-4 py-2 hover:bg-blue-50">
              Multimedia
            </a>
          </div>
        )}
      </div>

      <a href="/career" className="hover:opacity-80 transition">
        Career
      </a>
    </nav>
  );
}