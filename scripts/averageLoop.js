let numbers = [25, 35, 45, 55, 65, 75, 85, 95 ]
let sum = numbers.reduce((previous, current) => current += previous)
let average = sum / numbers.length


    
    console.log("The sum of all numbers is " + sum + ', the average of all numbers is ' + average)
    