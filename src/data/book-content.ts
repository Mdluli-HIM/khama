export type BookPage = {
  slug: string;
  layout?: "author" | "collage" | "text" | "cover";
  kicker?: string;
  title?: string;
  subtitle?: string;
  body?: string[];
  image?: string;
  caption?: string;
};

export const bookPages: BookPage[] = [
  {
    slug: "author-intro",
    layout: "author",
    title: "AUTHOR: MMM",
  },

  {
    slug: "chapter-one-intro",
    layout: "collage",
    kicker: "CHAPTER ONE",
    title: "The Court Where Morning Was Still Asleep",
    subtitle: "1. The Girl Before the Sun",
    body: [
      "Before I knew what love could take from a man, I met a girl before the sun had properly opened its eyes.",
      "She was visiting her grandmother.",
      "I was visiting mine.",
      "That is how some stories begin — not with thunder, not with violins, not with fate wearing gold around its neck — but with two children standing in the same dusty corner of the world, pretending they were not nervous.",
      "Her name was Sophia.",
      "Or maybe that is only what memory calls her now.",
      "Back then, she was just a girl with morning in her face.",
    ],
    image: "/images/tennis-court.jpg",
    caption: "Morning court",
  },

  {
    slug: "chapter-one-page-2",
    layout: "text",
    kicker: "CHAPTER ONE",
    title: "The Girl Before the Sun",
    body: [
      "We exchanged numbers like thieves exchanging keys to houses they were too young to enter.",
      "That night, I barely slept. Not because I knew I loved her. I was too young to name things correctly.",
      "At that age, love is not yet love. It is just a bird trapped inside the chest, beating its wings against your ribs.",
    ],
  },

  {
    slug: "chapter-one-page-3",
    layout: "text",
    body: [
      "The next morning, before the streets had remembered their noise, we met.",
      "No one saw us leave.",
      "Or maybe the whole world saw us and decided to keep quiet.",
      "We walked to the tennis court.",
    ],
  },

  {
    slug: "chapter-one-page-4",
    layout: "text",
    body: [
      "It was empty.",
      "A court without players.",
      "A net dividing two sides.",
      "Maybe that should have warned me.",
    ],
  },

  {
    slug: "chapter-one-page-5",
    layout: "text",
    body: [
      "We sat there and spoke like people who had known each other in another life and were only pretending to be new.",
      "I do not remember everything she said, but I remember how the air behaved around her.",
      "Soft.",
      "Careful.",
      "As if even the wind did not want to interrupt.",
    ],
  },

  {
    slug: "chapter-one-page-6",
    layout: "text",
    title: "I remember thinking",
    body: [
      "If this girl ever becomes mine, I will not treat her like a season.",
    ],
  },

  {
    slug: "chapter-one-page-7",
    layout: "text",
    body: [
      "But I was leaving.",
      "Distance arrived before love could.",
      "And because we were young, we let it win.",
    ],
  },
];
