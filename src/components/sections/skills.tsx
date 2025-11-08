import { siteConfig } from "@/lib/config";
import { AnimatedSection } from "../animated-section";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

export function Skills() {
  return (
    <AnimatedSection id="skills" className="container py-24 sm:py-32">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline mb-12 text-center">
        Technical Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {siteConfig.skills.map((skillCategory) => (
          <Card key={skillCategory.category}>
            <CardHeader>
              <CardTitle>{skillCategory.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skillCategory.technologies.map((tech) => (
                   <Badge key={tech} variant="default" className="text-sm py-1 px-3">{tech}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
         <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Soft Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {siteConfig.softSkills.map((skill) => (
                   <Badge key={skill} variant="outline" className="text-sm py-1 px-3">{skill}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
      </div>
    </AnimatedSection>
  );
}
