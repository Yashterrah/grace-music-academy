"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { navigation } from "@/constants/navigation";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white lg:hidden">
      <div className="flex items-center justify-between border-b p-6">
        <h2 className="text-lg font-semibold">
          Menu
        </h2>

        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
        >
          <X size={20} />
        </Button>
      </div>

      <nav className="flex flex-col gap-6 p-8">
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="text-lg font-medium"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}