function ucfirst(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";
    return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

function capitalize(text){
    if(typeof text !== "string" || text === "")
        return "";

    return text.split(' ').map(word => ucfirst(word.toLowerCase())).join(' ');
}

function camelCase(text){
    return capitalize(text).replace(/\W/g, '');
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
    if (obj === null) return "";
    if (typeof path !== 'string' || path === "" || path === null ) return obj;

    path = path.split('.');
    toReturn = obj;

    for(key of path) {
        if (toReturn[key] === undefined) return path.slice(0, path.indexOf(key) + 1).join('.') + " not exist";
        
        toReturn = toReturn[key];

        if (key === path[path.length - 1]) return toReturn;
    }
}

function verlan(text){
    if(typeof text !== "string" || text === "")
        return "";

    return text.split(" ").map(word => word.split("").reverse().join("")).join(" ");
}

function yoda(text){
    if(typeof text !== "string" || text === "")
        return "";

    return text.split(" ").reverse().join(" ");
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
