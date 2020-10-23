function ucfirst(string){
    if (typeof string !== "string" || string === "") return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function capitalize(string){
    if (typeof string !== "string" || string === "") return "";
    return string.toLowerCase().split(' ').map((word) => word.charAt(0).toUpperCase() + word.substring(1)).join(' ');
}

function camelCase(string){
    if (typeof string !== "string" || string === "") return "";
    return string.toLowerCase().split(' ').map((word) => word.charAt(0).toUpperCase() + word.substring(1)).join('');
}

function snake_case(string){
    if (typeof string !== "string" || string === "") return "";
    return string.toLowerCase().split(' ').map((word) => word).join('_');
}

function leet(string){
    if (typeof string !== "string" || string === "") return "";
    let cryptage = {'a': 4,'e': 3, 'i': 1, "o": 0,'u':'(_)','y':7};
    return string.replace(/[aeiou]/gi, function(e){
        return cryptage[e.toLowerCase()] !== undefined ? cryptage[e.toLowerCase()] : e;
    })
}

function prop_access(objet,path){
    if( typeof objet !== "object" || objet === null) return path + " not exist"
    if(typeof path !== "string" || path == "" ) return objet;
    let decomposePath = path.split(".");
    let tab = [];
    for(let element of decomposePath){
        tab.push(element);
        let tabJoin = tab.join('.');
        if(typeof(objet[element]) == "undefined"){
            return tabJoin + " not exist";
        }
        objet = objet[element];
    }
    return objet;
}

function verlan(string){
    if (typeof string !== "string" || string === "") return "";
    return string.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}

function yoda(string){
    if (typeof string !== "string" || string === "") return "";
    return string.split(' ').reverse().join(' ');
    
}



module.exports.ucfirst = ucfirst;
module.exports.capitalize = capitalize;
module.exports.camelCase = camelCase;
module.exports.snake_case = snake_case;
module.exports.leet = leet;
module.exports.verlan = verlan;
module.exports.yoda = yoda;
module.exports.prop_access = prop_access;
