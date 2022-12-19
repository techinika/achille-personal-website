import React from "react";
import Image from "next/image"
import me from "../public/songa achille.png";
import { useRouter } from "next/dist/client/router"
import VertNav from "./vNav";
import ExperienceModal from "./modal/experienceModal";
import { experiences } from "../data/experiences";
import { skills } from "../data/skills";

export default function HomePage(){
    const [modalOpen, setModalOpen] = React.useState(false);
    const [modalData, setModalData] = React.useState([]);
    const [modalTitle, setModalTitle] = React.useState('')
    const [companyLink, setCompanyLink] = React.useState('')

    
    const router = useRouter();
    return (
        <>
            {modalOpen && <ExperienceModal title={modalTitle} data={modalData} setOpen={setModalOpen} link={companyLink}/>}
            <section>
                <div className="profile">
                    <div className="imageHolder">
                        <Image src={me} className="profilePic" alt="Cishahayo Songa Achille"/>
                        <VertNav/>
                    </div>
                    <div className="profileInfo">
                        <h1>Cishahayo Songa Achille</h1>
                        <span>Software Developer | Entrepreneur | Public Speaker | Content creator</span>
                        <p>I am a young enthusiastic fellow, who likes to learn, teach, engage and make a change. Those are my drives and anything that brings me closer to any of that, is my go-to. I have been a software engineer for 2 years now, a content creator for 4 years and a speaker for 1 year. I believe that everyone can make a change to your life as you can also make an impact to anyone&apos;s life; and the best way to influence, is by leading by being an example.</p>
                        <div className="btns">
                            <button className="btn" onClick={e=>{
                                e.stopPropagation();
                                router.push("/my-story");
                            }}>Read my Story</button>
                            <button className="btn" onClick={e=>{
                                e.stopPropagation();
                                const cv = "https://achillesonga.net/achille-songa-cv.pdf";
                                if (typeof window !== "undefined"){
                                    window.location.href = cv;
                                }
                            }}>Download my CV</button>
                        </div>
                    </div>
                </div>
                <div>
                    <h2>Experiences</h2>
                    <div className="cards">
                        {experiences ? experiences.map(experience => (
                            <div className="card" key={experience.id} onClick={() => {
                                setModalData(experience.roles) 
                                setModalTitle(experience.title)
                                setCompanyLink(experience.link)
                                setModalOpen(true)
                            }}>
                                <h1>At {experience.title}</h1>
                                <div className="blur"></div>
                            </div>
                        )) : <p>No experience</p>}
                    </div>
                </div>
                <div>
                    <h2>Skills</h2>
                    <div className="skill-cards">
                        {skills ? skills.map(skill => (
                            <div key={skill.id} className="skill-card">
                                <div style={{width: `${skill.level}%`, backgroundColor: "#1C4D72", borderRadius: "5px", color: "white", padding: "5px", height: "100%"}}>{skill.skill} ({skill.level}%)</div>
                            </div>
                        )) : <p>No skill</p>}
                    </div>
                </div>
            </section>
        </>
    )
}