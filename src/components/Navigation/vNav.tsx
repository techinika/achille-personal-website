"use client";

import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";

export default function VertNav() {
  return (
    <div className="">
      <h2 className="font-bold text-lg">...more resources</h2>
      <Separator />
      <div className="flex flex-wrap gap-4 underline">
        <Link
          target="_blank"
          href="https://www.linkedin.com/newsletters/achille-songa-newsletter-7034443629926432768/"
        >
          Newsletter
        </Link>
        <Link href="/lab">Lab</Link>
        <Link href="/experience">Experience</Link>
        <Link target="_blank" href="https://blog.achillesonga.com">
          Blog
        </Link>

        <Link href="https://book.achillesonga.com" target="_blank">
          Book a Meeting
        </Link>
      </div>
    </div>
  );
}
