//ex1

console.log('ex1');
let favFood = 'chips';
let favMeal = 'lunch';
console.log('i' + " " + 'eat' + " " + favFood + " " + "at" + " " + "every" + " " + favMeal);

//ex2 - 
console.log('ex2 - part 1');
let watchedSeries = ["black mirror", "money heist", "the big bang theory"];
let watchedSeriesLength = '3';
let myWatchedSeries = ['prison break', 'fauda', 'friends'];
console.log('i ' + 'watched ' + watchedSeriesLength + ' series: ' + watchedSeries);

console.log('ex2 - part 2');
watchedSeries[2] = 'friends';
watchedSeries.push('fauda');
watchedSeries.unshift('fauda');
watchedSeries.splice(1, 1)

console.log('ex3');
let temperature = '36';
console.log(temperature + "°C is " + temperature / 5 * 9 + 32 + "°F");

console.log('ex4')
let c;
let a = 34;
let b = 21;

console.log(a+b) //first expression
// Prediction:55 because they are numbers
// Actual:55

a = 2;

console.log(a+b) //second expression
// Prediction:23 because we change the storage in A
// Actual:23

// c is undifined 

// console.log(3 + 4 + '5');
// the outcom will be 12 becuse the string will be change to a number- the prediction was wrong, the number was 75 because the way order of math and the pluse of string

console.log('ex5');

typeof(15)
// Prediction:number
// Actual:number

typeof(5.5)
// Prediction:number- its a number
// Actual:number

typeof(NaN)
// Prediction:number- only a guess i don't think it will be a string
// Actual:number

typeof("hello")
// Prediction:string because the ""
// Actual:string

typeof(true)
// Prediction:boolean - because that is the outcome of this kind
// Actual:boolean

typeof(1 != 2)
// Prediction:true
// Actual:boolean, i forgot that this is the outcome it need ti be, i just answer the question 

"hamburger" + "s"
// Prediction:hamburgers like the 4+3+'5'
// Actual:hamburgers

"hamburgers" - "s"
// Prediction:NAN because math is not able with strings
// Actual:NaN 

"1" + "3"
// Prediction:4
// Actual:13 strings not behave like a numbers 

"1" - "3"
// Prediction:NaN
// Actual:-2 strings tha are a numbers withuot letters behave like numbers

"johnny" + 5
// Prediction:johnny5 combaining together
// Actual:johnny5

"johnny" - 5
// Prediction:NaN
// Actual:NaN

99 * "hello"
// Prediction:Nan they not combain together
// Actual:NaN

1 != 1
// Prediction:boolean
// Actual:boolean (false)

1 == "1"
// Prediction:true
// Actual:true boolean

1 === "1"
// Prediction:false (it check equality of value and type)
// Actual:false boolean

// ex6

5 + "34"
// Prediction:534 behave like a strings
// Actual:534

5 - "4"
// Prediction:1 same 
// Actual:1

10 % 5
// Prediction:0 there is no rest
// Actual:0

5 % 10
// Prediction:5 this is the rest
// Actual:5

"Java" + "Script"
// Prediction:JavaScript they combain together
// Actual:JavaScript

" " + " "
// Prediction:"  "
// Actual:"  "

" " + 0
// Prediction:nan
// Actual:" 0" combain together like strings

true + true
// Prediction:2 true equal to 1 and false=0
// Actual:2

true + false
// Prediction:1 
// Actual:1

false + true
// Prediction:1
// Actual:1

false - true
// Prediction:-1
// Actual:-1

!true
// Prediction:-1
// Actual:false

3 - 4
// Prediction:-1
// Actual:-1

"Bob" - "bill"
// Prediction:Nan threr is no math there
// Actual:Nan






