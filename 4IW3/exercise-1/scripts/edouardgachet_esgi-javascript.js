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
    return param
    .split(' ').join('')
}

const snakeCase = (param) => {
    if(typeof param !== "string" || param === "") return "";
    return param
    .split(' ').join('_')
} 

const leet = (param) => {
    if(typeof param !== "string" || param === "") return "";
    return param
    .split('').map(x => {
       x == 'a' ? x = 4 : x
       x == 'e' ? x = 3 : x
       x == 'i' ? x = 1 : x
       x == 'o' ? x = 0 : x
       x == 'u' ? x = '(_)' : x
       x == 'y' ? x = 7 : x
       return x
    }).join('')
}

const propAccess = (obj, prop) => {

/*    for (const property in obj) {
        if(property != undefined) {

        }
    }*/

    let pathOne;
    let pathTwo;
    let props;
    let result;

    props = prop.split('.')
    pathOne = props[0]
    pathTwo = props[1]

    if(obj[pathOne] != undefined) {
        if(obj[pathOne][pathTwo] != undefined) {
            result = obj[pathOne][pathTwo]
        }
        else{
            result = obj[pathOne]
        }
    }
    return result

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

console.log(ucFirst(chaine))
console.log(capitalize(chaine))
console.log(camelCase(chaine))
console.log(snakeCase(chaine))
console.log(leet(chaine))
console.log(propAccess(prairie, 'animal.type'))
console.log(verlan(chaine))
console.log(yoda(chaine))

module.exports.capitalize = capitalize;
module.exports.camelCase = camelCase;
module.exports.leet = leet;
module.exports.verlan = verlan;
module.exports.yoda = yoda;
