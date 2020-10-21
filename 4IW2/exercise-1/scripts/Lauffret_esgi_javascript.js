function ucfirst(chaine){
	if(typeof chaine !== "string" || chaine === "") return "";	
	return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

function capitalize(chaine){
	if(typeof chaine !== "string" || chaine === "") return "";
		var res = chaine.split(" ");
		res.forEach(ucfirst) ;
		return text
	
	function ucfirst(chaine){	
		text += chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

function snakeCase(chaine){
	if(typeof chaine !== "string" || chaine === "") return "";	
	return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}


console.log(capitalize("hello world"));


module.exports.ucfirst = ucfirst;
module.exports.capitalize = capitalize;
