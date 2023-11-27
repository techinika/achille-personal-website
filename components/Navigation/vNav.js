import Link from "next/link";

export default function VertNav() {
  return (
    <>
      <div className="nav2">
        <p>...more resources</p>
        <div className="vnav">
          <Link href="https://www.linkedin.com/newsletters/achille-songa-newsletter-7034443629926432768/">
            <a target="_blank">Newsletter</a>
          </Link>
          <Link href="/lab">
            <a>Lab</a>
          </Link>
          <Link href="/experience">
            <a>Experience</a>
          </Link>
          <Link href="https://calendly.com/achille-songa/meet-achille-songa">
            <a target="_blank">Book a chat with me</a>
          </Link>
          <Link href="https://sessionize.com/cishahayo-songa-achille/">
            <a target="_blank">Speaking Sessions</a>
          </Link>
        </div>
      </div>
    </>
  );
}
