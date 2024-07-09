// conditional 

// one input and multiple outcomes  --- conditional

// numT > 0 && numT <= 5 ------ 5 percent discount
// numT > 5 && numT <=10 ------ 10 percent discount
// numT > 10             ------ 20 percent discount

// if(condition){
//     // statement
// }

// let numT = 17
// if(numT > 0 && numT <= 5){
//     console.log("5 % discount")
// }
// if(numT > 5 && numT <= 10){
//     console.log("10 % discount")
// }
// if(numT > 10){
//     console.log("20 % discount")
// }

// program 2

let numT = 5

if(numT > 0 && numT <= 5){
    console.log("5 % discount")
}
else if(numT > 5 && numT <= 10){
    console.log("10 % discount")
}
else if(numT > 10){
    console.log("20 % discount")
}
else {
    console.log("incorrect input")
}

// program 3

let marks = 56

// if(marks > 90){
//     console.log("grade A")
// }
// if(marks >= 75){
//     console.log("grade B")
// }
// if(marks >= 65){
//     console.log("grade C")
// }

if(marks > 90){
    console.log("grade A")
}
else if(marks >= 75){
    console.log("grade B")
}
else if(marks >= 65){
    console.log("grade C")
}
else {
    console.log("please try again ..")
}


// program 5 

let a = 10
let b = 50

if(a > b){
    console.log("a is greater")
}
else {
    console.log("b is greater")
}

// program 6

// let x1 = 10
// let x2  = 50
// let x3 = 2000


// if(x1 > x2 && x1 > x3){
//     console.log("x1 is greater")
// }
// else if (x2 > x1 && x2 > x3){
//     console.log("x2 is greater")
// }
// else {
//     console.log("x3 is greater")
// }


// tenary operator

let g = 8
let t = 4

if(g > t){
    console.log("g is greater")
}
else {
    console.log('t is greater')
}
// expression ? statement1:statement2
g > t ? console.log("g is greater"):console.log("t is greater")


age = 17
let e = age >= 18 ? "can drive":"cannot drive"
console.log(e)