let a = 10 
console.log(a) 
a = 200
console.log(a) 

const i  = 700
console.log(i)
//i = 8000

//Arithmetic operation

let s = 10 
let t = 5

console.log(s+t)
console.log(s-t)
console.log(s*t)
console.log(s/t)
console.log(s%t)

let q = 8 
let r = 4

console.log(q+r)
console.log(q-r)
console.log(q*r)
console.log(q/r)
console.log(q%r)

// 10 pair --- 50 lines code

function Calculator(x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
    console.log(x/y)
    console.log(x%y)
    
}
Calculator(12,4)
Calculator(16,8)

// Day 2 

// function without parameter and without return type 

function additionA(){
    console.log(9+9)
}
additionA()
additionA()
additionA()
additionA()

// function with parameter and without return type 
function additionB(x,y){
    console.log(x+y)
}
additionB(12,4)
additionB(10,5)
additionB(10,2)

//100 - given  // 100 + 100 , 100/5 , 100 *0.10 , 100 - 50
//100 - shown

// function with parameter and with return type 

function additionC(x,y){
    return x + y
}
let e = additionC(12,4)
console.log(e)
console.log(e + e)
console.log(e / 5)
console.log(e * 0.10)
