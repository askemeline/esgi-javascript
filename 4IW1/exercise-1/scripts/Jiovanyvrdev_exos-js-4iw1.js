function ucfirst(string) {
    if (typeof string !== "string" || string === "") return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function capitalize(string) {
    if (typeof string !== "string" || string === "") return "";
    return string.replace(/\w\S*/g, function(word){
        return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    });
}

function camelCase(string) {
    if (typeof string !== "string" || string === "") return "";
    return string.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
}

function snake_case(string) {
    if (typeof string !== "string" || string === "") return "";
    return string.replace(/\W+/g, " ")
        .split(/ |\B(?=[A-Z])/)
        .map(word => word.toLowerCase())
        .join('_');
}

function leet(string) {
    if (typeof string !== "string" || string === "") return "";
    const alphabets = {
        a: "4",
        e: "3",
        i: "1",
        o: "0",
        u: "|_|",
        y: "5",
    }

    for (let i = 0; i < string.length; i++) {
        if (alphabets[string[i]]) {
            string = string.replace(string[i], alphabets[string[i]]);
        }
    }
    return string;
}

function verlan(string) {
    if (typeof string !== "string" || string === "") return "";
    return string.split("").reverse().join("").split(" ").reverse().join(" ")
}


/*function yoda(string) {
    if (typeof string !== "string" || string === "") return "";
    return string.split(" ").replace(string.);
}*/


module.exports.ucfirst = ucfirst;
module.exports.capitalize = capitalize;
module.exports.camelCase = camelCase;
module.exports.snake_case = snake_case;
module.exports.leet = leet;
module.exports.verlan = verlan;
module.exports.yoda = yoda;
