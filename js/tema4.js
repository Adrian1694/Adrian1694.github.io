var d = new Date ();
document.getElementById("id_business_version").innerHTML = "Business version = " + 
d.getFullYear() + "." + (d.getMonth()+ 1) + "." + d.getDate() + ".0";

var vid = document.getElementById("ktm_video");

//...................................................
function playVid() { 
    vid.play(); 
} 

function pauseVid() { 
    vid.pause(); 
} 
//...................................................