// Songs dataset
const SONGS = [
  ["brr", "fiu", "cric-cric", "brrah"],
  ["pep", "birip", "trri-trri", "croac"],
  ["bri-bri", "plop", "cric-cric", "brrah"],
];

// Find the first match of a sound in any song
function findContinuation(sound) {
  const s = String(sound || "").trim();
  if (!s) return null;

  for (let i = 0; i < SONGS.length; i++) {
    const song = SONGS[i];
    const idx = song.indexOf(s);
    if (idx !== -1) {
      const position =
        idx === 0 ? "first" :
        idx === song.length - 1 ? "last" :
        "middle";
      const continuation = song.slice(idx + 1);
      return {
        songNumber: i + 1,
        position,
        continuation,
      };
    }
  }
  return null;
}

module.exports = { findContinuation };
