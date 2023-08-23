import Link from "next/link";
import Head from "next/head";
import { Nav } from "../components/Navigation/Nav";
import { Footer } from "../components/Sides/Footer";
import { Header } from "../components/Sides/Header";

export default function Lab() {
  return (
    <>
      <Head>
        <title>Achille Songa Lab</title>
        <meta
          name="keywords"
          content="achille songa lab, learn kinyarwanda, perspective, achille songa, Software Developer, Entrepreneur, Public Speaker, Content creator, growth opportunities, lessons learned"
        ></meta>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta
          name="google-site-verification"
          content="4Z07RV-1-Qub3aUIvRamziU_UKN2AZRnlyAORUy9tiA"
        />
      </Head>
      <Header></Header>
      <section>
        <Nav title="My Lab" />
        <div>
          <Link href="https://youtube.com/@achillesonga">
            <a target="_blank">
              <h2>My YouTube Channel</h2>
            </a>
          </Link>
          <p>{`In 2019, I started a youtube channel which I dedicated to use in sharing the lyrics of my favorite songs and Rwandan's old school. Because of my will to share what I think and times changing, I started mixing contents teaching people how to speak Kinyarwanda. Later I added other kind of content dedicated to my own thoughts.`}</p>
          <br></br>
          <b>Type of contents:</b>
          <ul>
            <li>{"Learn Kinyarwanda (My Native language)"}</li>
            <li>{"Watch Rwandan Old School songs' lyrics"}</li>
            <li>{"Get my perspective on different topics"}</li>
          </ul>
        </div>
        <div>
          <Link href="https://www.linkedin.com/newsletters/achille-songa-newsletter-7034443629926432768/">
            <a target="_blank">
              <h2>My LinkedIn Newsletter</h2>
            </a>
          </Link>
          <p>
            {
              "I created my first blog back in 2018. It was a messy blog that I deleted after a few weeks. Since then I have created and deleted multiple blogs. All were showing me that I have something in me that wanted to go out. In 2019 and 2020, I build a brand on FaceBook as 'Mind In Middle', which was supposed to mean 'a leader' and I was using it to share my perceptive on different things through writing. It grew up, but later stopped. In 2023, I decided to start writing long articles from my notes every week. I couldn't keep up with the week's schedule but I am glad I was able to do that and now I post my articles on LinkedIn."
            }
          </p>
          <br></br>
          <b>My articles revolves around:</b>
          <ul>
            <li>{"My personal experiences"}</li>
            <li>{"Important matters (Education, Business, Technology)"}</li>
            <li>{"Lessons learnt from situations"}</li>
          </ul>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}
