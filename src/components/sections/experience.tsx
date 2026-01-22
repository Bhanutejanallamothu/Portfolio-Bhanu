import { siteConfig } from "@/lib/config";
import { AnimatedSection } from "../animated-section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

export function Experience() {
  return (
    <AnimatedSection id="experience" className="bg-transparent">
      <div className="container py-24 sm:py-32">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline mb-12 text-center">
          Work Experience
        </h2>
        <div className="relative pl-6 after:absolute after:inset-y-0 after:w-px after:bg-muted-foreground/20 after:left-0">
          {siteConfig.experience.map((job, index) => (
            <div key={job.company} className="grid grid-cols-[140px_1fr] gap-4 md:gap-10 pb-8 relative">
              <div className="absolute -left-2 top-1.5 h-4 w-4 rounded-full bg-primary border-4 border-background" />
              <div className="text-right pt-1">
                <p className="text-sm font-medium">{job.period}</p>
              </div>
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>{job.role}</CardTitle>
                    <CardDescription>{job.company}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                      {job.tasks.map((task, i) => (
                        <li key={i}>{task}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
