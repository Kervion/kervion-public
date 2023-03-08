import Card from "/app/components/card";
import { CARDS } from "/app/data.js";
import Link from "next/link";

function Programming() {
  const currentCard = CARDS.find((obj) => obj.link === "programming");

  return (
    <div className="mainLinks">
      <Card card={currentCard} />
      <div className="linki">
        <h3>Links</h3>

        <section>
          <h4>Latest projects from 2023</h4>
          <ol>
            <li>
              <a href="https://showroom.kervion.com/mekong/" target="_blank">
                Mekong River
              </a>{" "}
              : React 18, responsive, multi language, AI,{" "}
              <a href="https://github.com/Kervion/mekong-public" target="_blank">
                github repo
              </a>
            </li>
            <li>
              <a href=" https://showroom.kervion.com/guardian" target="_blank">
                Guardian Open API
              </a>{" "}
              : React 18, responsive, fully functional,{" "}
              <a href="https://github.com/Kervion/guardian-public" target="_blank">
                github repo
              </a>
            </li>
            <li>
              <a href="https://showroom.kervion.com/runes/" target="_blank">
                The Runes
              </a>{" "}
              : React 18, midjourney,{" "}
              <a href="https://github.com/Kervion/runes-public" target="_blank">
                github repo
              </a>
            </li>

            <li>
              Kervion (you're here!) : Next 13, server side javascript{" "}
              <a href=" https://github.com/Kervion/kervion-public.git" target="_blank">
                github repo
              </a>
            </li>
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
              <Link href="multimedia/motion/script-1">p5 Sketches</Link> (java, p5.js)
            </li>
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
            <li>front : Next, functional React or other js framework</li>
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
            <li>Atlassian: JIRA, Confluence, Bitbucket</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
export default Programming;
