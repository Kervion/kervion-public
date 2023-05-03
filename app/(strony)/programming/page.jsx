import Card from "/app/components/card"
import { CARDS } from "/app/data.js"
import Link from "next/link"

const latest = [
  {
    link: "",
    linkTitle: "",
    description: "Kervion (you're here!) : Next 13, server side javascript ",
    repo: "https://github.com/Kervion/kervion-public",
  },
  {
    link: "https://showroom.kervion.com/mekong/",
    linkTitle: "Mekong River",
    description: " : React 18, responsive, multi language, AI ",
    repo: "https://github.com/Kervion/mekong-public",
  },
  {
    link: "https://showroom.kervion.com/guardian",
    linkTitle: "Guardian Open API",
    description: " : React 18, responsive, fully functional ",
    repo: "https://github.com/Kervion/guardian-public",
  },
]

const exercises = [
  {
    link: "https://splendid-sunburst-92ef2b.netlify.app/",
    linkTitle: "Animal's Houses",
    description: " : Vue, Nuxt, Leonardo ",
    repo: "",
  },
  {
    link: "http://showroom.kervion.com/nask/",
    linkTitle: "NASK",
    description: " : React 18, create-react-app ",
    repo: "https://github.com/Kervion/nask-public.git",
  },
  {
    link: "https://showroom.kervion.com/runes/",
    linkTitle: "The Runes",
    description: " : React 18, midjourney ",
    repo: "https://github.com/Kervion/runes-public",
  },
  {
    link: "https://showroom.kervion.com/crudapi/",
    linkTitle: "CRUD & Deezer",
    description: " : React 18, tailwind, simple CRUD & API ",
    repo: "https://github.com/Kervion/crudapi-public",
  },
  {
    link: "https://temida-public.vercel.app/",
    linkTitle: "Tree ordering",
    description: " : Next 13, tailwind, js exercise ",
    repo: "https://github.com/Kervion/temida-public",
  },
]

const typescripts = [
  {
    linkTitle: "The Runes",
    description: " : Typescript version ",
    repo: "https://github.com/Kervion/runes-type.git",
  },
  {
    linkTitle: "Temida tree order",
    description: " : Typescript version ",
    repo: "https://github.com/Kervion/temida-type.git",
  },
]

