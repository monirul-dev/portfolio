import { about } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="bg-[#0B1020] px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            About
          </p>

          <h2 className="mb-8 text-4xl font-bold text-white md:text-5xl">
            Real problems first. Technologies follow.
          </h2>

          <div className="space-y-5 text-lg leading-8 text-slate-300">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <div className="absolute inset-0 rounded-3xl bg-cyan-500/5" />

          <div className="relative">
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-slate-400">
              Current Focus
            </p>

            <div className="space-y-4">
              {[
                "Power Platform Solutions",
                "Snowflake Data Engineering",
                "Workflow Orchestration",
                "Business Process Automation",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-[#0B1020]/70 px-5 py-4 text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}