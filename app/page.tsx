"use client";
import Image from "next/image";
import Intro from "./components/Intro";
import Main from "./components/Main";
import AudioPlayer from "./components/AudioPlayer";
import React from "react";
import { div } from "motion/react-client";
import Wstep from "./components/Wstep";
import Akt1 from "./components/Akt1";
import Akt2 from "./components/Akt2";

export default function Home() {
  const [play, setPlay] = React.useState(false);
  return (
    
    <main className="h-full">

      <div className="relative inset-0 w-full h-full bg-black overflow-hidden">
       {!play ? (
        <div onClick={() => setPlay(true)} className="w-full font-playfair h-full flex items-center justify-center cursor-pointer text-white font-bold text-[3rem] md:text-[5rem] lg:text-[8rem]">Click to Play</div>
       ) : (
        <div>
          <Intro />
          <Main />
          <AudioPlayer />
          <Wstep />
          <Akt1 />
          <Akt2 />
        </div>
       )}
      </div>
    </main>
  );
}
