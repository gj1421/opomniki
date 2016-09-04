window.addEventListener('load', function() {
	//stran nalozena
	document.getElementById('prijavniGumb').onclick=function(){
		var user = document.getElementById("uporabnisko_ime").value;
		document.getElementById('uporabnik').innerHTML = user;
		document.getElementsByClassName('pokrivalo')[0].style.visibility = 'hidden';
	}
		document.getElementById('dodajGumb').onclick=function(){
			var naziv_opomnika = document.getElementById("naziv_opomnika").value;
			var cas_opomnika = document.getElementById("cas_opomnika").value;
			document.getElementById("naziv_opomnika").value = "";
			document.getElementById("cas_opomnika").value = "";
			document.getElementById('opomniki').innerHTML += `
			<div class='opomnik senca rob'>
            <div class='naziv_opomnika'>` + naziv_opomnika + `</div>
            <div class='cas_opomnika'> Opomnik čez <span>` + cas_opomnika + `</span> sekund.</div>
			</div>`;
		}
		
	//Posodobi opomnike
	var posodobiOpomnike = function() {
		var opomniki = document.querySelectorAll(".opomnik");
		
		for (var i = 0; i < opomniki.length; i++) {
			var opomnik = opomniki[i];
			var casovnik = opomnik.querySelector("span");
			var cas = parseInt(casovnik.innerHTML);
		
			//TODO:
			cas--;
			casovnik.innerHTML = cas;
			if (cas == 0){
				alert("Timeout!");
				document.getElementById("opomniki").removeChild(opomniki[i])
			 } 
		
			
			// - če je čas enak 0, izpiši opozorilo "Opomnik!\n\nZadolžitev NAZIV_OPOMNIK je potekla!"
			// - sicer zmanjšaj čas za 1 in nastavi novo vrednost v časovniku
		}
	}
	setInterval(posodobiOpomnike, 1000);
	
});