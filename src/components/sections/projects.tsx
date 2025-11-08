import { siteConfig } from "@/lib/config";
import { AnimatedSection } from "../animated-section";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function Projects() {
  return (
    <AnimatedSection id="projects" className="bg-transparent">
      <div className="container py-24 sm:py-32">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline mb-12 text-center">
          Projects
        </h2>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {siteConfig.projects.map((project, index) => {
              const projectImage = PlaceHolderImages.find(p => p.id === project.image.id);
              return (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="flex flex-col h-full overflow-hidden transition-transform transform-gpu hover:-translate-y-2 hover:shadow-primary/50">
                      {projectImage && (
                        <Image
                          src={projectImage.imageUrl}
                          alt={project.name}
                          width={600}
                          height={400}
                          className="w-full h-48 object-cover"
                          data-ai-hint={projectImage.imageHint}
                        />
                      )}
                      <CardHeader>
                        <CardTitle>{project.name}</CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <Badge key={tech} variant="secondary">{tech}</Badge>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-end gap-2">
                        {project.links.live && (
                          <Button variant="outline" size="sm" asChild>
                            <Link href={project.links.live} target="_blank">
                              <ExternalLink className="mr-2 h-4 w-4" /> View Live
                            </Link>
                          </Button>
                        )}
                        {project.links.repo && (
                          <Button variant="outline" size="sm" asChild>
                            <Link href={project.links.repo} target="_blank">
                              <Github className="mr-2 h-4 w-4" /> View Code
                            </Link>
                          </Button>
                        )}
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </AnimatedSection>
  );
}
