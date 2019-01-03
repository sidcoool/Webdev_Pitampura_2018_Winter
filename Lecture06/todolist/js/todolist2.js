    window.onload = function () {
    let tasklist = document.getElementById('tasklist')
    let newtask = document.getElementById('newtask')
    let addbtn = document.getElementById('addbtn')
    let sortbtn = document.getElementById('sortbtn')
    let clearbtn = document.getElementById('clearbtn')
    tasks = [ ]
    if(localStorage.list){
        tasks = JSON.parse(localStorage.list)
    }


    let add = function(){
        tasks.push({
            x: newtask.value ,
            y: "notDisabled"
        })
        newtask.value = ""
        displayList()
    }

    let displayList = function(){
        localStorage.list = JSON.stringify(tasks)
        tasklist.innerHTML = ""
        for (let i in tasks) {
            let listItem = document.createElement("li")
        listItem.className = "list-group-item list-group-item-info d-flex justify-content-between align-items-center"

        let h5Element = document.createElement("h5")
        
        h5Element.className = tasks[i].y 
        h5Element.innerText = tasks[i].x

       let  btnGroupElement = document.createElement("div")
        btnGroupElement.className = "btn-group"

       
        let up = document.createElement("i")
        up.className = "fas fa-arrow-up fa-2x mx-3"
        up.id = "up"
        

        
        let down = document.createElement("i")
        down.className = "fas fa-arrow-down fa-2x mx-3"
        down.id = "down"
        

        let doneBtn = document.createElement("div")
        doneBtn.className = "btn btn-secondary"
        doneBtn.id = "btn-done"
        doneBtn.style = "color: whitesmoke;"
        if(tasks[i].y == "notDisabled"){
        doneBtn.innerText = "Done"
        doneBtn.className = "btn btn-secondary"
        listItem.className = "list-group-item list-group-item-info d-flex justify-content-between align-items-center"
        }
        else{
        doneBtn.innerText = "Not Done"
        doneBtn.className = "btn btn-primary"
        listItem.className = "list-group-item  d-flex justify-content-between align-items-center"
        }


        let deleteBtn = document.createElement("div")
        deleteBtn.className = "btn"
        deleteBtn.style = "background-color:coral; color: #f5f5f5;"
        deleteBtn.innerText = "Delete"

        deleteBtn.onmouseover = function(){
            deleteBtn.style =  "background-color:#DC7632; color: whitesmoke;"
          }

        deleteBtn.onmouseout= function(){
            deleteBtn.style =  "background-color:coral; color: whitesmoke;"
          }
        
       doneBtn.onclick = function(){
           if(tasks[i].y == "disabled")
           tasks[i].y = "notDisabled"
           else
           tasks[i].y = "disabled"
           displayList()
       }

       deleteBtn.onclick = function(){
           tasks.splice(i,1)
           displayList()
       }

       up.onclick = function(){
        [ tasks[i], tasks[i-1] ] = [ tasks[i-1], tasks[i] ]
        displayList()
       }

      down.onclick = function(){
           let j = parseInt(i)  
           j = j+1
        let a = tasks[i]
        tasks[i] = tasks[j]
        tasks[j] = a
     displayList()
    }


       if(i != 0){
        btnGroupElement.appendChild(up)
       }
        if(i != tasks.length-1){
        btnGroupElement.appendChild(down)
        }
        btnGroupElement.appendChild(doneBtn)
        btnGroupElement.appendChild(deleteBtn)
        listItem.appendChild(h5Element)
        listItem.appendChild(btnGroupElement)
        tasklist.appendChild(listItem)
        }
    }
    
    displayList()
    
    addbtn.onclick = function(){
        add()
    }

    newtask.addEventListener("keydown",function(ev){
        if(ev.keyCode == 13)
        add()
    })

function sorter(){
  
    for (let k=1; k<tasks.length; k++) {
        let j = k-1
        while( (j>0) && (tasks[k].y   > tasks[j].y)){  
         let a = tasks[j]
         tasks[j] = tasks[k]
         tasks[k] = a
          j -=1
          console.log(j)
          console.log(k)
        }
    }
}
    sortbtn.onclick = function(){
        sorter()
        displayList() 
    }


        clearbtn.onclick = function(){
        tasks =  tasks.filter(function(t){
                return (t.y == "notDisabled")
            })
        
        displayList()
    }

}