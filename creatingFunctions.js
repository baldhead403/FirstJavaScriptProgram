
function cToF(celsius) 
{
  let cTemp = celsius;
  let cToFahr = cTemp * 9 / 5 + 32;
  let output = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(output);
}

function fToC(fahrenheit) 
{
  let fTemp = fahrenheit;
  let fToCel = (fTemp - 32) * 5 / 9;
  let output = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(output);
} 
cToF()
fToC()

/*function numCounter() {

  
  for ( i = 0; i <= 100; i++) {
    
     console.log(i) 
  }
    


}
numCounter();*/

/*(function numCounter(num) {

  
    for ( i = 1; i <= num; i++) {
      
       console.log(i) 
    }
      
  
  
  }
  numCounter(18);

  function printName(firstName, lastName) {
    console.log(firstName + lastName)  
} 
printName("Donald"," Rivers"); */