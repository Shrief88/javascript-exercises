const fibonacci = function(number) {
    if(typeof(number)=== 'string'){
        number = Number(number);
    }

    if (number<0){
        return 'OOPS'
    }

    if(number===1){
        return 1;
    }

    let fab = 1;
    let lastFab = 0;
    for(let i=1 ; i<number ; i++){
        let temp = fab;
        fab += lastFab;
        lastFab = temp;
    }
    return fab;
};

// Do not edit below this line
module.exports = fibonacci;
