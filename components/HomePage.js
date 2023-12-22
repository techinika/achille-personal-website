import React from "react";
import Image from "next/image";
import me from "../public/Achille Songa.png";
import VertNav from "./Navigation/vNav";
import { skills } from "../data/skills";
import { projects } from "../data/projects";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

const imageLoader = ({ src, width, quality }) => {
  return `https://achillesonga.com/${src}?w=${width}&q=${quality || 75}`;
};

export default function HomePage() {
  const router = useRouter();
  return (
    <>
      <section>
        <div className="profile">
          <div className="imageHolder">
            <Image
              src={me}
              className="profilePic"
              layout="intrinsic"
              priority="true"
              loader={imageLoader}
              alt="Cishahayo Songa Achille"
            />
            <VertNav />
          </div>
          <div className="profileInfo">
            <h1>Cishahayo Songa Achille</h1>
            <span>
              Software Developer | Entrepreneur | Public Speaker | Content
              creator
            </span>
            <p>
              {`Founder at Techinika. I am very passionate about empowering people with education, innovation and sustainable future with technology and I love creating products that transform people's lives. I pour my heart out through well curated writings and speeches, hoping that I can empower some souls with wisdom and inspire them to be the change they need to see.`}
              <br></br>
              <hr></hr>
              <b>{`Hire me to make a website for you, deliver a powerful speech or technology workshop at your next event, to upskill your team or to publish an inspiring articles on your platform.`}</b>
              <br></br>
              <br></br>
            </p>
            <div className="btns">
              <button
                className="btn"
                onClick={(e) => {
                  e.stopPropagation();
                  router.push("/hire-me");
                }}
              >
                Hire Me
              </button>
              <button
                className="btn"
                onClick={(e) => {
                  e.stopPropagation();
                  const cv = "https://achillesonga.com/achille-songa-cv.pdf";
                  if (typeof window !== "undefined") {
                    window.location.href = cv;
                  }
                }}
              >
                Download my CV
              </button>
            </div>
          </div>
        </div>
        <div>
          <h2>Skills</h2>
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
          <h2>Projects</h2>
          <div className="project-cards">
            {projects.length !== 0 ? (
              projects.map((project) => (
                <div key={project.id} className="project-card">
                  <h2 style={{ padding: "0px", margin: "0px" }}>
                    {project.name}
                  </h2>
                  <p>{project.category}</p>
                  <p className="desc">{project.description}</p>
                  <hr></hr>
                  <Link href={project.link}>
                    <a className="link" target="_blank">
                      Check out
                    </a>
                  </Link>
                </div>
              ))
            ) : (
              <p>No project at time</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
