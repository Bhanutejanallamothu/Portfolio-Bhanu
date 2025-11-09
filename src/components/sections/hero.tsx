import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { Button } from "../ui/button";
import { Download, Send, ArrowRight } from "lucide-react";
import { AnimatedSection } from "../animated-section";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";


export function Hero() {
  const headshot = PlaceHolderImages.find(p => p.id === "headshot");
  return (
    <AnimatedSection id="home" className="container min-h-[calc(100vh-10rem)] flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
            {siteConfig.author.headline}
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto md:mx-0">
            {siteConfig.author.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button asChild size="lg">
              <Link href="#projects">
                View Projects <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href={siteConfig.links.resume} target="_blank">
                Download Resume <Download className="ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#contact">
                Contact Me <Send className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          {headshot && (
             <Image
              src={headshot.imageUrl}
              alt="Headshot of Nallamothu Bhanu Teja"
              width={400}
              height={400}
              className="rounded-full object-cover aspect-square border-4 border-primary/10 shadow-lg"
              priority
              data-ai-hint={headshot.imageHint}
            />
          )}
        </div>
      </div>
    </AnimatedSection>
  );
}
