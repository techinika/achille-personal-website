"use client";

import React from "react";
import { Navbar } from "../parts/NavBar";
import { FooterPart } from "../parts/Footer";
import { Ventures } from "../parts/Ventures";
import { ContentCreator } from "../parts/ContentCreator";
import { Educator } from "../parts/Educator";
import { Speaker } from "../parts/Speaker";
import { About } from "../parts/About";
import { Skills } from "../parts/Skills";
import { Certifications } from "../parts/Certifications";
import { Gallery } from "../parts/Gallery";
import { MediaPress } from "../parts/MediaPress";
import { CustomCursor } from "../parts/CustomCursor";

export default function Portfolio() {
  return (
    <main className="bg-[#050505] text-[#fafafa] antialiased min-h-screen">
      <CustomCursor />
      <Navbar />

      <About />

      <Speaker />

      <Educator />

      <ContentCreator />

      <Skills />

      <Certifications />

      <Gallery />

      <MediaPress />

      <Ventures />

      <FooterPart />
    </main>
  );
}
