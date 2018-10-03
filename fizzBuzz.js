var number = prompt('What is the first number to check?');
let fizz = 3;
let buzz = 5;
let fizzBuzz = 15;

if (number % 15 == 0 ) {
    document.write('Fizz Buzz')
} else if(number % 3 == 0){
    document.write('Fizz');
}else if (number % 5 == 0) {
    document.write('Buzz');
    
} else {
    document.write(number)
}
