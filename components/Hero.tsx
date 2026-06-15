import Image from "next/image";
import { profile } from "@/data/content";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#0B1020]">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
        {/* LEFT */}

        <div className="flex flex-col justify-center">
          <p className="mb-4 text-cyan-400">
            Welcome to my portfolio
          </p>

          <h1 className="mb-6 text-5xl font-bold text-white md:text-7xl">
            {profile.name}
          </h1>

          <h2 className="mb-6 text-xl font-medium text-slate-300 md:text-2xl">
            {profile.title}
          </h2>

          <p className="mb-8 max-w-xl text-lg text-slate-400">
            {profile.tagline}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-cyan-500 px-6 py-3 font-medium text-black transition hover:scale-105"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-white/20 px-6 py-3 font-medium text-white transition hover:border-cyan-500"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-4 text-sm text-slate-400">
            <span>30+ Data Pipelines</span>

            <span>•</span>

            <span>99+ Tables</span>

            <span>•</span>

            <span>30+ Users</span>
          </div>
        </div>

        {/* RIGHT */}

        <div className="relative flex items-center justify-center">
          <div className="absolute h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />

          <Image
            src="/logo.svg"
            alt="Monirul Islam Logo"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
}