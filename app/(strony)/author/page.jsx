import Mailer from "app/components/mailer"
import Card from "/app/components/card"
import { CARDS } from "/app/data.js"

function Author() {
  const currentCard = CARDS.find((obj) => obj.link === "author")
  return (
    <div className="mainLinks">
      <Card card={currentCard} />
      <div className="linki">
        <section>
          <h4>Location</h4>
          <p> Usually, I work remotely from Phuket, Tenerife, Diani Beach, Riviera Maya, or The Accursed Mountains.</p>
        </section>

        <section>
          <h4>Post</h4>
          <Mailer />
        </section>

        <section>
          <h4>Professional career in short</h4>
          <h6>2020 - 2023</h6>
          <ul>
            <li>DSV International, Denmark - IT developer</li>
            <li>Z/Atelier, Poland - project manager</li>
            <li>Lucernae Numismatica, Spain - photographer & programmer</li>
            <li>Warwick, Germany - photographer & designer</li>
          </ul>
          <h6>2013 - 2019</h6>
          <ul>
            <li>creative work organizing of art exhibitions and social events in Phuket, art sales</li>
            <li>start-ups development: Festinga, Batmap, Samba Walker</li>
            <li>programming, graphic design, writing, advertising, multimedia</li>
            <li>Costa del Sol - Phuket - Warsaw</li>
          </ul>
          <h6>2003 - 2012</h6>
          <ul>
            <li>I have been working as a web developer, graphic & multimedia designer, copywriter & freelancer</li>
            <li>companies from: Barcelona, London, Warsaw, New York, Costa Rica, Phuket, Taiwan</li>
            <li>I dealt with creative arts and teaching also</li>
          </ul>
          <h6>Studies & Languages</h6>
          <ul>
            <li>academies of fine arts, departments of paintings, design & multimedia</li>
            <li>Warsaw - Marseille - Paris (Boltanski, Abramovic)</li>
            <li>English, Spanish, French, Polish</li>
          </ul>
          <h6>Furthermore...</h6>
          <p>
            ...among others, I watched the world from perspective of a fish farm manager in Thailand, a stockbroker in Warsaw, a carer for the elderly in England, a laborer in
            France, England, Ireland, Scotland, The Netherlands and Spain, a French teacher in Taiwan, an Adobe lecturer, a SEO specialist, a reporter in Barcelona, a sailor on a
            cruise ship in the Caribbean, a bartender on Hvar, an interpreter of French, English and Spanish, a Buddhist monk, and several others, whose memory makes me feel tense.
          </p>
        </section>
      </div>
    </div>
  )
}
export default Author
