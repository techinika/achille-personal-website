import { Nav } from "./Nav";


export default function PostData(){
    return (
        <>
            <section>
                <Nav title="Hello World!"/>
                <div className="articleData">
                    {/* <Image src={} /> */}
                    <span>Published on 22-06-2022 by Cishahayo Songa Achille</span>
                    <p>Lorem ipsum - Hello world!</p>
                </div>
            </section>
        </>
    )
}