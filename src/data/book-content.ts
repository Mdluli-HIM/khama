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
    | "chapter-image"
    | "poem";
  kicker?: string;
  title?: string;
  subtitle?: string;
  body?: string[];
  image?: string;
  caption?: string;
  contents?: ContentEntry[];
  dateTaken?: string;
  location?: string;
  credit?: string;
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
        page: "48",
        title: "Chapter Two",
        subtitle: "The Years That Forgot the Morning",
        status: "released",
        targetSlug: "chapter-two-intro",
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
    slug: "chapter-one-section-4",
    layout: "text",
    kicker: "4",
    title: "The Net Between Us",
    body: [
      "We walked home after that.",
      "Nothing in the world announced what had happened.",
      "No cloud opened.",
      "No angel leaned over a balcony.",
      "No one stopped us and said, Remember this morning. One day it will become a wound and a prayer.",
    ],
  },

  {
    slug: "chapter-one-page-33",
    layout: "text",
    body: [
      "We simply returned to where we had come from.",
      "Two children pretending they were still ordinary.",
      "But I was not ordinary anymore.",
      "Not completely.",
    ],
  },

  {
    slug: "chapter-one-page-34",
    layout: "text",
    body: [
      "Somewhere between the empty tennis court and the dog on the road, Sophia had become a question I would carry for years.",
      "Not every day.",
      "Not loudly.",
      "But there.",
    ],
  },

  {
    slug: "chapter-one-page-35",
    layout: "text",
    body: [
      "In the background of other relationships.",
      "In the silence after certain songs.",
      "In the small pause before replying to her messages whenever life brought her name back to my screen.",
    ],
  },

  {
    slug: "chapter-one-page-36",
    layout: "text",
    body: [
      "We did not become what we could have become.",
      "I was leaving.",
      "Distance arrived before love could.",
      "And because we were young, we let it win.",
    ],
  },

  {
    slug: "chapter-one-page-37",
    layout: "text",
    body: [
      "Maybe we thought distance was just space.",
      "A road.",
      "A province.",
      "A few hours between one body and another.",
    ],
  },

  {
    slug: "chapter-one-page-38",
    layout: "text",
    body: [
      "We did not know distance could become a language.",
      "We did not know it could teach people how to miss each other incorrectly.",
      "We did not know it could turn soft things into questions.",
    ],
  },

  {
    slug: "chapter-one-page-39",
    layout: "text",
    body: [
      "Back then, all we knew was the morning.",
      "The court.",
      "The net.",
      "The dog.",
      "Her hand reaching carefully toward something she feared.",
    ],
  },

  {
    slug: "chapter-one-page-40",
    layout: "text",
    title: "Trust me.",
    body: [
      "My voice saying:",
      "Trust me.",
      "And maybe that is where the story truly began.",
    ],
  },

  {
    slug: "chapter-one-page-41",
    layout: "text",
    body: [
      "Not when we met.",
      "Not when we confessed.",
      "Not even when we walked to the court before the sun had opened.",
      "Maybe it began on the road home, when Sophia touched the dog and believed me.",
    ],
  },

  {
    slug: "chapter-one-page-42",
    layout: "text",
    body: [
      "Because years later, when she would be afraid again, it would not be a dog standing between us.",
      "It would be distance.",
      "It would be memory.",
      "It would be the ghost of a man who had taught her that faraway love can still have teeth.",
    ],
  },

  {
    slug: "chapter-one-page-43",
    layout: "text",
    body: [
      "And I would be standing on the other side of her fear, older now, softer now, holding out my hand to the same girl from the morning.",
      "Still hoping she might remember that once, long ago, she trusted me — and nothing bad happened.",
    ],
  },

  {
    slug: "chapter-one-poem",
    layout: "poem",
    kicker: "KARMA VERSE I",
    title: "The Morning Kept the Receipt",
    credit: "Written by MMM",
    body: [
      "She woke before the sun could rise,\nwith borrowed sleep still in her eyes.\nA girl who did not love the dawn,\nstill chose the road I waited on.",

      "An empty court. A quiet net.\nTwo hearts too young to know regret.\nWe spoke as if the world was kind,\nas if no distance walked behind.",

      "She feared the dog beside the street,\nI touched its head, made fear retreat.\n“Trust me,” I said, with boyhood pride,\nand she came closer to my side.",

      "How soft it was, that little scene,\nhow much it meant, though still unseen.\nFor karma keeps what children say,\nthen sends it back another day.",

      "Now roads have teeth, and silence stays,\nwhere laughter used to light our days.\nNow I am where her fear once stood,\nstill calling love misunderstood.",

      "I hold my heart out through the years,\nthe way she offered me her fears.\nAnd maybe this is what love does:\nit turns the man into who she was.",

      "So if she reads the morning right,\nshe’ll know I waited in its light.\nStill soft. Still scared. Still hoping she\nremembers once, she trusted me.",
    ],
  },

  {
    slug: "chapter-one-image-end",
    layout: "chapter-image",
    image: "/images/tennis-court.jpg",
    caption: "The Court Where Morning Was Still Asleep",
    dateTaken: "2015",
    location: "NKowankowa-A Tennis court",
  },

  {
    slug: "chapter-two-intro",
    layout: "collage",
    kicker: "CHAPTER TWO",
    title: "The Years That Forgot the Morning",
    subtitle: "1. The School That Taught Boys to Pretend",
    body: [
      "I went to boarding school and told myself to move on.",
      "Not because I wanted to.",
      "Because there was nothing else a boy could do.",
      "I was too young to fight distance. Too young to make decisions that needed buses, money, permission, timing, and a world kind enough to let two children choose each other.",
    ],
    image: "/images/boarding-school.jpg",
    caption: "Boarding school years",
  },

  {
    slug: "chapter-two-page-2",
    layout: "text",
    body: [
      "So I did what boys do when they are powerless.",
      "I called it moving on.",
    ],
  },

  {
    slug: "chapter-two-page-3",
    layout: "text",
    body: [
      "Boarding school received me the way big places receive young boys — without softness.",
      "It gave me a bed, a timetable, a uniform, rules, whistles, bells, sports fields, tired evenings, hungry mornings, and corridors full of names I had to learn quickly.",
    ],
  },

  {
    slug: "chapter-two-page-4",
    layout: "text",
    body: [
      "There, life became louder.",
      "There were boys trying to become men before their voices had finished changing.",
      "There were girls walking past with laughter sharp enough to follow you into your room.",
    ],
  },

  {
    slug: "chapter-two-page-5",
    layout: "text",
    body: [
      "There were weekends that arrived like small freedoms.",
      "Every Friday, the school emptied itself.",
      "Children became sons and daughters again.",
      "Bags were packed.",
      "Transport waited.",
      "Homes reopened.",
    ],
  },

  {
    slug: "chapter-two-page-6",
    layout: "text",
    body: [
      "Then Sunday came and returned everyone to the same gates, the same beds, the same rules, the same walls that smelled faintly of polish, ironed uniforms, and secrets.",
    ],
  },

  {
    slug: "chapter-two-page-7",
    layout: "text",
    body: [
      "I enjoyed it there.",
      "That is the truth.",
      "I played sports.",
      "I laughed.",
      "I became known.",
      "I became one of those boys people noticed without me understanding why.",
    ],
  },

  {
    slug: "chapter-two-page-8",
    layout: "text",
    body: [
      "But somewhere inside me, the morning with Sophia had not fully died.",
      "It had only become quiet.",
      "A small room in me with the lights off.",
    ],
  },

  {
    slug: "chapter-two-section-2",
    layout: "text",
    kicker: "2",
    title: "Moving On Is Sometimes Just Another Name for Being Young",
    body: [
      "At that age, I did not know how to mourn something that never officially belonged to me.",
      "How do you miss a girl you never dated?",
      "How do you grieve a story that did not have enough time to become real?",
      "How do you explain to people that nothing happened, but something still changed you?",
    ],
  },

  {
    slug: "chapter-two-page-10",
    layout: "text",
    body: [
      "So I did not explain.",
      "I became busy.",
      "That is what people do when the heart is too young to speak properly.",
      "They fill their days until silence has nowhere to sit.",
    ],
  },

  {
    slug: "chapter-two-page-11",
    layout: "text",
    body: [
      "I ran on sports fields.",
      "I walked through hostel corridors.",
      "I laughed with boys who were also pretending not to be lonely.",
    ],
  },

  {
    slug: "chapter-two-page-12",
    layout: "text",
    body: [
      "I learned the language of boarding school: how to survive teasing, how to hide sadness, how to act unbothered, how to return on Sunday like home had not reminded you of everything you were missing.",
    ],
  },

  {
    slug: "chapter-two-page-13",
    layout: "text",
    body: [
      "I told myself Sophia and I could not happen.",
      "I told myself distance had made the decision for us.",
      "I told myself I was fine.",
      "And maybe I was.",
      "Or maybe I was becoming good at leaving parts of myself behind and calling that growth.",
    ],
  },

  {
    slug: "chapter-two-section-3",
    layout: "text",
    kicker: "3",
    title: "The Girl in Grade Twelve",
    body: [
      "There was a girl named Hillary.",
      "She was older.",
      "Grade Twelve.",
      "Beautiful in a way that made younger boys remember their age.",
    ],
  },

  {
    slug: "chapter-two-page-15",
    layout: "text",
    body: [
      "When I first heard that she liked me, I did not know what to do with the information.",
      "A friend of hers had told me, and even after hearing it, the news felt too large for my body.",
    ],
  },

  {
    slug: "chapter-two-page-16",
    layout: "text",
    body: [
      "Older boys liked Hillary.",
      "Of course they did.",
      "Girls like that collect attention without asking for it.",
      "They walk through a school and suddenly every boy becomes aware of his shoes, his haircut, his laugh, the way he stands, the foolishness of his hands.",
    ],
  },

  {
    slug: "chapter-two-page-17",
    layout: "text",
    body: [
      "I liked her too.",
      "But liking someone older feels different when you are young.",
      "It feels like standing outside a beautiful house with the lights on, wanting to knock, but already imagining the people inside laughing.",
    ],
  },

  {
    slug: "chapter-two-page-18",
    layout: "text",
    body: [
      "I thought I did not stand a chance.",
      "Then something strange happened.",
      "I remembered Sophia.",
      "Not dramatically.",
      "Not like thunder.",
      "Just quietly.",
    ],
  },

  {
    slug: "chapter-two-page-19",
    layout: "text",
    body: [
      "I remembered that the most beautiful girl I had ever laid eyes on had once liked me back.",
      "She had woken up early for me.",
      "Walked with me.",
      "Sat with me on an empty tennis court while the morning was still asleep.",
    ],
  },

  {
    slug: "chapter-two-page-20",
    layout: "text",
    body: [
      "And that memory gave me a small piece of courage.",
      "Maybe there was something about me.",
      "Maybe I was not as invisible as I thought.",
      "Maybe beauty had already looked at me once and not turned away.",
    ],
  },

  {
    slug: "chapter-two-page-21",
    layout: "text",
    body: [
      "Later, I asked Hillary to be my date to the hostel end-year dinner.",
      "She agreed.",
      "And for a while, I carried that yes like proof.",
    ],
  },

  {
    slug: "chapter-two-page-22",
    layout: "text",
    body: [
      "Not proof that I was loved.",
      "Not proof that I was ready.",
      "Just proof that I could be chosen.",
      "Sometimes a boy does not need the whole world to clap.",
      "Sometimes he only needs one beautiful girl to say yes, so he can stop feeling like a mistake in his own skin.",
    ],
  },

  {
    slug: "chapter-two-section-4",
    layout: "text",
    kicker: "4",
    title: "Praise and the Lie That Grew Teeth",
    body: [
      "But before Hillary, there was Praise.",
      "Praise liked me.",
      "Her friend told me first.",
      "That seemed to be the way feelings moved in boarding school — never directly, always through messengers, always through whispers, always through someone else carrying your heart in their mouth.",
    ],
  },

  {
    slug: "chapter-two-page-24",
    layout: "text",
    body: [
      "Praise was older too.",
      "Grade Eleven.",
      "She and I spent time together, but I was not there.",
      "Not fully.",
      "Not in the way she wanted me to be.",
    ],
  },

  {
    slug: "chapter-two-page-25",
    layout: "text",
    body: [
      "When she leaned closer, I moved away.",
      "When she tried to turn whatever we were into something warmer, I blocked the door gently.",
      "I did not hate her.",
      "I was not trying to be cruel.",
      "I simply did not feel what she felt.",
    ],
  },

  {
    slug: "chapter-two-page-26",
    layout: "text",
    body: [
      "At the time, I believed that was enough.",
      "To not feel.",
      "To not pretend.",
      "To step back.",
      "But feelings do not always accept rejection cleanly.",
    ],
  },

  {
    slug: "chapter-two-page-27",
    layout: "text",
    body: [
      "Some feelings become embarrassed.",
      "Some become angry.",
      "Some become stories.",
      "And stories, when told by a wounded person, can grow teeth.",
    ],
  },

  {
    slug: "chapter-two-page-28",
    layout: "text",
    body: [
      "Praise had a boyfriend.",
      "That should have been the end of it.",
      "But people are strange when they want to be wanted by more than one world at the same time.",
      "Sometimes they keep one person in their hand and invent another in their mouth.",
    ],
  },

  {
    slug: "chapter-two-page-29",
    layout: "text",
    body: [
      "She had been telling her friend that something was happening between her and me.",
      "A kiss.",
      "A secret.",
      "A hidden thing.",
      "But there had been no thing.",
      "There had only been her wanting and me refusing.",
    ],
  },

  {
    slug: "chapter-two-page-30",
    layout: "text",
    body: [
      "Still, a lie does not need truth to walk.",
      "It only needs someone willing to carry it.",
      "She took pictures of me from Facebook and made them look like proof.",
    ],
  },

  {
    slug: "chapter-two-page-31",
    layout: "text",
    body: [
      "She made it seem as if I had sent them to her.",
      "As if there was a closeness between us.",
      "As if I had chosen to enter a story I had never agreed to be part of.",
    ],
  },

  {
    slug: "chapter-two-page-32",
    layout: "text",
    body: [
      "That Friday, while everyone else went home, Praise went to see her boyfriend.",
      "Somewhere during that weekend, the lie opened its own mouth.",
    ],
  },

  {
    slug: "chapter-two-page-33",
    layout: "text",
    body: [
      "Maybe he saw the messages.",
      "Maybe the phone was left too close to suspicion.",
      "Maybe suspicion was already sitting beside him, waiting for a reason to become rage.",
      "But he found the texts.",
    ],
  },

  {
    slug: "chapter-two-page-34",
    layout: "text",
    body: [
      "He saw what she had been telling her friend.",
      "He saw my pictures.",
      "He saw my name placed where it did not belong.",
      "And because anger does not always stop to ask questions, he believed the story before he ever heard my side of it.",
    ],
  },

  {
    slug: "chapter-two-page-35",
    layout: "text",
    body: [
      "That is how quickly a boy can become guilty in rooms he has never entered.",
      "One moment, I was just a student at boarding school.",
      "The next, I was someone’s enemy.",
    ],
  },

  {
    slug: "chapter-two-page-36",
    layout: "text",
    body: [
      "Someone’s reason to gather other boys.",
      "Someone’s reason to carry weapons.",
      "My name became a match near petrol.",
      "And I did not even know it had been lit.",
    ],
  },

  {
    slug: "chapter-two-section-5",
    layout: "text",
    kicker: "5",
    title: "The Sunday That Saved Me",
    body: [
      "Sunday came.",
      "The school began filling itself again.",
      "Bags returned.",
      "Voices returned.",
      "The hostel woke from its weekend silence.",
    ],
  },

  {
    slug: "chapter-two-page-38",
    layout: "text",
    body: [
      "Usually, on Sundays, I went to town with my friends.",
      "Sometimes to buy small things.",
      "Sometimes just to walk where the school rules could not follow us.",
      "But that Sunday, something in me said no.",
    ],
  },

  {
    slug: "chapter-two-page-39",
    layout: "text",
    body: [
      "Not loudly.",
      "Not like a prophecy.",
      "Just a feeling.",
      "A small refusal in the chest.",
      "So I stayed.",
      "Instead of going to town, I went to see my friend Treasure.",
    ],
  },

  {
    slug: "chapter-two-page-40",
    layout: "text",
    body: [
      "That one decision became a door closing before danger could enter.",
      "Later, a boy from the hostel came to me.",
      "This boy did not like me.",
      "We were not friends.",
      "We barely spoke.",
    ],
  },

  {
    slug: "chapter-two-page-41",
    layout: "text",
    body: [
      "So when he came and asked me, “What did you do?” I thought he was only trying to shake me.",
      "But he kept talking.",
      "There were guys in town looking for me.",
      "A group of them.",
      "Stopping transport that carried hostel kids.",
      "Asking for me.",
      "Searching.",
    ],
  },

  {
    slug: "chapter-two-page-42",
    layout: "text",
    body: [
      "I brushed it off at first.",
      "How could it be true?",
      "I had not touched anyone’s girlfriend.",
      "I had not started any fight.",
      "I had no reason to be hunted.",
    ],
  },

  {
    slug: "chapter-two-page-43",
    layout: "text",
    body: [
      "But then my roommate came back from town and told me the same thing.",
      "And suddenly the air changed.",
      "Fear is strange when it first arrives.",
      "It does not always scream.",
      "Sometimes it simply removes the floor from underneath you.",
    ],
  },

  {
    slug: "chapter-two-page-44",
    layout: "text",
    body: [
      "My roommate told me they had been stopping cars.",
      "Taxis.",
      "Lifts.",
      "Any transport that looked like it was carrying hostel kids.",
      "They were asking for me by name.",
      "Not guessing.",
      "Not wondering.",
      "Looking.",
    ],
  },

  {
    slug: "chapter-two-page-45",
    layout: "text",
    body: [
      "And that is when I understood that this was no hostel rumour.",
      "This thing had legs.",
      "This thing had left the mouth that made it and reached the road.",
      "I sat with the question:",
      "What have I done?",
    ],
  },

  {
    slug: "chapter-two-page-46",
    layout: "text",
    body: [
      "I went through names.",
      "Faces.",
      "Conversations.",
      "Nothing made sense.",
      "Until I thought of Praise.",
      "I messaged her.",
      "I asked if she knew anything.",
    ],
  },

  {
    slug: "chapter-two-page-47",
    layout: "text",
    body: [
      "Her answer came back carrying the whole storm.",
      "Yes.",
      "It was her.",
      "That is when shock became anger.",
      "Because I knew.",
      "Nothing had happened.",
    ],
  },

  {
    slug: "chapter-two-page-48",
    layout: "text",
    body: [
      "No kiss.",
      "No secret.",
      "No stolen romance.",
      "Only a girl who wanted a story so badly that she built one out of air and placed me inside it without permission.",
    ],
  },

  {
    slug: "chapter-two-page-49",
    layout: "text",
    body: [
      "So I blocked her.",
      "But blocking someone does not always block what they have already released into the world.",
      "By then, the whole school knew.",
      "It became the news of the week.",
      "My little sister was worried.",
    ],
  },

  {
    slug: "chapter-two-page-50",
    layout: "text",
    body: [
      "There were boys looking for me.",
      "Not one.",
      "Not two.",
      "Many.",
      "Carrying machetes.",
      "The kind of objects that make a misunderstanding feel like a funeral rehearsing itself.",
    ],
  },

  {
    slug: "chapter-two-page-51",
    layout: "text",
    body: [
      "They even came to the school.",
      "But the teachers on duty turned them away.",
      "The teachers told me it was not safe for me to go to town until they understood why these boys wanted to harm me.",
    ],
  },

  {
    slug: "chapter-two-page-52",
    layout: "text",
    body: [
      "Imagine being young and learning that your name can travel somewhere before your body does.",
      "Imagine being innocent and still needing protection.",
    ],
  },

  {
    slug: "chapter-two-page-53",
    layout: "text",
    body: [
      "Imagine being a boy who once asked a girl to trust him near a harmless dog, now being told not to walk outside because men with blades were looking for him over a lie.",
      "That is how quickly youth can lose its softness.",
    ],
  },

  {
    slug: "chapter-two-section-6",
    layout: "text",
    kicker: "6",
    title: "Valentine",
    body: [
      "Monday came.",
      "School resumed, because schools are strange like that.",
      "The bell rings even when your life is shaking.",
      "Lessons continue.",
      "Teachers write on boards.",
      "Students laugh.",
      "The sun rises as if nothing dangerous has been waiting for you outside the gate.",
    ],
  },

  {
    slug: "chapter-two-page-55",
    layout: "text",
    body: [
      "After school, one of the boys sent a kid to call me.",
      "They wanted to talk.",
      "I was scared.",
      "Of course I was.",
    ],
  },

  {
    slug: "chapter-two-page-56",
    layout: "text",
    body: [
      "Courage is not the absence of fear.",
      "Sometimes courage is only fear walking because staying still has become worse.",
      "So I went.",
      "Not because I was fearless.",
      "Because I knew silence would make the lie stronger.",
    ],
  },

  {
    slug: "chapter-two-page-57",
    layout: "text",
    body: [
      "I had to explain.",
      "I had to bring truth into the room before violence decided it was no longer interested in listening.",
      "The boy’s name was Valentine.",
      "A strange name for someone standing between me and harm.",
      "But perhaps life enjoys irony.",
    ],
  },

  {
    slug: "chapter-two-page-58",
    layout: "text",
    body: [
      "He was not loud when he spoke to me.",
      "That helped.",
      "Loudness would have made me feel like the story had already won.",
      "I told him I did not know why they were looking for me.",
      "I told him nothing had happened between Praise and me.",
    ],
  },

  {
    slug: "chapter-two-page-59",
    layout: "text",
    body: [
      "Then I showed him the messages.",
      "The rejection.",
      "The refusal.",
      "The parts where she wanted something from me that I did not give.",
    ],
  },

  {
    slug: "chapter-two-page-60",
    layout: "text",
    body: [
      "The proof that I had not sent her pictures.",
      "The proof that I had tried to keep distance where she had tried to invent closeness.",
      "Valentine read.",
      "And for a moment, the world paused.",
    ],
  },

  {
    slug: "chapter-two-page-61",
    layout: "text",
    body: [
      "There is a kind of mercy that arrives through being believed.",
      "He understood.",
      "Maybe not completely.",
      "But enough.",
    ],
  },

  {
    slug: "chapter-two-page-62",
    layout: "text",
    body: [
      "Enough to see that the fire had been started with the wrong name inside it.",
      "Enough to know that I was not the boy they had been told to find.",
    ],
  },

  {
    slug: "chapter-two-page-63",
    layout: "text",
    body: [
      "He promised to speak to the others.",
      "He promised I would be okay.",
      "Or at least, that he would try to make it so.",
      "And I believed him because sometimes belief is not a choice.",
      "Sometimes it is the only place left to stand.",
    ],
  },

  {
    slug: "chapter-two-poem",
    layout: "poem",
    kicker: "KARMA VERSE II",
    title: "The Mirror Other People Held",
    credit: "written by MMM",
    body: [
      "I thought myself a common boy,\nnot much to praise, not much to see;\nbut eyes I feared would pass me by\nkept finding something else in me.",

      "At school, I learned my name could bloom\ninside a mouth I barely knew;\nsome called it charm, some called it fate,\nI only hoped the lie was true.",

      "A girl too bright for my young hands\nonce made my nervous courage rise;\nher yes became a little lamp\ninside the dark I called my size.",

      "But wanting has a shadow too,\nand softness sometimes comes with teeth;\none wounded heart can dress a lie\nand place your name beneath.",

      "I learned that being seen can burn,\nthat praise can turn, that rumours run;\nthat boys can carry blades for words\nyou never spoke to anyone.",

      "Still, somewhere under all that noise,\nbeneath the fear I tried to hide,\nI met a version of myself\nthe world had noticed from outside.",

      "Maybe I was not just ordinary.\nMaybe I was hard to understand.\nMaybe the mirror I avoided\nwas clearer in another’s hand.",

      "And karma, quiet as a bell,\nkept count of what I could not face:\nthe boy who wanted to be chosen,\nyet feared what wanting could replace.",

      "So I left doors half-open,\nsmiled, but never fully stayed;\ncalled it peace, called it growing,\nwhile my softer parts decayed.",

      "Now I know the cruelest lesson\nwas not the danger or the shame;\nit was learning I could be desired\nand still feel distant from my name.",
    ],
  },

  {
    slug: "chapter-two-image-end",
    layout: "chapter-image",
    image: "/images/boarding-school.jpg",
    caption: "The Years That Forgot the Morning",
    dateTaken: "2016",
    location: "sabie, Hoërskool Sybrand van Niekerk",
  },
];
