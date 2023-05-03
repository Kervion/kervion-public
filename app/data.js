import multimedia from "/public/imgs/pics/multimedia.jpg"
import programming from "/public/imgs/pics/programming.jpg"
import ai from "/public/imgs/pics/ai.jpg"
import music from "/public/imgs/pics/music.jpg"
import books from "/public/imgs/pics/books.jpg"
import art from "/public/imgs/pics/art.jpg"
import archives from "/public/imgs/pics/archives.jpg"
import author from "/public/imgs/pics/author.jpg"
import i_multimedia from "/public/imgs/logos/multimedia.jpg"
import i_programming from "/public/imgs/logos/programming.jpg"
import i_ai from "/public/imgs/logos/ai.jpg"
import i_music from "/public/imgs/logos/music.jpg"
import i_books from "/public/imgs/logos/books.jpg"
import i_art from "/public/imgs/logos/art.jpg"
import i_archives from "/public/imgs/logos/archives.jpg"
import i_author from "/public/imgs/logos/author.jpg"

const CARDS = [
  {
    link: "programming",
    title: "Programming",
    subtitle: "Web & Mobile Development",
    icon: i_programming,
    points: ["Full stack", "Over 100 projects", "Worldwide services"],
    photo: programming,
  },
  {
    link: "/multimedia/photo-various/portrait",
    title: "Multimedia",
    subtitle: "Design, Motion Graphics",
    icon: i_multimedia,
    points: ["Photography", "Graphic design", "Video production"],
    photo: multimedia,
  },

  { link: "books", title: "Books", subtitle: "Księgarnia", icon: i_books, points: ["E-booki", "Wydawnictwo", "Książki"], photo: books },
  { link: "music", title: "Music", subtitle: "Composing", icon: i_music, points: ["Mixing", "Looperman", "Background music"], photo: music },
  { link: "art/muses", title: "Art", subtitle: "Painting", icon: i_art, points: ["Oil painting", "Mixed media", "Body painting"], photo: art },
  { link: "ai", title: "AI", subtitle: "Artificial Intelligence", icon: i_ai, points: ["AI in programming", "AI in visual arts", "AI in life"], photo: ai },
  { link: "archives", title: "Archives", subtitle: "River of Life", icon: i_archives, points: ["Art agency on Phuket", "Festinga", "Batmap"], photo: archives },
  { link: "author", title: "Author", subtitle: "About Q", icon: i_author, points: ["Tropical islands", "Career", "Contact"], photo: author },
]

const requireImages = (path, ile) => {
  let arr = []
  for (let i = 0; i < ile; i++) {
    let tmpImg = require(`/public/imgs/${path}/${i}.png`).default
    arr.push(tmpImg)
  }
  return arr
}

function removeAfterSlash(string) {
  const index = string.indexOf("/")
  if (index !== -1) {
    return string.slice(0, index)
  } else {
    return string
  }
}

export { CARDS, requireImages, removeAfterSlash }
