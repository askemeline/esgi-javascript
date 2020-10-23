function ucfirst(word){
    if (typeof word !== "string" || word === "") return "";
    // Met le 1er caractère à en majuscule
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function capitalize(chaine){
    if (typeof chaine !== "string" || chaine === "") return "";
    return chaine.toLowerCase().split(" ").map((word)=> ucfirst(word)).join(' ');
}

function camelCase(chaine){
    if (typeof chaine !== "string" || chaine === "") return "";
    return capitalize(chaine).replace(' ', '');
}

function snake_case(chaine){
    if (typeof chaine !== "string" || chaine === "") return "";
    return chaine.toLowerCase().replace(' ', '_');
}

function leet(chaine){
    if (typeof chaine !== "string" || chaine === "") return "";

    // Buffer qui contiendra le mot final
    let buffer = '';
    for(let letter of chaine){

        // Selon si la lettre est une consonne, on le remplace
        switch (letter.toUpperCase()){
            case 'A':
                buffer += '4';
                break;
            case 'E':
                buffer += '3';
                break;
            case 'I':
                buffer += '1';
                break;
            case 'O':
                buffer += '0';
                break;
            case 'U':
                buffer += '(_)';
                break;
            case 'Y':
                buffer += '7';
                break;  
            default:
                buffer += letter;                       
        }
    } 
    return buffer;
}

function prop_access(obj, strObjPath){

    // Séparation du path dans un array pour boucler dessus
    const arrObjPath = strObjPath.split('.');

    // Buffer qui va contenir l'objet courant(descendant de l'obj principal)
    let currentObj = obj;

    // Buffer contenant le path courant parcouru par la boucle
    let currentPath = [];

    // On boucle sur le path pour récupérer indifférament les données
    for(const objPath of arrObjPath){

        // MAJ du path courrant
        currentPath.push(objPath);

        // Vérification
        if(currentObj[objPath] === undefined || currentObj[objPath] === ''){
            // Si incorrect, log du path et return de l'obj
            console.log(`${currentPath.join('.')} not exist`)
            return obj;
        }

        // MAJ de l'objet courrant
        currentObj = currentObj[objPath];
        
    }    

    // return de la value (si on est ici, c'est que tout est ok)
    return currentObj;
}

function verlan(chaine){
    if (typeof chaine !== "string" || chaine === "") return "";
    //Séparation de chaque mot dans un array
    //Pour chaque item de l'array, on inverse son ordre
    //On recolle tout
    return chaine.split(" ").map((word)=> word.split("").reverse().join("")).join(" ");
}

function yoda(chaine){
    if (typeof chaine !== "string" || chaine === "") return "";
    return chaine.split(" ").reverse().join(" ");
}

/*
function testExo(){
    const propAccessObj1 = {
        animal: {
            type: {
                name: "Médor"
            }
        }
    };

    const propAccessObj2 = {
        animal: {
            zoo: undefined
        }
    };

    console.log("********************");
    console.log(["ucfirst", ucfirst("hello world")]);
    console.log("********************");
    console.log(["capitalize", capitalize("hello world")]);
    console.log("********************");
    console.log(["camelCase", camelCase("hello world")]);
    console.log("********************");
    console.log(["snake_case", snake_case("hello world")]);
    console.log("********************");
    console.log(["leet", leet("anaconda")]);
    console.log("********************");
    console.log(["prop_access - cas ok : Médor", prop_access(propAccessObj1, "animal.type.name")]);
    console.log("********************");
    console.log(["prop_access - cas ko 1 : Obj", prop_access(propAccessObj1, "animal.zoo")]);
    console.log("********************");
    console.log(["prop_access - cas ko 2 : Obj", prop_access(propAccessObj2, "animal.zoo")]);
    console.log("********************");
    console.log(["verlan", verlan('Hello world')]);
    console.log("********************");
    console.log(["yoda", yoda('Hello world')]);
    console.log("********************");
    console.log(["vig", vig('wikipedia', 'crypto')]);

}

testExo();

*/

module.exports.ucfirst = ucfirst;
module.exports.capitalize = capitalize;
module.exports.camelCase = camelCase;
module.exports.snake_case = snake_case;
module.exports.leet = leet;
module.exports.verlan = verlan;
module.exports.yoda = yoda;
module.exports.vig = vig;
module.exports.prop_access = prop_access;
