let max = prompt("Enter the maximum number");
random = Math.floor(Math.random()*max)
guess = prompt("Guess the random number")
while (true) {
    if (guess == "quit"){
        console.log("User quit the game");
        break;
    }
    if(guess == random){
console.log(`congratulation!!! You guess the correct number, Random number is ${random}`);
break; 
    }
    else if(guess < random) {
guess = prompt("Hint: The guess number is too lower, Pease try again")
    }
    else if(guess > random){
        guess = prompt("Hint: The guess number is too high, Pease try again")
    }
    else {
        guess = prompt("Wrong entry!!!!");
        
    }

    
}