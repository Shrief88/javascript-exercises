const repeatString = function(text , number) {
    
    if (number<0){
        return 'ERROR';
    }

    let output = '';
    for(let i =0;i<number;i++){
        output += text
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;