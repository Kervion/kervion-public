"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = ["pullman", "pullmanart", "asado", "asadoart", "erotic"];
const titles = ["Pullman", "Pullman Art", "Asado", "Asado Art", "Erotic"];

export default function ArtLayout({ children }) {
  const path = usePathname();
  return (
    <>
      <div>{children}</div>
      <div className="navigSlides">
        {links.map((link, index) => (
          <Link
            key={index}
            href={`archives/exhibitions/${link}`}
            className={`linkCategory  
          ${index == 0 ? "lerou" : ""}
          ${index <= links.length - 2 ? "rvl" : "rirou"}
          ${path === `/archives/exhibitions/${link}` ? "activeCatg" : ""}`}
          >
            {titles[index]}
          </Link>
        ))}
      </div>
    </>
  );
}
