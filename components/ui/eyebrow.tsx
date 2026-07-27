import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}

export function Eyebrow({
  children,
  className,
}: EyebrowProps) {
  return (
    <span
      className={cn(
        "mb-3 inline-block text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700",
        className
      )}
    >
      {children}
    </span>
  );
}