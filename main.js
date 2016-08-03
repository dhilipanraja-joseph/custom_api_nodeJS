const PORT = 8000;
const url = require('url');
const http = require('http');
const math = require('./math.js');
const age = require('./age.js');
const analyzer = require('./analyzer.js');
const generator = require('./generator.js');
const magicball = require('./magicball.js');
const spellcheck = require('./spell_checker.js');
const dictionary = require('./dictionary.js');


let server = http.createServer((req,res)=>{

  console.log('req.method',req.method);

  console.log('req.url',req.url);

  // let pathName = url.parse(req.url).pathname;
  // console.log('pathname',pathName);

  let reqURL = req.url.match(/[^/]+/g) || [];

  console.log('reqURL',reqURL);

  let path = reqURL[0];
  let urlData = reqURL[1];

  switch(path) {

      case 'math' : res.write(math(urlData));
                    // console.log('math');
                    res.end('\n');break;

      case 'age' : res.write(age(urlData));
                    // console.log('age');
                    res.end('\n');break;

      case 'analyzer' : res.write(analyzer(urlData));
                    // console.log('analyzer');
                    res.end('\n');break;

      case 'generator' : res.write(generator(urlData));
                    // console.log('gene');
                    res.end('\n');break;

      case 'magicball' : res.write(magicball(urlData));
                    console.log('magicball');
                    res.end('\n');break;

      case 'spellcheck' : res.write(spellcheck(urlData));
                    console.log('spellcheck');
                    res.end('\n');break;

      case 'dictionary' : res.write(`\n\nDefinition : ${dictionary(urlData)}`);
                    console.log('dictionary');
                    res.end('\n\n');break;

      default     : res.statusCode = 404;
                    res.end('Use routes /spellcheck, /math, /age, /analyzer, /magicball, /gene .eg /math/2+2\n');
                    break;
  }

  res.end();

}).listen(PORT,err => {

  console.log(err || `Sever Listening on Port : ${PORT}`);

});
