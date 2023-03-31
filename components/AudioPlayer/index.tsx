import { useState } from "react";

import AudioPlayer from "./AudioPlayer";
import TrackItem from "./TrackItem";

import { songs } from "./songs";

function AudioPlayerExample() {
  const [currentSongIndex, setCurrentSongIndex] = useState(-1);

  const currentSong = songs[currentSongIndex];

  return (
    <div className="not-prose border border-slate-800 rounded-lg my-10">
      <div className="container mx-auto p-6 flex-1">
        <h1 className="text-xl md:text-4xl font-bold mb-8">My Audio Player</h1>
        <ul>
          {songs.map((song, index) => (
            <TrackItem
              key={index}
              selected={index === currentSongIndex}
              title={song.title}
              trackNumberLabel={song.trackNumber}
              onClick={() => setCurrentSongIndex(index)}
            />
          ))}
        </ul>
      </div>
      <AudioPlayer
        key={currentSongIndex}
        currentSong={currentSong}
        songCount={songs.length}
        songIndex={currentSongIndex}
        onNext={() => setCurrentSongIndex((i) => i + 1)}
        onPrev={() => setCurrentSongIndex((i) => i - 1)}
      />
    </div>
  );
}

export default AudioPlayerExample;
