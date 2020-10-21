function ucfirst(string){
	if (typeof string !== "string" || string === "")
		return "";
	return string.charAt(0).toUpperCase() + string.slice(1);
}


function capitalize(string) {
    if (typeof string !== "string" || string === "")
    	return "";	

    return string.split(" ").map((word) => ucfirst(word.toLowerCase())).join(' ');
}

function camelCase(string) {
    if (typeof string !== "string" || string === "")
    	return "";

    return capitalize(string).split(" ").join("");
}

function snake_case(string) {
    if (typeof string !== "string" || string === "")
    	return "";

    string = string.toLowerCase();
    return string.replace(" ", "-");

}

function leet(string) {
    if (typeof string !== "string" || string === "")

    const leet = {
        "a": 4,
        "e": 3,
        "i": 1,
        "o": 0,
        "u": "(_)",
        "y": 7
    }

    string = string.toLowerCase()

    for (const leetKy in leet) {
        if (string.indexOf(leetKey) !== -1) {
            string = string.replace(new RegExp(leetKey, 'g'), leet[leetKey])
        }
    }

    return string;
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
