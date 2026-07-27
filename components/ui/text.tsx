import { cn } from "@/lib/utils";

interface TextProps {
  children: React.ReactNode;
  className?: string;
}

export function Text({
  children,
  className,
}: TextProps) {
  return (
    <p
      className={cn(
        "leading-7 text-gray-600",
        className
      )}
    >
      {children}
    </p>
  );
}