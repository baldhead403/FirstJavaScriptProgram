 var number =0
// let fizz = 3;
// let buzz = 5;
// let fizzBuzz = 15;
while (number <= 100) {
    

if (number % 15 == 0 ) {
    console.log('Fizz Buzz')
} else if(number % 3 == 0){
    console.log('Fizz');
}else if (number % 5 == 0) {
    console.log('Buzz');
    
} else {
    console.log(number)
}
number++
}