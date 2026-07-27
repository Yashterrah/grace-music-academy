import { cn } from "@/lib/utils";

type HeadingLevel = "h1" | "h2" | "h3" | "h4";

interface HeadingProps {
  as?: HeadingLevel;
  children: React.ReactNode;
  className?: string;
}

const styles = {
  h1: "text-4xl font-bold tracking-tight md:text-6xl",
  h2: "text-3xl font-bold md:text-5xl",
  h3: "text-2xl font-semibold md:text-3xl",
  h4: "text-xl font-semibold",
};

export function Heading({
  as: Component = "h2",
  children,
  className,
}: HeadingProps) {
  return (
    <Component className={cn(styles[Component], className)}>
      {children}
    </Component>
  );
}