import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0B1020]/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-3 text-lg font-semibold text-white"
        >
          <Image
            src="/logo.png"
            alt="Monirul Islam Logo"
            width={32}
            height={32}
          />

          <span>Monirul Islam</span>
        </Link>

        <div className="hidden gap-8 md:flex">
          <a href="#about" className="text-gray-300 hover:text-white">
            About
          </a>

          <a href="#projects" className="text-gray-300 hover:text-white">
            Projects
          </a>

          <a href="#experience" className="text-gray-300 hover:text-white">
            Experience
          </a>

          <a href="#contact" className="text-gray-300 hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}