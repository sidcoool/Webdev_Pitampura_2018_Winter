window.onload = function () {
let tasklist = document.getElementById('tasklist')
let newtask = document.getElementById('newtask')
let addbtn = document.getElementById('addbtn')
let sortbtn = document.getElementById('sortbtn')
let clearbtn = document.getElementById('clearbtn')
let idc = 0

function addNewTask() {
  let newTaskValue = newtask.value
  let newTaskListItem = document.createElement("li")
  
  newTaskListItem.className = "list-group-item list-group-item-info d-flex justify-content-between align-items-center"

 

  let innerDiv1 = document.createElement("div")
  innerDiv1.className = "btn-group"

  let innerDiv20 = document.createElement("h5")
  innerDiv20.innerText = newTaskValue  
  innerDiv20.className = "disabledNot"

  let innerDiv21  = document.createElement("div")
  innerDiv21.className = "btn btn-secondary"
  innerDiv21.id = "btn-done"
  innerDiv21.style = "color: whitesmoke"
  innerDiv21.innerText = "Done"

  let innerDiv22  = document.createElement("div")

  

  innerDiv22.className = "btn"
  innerDiv22.style = "background-color:coral; color: whitesmoke;"

  innerDiv22.onmouseover = function(){
    innerDiv22.style =  "background-color:#DC7632; color: whitesmoke;"
  }

 innerDiv22.onmouseout= function(){
    innerDiv22.style =  "background-color:coral; color: whitesmoke;"
  }

  innerDiv22.innerText = "Delete"



 innerDiv21.onclick = function () {
      console.log("working");
    
      if ( innerDiv21.innerText  == "Done") {
              innerDiv21.innerText = "Not Done"
              innerDiv21.className = "btn btn-primary"
              innerDiv20.className = "disabled"
              newTaskListItem.className = "list-group-item list-group-item-light d-flex justify-content-between align-items-center"
      }
      else{
        innerDiv21.innerText = "Done"
        innerDiv21.className = "btn btn-secondary"
        innerDiv20.className = "disabledNot"
        newTaskListItem.className = "list-group-item list-group-item-info d-flex justify-content-between align-items-center"
      }
    }

    innerDiv22.onclick = function(){
      idc -= 1
      tasklist.removeChild(newTaskListItem)
    }
   
  newTaskListItem.appendChild(innerDiv20)
   innerDiv1.appendChild(innerDiv21)
   innerDiv1.appendChild(innerDiv22)
   newTaskListItem.appendChild(innerDiv1)
    tasklist.appendChild(newTaskListItem)
    
    newtask.value = ""
  }

  newtask.addEventListener('keyup', function (ev) {
    if (ev.keyCode == 13) {
      idc += 1
      addNewTask()
    }
  })


  addbtn.onclick = function () {
    idc += 1
    addNewTask()
  }



  sortbtn.onclick = function(){
    console.log("step1")
    let  i, b, j  
    b = tasklist.getElementsByTagName("li");
      
   
      for (i = 1; i < (b.length); i++) {

        j = i-1
        // b = tasklist.getElementsByTagName("li")
        let elem1 = b[i].getElementsByTagName("h5")
        let elem2 = b[i-1].getElementsByTagName("h5")

        // console.log(elem1[0].className)
        // console.log(elem2[0].className)

      while((elem1[0].className > elem2[0].className) && (j>=0) ){    
          console.log(tasklist.insertBefore(b[j+1], b[j]))
          j -=1
        }
      }

      }
    
  

    clearbtn.onclick = function(){
      console.log("clearbtn working")

       let  b = tasklist.getElementsByTagName("li")

       for (let i = 0; i <= idc; i++) {
        let elem = b[i].getElementsByTagName("h5")[0]

        if(elem.className == "disabled"){
          
          tasklist.removeChild(b[i])
        }
     }
       
       
    }
    
  
  }