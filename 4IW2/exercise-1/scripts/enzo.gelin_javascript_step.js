function ucfirst(chaine) {
    if (typeof chaine !== "string" || chaine === "") {
        return "";
    } else {
        return chaine.charAt(0).toUpperCase() + chaine.slice(1);
    }
}
console.log('ucfirst =>');
console.log(ucfirst('extraordinaire'));

function capitalize(chaine) {
    if (typeof chaine !== "string" || chaine === "") {
        return "";
    } else {
        var splitChaine = chaine.toLowerCase().split(' ');
        for (var i = 0; i < splitChaine.length; i++) {
            // You do not need to check if i is larger than splitChaine length, as your for does that for you
            // Assign it back to the array
            splitChaine[i] = splitChaine[i].charAt(0).toUpperCase() + splitChaine[i].substring(1);
        }
        // Directly return the joined string
        return splitChaine.join(' ');
    }
}
console.log('capitalize =>');
console.log(capitalize('tu est extraordinaire'));

function camelcase(chaine) {
    if (typeof chaine !== "string" || chaine === "") {
        return "";
    } else {
        return chaine.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
            return index === 0 ? word.toLowerCase() : word.toUpperCase();
        }).replace(/\s+/g, '');
    }
}
console.log('camelcase =>');
console.log(camelcase('tu est extraordinaire'));

function snakecase(chaine) {
    if (typeof chaine !== "string" || chaine === "") {
        return "";
    } else {
        return chaine.replace(/\W+/g, " ")
            .split(/ |\B(?=[A-Z])/)
            .map(word => word.toLowerCase())
            .join('_');
    }
}
console.log('snakecase =>');
console.log(snakecase('tu est extraordinaire'));

// function leet(chaine) {
//     if (typeof chaine !== "string" || chaine === "") {
//         return "";
//     } else {

//     }
// }
// console.log(leet('tu est extraordinaire'));


function prop_access(chaine, obj) {
    if (typeof chaine !== "string" || chaine === "" || typeof obj === 'undefined') {
        return "";
    } else {
        let access = chaine.split(".")
        let chainePath = access[0]
        let value = obj

        for (let i = 0; i < access.length; i++) {
            chainePath += `.${access[i]}`
            if (!value[access[i]]) {
                return `${obj} don't exist`
            }
            value = value[access[i]]
        }

        return value
    }
}
console.log('prop_access =>');
console.log(prop_access('prairie', 'animal.type.name'));

/*
    prop_access: obj, props
    Si Obj n'est pas défini et props n'est pas une string vide

    Récupération du chemin

    on test toute les clé et on récupère la valeur si exist
    return valeur
 */


function verlan(chaine) {
    if (typeof chaine !== "string" || chaine === "") {
        return "";
    } else {
        return chaine.split("").reverse().join("");
    }
}
console.log('verlan =>');
console.log(verlan('tu est extraordinaire'));

function verlanBis(chaine) {
    if (typeof chaine !== "string" || chaine === "") {
        return "";
    } else {
        var output = "";
        for (var i = chaine.length - 1; i >= 0; i--) {
            output += chaine[i];
        }
        return output;
    }
}
console.log('verlanBis =>');
console.log(verlanBis('tu est extraordinaire'));

function yoda(chaine) {
    if (typeof chaine !== "string" || chaine === "") {
        return "";
    } else {
        return chaine.split(" ").reverse().join(" ");
    }
}
console.log('yoda  =>');
console.log(yoda('tu est extraordinaire'));

// function vig(chaine) {
//     if (typeof chaine !== "string" || chaine === "") {
//         return "";
//     } else {
//     }
// }
// console.log('vig');
// console.log(vig('tu est extraordinaire'));



module.exports.ucfirst = ucfirst;
module.exports.capitalize = capitalize;
module.exports.leet = leet;
module.exports.verlan = verlan;
module.exports.yoda = yoda;
module.exports.vig = vig;
module.exports.prop_access = prop_access;
