import { services } from "@/data/content";

export default function Services() {
  return (
    <section className="bg-[#0B1020] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          What I Do
        </p>

        <h2 className="mb-16 text-4xl font-bold text-white md:text-5xl">
          Building systems that connect people, processes, and data.
        </h2>

        <div className="grid gap-8 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-cyan-400/30 hover:bg-white/[0.05]"
            >
              <h3 className="mb-4 text-2xl font-semibold text-white">
                {service.title}
              </h3>

              <p className="mb-6 text-slate-400">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-1 text-sm text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}