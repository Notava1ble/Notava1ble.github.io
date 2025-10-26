import hangmanImg from "@/assets/projectImages/hangman-ranked-profile.webp";
import aiFlashcardsImg from "@/assets/projectImages/ai-flashcards.webp";
import formulateImg from "@/assets/projectImages/formulate-home-lorez.webp";

const projects = [
  {
    title: "Hangman Ranked",
    slug: "hangman-ranked",
    description:
      "A ranked twist on the classic Hangman game, featuring a matchmaking and scoring system. Players compete to guess words faster to climb the ranks.",
    techs: ["NextJs", "TypeScript", "Convex"],
    status: "Production",
    readMore: "/blog/hangmanrankeddetails/",
    link: "https://hangman-ranked.vercel.app/",
    code: "https://github.com/Notava1ble/hangman-ranked",
    imagePath: hangmanImg,
  },
  {
    title: "AI Flashcards",
    slug: "ai-flashcards",
    description:
      "A script that uses the gemini api to generate flashcards from a set of notes.",
    status: "Not maintained",
    code: "https://github.com/Notava1ble/aiflashcards",
    imagePath: aiFlashcardsImg,
  },
  {
    title: "Formulate",
    slug: "formulate",
    description:
      "Create a collection to store all your notes. Designed for simplicity and quick access",
    status: "Work in progress",
    code: "https://github.com/Notava1ble/formulate",
    imagePath: formulateImg,
  },
];

export default projects;
