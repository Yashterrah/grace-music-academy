import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

import { AboutContent } from "./about-content";
import { AboutImage } from "./about-image";

export function About() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <AboutImage />

          <AboutContent />
        </div>
      </Container>
    </Section>
  );
}