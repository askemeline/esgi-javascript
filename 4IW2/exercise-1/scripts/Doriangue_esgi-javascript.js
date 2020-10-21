function ucfirst(str) {
    if(typeof str !== "string" || str.length === 0) return "";
    return str[0].toUpperCase() + str.substring(1);
}

function capitalize(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    const array = str.toLowerCase().split(" ");
    for (let i = 0; i < array.length;) {
        array[i] = ucfirst(array[i++]);
    }
    return array.join(" ");
}

function camelCase(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    for (let j = 0; j < str.length; j++) {
        str = str.replace(/[^A-Za-z0-9]/gi, " ");
    }
    const array = str.toLowerCase().split(" ");
    for (let i = 0; i < array.length;) {
        array[i] = ucfirst(array[i++]);
    }
    return array.join("");
}

function verlan(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    return str.split(" ").map(function (word) {
        return word.split("").reverse().join('');
    }).join(" ");
}
console.log(verlan("hello world"));

function yoda(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    return str.split(" ").reverse().join(" ");
}
console.log(yoda("hello world"));

function prop_access(obj, str) {
    if (typeof str != "string"){
        return obj;
    }
    if(typeof obj != 'object' || obj == null) {
        console.log(str + ' not exist');
        return;
    }
    if (str === '') {
        return obj;
    }
    const props = str.split('.');
    let propriete = obj;
    props.forEach(function (prop) {
        if(!propriete.hasOwnProperty(prop)) {
            console.log(str + ' not exist');
            return;
        }
        propriete = propriete[prop];
    });
    return propriete;
}


module.exports.ucfirst = ucfirst;
module.exports.capitalize = capitalize;
module.exports.camelCase = camelCase;
module.exports.verlan = verlan;
module.exports.yoda = yoda;
module.exports.prop_access = prop_access;
