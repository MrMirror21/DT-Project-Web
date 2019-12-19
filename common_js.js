window.onload = function() {
    var battery = Number(document.getElementsByClassName('#battery-left'));
    $(".extinguisher-icon").mouseenter(function() {
        var battery = Number(document.getElementsByClassName('.battery-left'));
        if(battery > 75){
        $(".extinguisher-icon").addClass(".mouseover");
        }
    })
    /*$(".extinguisher-icon").mouseenter(function() {
        
        
        if (battery > 75) {
        this.style.color = "green";
        }
    })
    $(".extinguisher-icon").mouseout(function() {
        this.style.color = "black";
    })
    $("#extinguisherchk-1").onclick(function() {
        document.getElementsByClassName("extinguisher-icon").style.color='red';
   })
   console.log(battery * 2);
*/
}

    
