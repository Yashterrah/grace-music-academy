import { Container } from "@/components/ui/container";

export function CourseHeader() {
  return (
    <Container>
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
          Our Music Programs
        </span>

        <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
          Structured Music Education
        </h2>

        <p className="mt-6 text-lg leading-relaxed text-slate-600">
          Professional piano and music lessons designed to build confidence,
          creativity, practical musicianship, and examination success from
          Grade 4 through Grade 9.
        </p>
      </div>
    </Container>
  );
}