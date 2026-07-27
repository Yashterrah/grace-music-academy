import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { AboutFeatures } from "./about-features";
import { AboutStats } from "./about-stats";

export function AboutContent() {
  return (
    <div>
      <Badge className="mb-6">
        About Grace Muigai Music Academy
      </Badge>

      <h2 className="max-w-xl text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
        Building Musical Excellence Through Passion & Practice
      </h2>

      <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
        Grace Muigai Music Academy provides structured piano education using
        internationally recognized ABRSM standards while nurturing creativity,
        discipline, and confidence in every learner.
      </p>

      <div className="mt-10">
        <AboutFeatures />
      </div>

      <div className="mt-10">
        <Button size="lg">
          Learn More
        </Button>
      </div>

      <AboutStats />
    </div>
  );
}