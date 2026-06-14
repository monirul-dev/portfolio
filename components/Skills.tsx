import { skillGroups } from "@/data/content";

export default function Skills() {
  return (
    <section className="bg-[#0B1020] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          Skills
        </p>

        <h2 className="mb-16 text-4xl font-bold text-white md:text-5xl">
          Technologies I work with.
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
            >
              <h3 className="mb-6 text-2xl font-semibold text-white">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300"
                  >
                    {skill}
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