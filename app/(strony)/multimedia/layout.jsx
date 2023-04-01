import Link from "next/link";

function Multimedia({ children }) {
  return (
    <div className="mainMulti">
      <div className="menuLeft">
        <section>
          <h4>Photography</h4>
          <div>
            <Link href="multimedia/photo-various/portrait" className="linkLeftMenu">
              Various
            </Link>
          </div>
          <div>
            <Link href="multimedia/photo-islands/portrane" className="linkLeftMenu">
              Islands
            </Link>
            <Link href="multimedia/photo-nature/anaga" className="linkLeftMenu">
              Nature
            </Link>
          </div>
          <div>
            <Link href="multimedia/photo-coins/color" className="linkLeftMenu">
              Coins
            </Link>
          </div>
        </section>

        <section>
          <h4>Design</h4>
          <div>
            <Link href="multimedia/design/various" className="linkLeftMenu">
              Graphic design
            </Link>
          </div>
          <div>
            <Link href="multimedia/webdesign" className="linkLeftMenu">
              Web design
            </Link>

            <a target="_blank" href="http://kervion.com/archiwa/unordered/index.php" className="linkLeftMenu">
              Archives I
            </a>

            <a target="_blank" href="http://kervion.com/archiwa/liberia/design/index_studio.php?lang=ENG&menu=ARA" className="linkLeftMenu">
              Archives II
            </a>
          </div>
        </section>

        <section>
          <h4>Flash archives</h4>
          <div>
            <Link href="multimedia/flash/choice/essence" className="linkLeftMenu">
              Choice
            </Link>
          </div>
          <div>
            <Link href="multimedia/flash/web/phawadee" className="linkLeftMenu">
              Web
            </Link>
          </div>
          <div>
            <Link href="multimedia/flash/effects/mellerist" className="linkLeftMenu">
              Effects
            </Link>
          </div>
          <div>
            <Link href="multimedia/flash/sites/dream" className="linkLeftMenu">
              Sites
            </Link>
          </div>
        </section>

        <section>
          <h4>Movies & scripts</h4>
          <div>
            <Link href="multimedia/video" className="linkLeftMenu">
              Videos on YouTube
            </Link>
          </div>
          {/* <div>
            <Link href="multimedia/motion/script-1" className="linkLeftMenu">
              JAVA p5 scripts
            </Link>
          </div> */}
          <div>
            <a href="http://kervion.com/sketches/index.php" target="_blank" className="linkLeftMenu">
              p5 Sketches
            </a>
          </div>

          <div>
            <a href="http://kervion.com/physics/" target="_blank" className="linkLeftMenu">
              Simulation of Gravity
            </a>
          </div>
        </section>
      </div>
      <div>{children}</div>
    </div>
  );
}
export default Multimedia;
