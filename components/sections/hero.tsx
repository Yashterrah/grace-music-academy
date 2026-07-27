import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { CTA } from "@/components/ui/cta";
import { Stat } from "@/components/ui/stats";
import { HeroImage } from "./hero-image";

export function Hero() {
  return (
    <Section className="relative overflow-hidden bg-gradient-to-br from-white via-emerald-50 to-amber-50">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <Badge className="mb-8">
              ABRSM • Online & Physical Lessons
            </Badge>

            <h1 className="max-w-xl text-5xl font-bold leading-tight text-slate-900 md:text-7xl">
              Nurturing Musical Excellence
            </h1>

            <p className="mt-8 max-w-xl text-xl leading-relaxed text-slate-600">
              Join Grace Muigai Music Academy and build confidence,
              creativity, and musical excellence through structured,
              practical music education.
            </p>

            <div className="mt-10">
              <CTA
                primary="Book a Lesson"
                secondary="Explore Courses"
              />
            </div>

            <div className="mt-16 grid grid-cols-3 gap-8">
              <Stat
                value="6"
                label="Grade Levels"
              />

              <Stat
                value="100%"
                label="Practical Learning"
              />

              <Stat
                value="ABRSM"
                label="Curriculum"
              />
            </div>
          </div>

          <HeroImage />
        </div>
      </Container>
    </Section>
  );
}