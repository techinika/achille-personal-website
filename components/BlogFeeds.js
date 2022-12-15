import React, {useEffect, useState} from "react"
import { Nav } from "./Nav"
import Link from "next/link"

export const Blogfeeds = () => {
    const [articles, setArticles] = useState([]);

    useEffect(()=>{
        fetch("https://techinika.com/wp-json/wp/v2/posts", { headers : { 'Content-Type': 'application/json', 'Accept': 'application/json'}})
        .then(res => {
            return res.json();
        })
        .then(data => {
            let arts = [];
            console.log(data)
            data.forEach(blog => {
                blog.author === 2 ? arts.push(blog) : null;
            });
            setArticles(arts);
        })
        .catch(err => {
            console.log(err)
        })
    }, [articles])

    console.log("")

    // const articles = [
    //     {
    //         id: 1,
    //         title: "Hello World!",
    //         createdAt: "05-July-2022",
    //         author: "Cishahayo Songa Achille"
    //     },
    //     {
    //         id: 2,
    //         title: "Hello World!",
    //         createdAt: "05-July-2022",
    //         author: "Cishahayo Songa Achille"
    //     }
    // ]
    return (
        <>
            <section>
                <Nav title="Blog"/>
                <div className="articles">
                    {articles && articles.map(article => (
                        <div className="article" key={article.id}>
                            <div className="articleHead">
                                <Link href={`https://techinika.com/${article.slug}`}>
                                    <a>{article.slug}</a>
                                </Link>    
                                <p>{article.date}</p>
                            </div>  
                            <div>
                                <p>Published by {article.author}</p>    
                            </div>  
                        </div>
                    ))}
                    {articles.length === 0 && <p>No articles</p>}
                </div>
            </section>
        </>
    )
}