let start = false;
let informWinner = document.querySelector(".bottom__inform");
let redLine = document.querySelector(".slots__red_line");
let buttonSpin = document.querySelector(".bottom__button");


function runSlot() {
	if (start) {
		return null;
	} 
	start = true;

	let numChanges = randomInt(1,4)*7;
	let numSlot1 = numChanges+randomInt(1,4);
	let numSlot2 = numChanges+2*7+randomInt(1,7);
	let numSlot3 = numChanges+4*7+randomInt(1,9);
    let numSlot4 = numChanges+randomInt(1,4);
	let numSlot5 = numChanges+2*7+randomInt(1,7);
	let numSlot6 = numChanges+4*7+randomInt(1,9);
    let numSlot7 = numChanges+randomInt(1,4);
	let numSlot8 = numChanges+2*7+randomInt(1,7);
	let numSlot9 = numChanges+4*7+randomInt(1,9);

	let i1 = 0;
	let i2 = 0;
	let i3 = 0;
    let i4 = 0;
	let i5 = 0;
	let i6 = 0;
    let i7 = 0;
	let i8 = 0;
	let i9 = 0;
	
    redLine.style.display = "none";
	buttonSpin.style.backgroundColor = "#caf3fc";
	buttonSpin.style.cursor = "default";
	informWinner.innerHTML = "Result: Spinning";
	
	slot1 = setInterval(spin1, 60);
	slot2 = setInterval(spin2, 70);
	slot3 = setInterval(spin3, 80);
    slot4 = setInterval(spin4, 60);
	slot5 = setInterval(spin5, 70);
	slot6 = setInterval(spin6, 80);
    slot7 = setInterval(spin7, 60);
	slot8 = setInterval(spin8, 70);
	slot9 = setInterval(spin9, 80);
	
	function spin1() {
		i1++;
		if (i1 >= numSlot1){
			clearInterval(slot1);
			return null;
		} 
		slotPicture = document.getElementById("slot1");
		
		if (slotPicture.className=="s7"){
			slotPicture.className = "s0";
		}
		slotPicture.className = "s"+(parseInt(slotPicture.className.substring(1))+1);
	}

	function spin2() {
		i2++;
		if (i2 >= numSlot2){
			clearInterval(slot2);
			return null;
		}
		slotPicture = document.getElementById("slot2");
		
		if (slotPicture.className=="s7"){
			slotPicture.className = "s0";
		}
		slotPicture.className = "s"+(parseInt(slotPicture.className.substring(1))+1);
	}
	
	function spin3() {
		i3++;
		if (i3 >= numSlot3){
			clearInterval(slot3);
			resultWin();
			return null;
		}
		slotPicture = document.getElementById("slot3");
		
		if (slotPicture.className=="s7"){
			slotPicture.className = "s0";
		}
		slotPicture.className = "s"+(parseInt(slotPicture.className.substring(1))+1);
	}

    function spin4() {
		i4++;
		if (i4 >= numSlot4){
			clearInterval(slot4);
			return null;
		}
		slotPicture = document.getElementById("slot4");
		
		if (slotPicture.className=="s7"){
			slotPicture.className = "s0";
		}
		slotPicture.className = "s"+(parseInt(slotPicture.className.substring(1))+1);
	}

	function spin5() {
		i5++;
		if (i5>=numSlot5){
			clearInterval(slot5);
			return null;
		}
		slotPicture = document.getElementById("slot5");
		
		if (slotPicture.className=="s7"){
			slotPicture.className = "s0";
		}
		slotPicture.className = "s"+(parseInt(slotPicture.className.substring(1))+1);
	}

	function spin6() {
		i6++;
		if (i6 >= numSlot6){
			clearInterval(slot6);
			resultWin();
			return null;
		} 
		slotPicture = document.getElementById("slot6");
		
		if (slotPicture.className=="s7"){
			slotPicture.className = "s0";
		}
		slotPicture.className = "s"+(parseInt(slotPicture.className.substring(1))+1);
	}

    function spin7() {
		i7++;
		if (i7 >= numSlot7){
			clearInterval(slot7);
			return null;
		}
		slotPicture = document.getElementById("slot7");
		
		if (slotPicture.className=="s7"){
			slotPicture.className = "s0";
		}
		slotPicture.className = "s"+(parseInt(slotPicture.className.substring(1))+1);
	}

	function spin8() {
		i8++;
		if (i8 >= numSlot8){
			clearInterval(slot8);
			return null;
		}
		slotPicture = document.getElementById("slot8");
		
		if (slotPicture.className=="s7"){
			slotPicture.className = "s0";
		}
		slotPicture.className = "s"+(parseInt(slotPicture.className.substring(1))+1);
	}

	function spin9() {
		i9++;
		if (i9 >= numSlot9){
			clearInterval(slot9);
			resultWin();
			return null;
		}
		slotPicture = document.getElementById("slot9");
		
		if (slotPicture.className=="s7"){
			slotPicture.className = "s0";
		}
		slotPicture.className = "s"+(parseInt(slotPicture.className.substring(1))+1);
	}

}

function resultWin(){
	let slot4 = document.getElementById("slot4").className;
	let slot5 = document.getElementById("slot5").className;
	let slot6 = document.getElementById("slot6").className;

	if (slot4 == slot5 || slot5 == slot6 || slot4 == slot6) {
		informWinner.innerHTML = "Result: You Win";
        redLine.style.display = "block";

	} else {
		informWinner.innerHTML = "Result: Not Win";
		redLine.style.display = "none";
	}
	start = false;
	buttonSpin.style.backgroundColor = "#6cd3ec";
	buttonSpin.style.cursor = "pointer";
}


function randomInt(min, max){
	return Math.floor((Math.random() * (max-min+1)) + min);
}