function mapSemThis(arr){
    return arr.map(function(item){
        return item * 5;
    })
}

const numbers = [2, 5, 8, 50];

console.log(mapSemThis(numbers));

console.log(numbers);