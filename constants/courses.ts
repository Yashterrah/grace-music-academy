export const courses = [
  {
    id: "grade-4",
    title: "Grade 4 Music",
    grade: 4,
    schedule: "9:00 AM",
    fee: 2000,
    description:
      "Structured Grade 4 lessons following the academy curriculum.",
  },
  {
    id: "grade-5",
    title: "Grade 5 Music",
    grade: 5,
    schedule: "10:00 AM",
    fee: 2500,
    description:
      "Intermediate music training with practical and theory lessons.",
  },
  {
    id: "grade-6",
    title: "Grade 6 Music",
    grade: 6,
    schedule: "11:00 AM",
    fee: 3000,
    description:
      "Advanced practical musicianship and examination preparation.",
  },
  {
    id: "grade-7",
    title: "Grade 7 Music",
    grade: 7,
    schedule: "2:00 PM",
    fee: 4500,
    description:
      "Performance-focused learning for advanced students.",
  },
  {
    id: "grade-8",
    title: "Grade 8 Music",
    grade: 8,
    schedule: "3:00 PM",
    fee: 4500,
    description:
      "Professional coaching for Grade 8 practical examinations.",
  },
  {
    id: "grade-9",
    title: "Grade 9 Music",
    grade: 9,
    schedule: "4:00 PM",
    fee: 4500,
    description:
      "Advanced diploma preparation and performance excellence.",
  },
] as const;

export type Course = (typeof courses)[number];