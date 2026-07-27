import { cn } from "@/lib/utils";

interface DividerProps {
  className?: string;
}

export function Divider({
  className,
}: DividerProps) {
  return (
    <hr
      className={cn(
        "border-gray-200",
        className
      )}
    />
  );
}