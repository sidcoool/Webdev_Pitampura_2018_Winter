"use strict";

var a = 10

function someFun(){
    var a
    console.log(a)
    a = 20
    console.log(a)
}

console.log('a before fun call =  ', a)

someFun()

console.log('a after fun call =  ', a)

for (var i = 1; i <= 5; i++){
    (function ( j ) {
        setTimeout(function () {
            console.log( j )
        }, 1000 * j)
    })( i )      //  IIFE -> Immediately Invoked Function Expression
}