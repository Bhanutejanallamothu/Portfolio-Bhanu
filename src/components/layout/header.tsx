"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isSheetOpen, setSheetOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
       <div className="container flex h-16 items-center bg-background/30 dark:bg-black/30 border border-border dark:border-white/20 rounded-full backdrop-blur-lg shadow-lg">
        <Link href="/" className="mr-auto flex items-center gap-2">
          <span className="font-bold font-headline">
            {siteConfig.author.name}
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium mx-auto">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-primary font-headline font-medium tracking-tight"
              onClick={() => setSheetOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-6 pt-10">
                {navLinks.map((link) => (
                  <Button asChild variant="link" key={link.href} onClick={() => setSheetOpen(false)}>
                    <Link
                      href={link.href}
                      className="text-lg font-medium transition-colors hover:text-primary font-headline tracking-tight"
                    >
                      {link.label}
                    </Link>
                  </Button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
