import { cn } from "@/lib/utils";

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

export function H1({
  children,
  className,
}: TypographyProps) {
  return (
    <h1
      className={cn(
        "text-5xl md:text-6xl font-bold tracking-tight",
        className
      )}
    >
      {children}
    </h1>
  );
}

export function H2({
  children,
  className,
}: TypographyProps) {
  return (
    <h2
      className={cn(
        "text-4xl font-bold tracking-tight",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function H3({
  children,
  className,
}: TypographyProps) {
  return (
    <h3
      className={cn(
        "text-2xl font-semibold",
        className
      )}
    >
      {children}
    </h3>
  );
}

export function Lead({
  children,
  className,
}: TypographyProps) {
  return (
    <p
      className={cn(
        "text-xl text-gray-600",
        className
      )}
    >
      {children}
    </p>
  );
}

export function Paragraph({
  children,
  className,
}: TypographyProps) {
  return (
    <p
      className={cn(
        "leading-7 text-gray-700",
        className
      )}
    >
      {children}
    </p>
  );
}

export function Small({
  children,
  className,
}: TypographyProps) {
  return (
    <small
      className={cn(
        "text-sm text-gray-500",
        className
      )}
    >
      {children}
    </small>
  );
}