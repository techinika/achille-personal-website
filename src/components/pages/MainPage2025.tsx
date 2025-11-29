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
    <main className="bg-black text-white font-sans selection:bg-blue-500 selection:text-white">
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
