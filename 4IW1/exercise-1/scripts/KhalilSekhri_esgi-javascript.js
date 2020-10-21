/*
    Exercices Khalil 
*/

function ucfirst(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";
    return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

function capitalize(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";
    return chaine.split('').map(word => ucfirst(word.toLowerCase())).join('');
}

function camelCase(chaine) {
    return capitalize(chaine).replace(/\W/g, "");
}

function snake_case(chaine) {
    return chaine.toLowerCase().replace(/\W/g, "_");
}

function leet(chaine) {
    return chaine.replace(/[aeiouy]/gi, function (e) {
        switch (e.toLowerCase()) {
            case "a":
                return 4;
            case "e":
                return 3;
            case "i":
                return 1;
            case "o":
                return 0;
            case "u":
                return "(_)";
            case "y":
                return 7;
        }
    });
}

function verlan(chaine){
    return chaine.spilt(" ").map((word) => word.split("").reverse().join("")).join(" ");
}

console.log(camelCase("Bonjour hEllo"));
console.log(camelCase("bonjour hello"));
console.log(camelCase("BonJOur Hello"));
console.log(leet("anaconda"));




module.exports.ucfirst = ucfirst;
module.exports.capitalize = capitalize;
module.exports.camelCase = camelCase;
module.exports.snake_case = snake_case;
module.exports.leet = leet;
module.exports.verlan = verlan;
