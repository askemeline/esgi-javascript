function ucfirst(chaine) {
    if(typeof chaine !== "string" || chaine === "") return "";
    return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

function capitalize(chaine) {
    if (typeof(chaine) != "string" || chaine === "") return "";
    let str = "";
    let words = chaine.split(" ");
    for(let i=0;i<words.length;i++) {
        if (i > 0) {
            str += " ";
        }
        str += ucfirst(words[i]);
    }
    return str;
}

function camelCase(chaine){
    if (typeof chaine !== "string" || chaine === "") return "";
    return capitalize(chaine).split(' ').join('');
}

function snake_case(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";
    return chaine.split(' ').map(c => c.charAt(0).toUpperCase() + c.slice(1)).join('_').toLowerCase();
}

module.exports.ucfirst = ucfirst;
module.exports.capitalize = capitalize;
module.exports.camelCase = camelCase;
module.exports.snake_case = snake_case;
