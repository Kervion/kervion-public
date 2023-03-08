import Card from "/app/components/card";
import { CARDS } from "/app/data.js";

import Link from "next/link";

const phukets = [
  {
    type: "external",
    link: "https://kervion.com/phuketart/",
    linkTitle: "Artists",
    description: "portfolio of represented Thai artists and expats from Phuket CHECK LINK",
  },
  {
    type: "external",
    link: "https://www.youtube.com/playlist?list=PLbIHKoWdy9769nf5sS-xe2QR0Z-u7EsEk",
    linkTitle: "Phuket Art Channel",
    description: "interviews with artists from Phuket",
  },
  {
    type: "itnernal",
    link: "archives/exhibitions/pullman",
    linkTitle: "Exhibitions",
    description: "photos from exhibitions",
  },
  ,
  {
    type: "external",
    link: "https://www.youtube.com/watch?v=7X3GCZYxUlc",
    linkTitle: "Pullman",
    description: "short YT movie form Pullman event",
  },
  ,
  {
    type: "external",
    link: "https://www.youtube.com/watch?v=ra6bp0AJmik",
    linkTitle: "Asado",
    description: "short YT movie form Asado promotion",
  },
];

const batmaps = [
  {
    type: "external",
    link: "http://batmap.kervion.com/",
    linkTitle: "Batmap",
    description: "worldwide nightlife guide",
  },
  {
    type: "external",
    link: "https://www.youtube.com/watch?v=AlZ0jAvSdwE",
    linkTitle: "Lightboards",
    description: "advertising on Phuket, short movie on YT",
  },
  ,
  {
    type: "external",
    link: "http://batmap.kervion.com/advertising/offer.pdf",
    linkTitle: "Manual",
    description: "manual for marketers",
  },
  ,
  {
    type: "internal",
    link: "multimedia/design/batmap",
    linkTitle: "Maps",
    description: "maps of nightlife",
  },
];

const movies = [
  {
    type: "internal",
    link: "multimedia/video",
    linkTitle: "Fruits of Love",
    description: "",
  },
  {
    type: "external",
    link: "https://www.youtube.com/watch?v=B3Z1sQ9-Rxw&list=PL6dwSzlnlkCZEflIbodwujGoCVdYyKQa8",
    linkTitle: "Lucernae",
    description: "",
  },
  {
    type: "internal",
    link: "multimedia/flash/choice/essence",
    linkTitle: "Motion graphics",
    description: "",
  },
  {
    type: "external",
    link: "http://kervion.com/physics/",
    linkTitle: "Physics",
    description: "",
  },
  {
    type: "external",
    link: "https://www.youtube.com/watch?v=7AgyGGk--dQ",
    linkTitle: "Sunset & Wine",
    description: "",
  },
  {
    type: "external",
    link: "https://www.youtube.com/watch?v=M2rgs-SjCQ4",
    linkTitle: "120 Seconds",
    description: "",
  },
  {
    type: "external",
    link: "https://www.youtube.com/watch?v=oN2ZITEIQQA",
    linkTitle: "Loy Krathong",
    description: "",
  },
  {
    type: "internal",
    link: "multimedia/motion/script-1",
    linkTitle: "p5 Sketches",
    description: "",
  },
];

function Archives() {
  const currentCard = CARDS.find((obj) => obj.link === "archives");

  return (
    <div className="mainLinks">
      <Card card={currentCard} />
      <div className="linki">
        {/* PHUKET */}
        <section>
          <h4>Art agency, Phuket 2018</h4>
          <ol>
            {phukets.map((phuket, index) => (
              <li key={index}>
                {phuket.type === "external" ? (
                  <a href={phuket.link} target="_blank">
                    {phuket.linkTitle}
                  </a>
                ) : (
                  <Link href={phuket.link}>{phuket.linkTitle}</Link>
                )}{" "}
                : {phuket.description}
              </li>
            ))}
          </ol>
        </section>

        {/* BATMAP */}
        <section>
          <h4>Batmap nightlife guide</h4>
          <ol>
            {batmaps.map((batmap, index) => (
              <li key={index}>
                {batmap.type === "external" ? (
                  <a href={batmap.link} target="_blank">
                    {batmap.linkTitle}
                  </a>
                ) : (
                  <Link href={batmap.link}>{batmap.linkTitle}</Link>
                )}{" "}
                : {batmap.description}
              </li>
            ))}
          </ol>
        </section>

        {/* FESTINGA */}
        <section>
          <h4>Festinga</h4>
          <ul>
            <li>
              <a href="http://festinga.kervion.com/" target="_blank">
                Festinga
              </a>{" "}
              : festivals of the world
            </li>
          </ul>
        </section>

        {/* VIDEO */}
        <section>
          <h4>Video movies & motion graphics</h4>
          <ol>
            {movies.map((movie, index) => (
              <li key={index}>
                <a href={movie.link} target="_blank">
                  {movie.linkTitle}
                </a>{" "}
                {movie.description}
              </li>
            ))}
          </ol>
        </section>

        {/* DESIGN */}
        <section>
          <h4>Design archives</h4>
          <ol>
            <li>
              <a href="http://kervion.com/archiwa/unordered/index.php" target="_blank">
                Archives I - the best of
              </a>{" "}
              : graphic design, 2000-2015
            </li>
            <li>
              <a href="http://kervion.com/archiwa/liberia/design/index_studio.php?lang=ENG&menu=ARA" target="_blank">
                Archives II
              </a>{" "}
              : graphic design, 2000-2015
            </li>
            <li>
              <a href="http://kervion.com/blur/0" target="_blank">
                Blur effect banners
              </a>{" "}
              : web advertising
            </li>
          </ol>
        </section>
      </div>
    </div>
  );
}
export default Archives;
