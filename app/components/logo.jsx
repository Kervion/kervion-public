"use client"
import zustand from "app/zustand"
import { useRouter } from "next/navigation"
import { Cormorant_Garamond } from "@next/font/google"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  weight: "300",
})

function Logo() {
  const router = useRouter()
  const timeoutID = zustand((state) => state.timeoutID)
  const setTimeoutID = zustand((state) => state.setTimeoutID)

  const gohome = () => {
    if (timeoutID !== null) {
      clearTimeout(timeoutID)
      setTimeoutID(null)
    }
    router.push("/")
  }

  return (
    <div onClick={gohome} className="logo">
      <h1 className={cormorant.className}>KERVION</h1>
      <h3>Creative Partnership</h3>
    </div>
  )
}

export default Logo
