var d = new Date ();
document.getElementById("id_business_version").innerHTML = "Business version = " + 
d.getFullYear() + "." + (d.getMonth()+ 1) + "." + d.getDate() + ".7";

var img = document.getElementById("id_img");
img.addEventListener("touchstart", "on_touch_start");

function on_touch_start(e)
{
	window.navigator.vibrate(200);
}