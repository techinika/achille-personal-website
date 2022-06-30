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
                    <Link href="/blog">
                        <a>Blog</a>
                    </Link>
                </div>
            </div>
        </>
    )
}