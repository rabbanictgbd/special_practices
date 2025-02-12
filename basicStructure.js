// console log : javaScript basic structure.............................................
console.log()

// variable for javaScript...............................................................
var name = "The name" // generally var then the variable name then "=" equal sign then value
var number = 25
const theName = "The string value"
const theNumber = 30
let theNameWillChange = "Changeable name"
let theNumberWillChange = 100

//  if, else if condition.................................................................
if (10 == 15) {
    console.log("10 equal 10 is true")
}
else if (100 < 50) {
    console.log("The condition 1")
}
else if (50 < 50) {
    console.log("The condition 2")
}
else if (10 < 50) {
    console.log("The condition 3")
}
else {
    console.log("All the conditions are wrong.")
}

// Normal for loop .............................................................................................
for (n = 6; n <= 10; n++) {
    console.log("for number : " + n);
}

// Normal while loop ..................................................................................
let wn=0
while(wn<=5){
    console.log("while number" + " : " + wn)
    wn++
}

// array ...................................................
let numbers=[5, 10, 2, 100, 50, 30, 15]

let names= ["pavel", "yousuf", "shohel", "rakib"]

// function structure.........................................

function sum(value1, value2) {

    const add= value1 + value2;
    
    console.log("the sum is: " , add);
    
    }
    
    // .......................................function call
    
    sum(10, 20)