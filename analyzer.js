
function textData(data){

    // let newData = data;

    let dData = decodeURI(data);
    let charCount = dData.length;
    let words = dData.split(' ');
    let chars = dData.replace(/\s/g,'');
    // let nWords = words.length;

    let avg = parseFloat((chars.length / words.length).toFixed(2));

    let analyzer = {
      "Word_Count" : words.length,
      "Char_Count" : charCount,
      "Average_Word_len" : avg
    };


    return JSON.stringify(analyzer);
}

module.exports = textData;
