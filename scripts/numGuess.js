let userNum = 10;
let userInput = parseInt(prompt('Please enter a form 1 -' + userNum ));
let counter = 0;
let randomNum = Math.floor(Math.random() * 10) +1;
let maxAttempts = 5; 

while (userInput != randomNum)
 {
    userInput = parseInt(prompt('Please enter a form 1 -' + userNum) );
    counter += 1;

  if(counter >= maxAttempts){
    document.write(' You are all out of attempts 🤪 ');
  break
}   


if (userInput == randomNum) {
    document.write("That is CORRECT " + randomNum );
      
} 




}
/*else {
    document.write('That is INCORRECT, try again ' + '<br/>' + randomNum);
} */