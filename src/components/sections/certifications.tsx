import { siteConfig } from "@/lib/config";
import { AnimatedSection } from "../animated-section";
import { Card, CardHeader, CardTitle } from "../ui/card";
import { Award } from "lucide-react";

export function Certifications() {
  return (
    <AnimatedSection id="certifications" className="container py-24 sm:py-32">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline mb-12 text-center">
        Certifications
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {siteConfig.certifications.map((cert) => (
          <Card key={cert.name} className="flex items-center p-4">
            <CardHeader className="flex flex-row items-center gap-4 p-0">
                <Award className="h-8 w-8 text-primary" />
                <CardTitle className="text-base font-medium">{cert.name}</CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
    </AnimatedSection>
  );
}
