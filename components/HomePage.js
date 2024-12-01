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
              Founder of Techinika | Helps you acquire Digital Skills | Builds Software Solutions, Businesses & Communities | Write & Speak to Pass on & Inspire
            </span>
            <p>
              {`In 2017, inspired by YouTube, I embarked on a journey to learn web development with the dream of creating a platform like YouTube one day. Over the years, I gained extensive knowledge about web technologies leading me to become a software engineer. In 2020, I founded Techinika, a learning platform to help learning institutions monetize and digitize their services and use it to help people learn in their native languages.`}
              <br></br>
                {`Alongside my tech journey, I create content on YouTube and Social Media platforms (LinkedIn, Facebook, etc) to teach Kinyarwanda, my native language and share lessons I learned over the years. This passion led to the formation of a community for Kinyarwanda learners, where I share resources and help non-Kinyarwanda speakers to speak Kinyarwanda.`}
              <br></br>
                {`I love seeing youth taking charge and build solutions, for this reason, I volunteer sometimes to help causes I believe in. This led me to co-founding an organization that is empowering the next generation of TVET students with communication and leadership skills; I volunteered for UNLEASH Rwanda to support 800+ talents to solve real-world problems, I volunteer in different tech communities to bring tech people together, and I have started building the Rwanda Technology Community through Techinika. `}
              <br></br>
                {`In my free time, I enjoy writing, singing (alone), walking, engaging in meaningful discussions, and watching movies and documentaries. Interestingly, I once aspired to become a priest, the universe had a different path for me.`}
              <br></br>
              <hr></hr>
              <b>{`I am passionate about empowering students, building businesses, digital skills development, writing opportunities, partnerships, speaking engagements, and fostering conversations. Let us connect.`}</b>
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
