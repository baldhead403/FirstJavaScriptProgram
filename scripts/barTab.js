
let tab = 35;
let fiveDollar = 0
let paid = 0
let total = 35
 while (paid < total) {
     fiveDollar +=1
     paid +=5
     tab -=5
      
     if (paid != tab || tab == 0) {
         
        console.log('your tab has been paid and your total ' + tab)
         console.log(fiveDollar);
      } 
    
     
     


     
 }