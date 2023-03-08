"use client";
import Link from "next/link";

import { usePathname } from "next/navigation";

const links = ["portrane", "mistyland"];

function Photo({ children }) {
  const path = usePathname();
  return (
    <>
      <div>{children}</div>
      <div className="navigSlides">
        {links.map((link, index) => (
          <Link
            key={index}
            href={`multimedia/photo-islands/${link}`}
            className={`linkCategory  
          ${index == 0 ? "lerou" : ""}
          ${index <= links.length - 2 ? "rvl" : "rirou"}
          ${path === `/multimedia/photo-islands/${link}` ? "activeCatg" : ""}`}
          >
            {link}
          </Link>
        ))}
      </div>
    </>
  );
}
export default Photo;
