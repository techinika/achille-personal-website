import Image from "next/image"
import me from "../public/AS-PNG.png"
import { useRouter } from "next/dist/client/router"
import VertNav from "./vNav";

export default function HomePage(){
    const router = useRouter();
    return (
        <>
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
                                const cv = "https://achillesonga.com/achille-songa-cv.pdf";
                                if (typeof window !== "undefined"){
                                    window.location.href = cv;
                                }
                            }}>Download my CV</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}