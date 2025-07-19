"use client";

import React, { useState } from "react";
import Spotify from "./components/spotify";
import Artists from "./components/artists";
import Image from "next/image";
import "./globals.css";

export default function Page() {
  const [tab, setTab] = useState<"recent" | "artists">("recent");

  return (
    <div className="flex flex-col w-full mx-auto px-2">
      <div className="w-full">
        <h1 className="text-2xl md:text-2xl font-bold text-left w-full">hello, Jonathan here.</h1>
        <h2 className="">welcome to my personal portfolio, please enjoy your stay.</h2>
      </div>
      <div className="mt-5 mb-5 w-full flex justify-center">
        <Image src="/drawable/displayHero.gif" alt="source 86" className="w-full rounded-xl" width={1000} height={1000} unoptimized/>
      </div>
      <div className="spotify w-full">
        <div className="flex flex-row gap-2 mb-4 justify-center flex-wrap w-full">
          <button
              className={`py-2 rounded-lg font-semibold cursor-pointer flex-1 min-w-0 text-xs md:text-base w-full
              ${ tab === "recent" ? "bg-[#333333] text-white px-2" : "bg-[--background] text-gray-400 px-2"
            }`}
            onClick={() => setTab("recent")}
          >
          Recently Played
          </button>
          <button
              className={`py-2 rounded-lg font-semibold cursor-pointer flex-1 min-w-0 text-xs md:text-base w-full
              ${ tab === "artists" ? "bg-[#333333] text-white px-2" : "bg-[--background] text-gray-400 px-2" 
            }`}
            onClick={() => setTab("artists")}
          >
          Top Artists  
          </button>
        </div>
        <div className="w-full">
          {tab === "recent" ? <Spotify /> : <Artists />}
        </div>
      </div>
    </div>
  );
}