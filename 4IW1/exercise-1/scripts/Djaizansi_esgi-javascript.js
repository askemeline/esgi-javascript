function ucfirst(chaine) {
    if(typeof chaine !== "string" || chaine === "") return "";
    return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

function capitalize(chaine) {
    if (typeof(chaine) != "string" || chaine === "") return "";
    return chaine.split(' ').map(word => ucfirst(word.toLowerCase())).join(' ');
}

function camelCase(chaine){
    if (typeof chaine !== "string" || chaine === "") return "";
    return capitalize(chaine).replace(/\W/g, "");
}

function snake_case(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";
    return chaine.toLowerCase().replace(/\W/g, "");
}

function leet(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";
    var crypt = { "A": 4, "E": 3, "I": 1, "O": "0", "U": "(_)", "Y": 7 };
    return chaine.split('').map(s => crypt[s] || s).join('');
}

function verlan(chaine){
    if (typeof chaine !== "string" || chaine === "") return "";
    return chaine.split('').reverse().join('');
}

module.exports.ucfirst = ucfirst;
module.exports.capitalize = capitalize;
module.exports.camelCase = camelCase;
module.exports.snake_case = snake_case;
module.exports.leet = leet;
module.exports.verlan = verlan;
