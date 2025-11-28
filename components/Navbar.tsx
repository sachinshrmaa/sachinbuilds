"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="mb-1 navbar flex items-center justify-between py-4">
      {/* Brand */}
      <Link href="/" className="font-bold text-xl hover:text-blue-700">
        SachinBuilds
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6">
        <Link href="#" className="hover:text-blue-700">
          blog
        </Link>
        <Link href="#" className="hover:text-blue-700">
          teaching
        </Link>
        <Link href="/bookshelf" className="hover:text-blue-700">
          bookshelf
        </Link>
      </div>

      {/* Mobile Hamburger */}
      <button className="md:hidden" onClick={() => setOpen(!open)}>
        {open ? "close" : "menu"}
      </button>

      {/* Mobile Dropdown */}
      {open && (
        <div className="absolute top-[105px] left-0 w-full bg-white flex flex-col items-center gap-4 py-4 shadow-md md:hidden">
          <Link
            href="#"
            className="hover:text-blue-700"
            onClick={() => setOpen(false)}
          >
            blog
          </Link>

          <Link
            href="#"
            className="hover:text-blue-700"
            onClick={() => setOpen(false)}
          >
            teaching
          </Link>
          <Link
            href="/bookshelf"
            className="hover:text-blue-700"
            onClick={() => setOpen(false)}
          >
            bookshelf
          </Link>
        </div>
      )}
    </nav>
  );
}
