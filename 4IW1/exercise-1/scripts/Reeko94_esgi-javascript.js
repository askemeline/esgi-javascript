function ucfirst(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";
    return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

function capitalize(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";
    return chaine.split(' ').map(word => ucfirst(word.toLowerCase())).join(' ');
}

function camelCase(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";
    return chaine.replace(/[^a-zA-Z0-9]/g, ' ').split(' ').map(c => c.charAt(0).toUpperCase() + c.slice(1).toLowerCase()).join('');
}

function snake_case(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";
    return chaine.split(' ').map(c => c.charAt(0).toUpperCase() + c.slice(1)).join('_').toLowerCase();
}

function leet(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";
    var voyelles = { "A": 4, "E": 3, "I": 1, "O": "0", "U": "(_)", "Y": 7 };
    return chaine.split('').map(letter => voyelles[letter.toUpperCase()] || letter).join('')
}

function verlan(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";
    return chaine.split(' ').map(w => w.split('').reverse().join('')).join(' ');
}

function yoda(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";
    return chaine.split(' ').reverse().join(' ');
}

function prop_access(obj, string) {
    string.split('.').map()
}

module.exports.ucfirst = ucfirst;
module.exports.capitalize = capitalize;
module.exports.camelCase = camelCase;
module.exports.snake_case = snake_case;
module.exports.leet = leet;
module.exports.verlan = verlan;
module.exports.yoda = yoda;
module.exports.prop_access = prop_access;
