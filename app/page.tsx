import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Courses } from "@/components/sections/courses";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Courses />
    </>
  );
}