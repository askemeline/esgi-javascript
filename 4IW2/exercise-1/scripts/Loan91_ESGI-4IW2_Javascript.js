function ucfirst(chaine) {
	if (typeof chaine !== "string" || chaine === "") return "";
	return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

function capitalize(chaine) {
	if (typeof chaine !== "string" || chaine === "") return "";
	return chaine
		.toLowerCase()
		.split(' ')
		.map(word => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
}

function camelCase(chaine) {
	if (typeof chaine !== "string" || chaine === "") return "";
	if (chaine === " ") return chaine;
	return ucfirst(capitalize(chaine).split(' ').join(''));
}

function snake_case(chaine) {
	if (typeof chaine !== "string" || chaine === "") return "";
	if (chaine === " ") return chaine;
	return chaine.toLowerCase().split(' ').join('_');
}

function leet(chaine) {
	if (typeof chaine !== "string" || chaine === "") return "";
	return chaine.replace(/[AEIOUY]/gi, function (e) {
		switch (e.toLowerCase()){
			case 'a':
				return 4;
			case 'e':
				return 3;
			case 'i' :
				return 1;
			case 'o':
				return 0;
			case 'u':
				return '(_)';
			case 'y':
				return 7;
		}
	});
}

function verlan(chaine) {
	if (typeof chaine !== "string" || chaine === "") return "";
	if (chaine === " ") return chaine;
	return chaine
		.split(" ")
		.map((word) => {
			return word.split("").reverse().join("");
		})
		.join(" ");
}

function yoda(chaine) {
	if (typeof chaine !== "string" || chaine === "") return "";
	if (chaine === " ") return chaine;
	return chaine.split(" ").reverse().join(" ");
}

function prop_access(object, string) {
	if (typeof object !== "object" || object === "") return "";
	let recherche = ""
	string.split('.').forEach(attribute, function (){

	});
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
module.exports.prop_access = prop_access;
