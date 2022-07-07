import { Nav } from "./Nav"
import Link from "next/link"

export const Blogfeeds = () => {

    const articles = [
        {
            id: 1,
            title: "Hello World!",
            createdAt: "05-July-2022",
            author: "Cishahayo Songa Achille"
        }
    ]
    return (
        <>
            <section>
                <Nav title="Blog"/>
                <div className="articles">
                    {articles && articles.map(article => (
                        <div className="article" key={article.id}>
                            <div className="articleHead">
                                <Link href="/1">
                                    <a>{article.title}</a>
                                </Link>    
                                <p>{article.createdAt}</p>
                            </div>  
                            <div>
                                <p>Published by {article.author}</p>    
                            </div>  
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}