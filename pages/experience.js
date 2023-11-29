import React, { useEffect } from "react";
import Head from "next/head";
import HomePage from "../components/HomePage";
import TagManager from "react-gtm-module";
import { Footer } from "../components/Sides/Footer";
import { Header } from "../components/Sides/Header";
import { Nav } from "../components/Navigation/Nav";
import { experiences } from "../data/experience";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    TagManager.initialize({ gtmId: "G-PWV48XHCYQ" });
  }, []);
  return (
    <>
      <Head>
        <title>{`Cishahayo Songa Achille - Tech enthusiast, Entrepreneur, Speaker`}</title>
        <meta
          name="keywords"
          content="Cishahayo Songa Achille, achille songa, Software Developer, Entrepreneur, Public Speaker, Content creator"
        ></meta>
         <meta
          name="description"
          content="Achille Songa is a professional web developer, who has a passion in solving society challenges and building people's capacity through inspiring contents and education."
        ></meta>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta
          name="google-site-verification"
          content="4Z07RV-1-Qub3aUIvRamziU_UKN2AZRnlyAORUy9tiA"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+Tamma+2&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header></Header>
      <section>
        <Nav title="Experience" />
        <div>
            {experiences.length > 0 ? experiences.map(experience => {
                return (
                    <div key={experience.id}>
                        <h2>{experience.experience}</h2>
                        <div className="timeline">
                            {experience.companies && experience.companies.map(company => (
                                <div key={company.id} className="timeline-item">
                                    <span className="timeline-item-icon | avatar-icon">
                                        <i className="avatar">
                                            <img className="avatar-image" src={company.logo} />
                                        </i>
                                    </span>
                                    <div className="company-data">
                                        <Link href={company.website !== "#" ? company.website : "#"}>
                                            <a target={company.website !== "#" ? "_blank" : null}><h4>{company.company}</h4></a>
                                        </Link>
                                        <div>
                                            {company.positions && company.positions.map(position => (
                                                <div key={position.id}>
                                                    <p><b>{position.position}</b></p>
                                                    <p><small><i>{position.employment} | {position.time}</i></small></p>
                                                    <p>{position.description}</p>
                                                    <p><small><b>Technologies: {position.technology}</b></small></p>
                                                    <hr></hr>
                                                </div>
                                            ))}
                                            <div>
                                              <p><b>Projects I worked on: </b></p>
                                              <div className="project-list">
                                                {company.projects.length > 0 && company.projects.map(project => (
                                                  <div key={project.id} className="project">
                                                    <Link href={project.link}><a target={project.link !== "#" && "_blank"}>{project.project}</a></Link>
                                                  </div>
                                                ))}
                                              </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )
            }) : <p>No experience!</p>}
        </div>
      </section>
      <Footer/>
    </>
  );
}
