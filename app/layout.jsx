import "/app/style/globals.css";
import "/app/style/linki.css";
import "/app/style/books.css";
import "/app/style/category.css";
import "/app/style/form.css";
import "/app/style/leftMenu.css";
import "/app/style/music.css";
import "/app/style/multimedia.css";
import "/app/style/yarl.css";
import "/app/style/slides.css";
import Link from "next/link";
import { Cormorant_Garamond, Roboto } from "@next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  weight: "300",
});

const roboto = Roboto({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  weight: ["400", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={roboto.className}>
        <Link href="/">
          <h1 className={cormorant.className}>KERVION</h1>
          <h3>Creative Partnership</h3>
        </Link>
        <div className="container">
          <hr />
          {children}
        </div>
      </body>
    </html>
  );
}
