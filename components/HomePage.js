import React from "react";
import Image from "next/image";
import me from "../public/Achille Songa.jpg";
import { useRouter } from "next/dist/client/router";
import VertNav from "./vNav";
import ExperienceModal from "./modal/experienceModal";
import { skills } from "../data/skills";
import { projects } from "../data/projects";

export default function HomePage() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalData, setModalData] = React.useState([]);
  const [modalTitle, setModalTitle] = React.useState("");
  const [companyLink, setCompanyLink] = React.useState("");

  const router = useRouter();
  return (
    <>
      {modalOpen && (
        <ExperienceModal
          title={modalTitle}
          data={modalData}
          setOpen={setModalOpen}
          link={companyLink}
        />
      )}
      <section>
        <div className="profile">
          <div className="imageHolder">
            <Image
              src={me}
              className="profilePic"
              layout="intrinsic"
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
              {`Founder at Techinika. I am very passionate about empowering people with education, innovation and sustainable future with technology and I love creating stuff that change people's lives. I pour my heart out through well curated writings and speeches, hoping that I can empower some souls with wisdom and inspire them to be the change they need to see.`}
              <br></br>
              <b>{`Hire me to make a website for you, deliver a powerful speech or technology workshop at your next event, or to publish an inspiring articles on your platform.`}</b>
            </p>
            <div className="btns">
              <button
                className="btn"
                onClick={(e) => {
                  e.stopPropagation();
                  //   router.push("/my-story");
                }}
              >
                Hire Me
              </button>
              <button
                className="btn"
                onClick={(e) => {
                  e.stopPropagation();
                  const cv = "https://achillesonga.net/achille-songa-cv.pdf";
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
                      backgroundColor: "#1C4D72",
                      borderRadius: "5px",
                      color: "white",
                      padding: "5px",
                      height: "100%",
                    }}
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
              projects.map((project) => <div key={project.id}></div>)
            ) : (
              <p>No project at time</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
