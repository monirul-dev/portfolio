import { testimonial } from "@/data/content";

export default function Testimonial() {
  return (
    <section className="bg-[#0B1020] px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          Testimonial
        </p>

        <blockquote className="mb-8 text-2xl leading-relaxed text-slate-200 md:text-3xl">
          "{testimonial.quote}"
        </blockquote>

        <div>
          <p className="font-semibold text-white">
            {testimonial.author}
          </p>

          <p className="text-slate-400">
            {testimonial.role}
          </p>
        </div>
      </div>
    </section>
  );
}