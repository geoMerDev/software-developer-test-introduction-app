// src/index.js

// Songs as arrays
const songs = [
  ["brr", "fiu", "cric-cric", "brrah"],
  ["pep", "birip", "trri-trri", "croac"],
  ["bri-bri", "plop", "cric-cric", "brrah"]
];

/**
 * Given a sound, return the remaining sequence of sounds in the song.
 * @param {string} inputSound - The starting sound.
 * @returns {string[]} - The remaining sounds in the song.
 */
function getRemainingSounds(inputSound) {
  for (const song of songs) {
    const index = song.indexOf(inputSound);
    if (index !== -1) {
      return song.slice(index + 1);
    }
  }
  return [];
}

// Example runs
const examples = ["brr", "birip", "plop", "croac"];
examples.forEach(sound => {
  console.log(`Input: ${sound}`);
  console.log(`Output: ${getRemainingSounds(sound).join(", ") || "(silence)"}`);
  console.log("----");
});
