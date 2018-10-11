
 // let numDenom = [100, 50, 20, 10, 5, 1, .25, .10, .05, .01] 
let totalCash = 100
let tshirt = 27.83
let fiftyDollar =  0
let twentyDollar = 0
let tenDollar =  0
let fiveDollar =  0
let oneDollar = 0
let quarters = 0.00
let dimes = 0.00
let nickels = 0.00
let penny = 0.00
let change = totalCash - tshirt



while (change > 0.01) {
   
    
    while (change >= 50) 
    {
        change -= 50
        fiftyDollar ++
    }
    console.log('You received ' + fiftyDollar + ' fifty dollar bills ')
    
     while (change >= 20) 
    {
        
        change -= 20
        twentyDollar ++ 
    }
    console.log('You received ' + twentyDollar + ' twenty dollar bill ' )
    while (change >= 10) 
    {
        change -= 10
        tenDollar ++
    }
    console.log('You received ' + tenDollar + ' ten dollar bill '  )
    while (change >= 5) 
    {
        change -= 5
        fiveDollar ++
    }
    console.log('You received ' + fiveDollar + ' five dollar bill  ')
    while (change >= 1 ) 
    {
        change -=1
        oneDollar ++ 
        
    }
    console.log('You received ' + oneDollar + ' one dollar bill ')
    while (change >= .25) {
        
        change -= .25
        quarters++
    }
    console.log('You received ' + quarters + ' quarters ')
    while (change >= .10) {
        
        change -= .10
        dimes ++
    }
    console.log('You received ' + dimes + '  dimes ')
    while (change >= .05) {
        
        change -= .05
        nickels ++
    }
    console.log('You received ' + nickels + ' nickels')
    while (change >= 0.01) {
       
        change -= 0.01
        penny ++
    }
    console.log('You received ' + penny + ' pennies ')


 } 