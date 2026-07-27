interface CourseBadgeProps {
  level: string;
}

export function CourseBadge({ level }: CourseBadgeProps) {
  return (
    <span className="inline-flex w-fit rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
      {level}
    </span>
  );
}