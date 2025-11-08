import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { Github, Linkedin } from "lucide-react";
import { Button } from "../ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-secondary-foreground">
      <div className="container py-6 flex items-center justify-between">
        <p className="text-sm">
          &copy; {currentYear} {siteConfig.author.name}. All Rights Reserved.
        </p>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href={siteConfig.links.github} target="_blank" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href={siteConfig.links.linkedin} target="_blank" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
