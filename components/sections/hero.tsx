import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { H1, Lead } from "@/components/ui/typography";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-emerald-50 to-amber-50">
      <Container className="grid min-h-[calc(100vh-80px)] items-center gap-16 py-16 lg:grid-cols-2 lg:py-24">
        {/* Left */}
        <div>
          <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            ABRSM • Online & Physical Lessons
          </span>

          <H1 className="mt-8">
            Nurturing Musical Excellence
          </H1>

          <Lead className="mt-6 max-w-xl">
            Join Grace Muigai Music Academy and build confidence,
            creativity, and musical excellence through structured,
            practical music education.
          </Lead>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button size="lg">
              Book a Lesson
            </Button>

            <Button
              variant="outline"
              size="lg"
            >
              Explore Courses
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6">
            <div>
              <h3 className="text-3xl font-bold text-emerald-700">
                6
              </h3>

              <p className="text-sm text-slate-600">
                Grade Levels
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-emerald-700">
                100%
              </h3>

              <p className="text-sm text-slate-600">
                Practical Learning
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-emerald-700">
                ABRSM
              </h3>

              <p className="text-sm text-slate-600">
                Curriculum
              </p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="relative">
          <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-amber-300/30 blur-3xl" />

          <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-emerald-300/30 blur-3xl" />

          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/images/hero-piano.jpg"
              alt="Grace Muigai Music Academy"
              width={700}
              height={800}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}