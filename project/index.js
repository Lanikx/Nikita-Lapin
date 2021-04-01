//task1
function pipe(fn1, fn2) 
{
    return function (x) 
    {
        return fn2(fn1(x));
    }
}


const multiplyTwo = (n) => n * 2;
const minusFour = (n) => n - 4;

const res = pipe(
    multiplyTwo,
    minusFour
)(10);

console.log(res);




//task2
function memo(fn) {
    const cache = {}

    return (...inp) => {
        if (cache.has(inp.toString())) 
        {
            console.log('Fetching from cache');
            return cache.get(inp.toString());
        }
        console.log('Calculating result');
        const result = fn(...inp);

        cache.set(inp.toString(), result);

        return result;
    }
}

const sum = (a, b) => a + b

const memedSum = memo(sum);

console.log(memedSum(1, 2));
console.log(memedSum(1, 2));

//task3
Function.prototype.Apply = function (context, args){
    context.fnToCall = this;
    let result = context.fnToCall(...args);
    return result;
}


//task4
multiplyAll = array => {
    return (multiply) => {
        return array.map(currentValue => currentValue * multiply)
    }
}
console.log(multiplyAll([1, 2, 3])(2));


//task5
const arrayDiff = (a, b) => {
    return a.filter(element => !b.includes(element))
}
console.log(arrayDiff([1, 2], [1]));





