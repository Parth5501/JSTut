// JavaScript Variables

// They are containers to store data values

var num1 = 34
var num2 = 56

// console.log(num1+num2);

// Data Types in JavaScript

//Numbers
var num1 = 34
var num2 = 56

//Strings
var str1 = "Its a string"
var str2 = "Its not a string"

//Objects

var marks = {
    Parth: 36,
    Hits: 45,
    Sanny: 78

}
// console.log(marks)

// Boolean
var a = true;
var b = false;

// console.log(a,b)

//Arrays 

// var arr = [1, 2, "Ezio", 45, 123]
// console.log(arr[2])
// console.log(arr)

//Operators in Javasript
// Arithmetic Operators 


// var x = 45
// var y = 12

// console.log("Operation on x and y is:",x+y)
// console.log("Operation on x and y is:",x-y)
// console.log("Operation on x and y is:",x*y)
// console.log("Operation on x and y is:",(x/y))

// Other Operators are same as we have used in languages like C and C++ comparison,assignment etc..

//Functions In JavaScript
// DRY = Do not Repeat Yourself
function avg(m, n) {
    return ((m + n) / 2)
}

console.log(avg(12, 8))

// Conditionals in JavaScript

// They are if else, single if , else if 

// let myArr = ["Fan","Can",34,null,true]

// console.log(myArr.length)
// console.log(myArr.pop())
// myArr.push("ham")
// console.log(myArr.sort())
// console.log(myArr)

// String Methods in JS

let mys = "This is Parth's PC"
// console.log(mys.length)
// console.log(mys.indexOf("PC"))

// console.log(mys.slice(3,7))

// let mydate = new Date();
// console.log(mydate)
// console.log(mydate.getHours())
// console.log(mydate.getMinutes())
// console.log(mydate.getSeconds())


// DOM : Document Object Model




let elemClass = document.getElementsByClassName('container')
console.log(elemClass)


elemClass[0].classList.add('bg-primary')
elemClass[0].classList.add('text-success')

tn = document.getElementsByTagName('div')
console.log(tn)

createdElement = document.createElement('p')
createdElement.innerText = "This is a para"
tn[0].appendChild(createdElement)

// removeChild(element);

sel = document.querySelector('.container')
console.log(sel)

sel = document.querySelectorAll('.container')
console.log(sel)

// Events in JavaScript
function clicked(){
    console.log("The Button Was Clicked!")
}

window.onload = function(){
    console.log("Document was loaded")
}

// SetTimeout and SetInterval

// summ = (a,b) =>{
//     return a+b;
// }
// Arrow Functions

// logkaro = ()=>{
//     console.log("I am Your Logg..")
// }
// setTimeout(logkaro, 20);

// clr = setInterval(logkaro, 2000);


// JavaScript Local Storage

//Json

// obj = {name:"Parth",length:1}
// JSON.stringify(obj)
// console.log(obj)

// localStorage.clear()


