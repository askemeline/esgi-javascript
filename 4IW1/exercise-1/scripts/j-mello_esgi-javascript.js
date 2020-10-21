function ucfirst(chaine) {
    if (typeof chaine !== "string" || chaine ==="") return "";
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
        str += ucfirst(words[i]);
    }
    return str;
}

function camelCase(chaine) {
    if (typeof chaine !== "string" || chaine ==="") return "";
    let str = "";
    let words = chaine.split(" ");
    for (let i = 0; i<words.length; ++i) {
        str += ucfirst(words[i])
    }
    return str;
}

// console.log(camelCase("je mange des pommes"))

function snake_case(chaine) {
    if (typeof chaine !== "string" || chaine ==="") return "";
    let str = "";
    let words = chaine.split(" ");
    for(let i=0;i<words.length;i++) {
        if (i > 0) {
            str += "_";
        }
        str += words[i].toLowerCase();
    }
    return str;
}

console.log(snake_case("Salut les enfants"));

function replaceAll(str,A,B) {
    while(str.replace(A,B) !== str) {
        str = str.replace(A,B);
    }
    return str;
}

function leet(chaine) {
    const toCrypt = {
        A : 4,
        E : 3,
        I : 1,
        O : 0,
        U : "(_)",
        Y : 7
    }
    for (let key in toCrypt) {
        chaine = replaceAll(chaine, key, toCrypt[key]);
        chaine = replaceAll(chaine, key.toLowerCase(), toCrypt[key]);
    }
    return chaine;
}

console.log(leet("Je suis crypte"));

function prop_access(obj, path) {
    if (typeof(obj) != "object") return path;
    if (typeof(path) != "string" || path === "") return obj;
    let pathSplitted = path.split(".");
    for (let elem of pathSplitted) {
        if (typeof(obj[elem]) == "undefined") {
            return path;
        }
        obj = obj[elem]
    }
    return obj
}

let prairie = {
    animal : {
        type: {
            name: "Bambi"
        }
    }
}

console.log(prop_access(prairie, "animal.type.name"));

module.exports.ucfirst = ucfirst;
module.exports.capitalize = capitalize;
module.exports.camelCase = camelCase;
module.exports.snake_case = snake_case;
module.exports.leet = leet;
module.exports.prop_access = prop_access;
