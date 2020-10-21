function ucfirst(string){
	if (typeof string !== "string" && string !== "")
		return "";
	return string.charAt(0).toUpperCase() + string.slice(1);
}


console.log(ucfirst("bonJOUR"));

function capitalize(string) {
    if (typeof string !== "string" && string !== "")
    	return "";	

    return string.split(" ").map((string) => {
    	return ucfirst(string)
    }
    ).join(" ");
}

function camelCase(string) {
    if (typeof string !== "string" && string !== "")
    	return "";

    return capitalize(string).split(" ").join("");
}

function snake_case(string) {
    if (typeof string !== "string" && string !== "")
    	return "";

    string = string = string.toLowerCase();
    return string.replace(" ", "-");

}

module.exports.ucfirst = ucfirst;
module.exports.capitalize = capitalize;
module.exports.camelCase = camelCase;
module.exports.snake_case = snake_case;
