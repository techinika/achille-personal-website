"use client";

import React from "react";
import Link from "next/link";
import { experiences } from "@/data/experience";
import { Nav } from "../Navigation/Nav";

export default function Home() {
  return (
    <section>
      <Nav title="Experience" />
      <div>
        {experiences.length > 0 ? (
          experiences
            .sort((a, b) => b.id - a.id)
            .map((experience) => {
              return (
                <div key={experience.id}>
                  <h2>{experience.experience}</h2>
                  <div className="timeline">
                    {experience.companies &&
                      experience.companies.map((company) => (
                        <div key={company.id} className="timeline-item">
                          <span className="timeline-item-icon | avatar-icon">
                            <i className="avatar">
                              <img
                                className="avatar-image"
                                src={company.logo}
                              />
                            </i>
                          </span>
                          <div className="company-data">
                            <Link
                              href={
                                company.website !== "#" ? company.website : "#"
                              }
                              target={company.website && "_blank"}
                            >
                              <h4>{company.company}</h4>
                            </Link>
                            <div>
                              {company.positions &&
                                company.positions.map((position) => (
                                  <div key={position.id}>
                                    <p>
                                      <b>{position.position}</b>
                                    </p>
                                    <p>
                                      <small>
                                        <i>
                                          {position.employment} |{" "}
                                          {position.time}
                                        </i>
                                      </small>
                                    </p>
                                    <p>{position.description}</p>
                                    <p>
                                      <small>
                                        <b>
                                          Technologies: {position.technology}
                                        </b>
                                      </small>
                                    </p>
                                    {/* <hr></hr> */}
                                  </div>
                                ))}
                              <div>
                                {company.projects.length > 0 && <hr></hr>}
                                {company.projects.length > 0 && (
                                  <p>
                                    <b>Projects I worked on: </b>
                                  </p>
                                )}
                                <div className="project-list">
                                  {company.projects.length > 0 &&
                                    company.projects.map((project) => (
                                      <div key={project.id} className="project">
                                        <Link
                                          target={project.link && "_blank"}
                                          href={project.link}
                                        >
                                          {project.project}
                                        </Link>
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
              );
            })
        ) : (
          <p>No experience!</p>
        )}
      </div>
    </section>
  );
}
