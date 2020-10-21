function ucfirst(chaine) {
    if(typeof chaine !== "string" || chaine === "") return "";
    return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

function capitalize(chaine) {
    if (typeof (chaine) != "string" || chaine === "") return "";

    let str = "";
    let words = chaine.split(" ");
    for (let i = 0; i < words.length; i++) {
        if (i > 0) {
            str += " ";
        }
        str += ucfirst(words[i].toLowerCase());
    }
    return str;
}

function camelCase(chaine) {
    if (typeof(chaine) != "string" || chaine === "") return "";

    let str = "";
    let string = chaine.replace('_',' ');
    let words = string.split(" ");
    for(let i=0;i<words.length;i++) {
        str += ucfirst(words[i].toLowerCase());
    }
    return str;
}

function snake_case(chaine) {
    if (typeof(chaine) != "string" || chaine === "") return "";
    return chaine.toLowerCase().replace(/\W/g, "_");
}

function leet(chaine) {
    if (typeof string !== "string" && string !== "") return "";
    return chaine.replace(/[aeiouy]/gi, function(e){
        switch(e.toLowerCase()) {
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
    })
}

function prop_access(obj, path) {
    if (typeof(obj) != "object") return path;
    if (typeof(path) != "string" || path === "") return obj;
    let pathSplitted = path.split(".");
    for (let elem of pathSplitted) {
        if (typeof(obj[elem]) == "undefined") {
            return path;
        }
        obj = obj[elem];
    }
    return obj;
}

function verlan(chaine) {
    if (typeof string !== "string" && string !== "") return "";
    return chaine.split(" ").map((word) => word.split("").reverse().join("")).join(" ");
}

function yoda(string) {
    if (typeof string !== "string" && string !== "") return ""
    return string.split(" ").reverse().join(" ")
}


module.exports.ucfirst = ucfirst;
module.exports.capitalize = capitalize;
module.exports.camelCase = camelCase;
module.exports.snake_case = snake_case;
module.exports.leet = leet;
module.exports.verlan = verlan;
module.exports.yoda = yoda;
module.exports.prop_access = prop_access;
