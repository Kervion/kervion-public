"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const CHOICES = {
  essence: "v1678120107/flash-choice/Essence-966-240-_wp1vro",
  atmo: "v1678119760/flash-choice/Atmo-1020-247-_b6iev2",
  forum: "v1678121394/flash-choice/Forum-892-448-_jznpex",
  latoszek: "v1678120473/flash-choice/Latoszek-966-240-_dgzhhd",
  hypermedia: "v1678120586/flash-choice/Hypermedia-744-443-_c2cl7p",
  kisses: "v1678120119/flash-choice/Kisses-1074-607-_tefer0",
  multitabs: "v1678120642/flash-choice/Multitabs-999-249-_bcb2cx",
  samsara: "v1678121767/flash-choice/Samsara-1016-743-_leox65",
  sensen: "v1678119873/flash-choice/Sensen-698-494-_jlu1ka",
  patong: "v1678119899/flash-choice/Patong-718-500-_uj9b9r",
};

const LINKS_CHOICES = ["essence", "atmo", "forum", "latoszek", "hypermedia", "kisses", "multitabs", "samsara", "sensen", "patong"];

const WEB = {
  phawadee: "v1678133615/flash-web/Phawadee-1160-622-_zqhdid",
  royal: "v1678132924/flash-web/Royal-1154-620-_dsj0ox",
  pontiac: "v1678130221/flash-web/Pontiac-752-446-_hpww4h",
  horowitz: "v1678133204/flash-web/Horowitz-896-500-_vceggo",
  filip: "v1678132705/flash-web/Filip-1008-600-_rjjduj",
  fabryka: "v1678122413/flash-web/Fabryka-700-400-_t2obpv",
  marina: "v1678133519/flash-web/Lamarina-894-498-_csfgf7",
  liberia: "v1678130373/flash-web/Liberia2005-1012-712-_wg76rd",
};

const LINKS_WEB = ["phawadee", "royal", "pontiac", "horowitz", "filip", "fabryka", "marina", "liberia"];

const EFFECTS = {
  mellerist: "v1678118866/flash-effects/Mellerist-1002-300-_bqpojm",
  vectra: "v1678118492/flash-effects/Vectra-1278-240-_upsc4s",
  bukiet: "v1678118261/flash-effects/Bukiet-1000-1000-_kfnbqr",
  kalejdoskop: "v1678118789/flash-effects/Kalejdoskop-600-424-_lq4mqf",
  wiedza: "v1678118710/flash-effects/Wiedzanet-562-240-_ibsuyl",
  company: "v1678118650/flash-effects/Company-1278-240-_qow7dk",
  jos: "v1678118834/flash-effects/Jos-500-360-_wevjbc",
  skull: "v1678118622/flash-effects/Czacha-320-320-_qci2kb",
  flamenco: "v1678118331/flash-effects/Flamenco-1248-240-_iiocbs",
  flaming: "v1678118423/flash-effects/Flaming-1244-240-_ankyks",
  kadyks: "v1678118544/flash-effects/Kadyks-790-153-_zedzbl",
};

const LINKS_EFFECTS = ["mellerist", "vectra", "bukiet", "kalejdoskop", "wiedza", "company", "jos", "skull", "flamenco", "flaming", "kadyks"];

const SITES = {
  dream: "v1678115022/flash-sites/Dreameffect-756-482-_o7ero1",
  algarve: "v1678114943/flash-sites/Algarve-750-418-_ciuzne",
  dunas: "v1678115296/flash-sites/Dunas-699-416-_fbx4tb",
  sona: "v1678115174/flash-sites/Sona-508-358-_h57vyv",
  tchibo: "v1678115182/flash-sites/Tchibo-484-290-_evasxb",
  zielony: "v1678115264/flash-sites/Zielony-400-300-_saxu7m",
  dunes: "v1678115289/flash-sites/Dunas1-758-420-_rpadkg",
};
const LINKS_SITES = ["dream", "algarve", "dunas", "sona", "tchibo", "zielony", "dunes"];

const links = { choice: LINKS_CHOICES, web: LINKS_WEB, effects: LINKS_EFFECTS, sites: LINKS_SITES };
const categories = { choice: CHOICES, web: WEB, effects: EFFECTS, sites: SITES };

function Video({ params }) {
  const path = usePathname();

  const [flash, setFlash] = useState("");
  const [linki, setLinki] = useState([]);
  const [arrSizes, setArrSizes] = useState([]);
  const [view, setView] = useState(false);

  useEffect(() => {
    setLinki(links[params.slug[0]]);
    setFlash(categories[params.slug[0]][params.slug[1]]);
  }, []);

  useEffect(() => {
    const newSizes = flash.split("-");
    if (newSizes[2] > 1200) {
      newSizes[2] = newSizes[2] / 2;
      newSizes[3] = newSizes[2] / 2;
    } else {
      if (newSizes[2] > 800) {
        newSizes[2] = newSizes[2] / 1.5;
        newSizes[3] = newSizes[2] / 1.5;
      }
    }
    setArrSizes(newSizes);
  }, [flash]);

  useEffect(() => {
    setView(true);
  }, [arrSizes]);

  const beginPath = "https://res.cloudinary.com/dg8c3ssjv/video/upload/";

  return (
    <>
      <div className="videoWrapper">
        {view && (
          <video width={arrSizes[2]} height={arrSizes[3]} controls>
            <source src={`${beginPath}${flash}.mp4`} type="video/mp4" />
          </video>
        )}
      </div>
      <div className="navigSlides">
        {linki.map((link, index) => (
          <Link
            key={index}
            href={`/multimedia/flash/${params.slug[0]}/${link}`}
            className={`linkCategory  
          ${index == 0 ? "lerou" : ""}
          ${index <= linki.length - 2 ? "rvl" : "rirou"}
          ${path === `/multimedia/flash/${params.slug[0]}/${link}` ? "activeCatg" : ""}`}
          >
            {link}
          </Link>
        ))}
      </div>
    </>
  );
}
export default Video;
