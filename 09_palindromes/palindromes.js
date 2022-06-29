const palindromes = function (text) {
    text = text.replace(/\.|,| |!/g,'').toLowerCase();
    let reverseText = text.split("").reverse().join("");
    console.log(text);
    console.log(reverseText);
    if(text === reverseText){
        return true;
    }
    else{
        return false;
    }
    
};

// Do not edit below this line
module.exports = palindromes;
