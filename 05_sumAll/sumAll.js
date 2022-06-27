const sumAll = function(i,j) {
    if (i<0 || j<0 || typeof(i)!='number' || typeof(j)!='number'){
        return 'ERROR';
    }

    if (i>j){
        let temp = j;
        j=i;
        i=temp;
    }

    let sum =0 ;
    for(let x=i;x<=j;x++){
        sum+=x;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
