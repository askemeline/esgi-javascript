function isNotString(str){

    return typeof str !== "string" || str.trim() === ""
}

function ucfirst(str){
    if(isNotString(str)) return ""

    return str.charAt(0).toUpperCase() + str.slice(1)
    
}

function capitalize(str){
    if(isNotString(str)) return ""

    return str.split(' ').map(w => ucfirst(w.toLowerCase())).join(' ')
}

function camelCase(str){
    if(isNotString(str)) return ""
    

    return str.replace('_', ' ').split(' ').map(w => ucfirst(w.toLowerCase())).join('')
}


function snake_case(str){
    if(isNotString(str)) return ""

    return str.split(' ').join('_').toLowerCase()
}




function verlan(str){
    if(isNotString(str)) return ""

    return str.split(' ').map(w => w.split('').reverse().join('') ).join(' ')
}

function yoda(str){
    if(isNotString(str)) return ""

    return str.split(' ').reverse().join(' ')
}




console.log(snake_case("toggle case is the coolest"))


module.exports.ucfirst = ucfirst;
module.exports.capitalize = capitalize;
module.exports.camelCase = camelCase;
module.exports.snake_case = snake_case;
module.exports.verlan = verlan;
module.exports.yoda = yoda;
