interface Song {
  sounds: string[];
}

class MusicalLake {
  private songs: Song[] =
    [{ sounds: ['brr', 'fiu', 'cric-cric', 'brrah'] },
    { sounds: ['pep', 'birip', 'trri-trri', 'croac'] },
    { sounds: ['bri-bri', 'plop', 'cric-cric', 'brrah'] }
    ];

  public getRemainingSounds(sound: string): string {
    for (const song of this.songs) {
      const soundIndex = song.sounds.indexOf(sound);

      if (soundIndex !== -1 && soundIndex < song.sounds.length - 1) {
        const remainingSounds = song.sounds.slice(soundIndex + 1);
        return remainingSounds.join(', ');
      }
    }
    return '';
  }

  public runTests(): void {
    const testCases = [
      { input: 'brr', expected: 'fiu, cric-cric, brrah' },
      { input: 'birip', expected: 'trri-trri, croac' },
      { input: 'plop', expected: 'cric-cric, brrah' },
      { input: 'croac', expected: '' },
      { input: 'brrah', expected: '' }
    ];

    console.log('Music Lake - Test Results: ');

    let allPassed = true;
    testCases.forEach((testCase, index) => {
      const result = this.getRemainingSounds(testCase.input);
      const passed = result === testCase.expected;
      allPassed = allPassed && passed;

      console.log(`Test ${index + 1}: ${passed ? 'Pass' : 'Fail'}`);
      console.log(`  Input: "${testCase.input}"`);
      console.log(`  Expected: "${testCase.expected}"`);
      console.log(`  Got: "${result}"`);
      console.log('');

    });
  }
}

function main(): void {
  console.log('Musical Lake');
  console.log('');

  const musicalLake = new MusicalLake();
  musicalLake.runTests();

  console.log('');

  const examples = ['brr', 'fiu', 'birip', 'plop', 'croac'];
  examples.forEach(sound => {
    const result = musicalLake.getRemainingSounds(sound);
    console.log(`"${sound}" → "${result}"`);
  });
}

main();




