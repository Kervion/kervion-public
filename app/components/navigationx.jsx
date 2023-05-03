"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"

const links = ["muses", "not", "shadows", "selfies", "various", "rage", "sketches"]

function Navigation() {
  const path = usePathname()
  return (
    <div>
      {links.map((link, index) => (
        <Link
          key={index}
          href={`art/${link}`}
          className={`linkCategory
            ${index == 0 ? "lerou" : ""}
            ${index <= links.length - 2 ? "rvl" : "rirou"}
            ${path === `/art/${link}` ? "activeCatg" : ""}`}
        >
          {link}
        </Link>
      ))}
    </div>
  )
}
export default Navigation
