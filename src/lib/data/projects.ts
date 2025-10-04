import hangmanImg from "@/assets/hangman-ranked-profile.png";
import aiFlashcardsImg from "@/assets/ai-flashcards.jpg";
import formulateImg from "@/assets/formulate-home-lorez.png";

const projects = [
  {
    title: "Hangman Ranked",
    slug: "hangman-ranked",
    description:
      "A ranked twist on the classic Hangman game, featuring a matchmaking and scoring system. Players compete to guess words faster to climb the ranks.",
    techs: ["NextJs", "TypeScript", "Convex"],
    status: "Production",
    link: "https://hangman-ranked.vercel.app/",
    code: "https://github.com/Notava1ble/hangman-ranked",
    imagePath: hangmanImg.src,
  },
  {
    title: "Ai Flashcards",
    slug: "ai-flashcards",
    description:
      "A script that uses the gemini api to generate flashcards from a set of notes.",
    status: "Not maintained",
    code: "https://github.com/Notava1ble/aiflashcards",
    imagePath: aiFlashcardsImg.src,
  },
  {
    title: "Formulate",
    slug: "formulate",
    description:
      "Create a collection to store all your notes. Designed for simplicity and quick access",
    status: "Work in progress",
    code: "https://github.com/Notava1ble/formulate",
    imagePath: formulateImg.src,
  },
];

export default projects;
