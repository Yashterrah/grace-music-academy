import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function NavLink({
  href,
  children,
  className,
}: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium text-slate-700 transition-colors duration-300 hover:text-emerald-700",
        className
      )}
    >
      {children}
    </Link>
  );
}