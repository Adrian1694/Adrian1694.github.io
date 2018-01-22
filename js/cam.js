var d = new Date ();
document.getElementById("id_business_version").innerHTML = "Business version = " + 
d.getFullYear() + "." + (d.getMonth()+ 1) + "." + d.getDate() + ".3";

//...........................................

var constraints = {audio: true, video: true};

navigator.mediaDevices.getUserMedia(constraints)
.then(on_cam)
.catch(on_error);

var video = document.getElementById("id_video");

//............................................
function on_cam(stream)
{
	video.srcObject = stream;
}
//...........................................
function on_error(e)
{
	alert("Error: cannot connect to camera!");
}
//...........................................