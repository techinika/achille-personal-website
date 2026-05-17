"use client";

import React from "react";
import { Navbar } from "../parts/NavBar";
import { FooterPart } from "../parts/Footer";
import { Ventures } from "../parts/Ventures";
import { ContentCreator } from "../parts/ContentCreator";
import { Educator } from "../parts/Educator";
import { Speaker } from "../parts/Speaker";
import { About } from "../parts/About";

export default function Portfolio() {
  return (
    <main className="bg-[#050505] text-[#fafafa] antialiased min-h-screen">
      <Navbar />

      <About />

      <Speaker />

      <Educator />

      <ContentCreator />

      <Ventures />

      <FooterPart />
    </main>
  );
}
