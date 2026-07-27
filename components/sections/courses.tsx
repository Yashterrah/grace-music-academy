import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { courses } from "@/constants/courses";

export function Courses() {
  return (
    <Section id="courses" className="bg-white">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Available Music Courses
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Structured music education from Grade 4 to Grade 9.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Card key={course.id}>
              <h3 className="text-2xl font-semibold">
                {course.title}
              </h3>

              <p className="mt-2 text-slate-600">
                {course.description}
              </p>

              <div className="mt-6 space-y-2 text-sm text-slate-700">
                <p>
                  <strong>Schedule:</strong> {course.schedule}
                </p>

                <p>
                  <strong>Fee:</strong> KES {course.fee.toLocaleString()}
                </p>
              </div>

              <Button className="mt-6 w-full">
                Enroll Now
              </Button>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}