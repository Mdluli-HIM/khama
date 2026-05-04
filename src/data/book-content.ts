export type ContentEntry = {
  page: string;
  title: string;
  subtitle?: string;
  status?: "released" | "coming-soon";
  targetSlug?: string;
};

export type BookPage = {
  slug: string;
  layout?:
    | "author"
    | "book-title"
    | "contents"
    | "collage"
    | "text"
    | "cover"
    | "chapter-image";
  kicker?: string;
  title?: string;
  subtitle?: string;
  body?: string[];
  image?: string;
  caption?: string;
  contents?: ContentEntry[];
  dateTaken?: string;
  location?: string;
};

export const bookPages: BookPage[] = [
  {
    slug: "author-intro",
    layout: "author",
    title: "AUTHOR: MMM",
  },

  {
    slug: "title-intro",
    layout: "book-title",
    title: "TITLE: KHAMA",
    subtitle:
      "The spiritual principle of cause and effect where intent and actions (cause) influence a person’s future (effect)",
  },

  {
    slug: "contents",
    layout: "contents",
    title: "CONTENT",
    contents: [
      {
        page: "04",
        title: "Chapter One",
        subtitle: "The Court Where Morning Was Still Asleep",
        status: "released",
        targetSlug: "chapter-one-intro",
      },
      {
        page: "—",
        title: "Chapter Two",
        subtitle: "Track 2",
        status: "coming-soon",
      },
      {
        page: "—",
        title: "Chapter Three",
        subtitle: "Track 3",
        status: "coming-soon",
      },
      {
        page: "—",
        title: "Chapter Four",
        subtitle: "Track 4",
        status: "coming-soon",
      },
      {
        page: "—",
        title: "Chapter Five",
        subtitle: "Track 5",
        status: "coming-soon",
      },
      {
        page: "—",
        title: "Chapter Six",
        subtitle: "Track 6",
        status: "coming-soon",
      },
    ],
  },

  {
    slug: "chapter-one-intro",
    layout: "collage",
    kicker: "CHAPTER ONE",
    title: "The Court Where Morning Was Still Asleep",
    subtitle: "1. The Girl Who Borrowed the Morning",
    body: [
      "Before I knew what love could take from a man, I met a girl before the sun had properly opened its eyes.",
      "She was not a morning person.",
      "That is important.",
      "Some people belong to the morning naturally. They wake as if light has been waiting for them. They move softly through the early hours, already forgiven by the day.",
    ],
    image: "/images/tennis-court.jpg",
    caption: "Morning court",
  },

  {
    slug: "chapter-one-page-2",
    layout: "text",
    kicker: "CHAPTER ONE",
    title: "The Girl Who Borrowed the Morning",
    body: [
      "Sophia was not like that.",
      "Morning had to negotiate with her.",
      "It had to pull her from sleep, bargain with her blankets, touch her eyelids gently and ask if she could please come outside for a little while.",
      "And somehow, that day, she did.",
      "For me.",
    ],
  },

  {
    slug: "chapter-one-page-3",
    layout: "text",
    body: [
      "Or maybe I only tell myself that because memory is a dangerous author.",
      "It edits the past until even ordinary things begin to look like signs.",
      "She was visiting her grandmother.",
      "I was visiting mine.",
    ],
  },

  {
    slug: "chapter-one-page-4",
    layout: "text",
    body: [
      "That is how some stories begin — not with thunder, not with violins, not with fate wearing gold around its neck — but with two children standing in the same dusty corner of the world, pretending they were not nervous.",
      "We had exchanged numbers the day before like thieves exchanging keys to houses they were too young to enter.",
    ],
  },

  {
    slug: "chapter-one-page-5",
    layout: "text",
    body: [
      "That night, I barely slept.",
      "Not because I knew I loved her.",
      "I was too young to name things correctly.",
      "At that age, love is not yet love.",
      "It is a small bird trapped inside the chest, beating its wings against your ribs, begging you to open.",
    ],
  },

  {
    slug: "chapter-one-page-6",
    layout: "text",
    body: [
      "The next morning, while the world was still half-dressed, we met.",
      "No one saw us leave.",
      "Or maybe the whole world saw us and decided to keep quiet.",
      "We walked to the tennis court.",
      "It was empty.",
    ],
  },

  {
    slug: "chapter-one-page-7",
    layout: "text",
    body: [
      "A court without players.",
      "A net dividing two sides.",
      "Maybe that should have warned me.",
    ],
  },

  {
    slug: "chapter-one-section-2",
    layout: "text",
    kicker: "2",
    title: "A Court Without Witnesses",
    body: [
      "The court looked forgotten, like a place the day had not reached yet.",
      "There were no rackets.",
      "No shouting.",
      "No footsteps chasing a ball from one side to the other.",
      "Just the two of us, standing in the silence like we had been placed there by something older than choice.",
    ],
  },

  {
    slug: "chapter-one-page-9",
    layout: "text",
    body: [
      "We sat.",
      "We spoke.",
      "At first, like strangers.",
      "Then, slowly, like people who had known each other in another life and were only pretending to be new.",
    ],
  },

  {
    slug: "chapter-one-page-10",
    layout: "text",
    body: [
      "I do not remember every word she said.",
      "That is the strange thing about memory.",
      "It keeps the feeling and loses the sentence.",
      "But I remember the air.",
      "I remember how it behaved around her.",
    ],
  },

  {
    slug: "chapter-one-page-11",
    layout: "text",
    body: [
      "Soft.",
      "Careful.",
      "As if even the wind did not want to interrupt.",
    ],
  },

  {
    slug: "chapter-one-page-12",
    layout: "text",
    body: [
      "She told me enough for me to understand that she was not only pretty.",
      "Pretty is easy.",
      "Pretty can enter a room and leave no meaning behind.",
      "Sophia had something else.",
      "A softness that did not feel weak. A shyness that did not feel empty. A light around her that made you want to speak carefully, as if one wrong word could bruise the morning.",
    ],
  },

  {
    slug: "chapter-one-page-13",
    layout: "text",
    body: [
      "And then there was the truth.",
      "The small truth.",
      "The dangerous truth.",
      "We liked each other.",
      "Both of us knew it before either of us said it.",
      "It was already sitting between us, quiet and smiling, waiting for us to stop acting brave.",
    ],
  },

  {
    slug: "chapter-one-page-14",
    layout: "text",
    body: [
      "There are confessions that sound dramatic.",
      "Ours did not.",
      "It was not loud.",
      "It did not shake the ground.",
      "It was just two children admitting that something had begun.",
    ],
  },

  {
    slug: "chapter-one-page-15",
    layout: "text",
    body: [
      "And maybe that is why I still remember it.",
      "Because some of the most important things in life arrive without performance.",
      "No music.",
      "No audience.",
      "No proof.",
    ],
  },

  {
    slug: "chapter-one-page-16",
    layout: "text",
    body: [
      "Just a girl who was not a morning person, sitting beside me before the day had fully started, telling me in her own way that the bird in my chest was not flying alone.",
    ],
  },

  {
    slug: "chapter-one-page-17",
    layout: "text",
    title: "I remember thinking",
    body: [
      "If this girl ever becomes mine, I will not treat her like a season.",
      "But I was young.",
      "And young people make promises to the future without knowing how far the future lives.",
    ],
  },

  {
    slug: "chapter-one-section-3",
    layout: "text",
    kicker: "3",
    title: "The Dog on the Road Home",
    body: [
      "When we walked back, the morning had become brighter.",
      "The streets had started remembering themselves.",
      "Houses opened their eyes.",
      "Smoke rose somewhere.",
      "A gate made noise.",
      "The world was slowly becoming ordinary again, but I was not.",
    ],
  },

  {
    slug: "chapter-one-page-19",
    layout: "text",
    body: [
      "Something had happened to me on that court.",
      "Nothing big enough for other people to see, but big enough for me to carry.",
      "Then we saw the dog.",
    ],
  },

  {
    slug: "chapter-one-page-20",
    layout: "text",
    body: [
      "It was standing near the street we had to use, small and harmless in the way some creatures are harmless only to those who understand them.",
      "I loved dogs.",
      "Still do.",
      "So I went to it without thinking too much.",
    ],
  },

  {
    slug: "chapter-one-page-21",
    layout: "text",
    body: [
      "Sophia stopped far behind me.",
      "Not dramatically.",
      "Not childishly.",
      "Just with the kind of fear that lives in the body before the mind can explain it.",
    ],
  },

  {
    slug: "chapter-one-page-22",
    layout: "text",
    body: [
      "I turned and saw her there, keeping her distance, watching me touch the dog as if I had placed my hand inside fire and somehow survived.",
      "“It will not hurt you,” I told her.",
      "She did not move.",
    ],
  },

  {
    slug: "chapter-one-page-23",
    layout: "text",
    body: [
      "The dog looked at me.",
      "I brushed its head gently, the way you touch something that has no reason to trust humans but does anyway.",
      "“Come,” I said.",
      "She shook her head.",
    ],
  },

  {
    slug: "chapter-one-page-24",
    layout: "text",
    body: [
      "I smiled, maybe too confidently, because boys that age think bravery is something they can lend.",
      "“Trust me.”",
      "That was the first time I asked her for something I did not know how to protect yet.",
    ],
  },

  {
    slug: "chapter-one-page-25",
    layout: "text",
    title: "Trust me.",
    body: [
      "Two small words.",
      "So easy to say when nothing has broken yet.",
      "So easy to offer before distance, before other people, before pain learns your address.",
    ],
  },

  {
    slug: "chapter-one-page-26",
    layout: "text",
    body: [
      "She stood there for a moment, caught between fear and belief.",
      "Then she came closer.",
      "Slowly.",
      "Step by step.",
      "Like a princess approaching a sleeping beast in a story no one had written down.",
    ],
  },

  {
    slug: "chapter-one-page-27",
    layout: "text",
    body: [
      "I kept my hand on the dog.",
      "I wanted her to see that the world did not always bite.",
      "I wanted her to know that some things only looked dangerous from far away.",
    ],
  },

  {
    slug: "chapter-one-page-28",
    layout: "text",
    body: [
      "When she finally touched it, her hand was careful.",
      "Light.",
      "Ready to disappear.",
      "The dog did nothing.",
      "No bark.",
      "No teeth.",
      "No punishment for her courage.",
    ],
  },

  {
    slug: "chapter-one-page-29",
    layout: "text",
    body: [
      "Just warmth.",
      "Just fur.",
      "Just the quiet miracle of fear being wrong.",
      "And for a second, she smiled like someone who had crossed a bridge inside herself.",
    ],
  },

  {
    slug: "chapter-one-page-30",
    layout: "text",
    body: [
      "I did not know it then, but that moment would return to me years later wearing a different face.",
      "Because love is also a dog on the side of the road.",
      "To one person, it looks harmless.",
      "To another, it looks like something that once chased them.",
    ],
  },

  {
    slug: "chapter-one-page-31",
    layout: "text",
    body: [
      "And sometimes, all you can do is stand there with your hand extended, saying:",
      "Trust me.",
      "Even when you are not sure whether the past will let them come closer.",
    ],
  },

  {
    slug: "chapter-one-image-end",
    layout: "chapter-image",
    image: "/images/tennis-court.jpg",
    caption: "The Court Where Morning Was Still Asleep",
    dateTaken: "Date unknown",
    location: "Tennis court",
  },
];
