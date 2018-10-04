let code = true;
let counter = 100;
 
while (code == true) {
       console.log('Code is working ' + counter);
       counter -= 2;
    
    if (counter % 5 == 0) {
        console.log('Code is working and is on counter ' + counter );
        
    }

     else if (counter % 5 != 0) {
        console.log('Not divisible by 5' );
       
       
    }
      if (counter <= 0) {
        code = false;
         
    }
}
 