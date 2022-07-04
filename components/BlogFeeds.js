import { Nav } from "./Nav"
import Link from "next/link"

export const Blogfeeds = () => {
    return (
        <>
            <section>
                <Nav title="Blog"/>
                <div className="articles">
                    <div className="article">
                        <div className="articleHead">
                            <Link href="/3">
                                <a>How did I mentor for the first time?</a>
                            </Link>    
                            <p>23-06-2022</p>
                        </div>  
                        <div>
                            <p>Published by Cishahayo Songa Achille</p>    
                        </div>  
                    </div>
                    <div className="article">
                        <div className="articleHead">
                            <Link href="/2">
                                <a>How did I mentor for the first time?</a>
                            </Link>    
                            <p>23-06-2022</p>
                        </div>  
                        <div>
                            <p>Published by Cishahayo Songa Achille</p>    
                        </div>  
                    </div>
                    <div className="article">
                        <div className="articleHead">
                            <Link href="/1">
                                <a>How did I mentor for the first time?</a>
                            </Link>    
                            <p>23-06-2022</p>
                        </div>  
                        <div>
                            <p>Published by Cishahayo Songa Achille</p>    
                        </div>  
                    </div>
                </div>
            </section>
        </>
    )
}