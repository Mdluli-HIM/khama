"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type Slide = {
  text: string[];
  image: string;
};

const slides: Slide[] = [
  {
    image: "/images/tennis-court.jpg",
    text: [
      "CHAPTER ONE: THE COURT WHERE MORNING WAS STILL ASLEEP",
      "1. THE GIRL BEFORE THE SUN",
      "",
      "BEFORE I KNEW WHAT LOVE COULD TAKE FROM A MAN, I MET A GIRL BEFORE THE SUN HAD PROPERLY OPENED ITS EYES.",
      "",
      "SHE WAS VISITING HER GRANDMOTHER.",
      "",
      "I WAS VISITING MINE.",
      "",
      "THAT IS HOW SOME STORIES BEGIN — NOT WITH THUNDER, NOT WITH VIOLINS, NOT WITH FATE WEARING GOLD AROUND ITS NECK — BUT WITH TWO CHILDREN STANDING IN THE SAME DUSTY CORNER OF THE WORLD, PRETENDING THEY WERE NOT NERVOUS.",
      "",
      "HER NAME WAS SOPHIA.",
      "",
      "OR MAYBE THAT IS ONLY WHAT MEMORY CALLS HER NOW.",
      "",
      "BACK THEN, SHE WAS JUST A GIRL WITH MORNING IN HER FACE.",
    ],
  },
  {
    image: "/images/tennis-court.jpg",
    text: [
      "WE EXCHANGED NUMBERS LIKE THIEVES EXCHANGING KEYS TO HOUSES THEY WERE TOO YOUNG TO ENTER.",
      "",
      "THAT NIGHT, I BARELY SLEPT.",
      "",
      "NOT BECAUSE I KNEW I LOVED HER. I WAS TOO YOUNG TO NAME THINGS CORRECTLY. AT THAT AGE, LOVE IS NOT YET LOVE. IT IS JUST A BIRD TRAPPED INSIDE THE CHEST, BEATING ITS WINGS AGAINST YOUR RIBS.",
      "",
      "THE NEXT MORNING, BEFORE THE STREETS HAD REMEMBERED THEIR NOISE, WE MET.",
      "",
      "NO ONE SAW US LEAVE.",
      "",
      "OR MAYBE THE WHOLE WORLD SAW US AND DECIDED TO KEEP QUIET.",
    ],
  },
  {
    image: "/images/tennis-court.jpg",
    text: [
      "WE WALKED TO THE TENNIS COURT.",
      "",
      "IT WAS EMPTY.",
      "",
      "A COURT WITHOUT PLAYERS.",
      "",
      "A NET DIVIDING TWO SIDES.",
      "",
      "MAYBE THAT SHOULD HAVE WARNED ME.",
      "",
      "WE SAT THERE AND SPOKE LIKE PEOPLE WHO HAD KNOWN EACH OTHER IN ANOTHER LIFE AND WERE ONLY PRETENDING TO BE NEW.",
      "",
      "I REMEMBER THINKING:",
      "",
      "IF THIS GIRL EVER BECOMES MINE, I WILL NOT TREAT HER LIKE A SEASON.",
      "",
      "BUT I WAS LEAVING.",
      "",
      "DISTANCE ARRIVED BEFORE LOVE COULD.",
      "",
      "AND BECAUSE WE WERE YOUNG, WE LET IT WIN.",
    ],
  },
];

export default function HomePage() {
  const [index, setIndex] = useState(0);
  const [lightMode, setLightMode] = useState(false);

  const current = slides[index];

  const pageNumber = useMemo(() => String(index + 1).padStart(2, "0"), [index]);
  const totalPages = useMemo(() => String(slides.length).padStart(2, "0"), []);

  const bgClass = lightMode ? "bg-[#f3efe8] text-black" : "bg-black text-white";
  const mutedClass = lightMode ? "text-black/55" : "text-white/55";
  const borderClass = lightMode ? "border-black/15" : "border-white/15";
  const controlTextClass = lightMode ? "text-black" : "text-white";
  const controlHoverClass = lightMode
    ? "hover:bg-black hover:text-white"
    : "hover:bg-white hover:text-black";

  return (
    <main
      className={`relative min-h-screen overflow-hidden transition-colors duration-500 ${bgClass}`}
      style={{
        fontFamily:
          '"Arial Narrow", "Cabinet Grotesk", "Helvetica Neue", Arial, sans-serif',
      }}
    >
      <div className="flex min-h-screen items-center justify-center px-6">
        <div className="grid w-full max-w-[330px] grid-cols-[156px_132px] items-start gap-4">
          <div className="pt-[1px]">
            <div className="space-y-[5px]">
              {current.text.map((line, i) =>
                line === "" ? (
                  <div key={i} className="h-[8px]" />
                ) : (
                  <p
                    key={i}
                    className="text-[11px] font-bold uppercase leading-[0.96] tracking-[-0.045em]"
                  >
                    {line}
                  </p>
                ),
              )}
            </div>
          </div>

          <div className="relative mt-[1px] h-[168px] w-[132px] overflow-hidden bg-white/5">
            <Image
              src={current.image}
              alt="Khama chapter image"
              fill
              priority
              className="object-cover grayscale contrast-125 brightness-75"
            />
          </div>
        </div>
      </div>

      <button
        aria-label="Brand mark"
        className={`fixed bottom-6 left-6 flex h-10 w-10 items-center justify-center rounded-full border text-[13px] font-medium ${borderClass} ${controlTextClass}`}
      >
        K
      </button>

      <div className="fixed bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-7">
        <button
          onClick={() => setIndex((prev) => Math.max(prev - 1, 0))}
          disabled={index === 0}
          aria-label="Previous page"
          className={`flex h-9 w-9 items-center justify-center rounded-full border text-lg transition ${borderClass} ${controlTextClass} ${controlHoverClass} ${
            index === 0 ? "opacity-35 cursor-not-allowed" : ""
          }`}
        >
          ‹
        </button>

        <div
          className={`text-[11px] font-medium tracking-[0.22em] ${mutedClass}`}
        >
          {pageNumber} / {totalPages}
        </div>

        <button
          onClick={() =>
            setIndex((prev) => Math.min(prev + 1, slides.length - 1))
          }
          disabled={index === slides.length - 1}
          aria-label="Next page"
          className={`flex h-9 w-9 items-center justify-center rounded-full border text-lg transition ${borderClass} ${controlTextClass} ${controlHoverClass} ${
            index === slides.length - 1 ? "opacity-35 cursor-not-allowed" : ""
          }`}
        >
          ›
        </button>

        <button
          onClick={() => setLightMode((prev) => !prev)}
          className={`flex h-9 items-center rounded-full border px-4 text-[11px] font-medium uppercase tracking-[0.12em] transition ${borderClass} ${controlTextClass} ${controlHoverClass}`}
        >
          {lightMode ? "Dark" : "Light"}
        </button>
      </div>
    </main>
  );
}
