function filtraPares(arr){
    return arr.filter(callback);
}

function callback(item){
    return item % 2 == 0;
}

const meuArray = [5, 30, 2, 1, 6, 9];

console.log(filtraPares(meuArray));

//Outra sintaxe, mesmo resultado

/*function filtraPares(arr){
    return arr.filter(function(item){
        return item % 2 == 0;
});
}

const meuArray = [5, 30, 2, 1, 6, 9];

console.log(filtraPares(meuArray));*/