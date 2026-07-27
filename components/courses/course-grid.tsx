import { courses } from "@/constants/courses";
import { Container } from "@/components/ui/container";
import { CourseCard } from "./course-card";

export function CourseGrid() {
  return (
    <Container>
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
          />
        ))}
      </div>
    </Container>
  );
}