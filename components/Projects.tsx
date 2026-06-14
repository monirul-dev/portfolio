import { projects } from "@/data/content";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#0B1020] px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          Featured Projects
        </p>

        <h2 className="mb-16 text-4xl font-bold text-white md:text-5xl">
          Real-world systems built for production.
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-cyan-400/30 hover:bg-white/[0.05]"
            >
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-2xl font-semibold text-white">
                  {project.title}
                </h3>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    project.status === "Production"
                      ? "bg-green-500/20 text-green-300"
                      : "bg-amber-500/20 text-amber-300"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <p className="mb-6 text-slate-400">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 px-3 py-1 text-sm text-slate-300"
                  >
                    {tech}
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