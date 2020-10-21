function ucfirst(string){
	if (typeof string !== "string" || string === "")
		return "";
	return string.charAt(0).toUpperCase() + string.slice(1);
}


function capitalize(string) {
    if (typeof string !== "string" || string === "")
    	return "";	

    return string
    .split(" ")
    .map((word) => ucfirst(word.toLowerCase()))
    .join(" ");
}

function camelCase(string) {
    if (typeof string !== "string" || string === "")
    	return "";

    return capitalize(string).split(" ", "_", "-").join("");
}

console.log(camelCase("salut ca va"));

function snake_case(string) {
    if (typeof string !== "string" || string === "")
    	return "";

    string = string.toLowerCase();
    return string.replace(" ", "_");

}

function leet(string) {
    return string.replace(/[aeiouy]/gi, function (e) {

    switch (e.toLowerCase()) {
    	case "a":
    		return 4;
    	case "e":
    		return 3;
    	case "i":
    		return 1;
    	case "o":
    		return 0;
    	case "u":
    		return "(_)";
    	case "y":
    		return 7;
    }
	});
}

function verlan(string){
    if (typeof string !== "string" || string === "")

    return string.split(' ').reverse().join(' ')
}	

module.exports.ucfirst = ucfirst;
module.exports.capitalize = capitalize;
module.exports.camelCase = camelCase;
module.exports.snake_case = snake_case;
module.exports.leet = leet;
module.exports.verlan = verlan;
