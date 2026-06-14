import { experiences } from "@/data/content";

export default function Experience() {
  return (
    <section id="experience" className="bg-[#0B1020] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          Experience
        </p>

        <h2 className="mb-16 text-4xl font-bold text-white md:text-5xl">
          Production experience across software, data, and automation.
        </h2>

        <div className="relative border-l border-white/10 pl-8">
          {experiences.map((item) => (
            <div key={item.company} className="relative mb-12 last:mb-0">
              <div className="absolute -left-[41px] top-2 h-4 w-4 rounded-full border border-cyan-400 bg-[#0B1020]" />

              <p className="mb-2 text-sm font-medium text-cyan-400">
                {item.period}
              </p>

              <h3 className="text-2xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mb-5 text-slate-400">
                {item.company}
              </p>

              <ul className="space-y-3 text-slate-300">
                {item.description.map((point) => (
                  <li key={point} className="leading-7">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}