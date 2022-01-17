// Ex-1 

let x = 5
let y = 3

if (x < y) {
    console.log("y is the biggest number");
} else {
    console.log("x is the biggest number");
}

// Ex-2

let newDog = "Chihuahua"

console.log(newDog.length)
console.log(newDog.toUpperCase())
console.log(newDog.toLowerCase())

if (newDog = "Chihuahua") {
    console.log('I love Chihuahus, its my favorite dog breed')
} else {
    console.log('I dont care, I prefer cats')
}


// Ex-3

let num = parseInt(prompt("Enter a Number"));

if (num % 2 == 1) {
    prompt(`${num} is an even number`)
} else if (num != 0) {
    prompt(`${num} is an odd number`)
} else {
    prompt('your number is 0')
}


// Ex-4

let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"]

switch (users.length) {
    case 0:
        console.log("no one is online");
        break;
    case 1:
        consloe.log(`${users[0]} is online`);
        break;
    case 3:
        console.log(`${users[0]}, ${users[1]} is online`);
        break;
    default:
        console.log(`${users[0]}, ${users[1]} and ${users.length - 2} more are online`);
}