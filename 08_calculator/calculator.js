const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
	return array.reduce((item,total) => total+item , 0);
};

const multiply = function(array) {
  return array.reduce((item,total) => total*item , 1);
};

const power = function(a,b) {
  let total = a;
  for(let i=0;i<b-1;i++){
    total *= a;
  }
  return total;
	
};

const factorial = function(number) {
	
  let fact = 1;
  for(let i=2;i<=number;i++){
    fact *=i;
  }
  return fact;  
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
