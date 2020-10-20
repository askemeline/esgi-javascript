function ucfirst(chaine) {
	if (typeof chaine !== "string" || chaine === "") return "";
	return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

function capitalize(chaine) {
	if (typeof chaine !== "string" || chaine === "") return "";
	return chaine
		.toLowerCase()
		.split(' ')
		.map(word => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
}

function camelCase(chaine) {
	if (typeof chaine !== "string" || chaine === "") return "";
	return capitalize(chaine).split(' ').join('');
}

function snake_case(chaine) {
	if (typeof chaine !== "string" || chaine === "") return "";
	return chaine.toLowerCase().split(' ').join('_');
}

function leet(chaine) {
	if (typeof chaine !== "string" || chaine === "") return "";
	return chaine.split('A').join('4').split('a').join('4').split('E').join('3').split('e').join('3').split('I').join('1').split('i').join('1').split('O').join('0').split('o').join('0').split('U').join('(_)').split('u').join('(_)').split('Y').join('7').split('y').join('7');
}

function verlan(chaine) {
	if (typeof chaine !== "string" || chaine === "") return "";
	let mots = chaine.split(' ');
	chaine = "";
	mots.forEach(function (mot){
		let temp = ""
		for (let i = mot.length-1; i>=0; i--){
			temp += mot.charAt(i);
		}
		chaine += temp + " ";
	})
	return chaine;
}

function yoda(chaine) {
	if (typeof chaine !== "string" || chaine === "") return "";
	var liste = chaine.split(' ');
	var count = liste.length-1;
	chaine = "";
	for (let i = count; i>=0; i--) {
		chaine += liste[i] + " ";
	}
	return chaine;
}


// hello world -> Hello world
console.log(ucfirst("hello world"));
// hello world -> Hello World
console.log(capitalize("hello world"));
// hello world -> HelloWorld
console.log(camelCase("hello world"));
// hello world -> hello_world
console.log(snake_case("hello world"));
// anaconda -> 4n4c0nd4
console.log(leet('anaconda'));
// hello world -> olleh dlrow
console.log(verlan("hello world"));
// hello world coucou -> coucou world hello
console.log(yoda("hello world coucou"));

module.exports.ucfirst = ucfirst;
module.exports.capitalize = capitalize;
module.exports.camelCase = camelCase;
module.exports.snake_case = snake_case;
module.exports.leet = leet;
module.exports.verlan = verlan;
module.exports.yoda = yoda;
