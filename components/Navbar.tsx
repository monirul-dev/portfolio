"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0B1020]/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-3 text-lg font-semibold text-white"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo.png"
            alt="Monirul Islam Logo"
            width={32}
            height={32}
            className="h-8 w-auto"
          />
          <span>Monirul Islam</span>
        </Link>

        <div className="hidden gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-gray-300 hover:text-white">
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="text-2xl text-white md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation menu"
        >
          {open ? "×" : "☰"}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#0B1020] px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-300 hover:text-cyan-400"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}




// import Link from "next/link";
// import Image from "next/image";

// export default function Navbar() {
//   return (
//     <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0B1020]/80 backdrop-blur">
//       <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
//         <Link
//           href="/"
//           className="flex items-center gap-3 text-lg font-semibold text-white"
//         >
//           <Image
//             src="/logo.png"
//             alt="Monirul Islam Logo"
//             width={32}
//             height={32}
//           />

//           <span>Monirul Islam</span>
//         </Link>

//         <div className="hidden gap-8 md:flex">
//           <a href="#about" className="text-gray-300 hover:text-white">
//             About
//           </a>

//           <a href="#projects" className="text-gray-300 hover:text-white">
//             Projects
//           </a>

//           <a href="#experience" className="text-gray-300 hover:text-white">
//             Experience
//           </a>

//           <a href="#contact" className="text-gray-300 hover:text-white">
//             Contact
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// }