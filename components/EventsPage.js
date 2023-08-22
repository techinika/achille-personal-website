import { Nav } from "./Nav"
import Link from "next/link"

export const EventsPage = () => {
    return (
        <>
            <section>
                <Nav title="Events"/>
                <div className="pods">
                    <Link href="https://event.techstars.com/event/ECiij5vmKl">
                        <div className="event">
                            <div>
                                <a target="_blank">Techstars Startup Weekend Kigali <span className="badge">Done</span></a>
                                <p>Jul 14, 8:00 AM - Jul 16, 11:00 AM GMT+1</p>
                                <span>Learn how to think, work, and build like a startup in 54 thrilling hours. Over an action-packed three days, you’ll meet the very best mentors, investors, co-founders and sponsors to show you how to get more done faster -- and, maybe even start that business.</span>
                            </div>
                            <button>ALU</button>
                        </div>
                    </Link>
                    <Link href="https://www.youtube.com/playlist?list=PLzqRqd8SZbXasRVcXmh_byYrBKygJmCW9">
                        <div className="event">
                            <div>
                                <a target="_blank">Iga Na Techinika: Weekend classes <span className="badge">Weekly</span></a>
                                <p>Every Saturday</p>
                                <span>One hour of guided learning of technology concepts explained in Kinyarwanda. New topic every week</span>
                            </div>
                            <button>YouTube LIVE</button>
                        </div>
                    </Link>
                </div>
            </section>
        </>
    )
}