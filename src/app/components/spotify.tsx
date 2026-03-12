"use client";

// @ts-expect-error: No types for color-thief-browser
import ColorThief from "color-thief-browser";
import React, { useEffect, useState } from "react";

type Track = {
  name: string;
  id: string;
  artists: { name: string }[];
  album: {
    name: string;
    images: { url: string }[];
  };
  external_urls: { spotify: string };
  duration_ms: number;
};

export default function Spotify() {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [bgColor, setBgColor] = useState<{ [id: string]: string }>({});

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/spotify/recently-played");
      const data = await res.json();
      
      if (data && data.items) {
        const seen = new Set();
        const uniqueTracks: Track[] = [];
        for (const item of data.items) {
          const track = item.track;
          if (!seen.has(track.id)) {
            seen.add(track.id);
            uniqueTracks.push(track);
          }
          if (uniqueTracks.length === 5) break;
        }
        setTracks(uniqueTracks);
      } else {
        setTracks([]);
      }
    }
    fetchData();
    const interval = setInterval(fetchData, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleBackgroundImage = (artistId: string, img: HTMLImageElement | null) => {
    if (img) {
        img.crossOrigin = "anonymous";
        try {
            const colorThief = new ColorThief();
            const color = colorThief.getColor(img);
            console.log("Handle background image: ", color)
            setBgColor((prev) => ({
                ...prev,
                [artistId]: `rgb(${color[0]}, ${color[1]}, ${color[2]})`,
            }));
        } catch (e) {
            console.log("Handle background error: ", e)
            setBgColor((prev) => ({
                ...prev,
                [artistId]: "bg -[--background]",
            }));
        }
    }
};

  if (!tracks.length) {
    return (
      <div className="bg-[--background] rounded-xl text-[var(--font-primary)] w-full max-w-2xl flex flex-col gap-6 shadow-lg">
      </div>
    );
  }

  const [latest, ...rest] = tracks;

  return (
    <div className="rounded-xl text-[var(--font-primary)] w-full flex flex-col md:flex-row gap-4 md:gap-6 shadow-lg transition-colors duration-500 px-2 mx-auto">
      <div
        className="flex-1 flex flex-col items-center justify-center rounded-lg p-4 min-w-0"
        style={{ backgroundColor: bgColor[latest.id] || "bg -[--background]" }}
      >
        <img
          src={latest.album.images[0]?.url}
          alt={latest.album.name}
          className="rounded-lg w-32 h-32 md:w-40 md:h-40 mb-4 shadow-md object-cover"
          crossOrigin="anonymous"
          onLoad={e => handleBackgroundImage(latest.id, e.currentTarget)}
        />
        <a href={latest.external_urls.spotify} target="_blank" rel="noopener noreferrer" className="text-lg md:text-2xl font-bold hover:underline text-center break-words text-[var(--font-primary)]">
          {latest.name}
        </a>
        <div className="text-base md:text-lg text-center break-words text-[var(--font-primary)]">
          {latest.artists.map(a => a.name).join(", ")}
        </div>
        <div className="text-sm text-gray-200 text-center break-words">{latest.album.name}</div>
      </div>
      <div className="flex flex-col flex-[1.2] gap-2 md:gap-4 w-full min-w-0">
        {rest.map((track) => (
          <div
            key={track.id}
            className="flex items-center rounded-lg p-2 gap-2 md:gap-3 w-full min-w-0"
            style={{ backgroundColor: bgColor[track.id] || "bg -[--background]" }}
          >
            <img
              src={track.album.images[2]?.url || track.album.images[0]?.url}
              alt={track.album.name}
              className="w-10 h-10 md:w-12 md:h-12 rounded object-cover"
              crossOrigin="anonymous"
              onLoad={e => handleBackgroundImage(track.id, e.currentTarget)}
            />
            <div className="flex-1 min-w-0">
              <a href={track.external_urls.spotify} target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline text-sm md:text-base break-words text-[var(--font-primary)]">
                {track.name}
              </a>
              <div className="text-xs md:text-sm break-words text-[var(--font-primary)]">
                {track.artists.map(a => a.name).join(", ")}
              </div>
              <div className="text-xs text-gray-500 break-words">{track.album.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}