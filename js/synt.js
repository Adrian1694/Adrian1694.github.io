var d = new Date ();
document.getElementById("id_business_version").innerHTML = "Business version = " + 
d.getFullYear() + "." + (d.getMonth()+ 1) + "." + d.getDate() + ".2";

//document.addEventListener("touchstart", speak);

var synt = window.speechSynthesis;
//..............................................
function on_get_voices()
{
	var voci = synt.getVoices();
	for (var i = 0; i < voci.length; i++) {
		document.getElementById("id_voices").innerHTML += voci[i].lang + " " + voci[i].name + "<br>";
	
	}
	
	
	
	
}
//........................................................
function speak()
{
	var enunt = new SpeechSynthesisUtterance();
	enunt.lang = "en-US";
	enunt.text = document.getElementById ("id_text").value;
	enunt.onend = on_end_synt;
	document.getElementById("id_speak_button").disabled = true;
	synt.speak(enunt);
}
//.............................................................
function on_end_synt()
{
	document.getElementById("id_speak_button").disabled = false;

}
//.............................................................