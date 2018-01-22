var d = new Date ();
document.getElementById("id_business_version").innerHTML = "Business version = " + 
d.getFullYear() + "." + (d.getMonth()+ 1) + "." + d.getDate() + ".0";


var sensor = new AmbientLightSensor();
sensor.onreading = on_light_reading;
sensor.onerror = on_light_error;
sensor.start();
//.......................................
function on_light_reading()
{
	document.getElementById("id_light").innerHTML = sensor.illuminance;
}
//.......................................
function on_light_error()
{
		alert("Cannot read light sensor!");
}
//.......................................