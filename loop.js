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

// wrong structure........................................................................

// let wn2=0
// while(wn2<=5){
//     wn++
//     console.log("while number-2" + " : " + wn2)
// }

// Normal for loop reverse .............................................................................................
for (n = 10; n >= 6; n--) {
    console.log("for number reverse : " + n);
}

// Normal while loop reverse ..................................................................................
let wnr=5
while(wnr>=0){
    console.log("while number reverse" + " : " + wnr)
    wnr--
}

// Normal while loop reverse let value updated ...........................................................
 wnr=3
while(wnr>=0){
    console.log("while number reverse double" + " : " + wnr)
    wnr--
}
// break for loop by if condition................................................

for(n=98; n<=200; n++){
    console.log("200 number of " + n)
    if(n==100){
        break;
    }
   
   
}

n=98
while(n<=200){
    console.log(n)
    n++
    if(n==101){
        break
    }
}

n=1
let sum=0
while(n<=200){
    console.log(n)
    console.log("total: " +sum)
    n++
    sum +=n
    if(sum>=100){
        break
    }
}

n=1
while(n<10){
    n++
    let sq=n.map
    console.log("sq"+n)
    console.log(sq)
    
}

let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(num => num ** 2);
console.log("Squares:", squares);