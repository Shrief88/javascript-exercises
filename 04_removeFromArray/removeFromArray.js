const removeFromArray = function(array , ...manyMoreArgs) {
    for(let i=0;i<manyMoreArgs.length;i++){
        if(array.includes(manyMoreArgs[i])){
            const index = array.indexOf(manyMoreArgs[i]);
            array.splice(index,1);
        }
    }
    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
