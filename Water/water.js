$(()=>{
     $("input[name = mode_bathing]").click(()=>{
        if ($("input[value = Bucket]").prop("checked")) {
            $(".bucket").css("display","none")
            $(".bucket").empty()
            $(".bucket").append(
                $("<li  class='ques list-group-item'>How many buckets on average ?</li>"),
                $("<li  class='my-2'><input type='radio' name='no_buckets' value='one'> One</li>"),
                $("<li id='two'><input type='radio' name='no_buckets' value='two'> Two</li>")
            )
            $(".bucket").slideDown()
        }
            else if($("input[value = Shower]").prop("checked")){
                $(".bucket").css("display","none")
                $(".bucket").empty()
                $(".bucket").append(
                    $(" <li  class='ques list-group-item'>How much time in shower on average ?</li>"),
                   $(" <li  class='my-2'><input type='text' name='mini'  placeholder='In Minutes'></li>")
                )
                $(".bucket").slideDown()
         }
     })
     
     let usage_bucket,usage_car_bucket,usage_car_pipe,usage_pipe,usage_shower,usage_sprinkler,usage_tap,usage_family
     let mini = 0,no_buckets = 0,no_cars = 0,members = 0,t_f,mode_carwash,mode_watering
     let c = 10, usage_carwash = 0, usage_gardening = 0


$(".submit").click(()=>{

              // no of buckets use on average
              if($("input[name = no_buckets][value = one]").prop("checked")) {
                no_buckets = 1
                // console.log(no_buckets)
            }
            else if($("input[name = no_buckets][value = two]").prop("checked")){
                no_buckets = 2
                // console.log(no_buckets)
            }

                   // time of shower
                    mini =  $("input[name = mini]").val()
                    if(mini == undefined)
                    mini = 0

            //Turning off taps
            if($("input[value = yes]").prop("checked")){
                t_f = true
            }
            else if($("input[value = no]").prop("checked")){
                t_f = false
            }
        
 
     

// no of members in family
   members = $("input[name = no_members]").val()
   if(members == "")
   members = 0
//  console.log("mebers: ", members)

//  no of cars
   $("input[name = no_cars]").click(()=>{
    if ($("input[name = no_cars][value = zero]").prop("checked")) {
        no_cars = 0
    }
    else if($("input[name = no_cars][value = one]").prop("checked")){
        no_cars = 1
    }
    else if($("input[name = no_cars][value = two]").prop("checked")){
        no_cars = 2
    }
})

    // bucket or Pipe to clean a car
    if($("input[name = mode_carwash][value = pipe]").prop("checked")) {
        mode_carwash = "pipe"
        // console.log(mode_carwash)
    }
    else if($("input[name = mode_carwash][value = two]").prop("checked")){
        mode_carwash = "bucket"
    }

            // water sprinkler or pipe to water plants at your home
            if($("input[name = mode_watering][value = pipe]").prop("checked")) {
                mode_watering = "pipe"
                // console.log(mode_watering)
            }
            else if($("input[name = mode_watering][value = sprinkler]").prop("checked")){
                mode_watering = "sprinkler"
                // console.log(mode_watering)
            }


            usage_bucket = no_buckets * 10
            usage_shower = 4 * mini
            // console.log(mini)
            // console.log(usage_bucket)
            // console.log(usage_shower)

       
            usage_family = members * (usage_bucket + usage_shower + c)
            // console.log(usage_family)

            usage_car_bucket = (20*2) * no_cars
            usage_car_pipe = (15*5) * no_cars

            if(mode_carwash == "pipe")
            usage_carwash = usage_car_pipe
            else if(mode_carwash == "bucket")
             usage_carwash = usage_car_bucket
       
            usage_tap = (members * (5) * 6)
       
            usage_sprinkler = (15 * 2)
            usage_pipe = (15 * 5)

             if(mode_watering == "pipe") 
             usage_gardening = usage_pipe
             else if(mode_watering == "sprinkler")
              usage_gardening =  usage_sprinkler
            
            usage_total = 7 * (usage_family  + usage_gardening)
            usage_total += usage_carwash
            console.log(t_f)
            if(!t_f)
            usage_total += 7 * usage_tap 

            // console.log(usage_total)
            $("#usage").text("Your Weekly Water Usage is around " + usage_total + " litres")
            $("#usage").css("display","block")
            window.scrollBy(0,50)

})


let options = {
	title: {
		text: "Column Chart in jQuery CanvasJS"              
	},
	data: [              
	{
		// Change type to "doughnut", "line", "splineArea", etc.
        type: "doughnut",
        innerRadius: "30%",
		 showInLegend: true,
		 legendText: "{label}",
		 indexLabel: "{label}: #percent%",
		dataPoints: [
			{ label: "apple",  y: 10  },
			{ label: "orange", y: 15  },
			{ label: "banana", y: 25  },
			{ label: "mango",  y: 30  },
			{ label: "grape",  y: 28  }
		]
	}
	]
};

$("#chartContainer").CanvasJSChart(options);


       
})