
const dict = require('./dictionary.json');

// const search = JSON.parse(dict);

function def(word){
    let chk = word.toUpperCase();
    // console.log(JSON.stringify(dict['SEQUENCE']));
    return chk+'\n\t'+dict[chk];
}

module.exports=def;
