import { Nav } from "./Nav"


export const Podcasts = () => {
    return (
        <>
            <section>
                <Nav title="Podcasts"/>
                <div className="pods">
                    <iframe title="Ep 2: Understand Rwanda from a Rwandan | Kabera Innocent telling us how Rwanda evolved so fast!" allowtransparency="true" height="150" width="100%" style={{border: "none", minWidth: "min(100%, 430px)"}} scrolling="no" data-name="pb-iframe-player" src="https://www.podbean.com/player-v2/?from=embed&i=zrprz-1213ac2-pb&share=1&download=1&fonts=Arial&skin=1&font-color=auto&rtl=0&logo_link=episode_page&btn-skin=7&size=150"></iframe>
                    <iframe title="Ep 1: What is your African Dream? A powerful conversation with Usanase Aime Francois" allowtransparency="true" height="150" width="100%" style={{border: "none", minWidth: "min(100%, 430px)"}} scrolling="no" data-name="pb-iframe-player" src="https://www.podbean.com/player-v2/?from=embed&i=dh3wy-11f6472-pb&share=1&download=1&fonts=Arial&skin=1&font-color=auto&rtl=0&logo_link=episode_page&btn-skin=7&size=150"></iframe>
                    <iframe src="https://anchor.fm/thebrazilianpov/embed/episodes/Ep--61---Life-in-Rwanda--getting-to-know-Rwandas-culture--pros-and-cons--traveling-to-Rwanda--misconceptions-and-more-with-Achille-Songa-Lab-e1duihe/a-a1ptlh" height="102px" width="100%" frameborder="0" scrolling="no"></iframe>
                </div>
            </section>
        </>
    )
}