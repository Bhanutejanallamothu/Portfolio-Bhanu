import { siteConfig } from "@/lib/config";
import { AnimatedSection } from "../animated-section";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { GraduationCap } from "lucide-react";

export function About() {
  return (
    <AnimatedSection id="about" className="container py-24 sm:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline mb-6">
            About Me
          </h2>
          <div className="space-y-4 text-muted-foreground">
            {siteConfig.author.about.split('\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline mb-6">
            Education
          </h2>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-4">
                <div className="bg-muted p-2 rounded-full">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-base font-medium">{siteConfig.education.degree}</p>
                  <p className="text-sm text-muted-foreground">{siteConfig.education.university}</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Expected Graduation: {siteConfig.education.graduationDate}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </AnimatedSection>
  );
}
