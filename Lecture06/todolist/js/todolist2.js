window.onload = function () {
    let tasklist = document.getElementById('tasklist')
    let newtask = document.getElementById('newtask')
    let addbtn = document.getElementById('addbtn')
    let sortbtn = document.getElementById('sortbtn')
    let clearbtn = document.getElementById('clearbtn')
    tasks = [ ]

    let add = function(){
        tasks.push({
            x: newtask.value ,
            y: "notDisabled"
        })
        newtask.value = ""
        displayList()
    }

    let displayList = function(){
        tasklist.innerHTML = ""
        for (let i in tasks) {
            console.log("no of times")
            console.log(i)
            let listItem = document.createElement("li")
        listItem.className = "list-group-item list-group-item-info d-flex justify-content-between align-items-center"

        let h5Element = document.createElement("h5")
        h5Element.className = tasks[i].y 
        h5Element.innerText = tasks[i].x

       let  btnGroupElement = document.createElement("div")
        btnGroupElement.className = "btn-group"

        let doneBtn = document.createElement("div")
        doneBtn.className = "btn btn-secondary"
        doneBtn.id = "btn-done"
        doneBtn.style = "color: whitesmoke;"
        if(tasks[i].y == "notDisabled")
        doneBtn.innerText = "Done"
        else
        doneBtn.innerText = "Not Done"

        let deleteBtn = document.createElement("div")
        deleteBtn.className = "btn"
        deleteBtn.style = "background-color:coral; color: #f5f5f5;"
        deleteBtn.innerText = "Delete"
        
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


        btnGroupElement.appendChild(doneBtn)
        btnGroupElement.appendChild(deleteBtn)
        listItem.appendChild(h5Element)
        listItem.appendChild(btnGroupElement)
        tasklist.appendChild(listItem)
        }
    }

    addbtn.onclick = function(){
        add()
    }

    newtask.addEventListener("keydown",function(ev){
        if(ev.keyCode == 13)
        add()
    })

    sortbtn.onclick = function(){
        tasks.sort(function(a, b){
            return a.y < b.y ? 1 : -1
        })
        displayList()
    }

        clearbtn.onclick = function(){
        tasks =  tasks.filter(function(t){
                return (t.y == "notDisabled")
            })
        
        displayList()
    }

    // addbtn.onclick = add()
}