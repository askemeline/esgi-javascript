function ucfirst(chaine){
	if(typeof chaine !== "string" || chaine === "") return "";	
	return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

function capitalize(chaine){
	if(typeof chaine !== "string" || chaine === "") return "";
		var res = chaine.split(" ");
		res.forEach(test);
		return text
	
	function test(chaine){	
		text += chaine.charAt(0).toUpperCase() + chaine.slice(1);
	}
}

function snake_Case(chaine){

}


console.log(capitalize("hello world"));


module.exports.ucfirst = ucfirst;
module.exports.capitalize = capitalize;
