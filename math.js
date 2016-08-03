

function math(data){

  let op = data.search(/[+*/%^-]/g);
  let operator = data[op];
  let operand = data.split(/[+*/%^-]/g);

  switch(operator){

      case '+' : return add(operand);break;

      case '-' : return subtract(operand);break;

      case '*' : return multiply(operand);break;

      case '/' : return divide(operand);break;

      case '%' : return mod(operand);break;

      case '^' : return power(operand);break;

      default  : return 'Arthmathic Error';
  }

  // console.log('operand',operand);parseInt(
  //) parseInt(cons)ole.log('operator',operator);

  // console.log('math');
  // return data;
}

function add(n){
  return (parseInt(n[0]) + parseInt(n[1]))+'';
}


function subtract(n){
  return (parseInt(n[0]) - parseInt(n[1]))+'';
}


function multiply(n){
  return (parseInt(n[0]) * parseInt(n[1]))+'';
}


function divide(n){
  return (parseInt(n[0]) / parseInt(n[1]))+'';
}


function mod(n){
  return (parseInt(n[0]) % parseInt(n[1]))+'';
}

function power(n){
  return (Math.pow(parseInt(n[0]),parseInt(n[1])))+'';
}

module.exports = math;
