"use client";

import React from "react";
import Image from "next/image";
import { projects } from "@/data/projects";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "../ui/card";
import { Briefcase, Mic, Pen, Code } from "lucide-react";
import QuickLinks from "../Parts/QuickLinks";

// --- Service Definitions (Keeping these) ---
const services = [
  {
    id: 1,
    title: "Software Engineering",
    description:
      "Building scalable and robust web applications with modern stacks. Bringing your product vision to life.",
    icon: Code,
  },
  {
    id: 2,
    title: "Content & Ghostwriting",
    description:
      "Creating engaging articles, newsletters, and scripts that capture your unique voice and audience.",
    icon: Pen,
  },
  {
    id: 3,
    title: "Public Speaking",
    description:
      "Keynotes and workshops on entrepreneurship, personal growth, and digital transformation.",
    icon: Mic,
  },
  {
    id: 4,
    title: "Startup & Growth Consulting",
    description:
      "Strategic support for founders on product, market fit, fundraising, and team dynamics.",
    icon: Briefcase,
  },
];

const galleryImages = [
  {
    id: 1,
    src: "/Providing Training To Karongi citizens.jpg",
    alt: "Public Speaking Event",
    caption: "Providing Training To Karongi citizens",
  },
  {
    id: 2,
    src: "/Speaking on the panel at a blockchain event at DTC.jpg",
    alt: "Coding Session",
    caption: "Speaking on the panel at a blockchain event",
  },
  {
    id: 3,
    src: "/Teaching Techinika Students.jpg",
    alt: "Content Creation",
    caption: "Teaching WordPress to Techinika Students",
  },
  {
    id: 4,
    src: "/achillesonga.png",
    alt: "Casual Portrait",
    caption: "A Moment of Reflection",
  },
];

export default function MainPage() {
  return (
    <section className="space-y-16">
      <div className="flex flex-col items-center text-center pt-8">
        <Image
          src="/achillesonga.png"
          width={120}
          height={120}
          alt="Cishahayo Songa Achille"
          className="rounded-full object-cover mb-4 border-2 border-gray-300"
        />

        <h1 className="text-4xl sm:text-5xl font-extrabold mb-1 leading-tight">
          Cishahayo Songa Achille
        </h1>

        <p className="text-xl font-medium text-gray-700 max-w-3xl mx-auto mb-4">
          I am a **Software Engineer** & **Entrepreneur** driving growth through
          impactful **Content** and compelling **Public Speaking**.
        </p>

        <div className="mt-4">
          <Link href="https://forms.gle/js5JNq2YqGDq9tuh8" target="_blank">
            <Button size="lg" className="text-lg">
              Let us Collaborate
            </Button>
          </Link>
        </div>
      </div>

      <Separator />

      <div>
        <h2 className="text-3xl font-bold text-center mb-8">
          My Offerings: Where Value Meets Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ id, title, description, icon: Icon }) => (
            <Card
              key={id}
              className="border-gray-200 hover:shadow-xl transition-all duration-300 text-center p-4 h-full"
            >
              <CardHeader className="flex flex-col items-center p-0 mb-3">
                <Icon className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg font-semibold">{title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <CardDescription className="text-sm text-gray-500">
                  {description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-center mb-8">
          Proof of Work: In Action
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative aspect-square overflow-hidden rounded-lg shadow-sm border border-gray-200 group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="p-2 text-white text-xs font-medium w-full text-center truncate">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-center mb-8">
          Key Projects & Ventures
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.length !== 0 ? (
            projects.map((project) => (
              <Card
                key={project.id}
                className="border-2 border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader className="p-6">
                  {/* Clean, high-contrast text */}
                  <CardTitle className="text-gray-900 text-2xl font-semibold mb-1 text-center">
                    {project.name}
                  </CardTitle>
                  <CardDescription className="text-primary text-center mb-3 text-sm font-medium">
                    {project.category}
                  </CardDescription>
                  <p className="text-gray-700 text-center mb-4 text-base">
                    {project.description}
                  </p>
                  <Link
                    href={project.link}
                    target="_blank"
                    className="underline text-primary hover:text-primary/80 transition-colors text-center font-medium block mt-2"
                  >
                    Visit Site →
                  </Link>
                </CardHeader>
              </Card>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No projects at this time. Stay tuned!
            </p>
          )}
        </div>
      </div>

      <Separator />

      {/* 5. QUICK LINKS (Footer area) */}
      <div className="text-center pb-8">
        <QuickLinks />
      </div>
    </section>
  );
}
