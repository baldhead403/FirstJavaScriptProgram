/*const number = prompt('Please enter a number from 1-100');

if (number <= 24 ) {
    document.write('This number is less than 25');
}
   else if (number <= 49 && number >= 25) {
         document.write('This number is between 25 and 50');
         
     }
     else if (number <= 74 && number >= 50) {
         document.write('This number is between 50 and 75 ');
     }
     else if (number <= 100 && number >= 75) {
         document.write('This number is between 75 and 100');
     }
     else{
         alert('This number is greater than 100, please enter a number between 1-100 ');
     }*/
     const userInput = parseInt(prompt('Please enter a random number from 1-10'));
     let randomNum = Math.floor(Math.random() * 10) + 1;
     let counter = 0;
 
     if(userInput == randomNum){
         document.write("That is CORRECT " + randomNum);

     } else {
         document.write('That is INCORRECT, try again ' + '<br/>' + randomNum);
     }
    
