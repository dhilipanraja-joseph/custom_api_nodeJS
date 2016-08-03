const moment = require('moment');

function age(dob){

  let birthday = moment(dob,"MM-DD-YYYY");
  let age_ms = birthday.diff(moment());
  let age = moment.duration(age_ms);

  return `You are ${0-(age._data.years)} years old\n`;

}


module.exports = age;
