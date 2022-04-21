const cake = {
    value: 10,
}

const carrot = {
    value: 3,
}

function mapComThis(arr, thisArg){
    return arr.map(function(item){
       return item * this.value;
    }, thisArg);
}

const numbers = [1, 2];

console.log('Quando this é cake ', mapComThis(numbers, cake));
console.log('Quando this é carrot ', mapComThis(numbers, carrot));