"use client";

import HireMeForm from "@/components/Forms/hireMe";
import { Nav } from "../Navigation/Nav";

export default function HireMe() {
  return (
    <section>
      <Nav title="Hire Me For You" />
      <HireMeForm />
    </section>
  );
}
