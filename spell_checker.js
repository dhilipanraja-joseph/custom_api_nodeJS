
const words = require('./english-words.json');


function spellcheck(data){
  let dataWords = decodeURI(data).replace(/[^\s\w]/g,'').split(' ');
  let dict = JSON.stringify(words);
  let err_count = 0;
  // console.log(dict.indexOf(dataWords[4]));
  let misArr = [];
  dataWords.forEach(function(e) {
    var che = dict.indexOf(e);
    console.log('che:',che);
    if( che === -1) {
      err_count++;
      // console.log(e);
      misArr.push(e);
    }
  });
  return `${misArr.length} - Mispelled Word(s), ${JSON.stringify(misArr)}`;
}

module.exports = spellcheck;
