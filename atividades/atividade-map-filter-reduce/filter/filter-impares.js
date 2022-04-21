function filtraImpares(arr){
    return arr.filter(callback);
}

function callback(item){
    return item % 2 !== 0;
}

const meuArray = [103, 45, 71, 4, 1, 2, 1968, 5751];

console.log(filtraImpares(meuArray));