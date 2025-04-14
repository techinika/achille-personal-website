"use client";

import Link from "next/link";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export const Socials = () => {
  return (
    <div className="socials">
      <Link
        target="_blank"
        href="https://facebook.com/songa.achille.9"
        passHref
      >
        <FaFacebook />
      </Link>
      <Link target="_blank" href="https://instagram.com/achille_songa" passHref>
        <FaInstagram />
      </Link>
      <Link target="_blank" href="https://twitter.com/achille_songa" passHref>
        <FaTwitter />
      </Link>
      <Link
        target="_blank"
        href="https://linkedin.com/in/achillesonga"
        passHref
      >
        <FaLinkedin />
      </Link>
      <Link target="_blank" href="https://github.com/songa1" passHref>
        <FaGithub />
      </Link>
      <Link target="_blank" href="https://youtube.com/c/achillesonga" passHref>
        <FaYoutube />
      </Link>
    </div>
  );
};
