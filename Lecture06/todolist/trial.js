let tasks = ["a","b","c","d"]
console.log(tasks)

j=1
let a = tasks.splice(j,1, ...tasks.splice(parseInt(j)+1,1,tasks[j]))
console.log(a)
console.log(tasks)
