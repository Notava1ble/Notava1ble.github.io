import hangmanImg from "@/assets/projectImages/hangman-ranked-profile.webp";
import mcRankedLeaguesImg from "@/assets/projectImages/mc-ranked-leagues.png";
import mjeksiaImg from "@/assets/projectImages/image.png";

const projects = [
  {
    title: "MC Ranked Leagues",
    slug: "mscl-website",
    description:
      "Public scoreboard for a Minecraft speedrunning league with around 1,300 players, covering standings, match history, player stats, and the entire data layer for the event.",
    techs: ["Astro", "React", "Convex"],
    status: "Production",
    link: "https://mscl.pages.dev/",
    code: "https://github.com/Notava1ble/mscl-website",
    imagePath: mcRankedLeaguesImg,
  },
  {
    title: "Mjeksia Online",
    slug: "mjeksia-online",
    description:
      "An offline Android study app for Albanian medical students preparing for the state exam, with the official question bank, mock exams, review, history, and explanations.",
    techs: ["Expo", "React Native", "SQLite"],
    status: "Android",
    code: "https://github.com/Notava1ble/mjeksia-online",
    imagePath: mjeksiaImg,
  },
  {
    title: "Hangman Ranked",
    slug: "hangman-ranked",
    description:
      "Real-time Hangman with matchmaking, Elo, solo stats, profiles, and server-side timeouts. It became my playground for learning realtime game logic.",
    techs: ["NextJs", "TypeScript", "Convex"],
    status: "Production",
    readMore: "/blog/hangmanrankeddetails/",
    link: "https://hangman-ranked.vercel.app/",
    code: "https://github.com/Notava1ble/hangman-ranked",
    imagePath: hangmanImg,
  },
];

export default projects;
