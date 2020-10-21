function ucfirst(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";
    return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

function capitalize(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";
    return chaine.split(' ').map(c => c.charAt(0).toUpperCase() + c.slice(1)).join(' ');
}

function camelCase(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";
    return chaine.split(' ').map(c => c.charAt(0).toUpperCase() + c.slice(1)).join('');
}

function snake_case(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";
    return chaine.split(' ').map(c => c.charAt(0).toUpperCase() + c.slice(1)).join('_').toLowerCase();
}

console.log(camelCase('Bonjour toTo'))

module.exports.ucfirst = ucfirst;
module.exports.capitalize = capitalize;
module.exports.camelCase = camelCase;
module.exports.snake_case = snake_case;
