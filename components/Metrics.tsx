import { metrics } from "@/data/content";

export default function Metrics() {
  return (
    <section className="bg-[#0B1020] px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.06]"
            >
              <div className="mb-3 text-4xl font-bold text-cyan-400 md:text-5xl">
                {metric.value}
              </div>

              <p className="text-sm font-medium text-slate-300">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}