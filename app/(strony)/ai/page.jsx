import Card from "/app/components/card";
import { CARDS } from "/app/data.js";
import Link from "next/link";

const sections = [
  {
    title: "AI in programming",
    descr:
      "Since the emergence of ChatGPT I use AI on the daily basis in most of my projects. All recents projects, this website including, are done with help of AI. I share the opinion that artificial intelligence is the most momentous invention since the invention of writing.",
  },
  {
    title: "AI in graphic design",
    descr:
      "I use AI in graphic design from 2018. Below are some examples of mixing photography, AI, and traditional painting techniques. As for 2023, my favourite software are Leonardo and Deep Dream.",
  },
  {
    title: "AI in movies",
    descr: "Coming soon. Currently (March 2023), I'm working on two series of experimental and educational movies using AI in video, music, and art.",
  },
];

const links = [
  {
    type: "external",
    href: "https://showroom.kervion.com/mekong/",
    name: "Mekong River",
    descr: " : React 18, responsive, multi language, AI, ",
    gitrepo: "mekong-public",
  },
  {
    type: "external",
    href: "https://showroom.kervion.com/guardian",
    name: "Guardian Open API",
    descr: " : React 18, responsive, fully functional, ",
    gitrepo: "guardian-public",
  },
  {
    type: "external",
    href: "https://showroom.kervion.com/runes/",
    name: "The Runes",
    descr: " : React 18, midjourney, ",
    gitrepo: "runes-public",
  },
];

function AI() {
  const currentCard = CARDS.find((obj) => obj.link === "ai");

  return (
    <div className="mainLinks">
      <Card card={currentCard} />
      <div className="linki">
        <section>
          <h4>{sections[0].title}</h4>
          <p>{sections[0].descr}</p>
          <br />
          <ol>
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.href} target="_blank">
                  {link.name}
                </a>
                {link.descr}
                <a href={link.gitrepo} target="_blank">
                  github repo
                </a>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h4>{sections[1].title}</h4>
          <p>{sections[1].descr}</p>
          <br />
          <ul>
            <li>
              <Link href="multimedia/design/neural">AI graphics</Link> (deep dream, leonardo, midjourney)
            </li>
          </ul>
        </section>

        <section>
          <h4>{sections[2].title}</h4>
          <p>{sections[2].descr}</p>
        </section>
      </div>
    </div>
  );
}
export default AI;
