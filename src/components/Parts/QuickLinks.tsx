"use client";

import Link from "next/link";

export default function QuickLinks() {
  return (
    <div className="space-y-3">
      <h2 className="font-bold text-xl">Resources & Connect</h2>

      <div className="flex flex-wrap justify-center gap-6 text-lg">
        <Link
          target="_blank"
          href="https://www.linkedin.com/newsletters/achille-songa-newsletter-7034443629926432768/"
          className="hover:text-primary transition-colors underline-offset-4 hover:underline"
        >
          📰 Newsletter
        </Link>
        <Link
          target="_blank"
          href="https://blog.achillesonga.com"
          className="hover:text-primary transition-colors underline-offset-4 hover:underline"
        >
          ✍️ Blog
        </Link>
        <Link
          target="_blank"
          href="#"
          className="hover:text-primary transition-colors underline-offset-4 hover:underline"
        >
          📄 My CV
        </Link>
      </div>
    </div>
  );
}
