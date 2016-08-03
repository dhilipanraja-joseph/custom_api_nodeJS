
const md5 = require('crypto');



function hash(email){
  
      return 'https://www.gravatar.com/avatar/'+md5.createHash('md5').update(email).digest('hex');
      // console.log("hash",email);
      // return email;
}

module.exports = hash;
