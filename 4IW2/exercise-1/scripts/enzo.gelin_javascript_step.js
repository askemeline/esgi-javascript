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
            splitChaine[i] = splitChaine[i].charAt(0).toUpperCase() + splitChaine[i].substring(1);
        }
        return splitChaine.join(' ');
    }
}
console.log('capitalize =>');
console.log(capitalize('tu est extraordinaire'));


function camelCase(chaine) {
    if (typeof chaine !== "string" || chaine === "") {
        return "";
    } else {
        return chaine.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
            return index === 0 ? word.toLowerCase() : word.toUpperCase();
        }).replace(/\s+/g, '');
    }
}
console.log('camelcase =>');
console.log(camelCase('tu est extraordinaire'));


function snake_case(chaine) {
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
console.log(snake_case('tu est extraordinaire'));


const person = {
    firstName: "James",
    lastName: "Bond",
    age: 25,
    address: {
        id: 1,
        country: "UK"
    }
};

function prop_access(obj, chaine) {
    if (typeof chaine !== "string" || chaine === "" || typeof obj === 'undefined') {
        return "";
    } else {
        let access = chaine.split(".") /* [[0 => person],[1 => address],[2 => country]] */
        let chaineBase = access[0] /*person*/
        let value = obj /*person*/
        console.log(access);
        console.log(chaineBase);
        console.log(value);
        for (let i = 0; i < access.length; i++) {
            if (i !== 0) {
                chaineBase += `.${access[i]}`
            }
            console.log(chaineBase);
            if (!value[access[i]]) {
                return `${obj} don't exist`
            }
            value = value[access[i]]
        }
        return value
    }
}
console.log('prop_access =>');
console.log(prop_access(person, 'person.address.country'));


function verlanBis(chaine) {
    if (typeof chaine !== "string" || chaine === "") {
        return "";
    } else {
        return chaine.split("").reverse().join("");
    }
}
console.log('verlan =>');
console.log(verlanBis('tu est extraordinaire'));


function verlan(chaine) {
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
console.log('verlan =>');
console.log(verlan('tu est extraordinaire'));


function yoda(chaine) {
    if (typeof chaine !== "string" || chaine === "") {
        return "";
    } else {
        return chaine.split(" ").reverse().join(" ");
    }
}
console.log('yoda  =>');
console.log(yoda('tu est extraordinaire'));


function leet(chaine) {
    if (typeof chaine !== "string" || chaine === "") {
        return "";
    } else {
        for (i in chaine) {
            switch (chaine[i]) {
                case ('A', 'a'):
                    chaine = chaine.replace(chaine[i], '4');
                    break;
                case ('E', 'e'):
                    chaine = chaine.replace(chaine[i], '3');
                    break;
                case ('I', 'i'):
                    chaine = chaine.replace(chaine[i], '1');
                    break;
                case ('O', 'o'):
                    chaine = chaine.replace(chaine[i], '0');
                    break;
                case ('U', 'u'):
                    chaine = chaine.replace(chaine[i], '(_)');
                    break;
                case ('Y', 'y'):
                    chaine = chaine.replace(chaine[i], '7');
                    break;
                default:
                    break;
            }
        }
        return chaine;
    }
}
console.log('leet  =>');
console.log(leet('tu est extraordinaire'));


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
module.exports.camelCase = camelCase;
module.exports.snake_case = snake_case;
module.exports.leet = leet;
module.exports.verlan = verlan;
module.exports.yoda = yoda;
module.exports.vig = vig;
module.exports.prop_access = prop_access;
