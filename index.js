//Write an algorithm to calculate a dog's age in dog years. 
//Note: For each of the first two years, a dog year is equal to 10.5 human years. After that, each dog year equals 4 human years.

//Expected Output:

// Input a dog's age in human years: 15                                    
// The dog's age in dog's years is 73

function yearsComparison(){
    let humanYears = 1;
    let firstDogYear = humanYears * 10.5;
    let subDogYears = humanYears * 4;
}

const readline = require("readline-sync");
let dogYrInput = parseInt(readline.question(`How old is your dog in human years?: `))
let humanYrInput = parseInt(readline.question(`How old are you: `))
console.log(`Your dog is ${}`)