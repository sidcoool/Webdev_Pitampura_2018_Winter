// function acc (func){
//     func()
// }

// function fun(){
//     console.log("edfew")
// }

// acc(fun) 

function createCounter(init , delta){
    // let val = init
    function count(){
        init += delta
        return init
    }
    return count
}

let c1 = createCounter(10, 5)

console.log(c1())
console.log(c1())
console.log(c1())