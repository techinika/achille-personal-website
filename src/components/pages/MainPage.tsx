"use client";

import React from "react";
import Image from "next/image";
import VertNav from "../Navigation/vNav";
import { projects } from "@/data/projects";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Briefcase, ChartArea, Mic, Pen } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Ghostwriting",
    description:
      "Professional ghostwriting for articles, speeches, and online content that resonates with your audience.",
    icon: Pen,
  },
  {
    id: 2,
    title: "Public Speaking",
    description:
      "Keynotes, workshops, and facilitation focused on personal development, entrepreneurship, and digital transformation.",
    icon: Mic,
  },
  {
    id: 3,
    title: "Startup Consultancy",
    description:
      "Support for founders in product strategy, growth, team dynamics, and pitching.",
    icon: Briefcase,
  },
  {
    id: 4,
    title: "Personal Growth Consultancy",
    description:
      "Supporting individuals in unlocking their potential, building confidence, and navigating life transitions.",
    icon: ChartArea,
  },
];

export default function MainPage() {
  return (
    <section>
      <div className="grid md:grid-cols-3 xs:grid-cols-1 sm:grid-cols-1 gap-3 pb-4">
        <div className="rounded-md items-start overflow-hidden">
          <Image
            src="/achillesonga.png"
            className="object-cover"
            layout="responsive"
            width={100}
            height={100}
            alt="Cishahayo Songa Achille"
          />
        </div>
        <div className="flex flex-col gap-2 flex-1/2 md:col-span-2">
          <h1 className="font-bold text-2xl">Cishahayo Songa Achille</h1>
          <p className="text-md">
            I help people and startups grow through storytelling, strategy, and
            skills for the digital age.
          </p>

          <VertNav />
          <div className="my-2 flex items-center">
            <Link href="https://forms.gle/js5JNq2YqGDq9tuh8" target="_blank">
              <Button>Contact Me</Button>
            </Link>
          </div>
        </div>
      </div>
      {/* <div>
        <h2 className="font-bold text-2xl py-3 mt-3">How I can Help you</h2>
        <div className="skill-cards">
          {skills ? (
            skills.map((skill) => (
              <div key={skill.id} className="skill-card">
                <div
                  style={{
                    width: `${skill.level}%`,
                  }}
                  className="skill"
                >
                  {skill.skill} ({skill.level}%)
                </div>
              </div>
            ))
          ) : (
            <p>No skill</p>
          )}
        </div>
      </div> */}
      <div>
        <h2 className="font-bold text-2xl py-3 mt-3">How I can help you!</h2>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
          {services.length !== 0 ? (
            services.map(({ id, title, description, icon: Icon }) => (
              <Card
                key={id}
                className="hover:shadow-md transition-shadow service-card"
              >
                <CardHeader className="flex flex-col gap-2">
                  <Icon className="h-5 w-5 mx-auto text-primary" />
                  <CardTitle className="text-center mx-auto text-primary">
                    {title}
                  </CardTitle>
                  <CardDescription className="text-center desc">
                    {description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))
          ) : (
            <p>No services at this time.</p>
          )}
        </div>
      </div>
      <div>
        <h2 className="font-bold text-2xl mt-10 mb-3">
          Companies/Projects I am involved in.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.length !== 0 ? (
            projects.map((project) => (
              <Card key={project.id} className="bg-primary">
                <CardHeader>
                  <CardTitle className="text-secondary mx-auto">
                    {project.name}
                  </CardTitle>
                  <CardDescription className="text-secondary  mx-auto text-center">
                    {project.category}
                  </CardDescription>
                  <Separator />
                  <p className="text-center text-white">
                    {project.description}
                  </p>
                  <Link
                    href={project.link}
                    className="underline text-secondary hover:text-muted-foreground text-center"
                  >
                    Check it out →
                  </Link>
                </CardHeader>
              </Card>
            ))
          ) : (
            <p>No projects at this time.</p>
          )}
        </div>
      </div>
    </section>
  );
}
