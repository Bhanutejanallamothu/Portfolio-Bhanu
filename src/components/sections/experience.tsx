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
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical timeline bar */}
          <div className="absolute left-4 top-2 h-full w-px bg-muted-foreground/20" />
          
          <div className="space-y-12">
            {siteConfig.experience.map((job, index) => (
              <div key={index} className="relative pl-12">
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 h-4 w-4 rounded-full bg-primary border-4 border-background" style={{ transform: 'translateX(-50%)' }} />
                
                {/* Job content */}
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-2">{job.period}</p>
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
      </div>
    </AnimatedSection>
  );
}
