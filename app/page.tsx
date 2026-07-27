import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export default function HomePage() {
  return (
    <Section>
      <Container>
        <h1 className="mb-6 text-5xl font-bold">
          Grace Music Academy
        </h1>

        <p className="mb-8 text-lg text-gray-600">
          Professional Music Education Excellence
        </p>

        <Button>Book a Lesson</Button>
      </Container>
    </Section>
  );
}