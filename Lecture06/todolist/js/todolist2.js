window.onload = function () {
    let tasklist = document.getElementById('tasklist')
    let newtask = document.getElementById('newtask')
    let addbtn = document.getElementById('addbtn')
    let sortbtn = document.getElementById('sortbtn')
    let clearbtn = document.getElementById('clearbtn')
    tasks = [ ]

    let displayList = function(){
        for (let task of tasks) {
            let listItem = document.createElement("li")
        listItem.className = "list-group-item list-group-item-info d-flex justify-content-between align-items-center"

        let h5Element = document.createElement("h5")
        h5Element.className = "disabledNot" 
        h5Element.innerText = task

       let  btnGroupElement = document.createElement("div")
        btnGroupElement.className = "btn-group"

        let doneBtn = document.createElement("div")
        doneBtn.className = "btn btn-secondary"
        doneBtn.id = "btn-done"
        doneBtn.style = "color: whitesmoke;"
        doneBtn.innerText = "Not Done"

        let deleteBtn = document.createElement("div")
        deleteBtn.className = "btn"
        deleteBtn.style = "background-color:coral; color: #f5f5f5;"
        deleteBtn.innerText = "Delete"
        
        btnGroupElement.appendChild(doneBtn)
        btnGroupElement.appendChild(deleteBtn)
        listItem.appendChild(h5Element)
        listItem.appendChild(btnGroupElement)
        tasklist.appendChild(listItem)
        }
    }
}