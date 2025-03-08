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
          </div>
          <div className="profileInfo">
            <h1>Cishahayo Songa Achille</h1>
            <span>
              Founder of Techinika and Kinyarwanda Study Community | Helps you
              acquire Digital Skills | Builds Software Solutions, Businesses &
              Communities | Write & Speak to Pass on & Inspire
            </span>
            <p>
              <b>{`I am passionate about empowering students, building businesses, digital skills development, writing opportunities, partnerships, speaking engagements, and fostering conversations. Let us connect.`}</b>
              <br></br>
              <br></br>
              <VertNav />
            </p>
            <div className="btns">
              <button
                className="btn"
                onClick={(e) => {
                  e.stopPropagation();
                  router.push("/hire-me");
                }}
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
        <div>
          <h2>How I can Help you</h2>
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
          <h2>My Projects</h2>
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