function Programming() {
  const currentCard = CARDS.find((obj) => obj.link === "programming")

  return (
    <div className="mainLinks">
      <Card card={currentCard} />
      <div className="linki">
        <h3>Links</h3>

        <section>
          <h4>Latest projects from 2023</h4>
          <ol>
            {latest.map((item, index) => (
              <li key={index}>
                {item.link !== "" && (
                  <a href={item.link} target="_blank">
                    {item.linkTitle}
                  </a>
                )}
                {item.description}
                <a href={item.repo} target="_blank">
                  github repo
                </a>
              </li>
            ))}
          </ol>
          <br />
          <span style={{ paddingLeft: "20px" }}>Side projects 2023 :</span>
          <ol>
            {exercises.map((item, index) => (
              <li key={index}>
                {item.link !== "" && (
                  <a href={item.link} target="_blank">
                    {item.linkTitle}
                  </a>
                )}
                {item.description}
                {item.repo !== "" && (
                  <a href={item.repo} target="_blank">
                    github repo
                  </a>
                )}
              </li>
            ))}
          </ol>

          <br />
          <span style={{ paddingLeft: "20px" }}>Typescript versions :</span>
          <ol>
            {typescripts.map((item, index) => (
              <li key={index}>
                {item.linkTitle}
                {item.description}
                <a href={item.repo} target="_blank">
                  github repo
                </a>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h4>Currently working on</h4>
          <ol>
            <li>Qinder : mobile dating app made in React Native, Expo</li>
            <li>Phuket Buisiness Women : web & mobile, full stack javascript, MySQL db</li>
          </ol>
        </section>

        <section>
          <h4>Startups 2010 - 2020</h4>
          <ol>
            <li>
              <a href="http://batmap.kervion.com/" target="_blank">
                Batmap
              </a>{" "}
              (php, mysql, ajax, jquery)
            </li>
            <li>
              <a href="http://festinga.kervion.com/" target="_blank">
                Festinga
              </a>{" "}
              (php, mysql, ajax, jquery, javascript)
            </li>
            <li>
              <a href="http://liberalindex.kervion.com/" target="_blank">
                Liberal Index
              </a>{" "}
              (php, mysql, ajax, jquery)
            </li>
            <li>
              <a href="http://kervion.com/phuketart/" target="_blank">
                Art Agency
              </a>{" "}
              (WordPress)
            </li>
            <li>
              <a href="https://ksiegarnia.kervion.com/" target="_blank">
                E-books
              </a>{" "}
              (Prestashop)
            </li>
            <li>
              <a href="http://minds.kervion.com/" target="_blank">
                Minds
              </a>{" "}
              (php, mysql, ajax, jquery)
            </li>
            <li>
              <a href="http://samba.kervion.com/" target="_blank">
                Samba Walker
              </a>{" "}
              (php, mysql, ajax, jquery)
            </li>
            <li>
              <a href="http://soiree.kervion.com/" target="_blank">
                Samba Soirée
              </a>{" "}
              (php, mysql, ajax, jquery)
            </li>
          </ol>
        </section>

        <section>
          <h4>Sketches & Archives</h4>
          <ol>
            <li>
              <a href="http://kervion.com/physics/" target="_blank">
                Physics
              </a>{" "}
              (javascript)
            </li>

            <li>
              <a href="http://kervion.com/sketches/index.php" target="_blank">
                p5 Sketches
              </a>{" "}
              (java, p5.js)
            </li>

            {/* <li>
              <Link href="multimedia/motion/script-1">p5 Sketches</Link> (java, p5.js)
            </li> */}
            <li>
              <a href="http://abm.kervion.com/" target="_blank">
                Booking
              </a>{" "}
              (php, mysql, javascript)
            </li>
            <li>
              <a href="http://termedia.kervion.com/" target="_blank">
                MVC Smarty
              </a>{" "}
              (php, mysql, MVC, Smarty)
            </li>
          </ol>
        </section>

        <section>
          <h4>Flash & web archives 2000 - 2010</h4>
          <ol>
            <li>
              <Link href="multimedia/flash/choice/atmo">Flash motion graphics & websites</Link>
            </li>
            <li>
              <Link href="multimedia/webdesign">Web design</Link>
            </li>
          </ol>
        </section>

        <h3>Technology</h3>

        <section>
          <h4>Current preferred stack</h4>
          <ul>
            <li>front : Next, functional React or other js frameworks (Vue, Nuxt...)</li>
            <li>backend : Next, Node, Express</li>
            <li>databse : MySQL or serverless for simple apps</li>
            <li>mobile : React Native, Expo</li>
            <li>css frameworks : Bootstrap, Tailwind</li>
            <li>design : own graphics & AI generated Midjourney or similar</li>
            <li>
              js libraries : zustand, axios, react-rooter, react-hook-form, formik, nodemailer, react-bootstrap, p5, lightbox, express, mysql2, html2canvas, fortawesome, cors, yup,
              dnd, framer-motion [...]
            </li>
          </ul>
        </section>

        <section>
          <h4>Other solutions</h4>
          <ul>
            <li>PHP, MySQL, AJAX, jQuery</li>
            <li>CMS : WordPress, Prestashop, Joomla</li>
            <li>deprecated : Flash, Flex, actionscript</li>
          </ul>
        </section>

        <section>
          <h4>Tools</h4>
          <ul>
            <li>basics : HTML, CSS, RWD, flexbox</li>
            <li>currently : VScode, Github, JSON, API</li>
            <li>Adobe : Photoshop, After Effects, Illustrator, InDesign, Premiere, Lightroom</li>
            <li>multimedia : Filmora, Cakewalk, Music Maker, ZBrush</li>
            <li>promotion on social sites : Facebook, YouTube, Instagram</li>
            <li>Google : SEO, SEM, Places, Maps, Android, AdSense, AdWords, Keyword Planner, Analytics</li>
            <li>courses : Angular, typescript, python, JAVA, C++</li>
            <li>other : Sass, XAMPP, Laravel, MVC, Smarty, AJAX, SVG, htaccess</li>
            <li>Atlassian: JIRA, Confluence, Bitbucket, SourceTree</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
export default Programming
