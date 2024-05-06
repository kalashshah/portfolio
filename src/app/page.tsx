import React from "react";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <h1 className="text-4xl font-bold text-center mt-8">Projects</h1>
      <Projects />
      <h1 className="text-4xl font-bold text-center mt-8">
        Experience & Education
      </h1>
      <Experience />
      <Footer />
    </>
  );
}
