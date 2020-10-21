function ucfirst(chaine) {
	if (typeof chaine !== "string" || chaine === "") return "";
	return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

function capitalize(string) {
	if (typeof string !== "string" || string === "") return "";
	const splitString = string.toLowerCase().split(" ");
	for (let i = 0; i < splitString.length; i++) {
		splitString[i] =
			splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1);
	}
	return splitString.join(" ");
}

function camelCase(chaine) {
	if (typeof chaine !== "string" || chaine === "") return "";
	return chaine
		.split(" ")
		.map((c) => c.charAt(0).toUpperCase() + c.slice(1))
		.join("");
}

function snake_case(chaine) {
	if (typeof chaine !== "string" || chaine === "") return "";
	return chaine
		.split(" ")
		.map((c) => c.charAt(0).toUpperCase() + c.slice(1))
		.join("_")
		.toLowerCase();
}

function verlan(chaine) {
    return chaine.split("").reverse().join("").split(" ").reverse().join(" ")
};

function yoda(chaine) {
	return chaine.split(" ").reverse().join(" ");
}

console.log(yoda("hello world"));




module.exports.ucfirst = ucfirst;
module.exports.capitalize = capitalize;
module.exports.camelCase = camelCase;
module.exports.snake_case = snake_case;
module.exports.verlan = verlan;
module.exports.yoda = yoda;
