//Write an algorithm to calculate a dog's age in dog years. 
//Note: For each of the first two years, a dog year is equal to 10.5 human years. After that, each dog year equals 4 human years.

//Expected Output:

// Input a dog's age in human years: 15                                    
// The dog's age in dog's years is 73

const readline = require("readline-sync");

    let firstDogYear =  10.5; // the first 2 years are worth 10.5 each
    let laterDogYears = 4
    let dogYrInput = parseInt(readline.question(`How old is your dog in human years?: `))

    if(dogYrInput <=0){
        console.log("Dog Age is 0")
    
    } else if (dogYrInput <= 2 && dogYrInput > 0 ){
        console.log( `Dog age is ${dogYrInput *firstDogYear} years old in dog years`)
    } else{
        console.log(`Dog age is ${(firstDogYear*2) + ((dogYrInput-2)* laterDogYears)} years old in dog years`)
    } 
