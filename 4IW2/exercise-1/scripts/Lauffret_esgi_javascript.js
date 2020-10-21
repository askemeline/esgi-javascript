function ucfirst(chaine){
	if(typeof chaine !== "string" || chaine === "") return "";	
	return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

function capitalize(chaine){
	if(typeof chaine !== "string" || chaine === "") return "";
	return chaine.split(" ").map(word s=> ucfirst(word.toLowerCase())).join(" ");
}

function camelCase(chaine){
	if(typeof chaine !== "string" || chaine === "") return "";
	return capitalize(chaine).replace(/\W/g,"");
}

function snake_case(chaine){
	if(typeof chaine !== "string" || chaine === "") return "";	
	return capitalize(chaine).replace(/\W/g,"_");
}


function leet(chaine){
	if(typeof chaine !== "string" || chaine === "") return "";
}

function prop_access(chaine){
	if(typeof chaine !== "string" || chaine === "") return "";
}

function verlan(chaine){
	if(typeof chaine !== "string" || chaine === "") return "";
}

function yoda(chaine){
	if(typeof chaine !== "string" || chaine === "") return "";
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
