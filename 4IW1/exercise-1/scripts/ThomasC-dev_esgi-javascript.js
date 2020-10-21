function ucfirst(chaine) {
    if(typeof chaine !== "string" || chaine === "") return "";
    return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

function capitalize(chaine) {
    if(typeof chaine !== "string" || chaine === "") return "";
    const words = chaine.split(" ");
    let str = "";
    for(value of words) {
        str += ucfirst(value) + " ";
    }
    return str;
}

function camelCase(chaine) {
    if(typeof chaine !== "string" || chaine === "") return "";
    return capitalize(chaine).split(" ").join("");
}

function snake_case(chaine) {
    if(typeof chaine !== "string" || chaine === "") return "";
    const words = chaine.split(" ");
    let str = "";
    for(value of words) {
        if(str.length > 0)
            str += "_" + value.toLowerCase();
        else
            str +=  value.toLowerCase();
    }
    return str;
}

function leet(chaine) {
    if(typeof chaine !== "string" || chaine === "") return "";

    const characterMap = {
            'a': '4',
            'b': '8',
            'e': '3',
            'g': '6',
            'l': '1',
            'o': '0',
            's': '5',
            't': '7',
            'æ': '43',
            'ø': '03',
            'å': '44'
        };

    for(i = 0; i < chaine.length; i++) {
        if(chaine.charAt(i) in characterMap) {
            chaine = chaine.substr(0, i) + characterMap[chaine.charAt(i)] +  chaine.slice(i + 1);
        }
    }
    return chaine;
}


module.exports.ucfirst = ucfirst;
module.exports.capitalize = capitalize;
module.exports.camelCase = camelCase;
module.exports.snake_case = snake_case;
module.exports.leet = leet;
