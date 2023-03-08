"use client";
import Link from "next/link";

import { usePathname } from "next/navigation";

const links = ["anaga", "plants", "rocks", "roots", "views"];

function Photo({ children }) {
  const path = usePathname();
  return (
    <>
      <div>{children}</div>
      <div className="navigSlides">
        {links.map((link, index) => (
          <Link
            key={index}
            href={`multimedia/photo-nature/${link}`}
            className={`linkCategory  
          ${index == 0 ? "lerou" : ""}
          ${index <= links.length - 2 ? "rvl" : "rirou"}
          ${path === `/multimedia/photo-nature/${link}` ? "activeCatg" : ""}`}
          >
            {link}
          </Link>
        ))}
      </div>
    </>
  );
}
export default Photo;
