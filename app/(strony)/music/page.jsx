import Image from "next/image";

function Music() {
  const hierros = [
    { title: "Requiem for The God of The Desert", file: "1-Requiem-for-The-God-of-The-Desert", img: "desert" },
    { title: "Eight Women That I Did Not Love Strong Enough", file: "2-Eight-Women-That-I-Did-Not-Love-Strong-Enough", img: "women" },
    { title: "Nine Unfaithful Whores", file: "3-Nine-Unfaithful-Whores", img: "whores" },
    { title: "Waiting for The Ugandan Rose to Bloom", file: "4-Waiting-for-The-Ugandan-Rose-to-Bloom", img: "uganda" },
    { title: "Costa del Hierro", file: "5-Costa-del-Hierro", img: "costa" },
    { title: "120 Seconds of Love", file: "6-120-Seconds-of-Love", img: "secoflove" },
  ];

  const shorts = [
    { title: "Sunset Wine", file: "1-Sunset-Wine" },
    { title: "Batmaps", file: "2-Batmaps" },
    { title: "Loy Krathong", file: "3-Loy-Krathong" },
    { title: "Pong", file: "4-Art-Pong" },
    { title: "Zen", file: "5-Art-Zen" },
    { title: "Mon", file: "6-Art-Mon" },
    { title: "Niran", file: "7-Art-Niran" },
    { title: "Ae", file: "8-Art-Ae" },
    { title: "Romadon", file: "10-Art-Romadon-Piano" },
  ];

  return (
    <div className="mainMusic">
      <div className="linki">
        <h2>Costa del Hierro, 2020</h2>
        <section className="grey">
          Software : Cakewalk, Music Maker Jam
          <br />
          Loops : Looperman, Music Maker Jam
          <br />
          <br />
          Composer of all mixes & music collages : Q<br />1 exception though: the 2nd part of the "Ugandan Rose" is composed by{" "}
          <a href="https://www.looperman.com/users/profile/671112" target="_blank">
            Danke
          </a>
          .<br />
        </section>
        <ol>
          {hierros.map((hierro) => (
            <div key={hierro.img}>
              <li className="musicTitles">{hierro.title}</li>
              <Image className="musicImg" src={`/music/CostaDelHierro/${hierro.img}.jpg`} alt={`kervion music ${hierro.title}`} width="160" height="80" />
              <audio controls>
                <source src={`/music/CostaDelHierro/${hierro.file}.mp3`} type="audio/mpeg" />
              </audio>
            </div>
          ))}
        </ol>
      </div>
      <div className="linki">
        <section className="grey">
          Archive tracks : Love Island, 2016-2018
          <br />
          <br />
          Software & loops : Music Maker Jam
          <br />
          illustrative music for "Phuket Art" interviews
          <br />
          <br />
        </section>
        <ol>
          {shorts.map((short, index) => (
            <div key={index}>
              <li className="musicTitles_2">{short.title}</li>

              <audio controls>
                <source src={`/music/LoveIsland/${short.file}.mp3`} type="audio/mpeg" />
              </audio>
              <br />
              <br />
            </div>
          ))}
        </ol>
      </div>
    </div>
  );
}
export default Music;
