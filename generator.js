
const md5 = require('md5');



function hash(email){

      return 'https://www.gravatar.com/avatar/'+md5(email);
      // console.log("hash",email);
      // return email;
}

module.exports = hash;
