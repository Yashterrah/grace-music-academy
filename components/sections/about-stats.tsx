const stats = [
  {
    value: "6+",
    label: "Grade Levels",
  },
  {
    value: "100%",
    label: "Practical Learning",
  },
  {
    value: "ABRSM",
    label: "International Curriculum",
  },
];

export function AboutStats() {
  return (
    <div className="mt-10 grid grid-cols-3 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
        >
          <h3 className="text-3xl font-bold text-emerald-700">
            {stat.value}
          </h3>

          <p className="mt-2 text-sm text-slate-600">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}