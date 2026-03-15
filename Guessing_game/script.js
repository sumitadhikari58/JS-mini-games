const max = prompt("Enter the max number")
console.log("you entered max no. ",max);
const rdm = Math.floor(Math.random()*max+1);
let guess = prompt("Guess now");
while(true){
    if(guess == 'quit')
    {
        console.log("Quitting Game.");
        console.log("Thanks for playing");
        break;
    }
    if(guess == rdm){
        console.log("You win");
        console.log("The number was ",rdm);
        break;
    }
    else{ 
        console.log("you entered",guess);
        if(guess < rdm){
            guess = prompt("You need to guess large");
        } 
        else if(guess > rdm){
            guess = prompt("You need to guess low");

        }
    }
}
