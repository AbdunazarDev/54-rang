const hexOptions = ["red", "yellow", "white", "black", "green", "blue"];

const currentColor = document.getElementById("currentColor");
const getNewColor = document.getElementById("getNewColor");

getNewColor.addEventListener("click", setHex);

function getHex() {
	let color = "";
		color += hexOptions[getRandomNumber()];
		console.log(getRandomNumber);
		console.log(color);
	return color
}

function getRandomNumber() {
	return Math.floor(Math.random() * hexOptions.length);
}
getHex ();

function setHex() {
	let color = getHex();
	currentColor.textContent = color;
	document.body.style.backgroundColor = color;
}

setHex();

