const chaine = "hello world";
const prairie = {
    animal: {
        type: {
            name: 'chien'
        }
    }
}

const ucFirst = (param) => {
    if(typeof param !== "string" || param === "") return "";
    return param.charAt(0).toUpperCase() + param.slice(1);
}

const capitalize = (param) => {
    if(typeof param !== "string" || param === "") return "";
    return param
    .toLowerCase()
    .split(' ')
    .map(function(word) {
        return word[0].toUpperCase() + word.substr(1);
    })
    .join(' ');
}

const camelCase = (param) => {
    if(typeof param !== "string" || param === "") return "";
    return capitalize(param)
    .split(' ').join('')
}

const snakeCase = (param) => {
    if(typeof param !== "string" || param === "") return "";
    return param
    .split(' ').join('_')
} 

const leet = (param) => {
    if(typeof param !== "string" || param === "") return "";
    const table = {a:1, e:2, i:3, o:4, u:5, y:6}
    return param
    .replace(/[aeiouy]/gi, el => {
        return table[el]
    })
/*    .split('').map(x => {
       x == 'a' ? x = 4 : x
       x == 'e' ? x = 3 : x
       x == 'i' ? x = 1 : x
       x == 'o' ? x = 0 : x
       x == 'u' ? x = '(_)' : x
       x == 'y' ? x = 7 : x
       return x
    }).join('')
*/
}

const propAccess = (obj, prop) => {

    for (const property in obj) {
        if(property != undefined) {

        }
    }
}

const verlan = (param) => {
    if(typeof param !== "string" || param === "") return "";
    return param
    .split(' ').map(x => x.split('').reverse().join('')).join(' ')
}

const yoda = (param) => {
    return param
    .split(' ').reverse().join(' ')
}

module.exports.capitalize = capitalize;
module.exports.camelCase = camelCase;
module.exports.leet = leet;
module.exports.verlan = verlan;
module.exports.yoda = yoda;
