const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {

  return tutorials.map(words => words.split(' ').map(cap => 
    cap.charAt(0).toUpperCase() + cap.slice(1)).join(' '))
  //console.log(tutorials);
  //let splitTitles = tutorials.map(p => p.split(" "));
  //console.log(splitTitles);
  //const result = splitTitles.map(o => {
  //  for (let i=0; i<o.length; i++){
  //    o[i] = o[i][0].toUpperCase() + o[i].substring(1);
  //  }
  //})
  //return result.join(" ");
  //console.log(splitTitles);
  //splitTitles.map(q => q.join(" "));
  //return splitTitles;
}
