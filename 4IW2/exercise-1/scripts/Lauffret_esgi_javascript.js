function ucfirst(chaine){
	if(typeof chaine !== "string" || chaine === "") return "";	
	return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

function capitalize(chaine){
	if(typeof chaine !== "string" || chaine === "") return "";
		var res = chaine.split(" ");
	return res.forEach(ucfirst(res)) ;
}

console.log(ucfirst("hello world"));
console.log(ucfirst("........."));
console.log(capitalize("hello world"));


module.exports.ucfirst = ucfirst;
module.exports.capitalize = capitalize;
