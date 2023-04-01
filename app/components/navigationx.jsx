"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const links = ["muses", "not", "shadows", "selfies", "various", "rage", "sketches"];

function Navigation() {
  const path = usePathname();
  let lastSlashIndex = path.lastIndexOf("/");
  let newStr = path.substring(0, lastSlashIndex);
  return (
    <div>
      {links.map((link, index) => (
        <Link
          key={index}
          href={`art/${link}/0`}
          className={`linkCategory
            ${index == 0 ? "lerou" : ""}
            ${index <= links.length - 2 ? "rvl" : "rirou"}
            ${newStr === `/art/${link}` ? "activeCatg" : ""}`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}
export default Navigation;
