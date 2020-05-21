



function hideBlock(nameBlock){
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

function selectTrailer (textHref) {
	hideBlock("reserve");
	document.querySelector("#videoframe iframe").setAttribute("src",textHref);
}