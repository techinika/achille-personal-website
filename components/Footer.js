import { Socials } from "./Socials"
import Link from "next/link"

export const Footer = () => {
    return (
        <>
            <footer>
                <h2>Follow me on:</h2>
                <Socials/>
                <p>&copy; Cishahayo Songa Achille 2022 - Made by&nbsp; 
                    <Link href="https://techinika.com/twandikire">
                        <a target="_blank">Techinika</a>
                    </Link>
                </p>
            </footer>
        </>
    )
}