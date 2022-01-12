// ex1
let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits.splice(0,1)
fruits.sort()
fruits.push('kiwi')
fruits.shift()
fruits.reverse()


// ex2
let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(moreFruits[1][1])
