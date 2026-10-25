let age = Number(prompt("Guess the age: "));
let attempts = 1;

while (age !== 20) {
    if (age > 20) {
        console.log("Too old, try again");
    } else {
        console.log("Too young, try again");
    }

    age = Number(prompt("Guess again: "));
    attempts++;
}

console.log("Correct age!");
console.log(`Attempted ${attempts} times.`);