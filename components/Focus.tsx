import { currentFocus } from "@/data/content";

export default function Focus() {
  return (
    <section className="bg-[#0B1020] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          Current Focus
        </p>

        <h2 className="mb-12 text-4xl font-bold text-white">
          What I'm exploring right now.
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {currentFocus.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center text-slate-300"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}