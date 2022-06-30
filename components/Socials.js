import Link from "next/link"
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

export const Socials = () => {
    return (
        <>
            <div className="socials">
                <Link href="https://facebook.com/songa.achille.9">
                    <a target="_blank"><FaFacebook/></a>
                </Link>
                <Link href="https://instagram.com/achille_songa">
                    <a target="_blank"><FaInstagram/></a>
                </Link>
                <Link href="https://twitter.com/achille_songa">
                    <a target="_blank"><FaTwitter/></a>
                </Link>
                <Link href="https://linkedin.com/in/achillesonga">
                    <a target="_blank"><FaLinkedin/></a>
                </Link>
                <Link href="https://github.com/songa1">
                    <a target="_blank"><FaGithub/></a>
                </Link>
                <Link href="https://youtube.com/c/achillesonga">
                    <a target="_blank"><FaYoutube/></a>
                </Link>
            </div>
        </>
    )
}