window.onload = function(){
let newtask = document.getElementById("newtask")
let addbtn = document.getElementById("addbtn")
let neg = document.getElementById("neg")
let pos = document.getElementById("pos")

addbtn.onclick = function(){
    let arrStr = newtask.value
    arr = arrStr.split(",")
    console.log(arr)
    posArr = arr.filter(function(val){
        return val>0
    })

    negArr = arr.filter(function(val){
        return val<0
    })

    posArr = posArr.map(function(val){
        return val*val
    })

    negArr = negArr.map(function(val){
        return val*val
    })


    console.log(posArr)

 let pos1 = posArr.reduce(function(acc,val){
   return  acc + val
 })

 let neg1 = negArr.reduce(function(acc,val){
    return  acc + val
  })

  neg.value = neg/negArr.length
  pos.value = pos/posArr.length

  neg.value = Math.sqrt(neg1)
  pos.value = Math.sqrt(pos1)
 console.log(pos1)
}

}
