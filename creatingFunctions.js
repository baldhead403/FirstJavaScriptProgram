
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
cToF(26.7);
fToC(98.6);
