import { principles } from "@/data/content";

export default function Principles() {
  return (
    <section className="bg-[#0B1020] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          Core Principles
        </p>

        <h2 className="mb-12 text-4xl font-bold text-white">
          How I approach engineering.
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {principles.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
            >
              <h3 className="mb-4 text-2xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}