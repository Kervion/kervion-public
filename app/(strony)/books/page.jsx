import Image from "next/image";
import { Kaushan_Script } from "@next/font/google";

const kaushan = Kaushan_Script({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: "400",
});

const covers = [
  {
    path: "azov",
    title: "Azov",
    descr: 'fragment "Czarnej ewangelii"',
    href: "strona-glowna/24-azov",
  },
  {
    path: "kobiety",
    title: "Ewangelia łotrów",
    descr: '"Kobiety... nie dość mocno"',
    href: "jakub-kalinski/21-kobiety-kochane-nie-dosc-mocno",
  },
  {
    path: "egzo",
    title: "Encyklopedia egzoplanet",
    descr: "opowiastki encyklopedyczne",
    href: "jakub-kalinski/23-encyklopedia-egzoplanet",
  },
  {
    path: "jeb",
    title: "***** ***",
    descr: "prawie wiersze",
    href: "jakub-kalinski/22--",
  },
  {
    path: "zart",
    title: "Żart filozoficzny",
    descr: "prawie absolut",
    href: "strona-glowna/26-zart-filozoficzny",
  },
  {
    path: "dramat",
    title: "31 razy śmierć",
    descr: "dramat",
    href: "strona-glowna/25-31-razy-smierc",
  },
  {
    path: "buddha",
    title: "Buddhadasa",
    descr: "tradycja terawady",
    href: "strona-glowna/28-buddhadasa",
  },
  {
    path: "hitch",
    title: "Tłumaczenia",
    descr: "Dennett, Minchin...",
    href: "strona-glowna/27-tlumaczenia",
  },
];

const minds = [
  {
    path: "christopher-hitchens",
    title: "Christopher Hitchens",
  },

  {
    path: "henry-miller",
    title: "Henry Miller",
  },
  {
    path: "timothy-leary",
    title: "Timothy Leary",
  },
  {
    path: "nick-tosches",
    title: "Nick Tosches",
  },

  {
    path: "ayn-rand",
    title: "Ayn Rand",
  },
  {
    path: "daniel-dennett",
    title: "Daniel Dennett",
  },
  {
    path: "sam-harris",
    title: "Sam Harris",
  },
  {
    path: "emil-cioran",
    title: "Emil Cioran",
  },

  {
    path: "lera-boroditsky",
    title: "Lera Boroditsky",
  },
  {
    path: "richard-dawkins",
    title: "Richard Dawkins",
  },
  {
    path: "tim-minchin",
    title: "Tim Minchin",
  },
  {
    path: "adam-wisniewski",
    title: "Adam Wiśniewski",
  },
];

function Books() {
  return (
    <>
      <h2 className={`booksLines ${kaushan.className}`}>Nie lament, lecz zachwyt i tęsknota - księgarnia</h2>
      <div className="mainBooks">
        {covers.map((cover) => (
          <div className="bookItem" key={cover.path}>
            <a href={`https://ksiegarnia.kervion.com/${cover.href}.html`} target="_blank">
              <div className="book">
                <Image className="imgCover" src={`/imgs/assets/covers/${cover.path}.jpg`} alt={`kervion wydawnictwo księgarnia ${cover.title}`} width="240" height="240" />
                <h4 className="bookTitle">{cover.title}</h4>
                <p className="bookDescr">{cover.descr}</p>
              </div>
            </a>
          </div>
        ))}
      </div>

      <h2 className={`booksLines ${kaushan.className}`}>Thinking people don't recognize authority - blog</h2>
      <div className="mainMinds">
        {minds.map((mind) => (
          <div className="mindItem" key={mind.path}>
            <a href={`http://minds.kervion.com/en/person/${mind.path}`} target="_blank">
              <div className="mind">
                <Image className="imgMind" src={`/imgs/assets/minds/${mind.path}.jpg`} alt={`kervion minds blog ${mind.title}`} width="150" height="150" />
                <h5 className="mindTitle">{mind.title}</h5>
              </div>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
export default Books;
