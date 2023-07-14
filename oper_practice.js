let num1 = 2
let num2 = 8
let num3 = 10
let num4 = 5

console.log("The addition of two number: " + (num1 + num2))
console.log("The subtraction of two number: " + (num3 - num2))

console.log(" Division: " + (num2/num1))

console.log("Modulus: " + (num3%num2))

console.log(" Multiplication: " + (num2*num4))

 

// Assignment Operators:
console.log("Assignment Operators:")

num1+=num2
console.log(num1)

num4-=num2
console.log(num4)

num3*=num1
console.log(num3)

num2/=num4
console.log(num2)

num1%=num3
console.log(num1)

num3**=num4
console.log(num3)



// Comparision Operators:
console.log("Comparision Operators:")
let a = 10
 
let b = 8

if (a == b){
    console.log("a is equal to b")
}
else (a != b);{
    console.log("a is not equal to b")
}

if (a < b){
    console.log("a is greater than b")
}
else{
    console.log("a is less than b")
}

if (a <= b){
    console.log("a is greater than or euqal to b")
}
else {
    console.log("a is less than or euqal to b")
}


let p = "Shanu"
let q = 55
console.log(typeof(x));

if (p === q){
    console.log("They are equal")
}
else  {
    console.log("p is not equal q")
}

 
// // Terinary Operator:
  let age=18;
let result=age>=18? "You are eligible for vote" : "You can not vote";
console.log(result);




// // Logical Operators:

let var1 = 30
let var2 = 10

if((var1 > 20) && (var2 > 5 ))
{
    console.log("I am Trainee")
}
 
if ((var1 > 20) || (var2 <5 ))
 {
    console.log("India won the match");
}
else{
console.log("Loss the Match")
}
let c=0;
if(!c){
console.log("hii")

}
// Bitwise operator
let a1 = 3;
let b1 = 4;

let res1=a1 | b1;
console.log(res1);
 
console.log(a1 & b1)
console.log(~b1)