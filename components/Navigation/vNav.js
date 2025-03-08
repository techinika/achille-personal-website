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
          <Link href="https://buymeacoffee.com/songa">
            <a target="_blank">Buy Me a Coffee</a>
          </Link>

          <Link
            className="libutton"
            href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=achillesonga"
            target="_blank"
          >
            Follow on LinkedIn
          </Link>
        </div>
      </div>
    </>
  );
}
