function ucfirst(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";
    return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

console.log(ucfirst("fendly"));

function capitalize(chaine) {
    return chaine
        .toLowerCase()
        .split(' ')
        .map(function(word) {
            return word[0].toUpperCase() + word.substr(1);
        })
        .join(' ');
}
console.log(capitalize("hello world"));


function camelCase(chaine) {
    chaine = capitalize(chaine);
    return chaine.split(' ').join('');
}

console.log(camelCase("hello world slt"));

function snakecase(chaine) {
    return chaine.split(' ').join('_').toLowerCase();
}

console.log(snakecase("hello world slt"));

function verlan(chaine){
    return chaine.split('').reverse().join('');
}
console.log(verlan("hello world"));

module.exports.ucfirst = ucfirst;
module.exports.capitalize = capitalize;
module.exports.camelCase = camelCase;
module.exports.verlan = verlan;
