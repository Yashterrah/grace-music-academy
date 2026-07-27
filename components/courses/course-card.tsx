import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CourseBadge } from "./course-badge";
import type { Course } from "@/constants/courses";

interface CourseCardProps {
  course: Course;
}

function getLevel(grade: number) {
  if (grade <= 4) return "Foundation";
  if (grade <= 6) return "Intermediate";
  return "Advanced";
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="flex h-full flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div>
        <CourseBadge level={getLevel(course.grade)} />

        <h3 className="mt-5 text-2xl font-bold text-slate-900">
          {course.title}
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          {course.description}
        </p>

        <div className="mt-8 space-y-3 border-t border-slate-200 pt-6">
          <div className="flex justify-between">
            <span className="font-medium text-slate-500">
              Schedule
            </span>

            <span className="font-semibold text-slate-900">
              {course.schedule}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium text-slate-500">
              Monthly Fee
            </span>

            <span className="font-semibold text-emerald-700">
              KES {course.fee.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      <Button className="mt-8 w-full">
        Enroll Now
      </Button>
    </Card>
  );
}