"use client";

// @ts-expect-error: No types for color-thief-browser
import ColorThief from "color-thief-browser";
import React, {useEffect, useState} from "react";

type Artist = {
    id: string;
    name: string;
    images : {url: string }[];
    external_urls: { spotify: string };
    popularity: number;
    genres: string[];
}

export default function Artists() {
    const [artists, setArtists] = useState<Artist[]>([]);
    const [bgColor, setBgColor] = useState<{ [id: string]: string }>({});

    useEffect(() => {
    async function fetchData() {
        const res = await fetch("/api/spotify/top-artists");
        const data = await res.json();

        if (data && data.items) {
        setArtists(data.items);
        } else {
        setArtists([]);
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

    if (!artists.length) {
    return (
        <div className="bg-[--background] rounded-xl text-[var(--font-primary)] w-full max-w-2xl flex flex-row gap-6 shadow-lg">
        </div>
    );
    }

    const [featured, ...rest] = artists;

    return (
        <div className="rounded-xl text-[var(--font-primary)] w-full flex flex-col md:flex-row gap-4 md:gap-6 shadow-lg transition-colors duration-500 px-2 mx-auto">
        <div
        className="flex-1 flex flex-col items-center justify-center rounded-lg p-4"
        style={{ backgroundColor: bgColor[featured.id] || "bg -[--background]" }}
        >
            <img
            src={featured.images[0]?.url}
            alt={featured.name}
            className="rounded-lg w-40 h-40 mb-4 shadow-md"
            crossOrigin="anonymous"
            onLoad={e => handleBackgroundImage(featured.id, e.currentTarget)}
            />
            <a
            href={featured.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl font-bold hover:underline text-[var(--font-primary)]"
            >
            {featured.name}
            </a>
            <div className="text-sm text-gray-200 mt-2">{featured.genres.join(", ")}</div>
            <div className="text-xs text-gray-400 mt-1">Popularity: {featured.popularity}</div>
      </div>
      {/* Rest of Artists */}
      <div className="flex flex-col flex-[1.2] gap-4">
        {rest.map((artist) => (
          <div
            key={artist.id}
            className="flex items-center rounded-lg p-2 gap-3"
            style={{ backgroundColor: bgColor[artist.id] || "bg -[--background]" }}
          >
            <img
              src={artist.images[2]?.url || artist.images[0]?.url}
              alt={artist.name}
              className="w-12 h-12 rounded"
              crossOrigin="anonymous"
              onLoad={e => handleBackgroundImage(artist.id, e.currentTarget)}
            />
            <div className="flex-1">
              <a
                href={artist.external_urls.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:underline text-[var(--font-primary)]"
              >
                {artist.name}
              </a>
              <div className="text-xs text-gray-400">{artist.genres.join(", ")}</div>
              <div className="text-xs text-gray-500">Popularity: {artist.popularity}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
}