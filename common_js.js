window.onload = function() {
    $(".extinguisher-icon").mouseenter(function() {
        var battery = Number(document.getElementsByClassName('.battery-left'));
        if(battery > 75){
        $(".extinguisher-icon").addClass(".mouseover");
        }
    })
}

