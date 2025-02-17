
// Normal if true condition.................................................................
if(10==10){
    console.log("10 equal 10 is true")
} 
// Normal if false condition.................................................................
if(10==15){
    console.log("10 equal 10 is true")
} 

// Normal if else condition.................................................................
if(10==15){
    console.log("10 equal 10 is true")
} else{
    console.log("The condition is not true")
}

//  if else if true condition.................................................................
if(10==10){
    console.log("10 equal 10 is true")
} 
else if(100<50){
console.log("The condition 1")
}
else if(50<50){
    console.log("The condition 2")
}
else if(10<50){
console.log("The condition 3")
}
else {
console.log("All the conditions are wrong.")
}
    
//  if else if mid true condition.................................................................
if(10==15){
    console.log("10 equal 10 is true")
} 
else if(100<50){
console.log("The condition 1")
}
else if(50<50){
    console.log("The condition 2")
}
else if(10<50){
console.log("The condition 3")
}
else {
console.log("All the conditions are wrong.")
}
   
//  if else if false condition.................................................................
if(10==15){
    console.log("10 equal 10 is true")
} 
else if(100<50){
console.log("The condition 1")
}
else if(50<50){
    console.log("The condition 2")
}
else if(50<50){
console.log("The condition 3")
}
else {
console.log("All the conditions are wrong.")
}
   
//  if else if true multiple mid, working first true condition.................................................................
if(10==15){
    console.log("10 equal 10 is true")
} 
else if(100<50){
console.log("The condition 1")
}
else if(40<50){
    console.log("The condition 2")
}
else if(10<50){
console.log("The condition 3")
}
else {
console.log("All the conditions are wrong.")
}
   
// for in for of..............................
const numb=10
let numbers= [1,10,12,15]
numbers=[20,40,60,87,67,30,10]
const person={
    name : "Abdul Kader Rabbani",
    age: 30,
    city: "Chattogram",

}

console.log(numbers, numbers[0])

for(const index of numbers){
    console.log(index, numbers[0])
}

for(const per in person){
    console.log(per, ":", person[per])
}


// function ...........................................
let numData=[70,30,35,65,67,10]
function getMin(fNumbers){
   
    for(let minNum of fNumbers){
        return minNum
        // console.log(minNum)
    }
}
// let fNumbers=[32,34,36,60] 
const rMin= getMin(numData)
console.log(rMin)