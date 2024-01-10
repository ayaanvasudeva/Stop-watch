var time = 0
setInterval(function(){
     time += 1
  $("h2").text(time + " sec")
  } , 1000 )
$(".reset").click(function(){
  time = -1;
})
$(".close").click(function(){
  $("div").addClass("end")
  
})



