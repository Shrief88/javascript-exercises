function round(number){
  return Math.round(number*10)/10;
}


const ftoc = function(number) {
  return round((number - 32) * 5/9);
};

const ctof = function(number) {
  return round(number * 9/5 + 32);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
