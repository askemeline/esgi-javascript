function ucfirst(str) {
	if (typeof(str) !== "string" || str ===  "") return "";
	return str.charAt(0).toUpperCase() + str.slice(1);
}

function capitalize(str) {
	if (typeof(str) !== "string" || str ===  "") return "";
	return str.split(' ').map(word => ucfirst(word.toLowerCase())).join(' ');
}

function camelCase(str) {
	if (typeof(str) !== "string" || str ===  "") return "";
	return capitalize(str).replace(/\W/g, "");
}

function snake_case(str) {
	if (typeof(str) !== "string" || str ===  "") return "";
	return str.toLowerCase().replace(/\W/g, "_");
}

function leet(str) {
	if (typeof(str) !== "string" || str ===  "") return "";
	return str.replace(/aeiouy/gi, function (e) {
		switch(e.toLowerCase()) {
			case 'a':
				return 4;
			case 'e':
				return 3;
			case 'i':
				return 1;
			case 'o':
				return 0;
			case 'u':
				return "(_)";
			case 'y':
				return 7;
		}
	});
	//return str.replace(/a/gi, "4").replace(/e/gi, "3").replace(/i/gi, "1").replace(/o/gi, "0").replace(/u/gi, "(_)").replace(/y/gi, "7");
}

function prop_access(obj, prop) {
	const props = prop.split(".");
	var i = 0;
	for (var j = 0; j < obj.length; j++) {
		if (obj[j] === props[i]) {}
	}
}

function verlan(str) {
	if (typeof str !== "string" || str === "") return "";
	return str.split(' ').map(word => word.split("").reverse().join("")).join(" ");
}

function yoda(str){
    if (typeof str !== "string" || str === "") return "";
    return str.split(' ').reverse().join(' ');
}

function vig(key, string) {
    if (typeof key !== "string" && key !== "") return ""
    if (typeof string !== "string" && string !== "") return ""

    const msgLength = string.length
    const keyLength = key.length

    let cryptage = "";

    for (let i = 1; i < msgLength; i++) {
        let charCode = string.charCodeAt(i-1)-65
        let decalage = key.charCodeAt((i-1)%keyLength)-65
        let char = String.fromCharCode(65+(charCode+decalage)%26)

        cryptage += char
    }

    return cryptage
}



module.exports.ucfirst = ucfirst;
module.exports.capitalize = capitalize;
module.exports.camelCase = camelCase;
module.exports.snake_case = snake_case;
module.exports.leet = leet;
module.exports.verlan = verlan;
module.exports.yoda = yoda;
module.exports.vig = vig;
module.exports.prop_access = prop_access;
