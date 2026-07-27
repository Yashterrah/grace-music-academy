import { Button } from "./button";

interface CTAProps {
  primary: string;
  secondary: string;
}

export function CTA({
  primary,
  secondary,
}: CTAProps) {
  return (
    <div className="flex flex-wrap gap-4">
      <Button>
        {primary}
      </Button>

      <Button variant="outline">
        {secondary}
      </Button>
    </div>
  );
}