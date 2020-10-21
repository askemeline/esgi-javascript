function ucfirst(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";
    return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

function capitalize(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";
    const words = chaine.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    return words.join(" ");
}

function camelCase(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";
    return capitalize(chaine).replace(/\s/g, '');
}

function snake_case(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";
    return chaine.toLowerCase().replace(/\s/g, '_');
}

function leet(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";

    correspondances = {
        "a" : "4",
        "e" : "3",
        "i" : "1",
        "o" : "0",
        "u" : "(_)",
        "y" : "7"
    };

    toReturn = "";

    for(value of chaine.split('')) {
        toReturn += value.toLowerCase() in correspondances ? correspondances[value] : value;
    }
    return toReturn;
}

function prop_access(obj, path) {
    if (typeof path !== 'string' || path === "" || path === null ) return obj;

    path = path.split('.');
    toReturn = obj;

    for(key of path) {
        if (toReturn[key] === undefined) return path.slice(0, path.indexOf(key) + 1).join('.') + " not exist";
        
        toReturn = toReturn[key];

        if (key === path[path.length - 1]) return toReturn;
    }
}

function verlan(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";

    toReturn = "";

    for(value of chaine.split(" ")) {
        toReturn += value.split('').reverse().join('') + " ";
    }

    return toReturn;
}

function yoda(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";

    toReturn = "";

    words = chaine.split(" ");

    for(let i = 0; i < words.length; i++) {
        toReturn += words[words.length - i - 1] + " ";
    }

    return toReturn;
}

function vig(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";

}

module.exports.ucfirst = ucfirst;
module.exports.capitalize = capitalize;
module.exports.camelCase = camelCase;
module.exports.snake_case = snake_case;
module.exports.leet = leet;
module.exports.verlan = verlan;
module.exports.yoda = yoda;
module.exports.vig = vig;
module.exports.prop_access = prop_access;
