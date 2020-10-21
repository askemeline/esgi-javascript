function ucfirst(chaine){
	if(typeof chaine !== "string" || chaine === "") return "";	
	return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

function capitalize(chaine){
	if(typeof chaine !== "string" || chaine === "") return "";
	return chaine.split(" ").map(word => ucfirst(word.toLowerCase())).join(" ");
}

function camelCase(chaine){
	if(typeof chaine !== "string" || chaine === "") return "";
	return capitalize(chaine).replace(/\W/g,"");
}

function snake_case(chaine){
	if(typeof chaine !== "string" || chaine === "") return "";	
	return chaine.toLowerCase().replace(/(\W)/g,"_");
}

function leet(chaine){
	if(typeof chaine !== "string" || chaine === "") return "";
	chaine.replace(/[AEUIOY]/gi,function(e){
		switch(e.toLowerCase()){
			case"a":return 4;
			case"e":return 3;
			case"i":return 1;
			case"o":return 0;
			case"u":return "(_)";
			case"y":return 7;
		}
	}
}

function prop_access(chaine){
	if(typeof chaine !== "string" || chaine === "") return "";
}

function verlan(chaine){
	if(typeof chaine !== "string" || chaine === "") return "";
	return chaine.split(" ").map(word => return word.split("").reverse().join("")).join(" ");
}
s
function yoda(chaine){
	if(typeof chaine !== "string" || chaine === "") return "";
	return chaine.split("").reverse().join("").join(" ");
}

function vig(chaine){
	if(typeof chaine !== "string" || chaine === "") return "";
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
