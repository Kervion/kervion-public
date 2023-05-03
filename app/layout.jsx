import "/app/style/globals.css"
import "/app/style/linki.css"
import "/app/style/books.css"
import "/app/style/category.css"
import "/app/style/form.css"
import "/app/style/leftMenu.css"
import "/app/style/music.css"
import "/app/style/multimedia.css"
import "/app/style/yarl.css"
import "/app/style/slides.css"
import Logo from "./components/logo"
import { Roboto } from "@next/font/google"

const roboto = Roboto({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  weight: ["400", "700"],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <head />
      <body>
        <Logo />
        <div className="container">
          <hr />
          {children}
        </div>
      </body>
    </html>
  )
}
