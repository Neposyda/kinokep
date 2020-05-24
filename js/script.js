
var colors = ["green","red","yellow"]
var listPlaces=[];
var places = {
	"film1":[[
	[0,0,1,0,1,1,1,0], 
	[0,1,1,0,1,0,1,0],
	[0,0,1,0,1,0,1,0],
	[0,0,1,0,1,0,1,0],
	[0,0,1,0,1,1,1,0] ],[]],
	"film2":[[
	[0,0,1,0,1,0,1,0], 
	[0,1,1,0,1,0,1,0],
	[0,0,1,0,1,1,1,0],
	[0,0,1,0,0,0,1,0],
	[0,0,1,0,0,0,1,0] ],[]],
	"film3":[[
	[0,0,1,0,1,1,1,0], 
	[0,1,1,0,1,0,1,0],
	[0,0,1,0,1,1,1,0],
	[0,0,1,0,1,0,1,0],
	[0,0,1,0,1,1,1,0] ],[]]
	};


function hideBlock(nameBlock){
	let namefilm=document.getElementById("placescinema").getAttribute("name");
	if (namefilm!="") places[namefilm][1]=listPlaces;
	switch (nameBlock){
		case "reserve":
			document.querySelector("#videoframe").hidden = false;
			document.querySelector(".boxseats").hidden = true;
			break;
		case "trailer":
			document.querySelector("#videoframe iframe").setAttribute("src","");
			document.querySelector("#videoframe").hidden = true;
			document.querySelector(".boxseats").hidden = false;
			break;
		default:
			return 0;
	}
}

function clickButtonTrailer(textHref) {
	hideBlock("reserve");
	document.querySelector("#videoframe iframe").setAttribute("src",textHref);
}

function setColorPlace(numPlace, numColor){
	document.getElementById(numPlace).setAttribute("class",colors[numColor]);
}

function clickButtonTip(name){
	hideBlock("trailer");
	document.getElementById("namefilm").innerText = document.getElementById(name).innerText;	
	document.getElementById("placescinema").setAttribute("name", name);
	let arrPlaces=places[name][0];
	arrPlaces.forEach((row,i) => row.forEach((num,j) => setColorPlace(""+(i+1)+(j+1),num)));
	listPlaces=places[name][1];
	if (listPlaces.length) {
		listPlaces.forEach(el => setColorPlace(el,2));
		document.getElementById("listplace").innerText=listPlaces.join(",");
	} else {document.getElementById("listplace").innerText = "...";}
}


function clickOnTable(){
	let numPlace=event.target.id, statusPlace=event.target.className; 
	let i=numPlace[0]-1, j=numPlace[1]-1;
	switch (statusPlace){
		// case "red":
		// 	alert("На місце в залі №"+numPlace+" квиток вже придбали.");
		// 	break;
		case "green":
			if (confirm("Бажаєте забронювати в залі місце №:"+numPlace)) {
				setColorPlace(numPlace, 2);
				listPlaces.push(numPlace);
			}
			break;
		case "yellow":
			if (confirm("Знімаєте замовлення на місце №:"+numPlace)) {
				setColorPlace(numPlace, 0);
				listPlaces=listPlaces.filter(num => num!=numPlace);
			}
		}
		document.getElementById("listplace").innerText=listPlaces.join(",");
}