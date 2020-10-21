function ucfirst(str) {
	if (typeof(str) !== "string" || str ===  "") return "";
	return str.charAt(0).toUpperCase() + str.slice(1);
}

function capitalize(str) {
	var newStr = [];
	const arr = str.split(" ");
	for (var i = 0; i < arr.length; i++) {
		newStr.push(ucfirst(arr[i]));
	}
	return newStr.join(" ");
}

function camelCase(str) {
	var newStr = "";
	const arr = str.split(" ");
	for (var i = 0; i < arr.length; i++) {
		newStr += ucfirst(arr[i]);
	}
	return newStr;
}

function snake_case(str) {
	return str.toLowerCase().split(" ").join("_");
}

function leet(str) {
	return str.replace(/a/gi, "4").replace(/e/gi, "3").replace(/i/gi, "1").replace(/o/gi, "0").replace(/u/gi, "_").replace(/y/gi, "7");
}

function prop_access(obj) {
	
}

console.log(leet("pomme orange banane cours kiwy"));

module.exports.ucfirst = ucfirst;
module.exports.capitalize = capitalize;
module.exports.camelCase = camelCase;
module.exports.snake_case = snake_case;
module.exports.leet = leet;
module.exports.prop_access = prop_access;
