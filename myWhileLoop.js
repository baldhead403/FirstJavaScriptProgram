let duck = true
let counter = Math.floor(Math.random() * 100)

  
while (duck == true) {
    console.log('Duck')
    counter ++

    if (counter % 5 == 0) {
        
        console.log('Goose')
        duck = false

    }
}