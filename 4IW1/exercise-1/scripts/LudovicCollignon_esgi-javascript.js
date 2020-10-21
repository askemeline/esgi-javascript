function ucfirst(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";
    return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

function capitalize(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";
    return chaine.split(' ')
        .map(word => ucfirst(word.toLowerCase()))
        .join(' ');
}

function camelcase(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";
    return capitalize(chaine).replace(/\W/g, "");
}

function snake_case(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";
    return chaine.toLowerCase().replace(/\W/g, "_");
}

function leet(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";
    return chaine.replace(/[aeiouy]/gi, function(char) {
        switch (char.toLowerCase()) {
            case "a":
                return "4";
            case "e":
                return "3";
            case "i":
                return "1";
            case "o":
                return "0";
            case "u":
                return "(_)";
            case "y":
                return "7";
        }
    });
}

function prop_access(obj, path) {
    if (typeof path === undefined || path === "") return obj;

    const exist = true;

    path = path.split(".");
    let error = false;
    let errorPath = "";
    let res = obj;
    for (attr of path) {
        errorPath += attr + ".";
        if (res[attr] === undefined) {
            error = true;
            break;
        } else {
            res = res[attr];
        }
    }
    errorPath = errorPath.slice(0, -1);
    if (error === true) return "Path not found : " + errorPath;

    return res;
}

function verlan(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";

    chaine = chaine.split(" ");
    let res = "";

    for (word of chaine) {
        word = word.split("").reverse();
        for (char of word) {
            res += char;
        }

        res += " ";
    }

    return res.trim();
}

function yoda(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";
    return chaine.split(" ").reverse().join(" ");
}

module.exports.ucfirst = ucfirst;
module.exports.capitalize = capitalize;
module.exports.snake_case = snake_case;
module.exports.leet = leet;
module.exports.verlan = verlan;
module.exports.yoda = yoda;
module.exports.prop_access = prop_access;
