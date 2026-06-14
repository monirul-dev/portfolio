import { contact } from "@/data/content";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#0B1020] px-6 py-24"
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          Contact
        </p>

        <h2 className="mb-6 text-5xl font-bold text-white">
          {contact.title}
        </h2>

        <p className="mb-12 text-lg text-slate-400">
          {contact.description}
        </p>

        <a
          href={`mailto:${contact.email}`}
          className="inline-block rounded-2xl bg-cyan-500 px-8 py-4 text-lg font-semibold text-black transition hover:scale-105"
        >
          {contact.email}
        </a>

        <div className="mt-12 flex flex-wrap justify-center gap-8">
          <a
            href={contact.github}
            target="_blank"
            className="text-slate-300 hover:text-cyan-400"
          >
            GitHub
          </a>

          <a
            href={contact.linkedin}
            target="_blank"
            className="text-slate-300 hover:text-cyan-400"
          >
            LinkedIn
          </a>
        </div>

        <div className="mt-10 text-slate-500">
          <p>{contact.location}</p>
          <p>{contact.note}</p>
        </div>
      </div>
    </section>
  );
}