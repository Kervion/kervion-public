"use client";

const movies = [
  {
    link: "https://www.youtube.com/watch?v=b2XToqk5jAc",
    linkTitle: "Fruits of Love",
  },
  {
    link: "https://www.youtube.com/playlist?list=PLbIHKoWdy9769nf5sS-xe2QR0Z-u7EsEk",
    linkTitle: "Phuket Art Channel",
    description: "interviews with artists from Phuket",
  },
  {
    link: "https://www.youtube.com/watch?v=AlZ0jAvSdwE",
    linkTitle: "Lightboards",
    description: "advertising on Phuket, short movie on YT",
  },
  {
    link: "https://www.youtube.com/watch?v=B3Z1sQ9-Rxw&list=PL6dwSzlnlkCZEflIbodwujGoCVdYyKQa8",
    linkTitle: "Lucernae",
  },
  {
    link: "https://www.youtube.com/watch?v=7AgyGGk--dQ",
    linkTitle: "Sunset & Wine",
  },
  {
    link: "https://www.youtube.com/watch?v=M2rgs-SjCQ4",
    linkTitle: "120 Seconds",
  },
];
function Video() {
  return (
    <div className="linki">
      <div className="videoWrapper">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/AlZ0jAvSdwE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <br />
      <br />
      <h4>Video movies on YouTube channels</h4>
      <ol>
        {movies.map((movie, index) => (
          <li key={index}>
            <a href={movie.link} target="_blank">
              {movie.linkTitle}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default Video;
