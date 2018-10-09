/*let duck = true
let counter = Math.floor(Math.random() * 100)

  
while (duck == true) {
    console.log('Duck')
    counter ++

    if (counter % 5 == 0) {
        
        console.log('Goose')
        duck = false

    }
}*/


let vehicleMiles = 0
let mileage = 0
let repairMiles = 15000

while (mileage >= 1000 && mileage <= 5000)  {
     console.log("Still runs like new " + vehicleMiles)
     mileage += 1000
     vehicleMiles += 1000

    if (mileage > 5000  && mileage < 8000) {
        console.log("Getting close to maintainence time " + vehicleMiles)
    }
    else if (mileage > 8000  && mileage < 12000) {
        console.log("Time to schedule an appointment " + vehicleMiles)
    }
    else if ( mileage > 12000 && mileage < 14000) {
       console.log("Take me to the dealer ")

    }
     else{
         console.log("You have broken down at " + vehicleMiles)
         break
        }
    
}