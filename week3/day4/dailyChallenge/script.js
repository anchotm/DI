
let sentence = 'Difficulty is not that bad, i like it';
let wordNot = sentence.indexOf('not');
let wordBad = sentence.indexOf('bad');

if (wordBad>wordNot) {
    console.log(sentence.replace(sentence.slice(wordNot, (wordBad + 3)),'good'));
}
