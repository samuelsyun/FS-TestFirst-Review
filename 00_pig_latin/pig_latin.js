function translate(str) {
  let vowels = 'aeiou';
  let slicePoint = 0;
  let resultArr = [];

  str.split(' ').forEach((word) => {
    for (let i = 0; i < word.length; i++) {
      if (vowels.indexOf(word[i]) > -1) {
        if (word[i] !== 'u' || (word[i] === 'u' && word[i - 1] !== 'q')) {
          slicePoint = i;
          break;
        }
      }
    }

    let newWord = word.slice(slicePoint, word.length) + word.slice(0, slicePoint) + 'ay';

    resultArr.push(newWord);
  })

  return resultArr.join(' ');
}
