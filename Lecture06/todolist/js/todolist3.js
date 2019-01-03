$(() =>{
    let tasks = [ ]
    if(localStorage.list){
        tasks = JSON.parse(localStorage.list)
    }

    let add = ()=>{
      //  console.log("add function working")
        tasks.push({
            x: $("#newtask").val() ,
            y: "notDisabled"
        })
        $("#newtask").val("")
       displayList()
       //console.log(tasks)
    }



    function displayList(){
       // console.log("displayList function working")
        localStorage.list = JSON.stringify(tasks)
        $("#tasklist").empty()
      for(let i in tasks){
        $("#tasklist").append(
            $("<li>")
            .attr("class", tasks[i].y == "notDisabled"  ?  "list-group-item list-group-item-info d-flex justify-content-between align-items-center" :  "list-group-item d-flex justify-content-between align-items-center")
            .append(
                $("<h5>")
                .attr("class",tasks[i].y)
                .text( tasks[i].x)
            )
            .append(
                $("<div>")
                .attr("class", "btn-group")
                .append(
                    $("<i>")
                    .attr("class", (i != 0) ? "fas fa-arrow-up fa-2x mx-2" : "")
                    .click(()=>{
                        tasks.splice(i-1,1, ...tasks.splice(i,1,tasks[i-1]))
                        displayList()
                    })
                )
                .append(
                    $("<i>")
                    .attr("class",(i != tasks.length-1) ? "fas fa-arrow-down fa-2x mx-2" : "")
                    .click(()=>{
                        tasks.splice(i,1, ...tasks.splice(parseInt(i)+1,1,tasks[i]))
                        displayList()
                    })
                )
            .append(
                $("<div>")
                .attr("class",tasks[i].y == "notDisabled"  ? "btn btn-secondary" : "btn btn-primary")
                .attr("id","btn-done")
                .css( "color"," whitesmoke")
                .text(tasks[i].y == "notDisabled" ? "Done" : "Not Done")
                .click(()=>{
                    if(tasks[i].y == "disabled")
                    tasks[i].y = "notDisabled"
                    else
                    tasks[i].y = "disabled"
                    displayList()
                })
            )
            .append(
                $("<div>")
                .attr("class","btn")
                .attr("id","btn-delete")
                .css( {"background-color":"coral" ,
                     "color": "#f5f5f5"})
                .text("Delete")
                .hover(()=>{
                   $("#btn-delete") .css( {"background-color":"#DC7632" ,
                    "color": "whitesmoke"})
                },
                            ()=>{
                    $("#btn-delete") .css({"background-color":"coral" ,
                    " color": "whitesmoke"})
                })
                .click(()=>{
                    tasks.splice(i,1)
                    displayList()
                })
            )
            )
        )
      }
  //   console.log("for loop finished")
    }

    displayList()

    $("#addbtn").click(()=>{
      //  console.log("addbtn working")
        add()
    })

    $("#newtask").keydown((ev)=>{
        if(ev.keyCode == 13)
        add()
    })

    $("#sortbtn").click(()=>{
        for (let k=1; k<tasks.length; k++) {
            let j = k-1
            while( (j>=0) && (tasks[parseInt(j)+1].y  >= tasks[j].y)){  
                tasks.splice(j,1, ...tasks.splice(parseInt(j)+1,1,tasks[j]))
                          j -=1 
            }
        }
     
        displayList()
    })

    $("#clearbtn").click(()=>{
        tasks =  tasks.filter((t)=>{
            return (t.y == "notDisabled")
    })
    displayList()
})

})