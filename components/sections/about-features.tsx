import { Check } from "lucide-react";

const features = [
  "ABRSM Certified Curriculum",
  "One-on-One Practical Lessons",
  "Performance & Recital Training",
  "Experienced Professional Instructor",
];

export function AboutFeatures() {
  return (
    <div className="space-y-4">
      {features.map((feature) => (
        <div key={feature} className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100">
            <Check className="h-4 w-4 text-emerald-700" />
          </div>

          <span className="text-slate-700">{feature}</span>
        </div>
      ))}
    </div>
  );
}