export const songs = [...Array(5).keys()].map((n) => ({
  title: "Song Number " + Number(n + 1),
  trackNumber: n + 1 < 10 ? "0" + (n + 1) : (n + 1).toString(),
  src: `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-${Number(
    n + 1,
  )}.mp3`,
}));
