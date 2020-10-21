function ucfirst(string){
    if(typeof(string) !== 'string' || string.trim().length ==0)
        return "";

    return string.charAt(0).toUpperCase() + string.slice(1);
}
function capitalize(string){
    if(typeof(string) !== 'string' || string.trim().length ==0)
    return "";
    return string.split(' ').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
}

function camelCase(string) {
    if (typeof string !== "string" || string === "") return "";
    return string.split(' ').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('');
}

function snake_case(string) {
    if (typeof string !== "string" || string === "") return "";
    return string.split(' ').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('_').toLowerCase();
}
function leet(string) {
    if (typeof string !== "string" || string === "") return "";
    var monCryptage = { "A": 4, "E": 3, "I": 1, "O": "0", "U": "(_)", "Y": 7 };
    return string.split('').map(s => monCryptage[s.toUpperCase()] || s).join('')
}
function verlan(){
    if (typeof string !== "string" || string === "") return "";

    return string.split('').reverse().join('');
}


function yoda(string){
    if (typeof string !== "string" || string === "") return "";

    return string.split(' ').reverse().join(' ')
}



module.exports.ucfirst = ucfirst;
module.exports.capitalize = capitalize;
module.exports.camelCase = camelCase;
module.exports.snake_case = snake_case;
module.exports.leet = leet;
module.exports.verlan = verlan;
module.exports.yoda = yoda;
