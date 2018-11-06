//Arrays

const superHeros = ['Iron Man', 'Spider Man','Capt. America','Thor']

console.log(superHeros);
console.log(superHeros[0]);
console.log(superHeros[superHeros.length-1]);

console.log(`We have ${superHeros.length} super heroes`);

const numbers = ['one','two','three','four','five','six']

//start
console.log(numbers.shift())
console.log(numbers)

numbers.unshift('Something')
console.log(numbers)

//end
numbers.pop()
console.log(numbers)

numbers.push('Seven')
console.log(numbers)


//middle
numbers.splice(2, 2, 'something')
console.log(numbers)
