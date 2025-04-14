"use client";

import React from "react";
import Image from "next/image";
import VertNav from "../Navigation/vNav";
import { useRouter } from "next/navigation";
import { skills } from "@/data/skills";
import { projects } from "@/data/projects";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

export default function MainPage() {
  const router = useRouter();

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
          <p className="text-sm">
            Founder of Techinika and Kinyarwanda Study Community | Helps you
            acquire Digital Skills | Builds Software Solutions, Businesses &
            Communities | Write & Speak to Pass on & Inspire
          </p>
          <p className="font-semibold my-2">
            {`I am passionate about empowering students, building businesses, digital skills development, writing opportunities, partnerships, speaking engagements, and fostering conversations. Let us connect.`}
          </p>
          <VertNav />
          <div className="my-2 flex items-center">
            <Button
              onClick={(e) => {
                e.stopPropagation();
                router.push("/hire-me");
              }}
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
      <div>
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
      </div>
      <div>
        <h2 className="font-bold text-2xl py-3 mt-3">My Projects</h2>
        <div className="project-cards">
          {projects.length !== 0 ? (
            projects.map((project) => (
              <div key={project.id} className="project-card">
                <h2 className="text-2xl font-bold">{project.name}</h2>
                <p>{project.category}</p>
                <p className="desc">{project.description}</p>
                <Separator />
                <Link className="p-4 underline" href={project.link}>
                  Check out
                </Link>
              </div>
            ))
          ) : (
            <p>No project at time</p>
          )}
        </div>
      </div>
    </section>
  );
}
