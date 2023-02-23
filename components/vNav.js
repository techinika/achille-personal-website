import Link from "next/link";

export default function VertNav(){
    return (
        <>
            <div className="nav2">
                <p>...more resources</p>
                <div className="vnav">
                    <Link href="/podcasts">
                        <a>Podcasts</a>
                    </Link>
                    <Link href="https://www.linkedin.com/newsletters/achille-songa-newsletter-7034443629926432768/">
                        <a target="_blank">Newsletter</a>
                    </Link>
                    <Link href="/events">
                        <a>Events</a>
                    </Link>
                </div>
            </div>
        </>
    )
}
