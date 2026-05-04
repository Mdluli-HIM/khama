export type BookPage = {
  slug: string;
  layout?: "collage" | "text" | "cover";
  title?: string;
  body?: string[];
  image?: string;
  caption?: string;
};

export const bookPages: BookPage[] = [
  {
    slug: "intro-collage",
    layout: "collage",
    body: [
      "YOU ARE AMAZING. PLEASE START BELIEVING AS YOU TRULY ARE. YOU HAVE COME SO FAR AND YOU SHOULD BE SO PROUD OF YOURSELF.",
      "ARE YOU READY TO TAKE THE NEXT STEP WITHIN YOUR BUSINESS? ARE YOU WANTING TO FINALLY FOLLOW YOUR DREAMS? ARE YOU READY TO TAKE THE LEAP? I AM HERE, READY AND WAITING TO JOIN YOU, HOLDING YOUR HAND ALONG THE WAY.",
      "LET’S BUILD A BUSINESS IN WHICH CAN CHANGE LIVES, THE PLANET AND OURSELVES ALL AT THE SAME TIME. IT ALL STARTS WITH YOU. YOU MUST BELIEVE IN YOURSELF. I HAVE LEARNT THAT NO ONE ELSE WILL BELIEVE IN YOU, UNTIL YOU DO.",
      "YOU MAY HAVE A MILLION IDEAS HOWEVER UNTIL YOU TAKE ACTION AND ACTUALLY SHOW THEM WHAT YOU ARE MADE OF, THEN THEY MIGHT JUST BELIEVE IN YOU AND IF THEY DO NOT, YOU DO NOT WANT THEIR ENERGY.",
      "ARE YOU READY TO CHASE YOUR DREAMS? IF SO, LET’S DO THIS TOGETHER.",
    ],
    image: "/images/editorial-plant.jpg",
    caption: "Interior plant photograph",
  },
  {
    slug: "beyond-words",
    layout: "text",
    title: "BEYOND WORDS",
    body: [
      "Some stories do not begin loudly.",
      "Some begin softly, almost without permission, and still manage to change the shape of a life.",
    ],
  },
  {
    slug: "khama",
    layout: "cover",
    title: "KHAMA",
    body: ["A quiet digital reading object."],
  },
];