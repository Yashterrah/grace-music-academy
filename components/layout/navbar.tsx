"use client";

import { useState } from "react";
import { Menu } from "lucide-react";

import { navigation } from "@/constants/navigation";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Logo } from "./logo";
import { MobileMenu } from "./mobile-menu";
import { NavLink } from "./nav-link";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b bg-white/95 backdrop-blur">
        <Container className="flex h-20 items-center justify-between">
          <Logo />

          <nav className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button>
              Book Lesson
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu size={20} />
          </Button>
        </Container>
      </header>

      <MobileMenu
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}