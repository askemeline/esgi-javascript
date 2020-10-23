function ucfirst(chaine) {
    if(typeof chaine !== "string" || chaine === "") return "";
    return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}


function capitalize(chaine) {
    if(typeof chaine !== "string" || chaine === "") return "";
    return chaine.replace(/\w\S*/g, function(text){
        return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
    });
}

function camelCase(chaine) {
    if(typeof chaine !== "string" || chaine === "") return "";
    return chaine.replace(/\w\S*/g, function(text){
        return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase() + text.replace(/\s/g, '');
    });
}

function snake_case(chaine) {
    if(typeof chaine !== "string" || chaine === "") return "";
    return chaine.split(' ').join('_').toLowerCase();
}

function verlan(chaine) {
    if(typeof chaine !== "string" || chaine === "") return "";
    return chaine.split("").reverse().join("");
}

function yoda(chaine) {
    if(typeof chaine !== "string" || chaine === "") return "";
    return chaine.split(' ').reverse().join(' ');
}

function leet(chaine) {
    if(typeof chaine !== "string" || chaine === "") return "";
    return chaine.replace('a', 4).replace('e', 3).replace("i", 1).replace('u', '_').replace('y', 7);
}


function prop_access(object, path) {
    if(typeof(object) != object || value == null ) 
    return path + " not exist";
    if(typeof value === undefined || value == null  ) 
    return object;

}


console.log(snake_case('Bonjour la france'));
console.log(leet('bonjour la france'));

module.exports.ucfirst = ucfirst;
module.exports.capitalize = capitalize;
module.exports.camelCase = camelCase;
module.exports.snake_case = snake_case;
module.exports.leet = leet;
module.exports.verlan = verlan;
module.exports.yoda = yoda;
module.exports.prop_access = prop_access;
