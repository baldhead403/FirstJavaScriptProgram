/*function countUP(d) {
    

for (let index = 0; index <= d; index++) {
    console.log([index]);
    
}
}
countUP(999);

function countDown(h) {
    
    for ( index = 999; index >= 0; index-- ) {
        console.log([index]);
        
    }
}
countDown(999);

let directors = ['Michelanglo Antonioni','David Lynch', 'Yasujiro Ozu', 'Ingar Bergman', 'Federico Fellini', 'Martin Scorcese', 'Micheal Bay' ]
 
for (let index = 0; index < directors.length; index++) {
    console.log(directors[index]);
    
}

let directors = ['Michelanglo Antonioni','David Lynch', 'Yasujiro Ozu', 'Ingar Bergman', 'Federico Fellini', 'Martin Scorcese', 'Micheal Bay' ]
 
for (let index = 0; index < directors.length; index++) {
   
    console.log('Hi ' + directors[index]);
    
}

function isCool(name) {
   console.log('That boy '+ name + ' is super cool') 
}
isCool('Baldhead');

function twoLengths(str1, str2) 
{
    let myArray = []
    myArray.push(str1.length)
    myArray.push(str2.length)
    
 console.log(myArray)
}
twoLengths('death', 'jellybean');


/*function transmogrifier(a,b,c) {
        transmorgrified = Math.pow(a * b, c)

    console.log(transmorgrified)
    
}
transmogrifier(15,3,4);


function wordReverse(string,) {
    newString = string.split(' ').reverse().join(' ')
    
    console.log(newString)
}
wordReverse('Ishmael me call')


function findLongestWord(string,) {
    
   let newArr = ['Bojack', 'Princess', 'Diane', 'a', 'Max', 'Peanutbutter', 'big', 'Todd']
    let fWord = 0;
    let longWord;  
   for (let i = 0; i < newArr.length; i++) 
   {
       if (fWord < newArr[i].length  ) {
           
           fWord = newArr[i].length;
           longWord = newArr[i]
           
    }
    
    
       
   }
    console.log(longWord)
    
}
findLongestWord();


 num1= 0
function digitSum(number,) {
    
    newNum = number.toString().split('')

    for (let i = 0; i < newNum.length; i++) {
        
        num1 += parseInt(newNum[i])
        
    }
    console.log(num1)
}
digitSum(42)

function insertDash(num,) {
    let array = num.toString().split('')

    for (let i = 0; i < array.length; i++) {
        
        if (array[i] % 2 && array[i +1] % 2) {
            array.splice(i + 1, 0 , '-')
        }
        
    }
    console.log(array.join('')) 
}

insertDash(233465577);*/