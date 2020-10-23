
const TYPE = {
    NUMBER: "number",
    STRING: "string",
    BOOLEAN: "boolean",
    UNDEFINED: "undefined",
    OBJECT: "object",
    FUNCTION: "function",
    SYMBOL: "symbol",
    ARRAY : "array",
    NULL: "null"
}

function isAPrimitiveType(against){
    switch (against.toLowerCase().trim()){
        case TYPE.NUMBER:
        case TYPE.STRING:
        case TYPE.BOOLEAN:
        case TYPE.UNDEFINED:
        case TYPE.FUNCTION:
        case TYPE.SYMBOL:
            return true;
        default:
            return false;
    };
}
function isObjHaveType(obj){
    return obj.hasOwnProperty("type")
}
function isObjHaveOnlyType(obj){
    return obj.hasOwnProperty("type") && !obj.hasOwnProperty("value") && !obj.hasOwnProperty("enum")
}
function isObjHaveTypeValue(obj){
    return obj.hasOwnProperty("type") && obj.hasOwnProperty("value")
}

function isObjHaveEnum(obj){
    return obj.hasOwnProperty("enum")
}

function isObjHaveProperties(obj){
    return obj.hasOwnProperty("properties");
}

function isStrictlyEqual(a, b){
    return JSON.stringify(a) === JSON.stringify(b)
}


function type_check_v1(toTest, against){

    against = against.toLowerCase().trim();

    // Si c'est un array
    if(against === TYPE.ARRAY){
        return Array.isArray(toTest);
    }
    // si null
    if(against === TYPE.NULL){
        return toTest === null
    }

    //on check si c'est un type primitif ou autre
    if(isAPrimitiveType(against)){
        return typeof toTest === against;
    };

    // Si objet
    if(against === TYPE.OBJECT){
        return typeof toTest === against;
    }

    //défaut
    return false;

}

function type_check_v2(toTest, against){

    // vérification sur against
    const isAgainstHaveOnlyType = isObjHaveOnlyType(against);
    const isAgainstHaveTypeAndValue = isObjHaveTypeValue(against);
    const isAgainstHaveEnum = isObjHaveEnum(against);

    // Si l'objet n'a rien d'un objet conf, on renvoie false
    if(!isAgainstHaveOnlyType && !isAgainstHaveEnum) {
        return false;
    }

    // effectuer les tests

    // Si seulement un type
    if(isAgainstHaveOnlyType){
        return type_check_v1(toTest, against.type);
    }
    
    // Si enum
    if(isAgainstHaveEnum){
        // Loop sur l'enum pour tester chaque chaque valeur contre la var à tester
        for(const value of against.enum){
            // Si le type est okay et que la var est bien égale à la value
            if(type_check_v1(toTest, typeof value) && isStrictlyEqual(toTest, against.value)){
                return true;
            }
        }
    }

    // S'il y a type et value sans enum
    if(isAgainstHaveTypeAndValue && !isAgainstHaveEnum){
        return type_check_v1(toTest, against.type) && isStrictlyEqual(toTest, against.value)
    }

    //extension possible : s'il y a type, value et enum

    // Défaut
    return false;

}

function type_check(toTest, against) {
    const isAgainstHaveType = isObjHaveType(against);

    // Si la prop type est présente
    if (!isAgainstHaveType) {
        return type_check_v2(toTest, against)
    } else {

        
        // Si l'objet testé est superficiellement du même type que le type testé
        if(type_check_v1(toTest, against.type)){

            // Si on a des properties
            if (isAgainstHaveProperties) { 

                let isCurrentlyEqual = true;

                // On regarde les propriétés d'against pour trouver correspondance avec l'obj à tester
                Object.keys(against.properties).some((property)=>{
                    //Dans le cas d'un obj avec structure deep, on fait une récursive
                    if(!type_check(toTest[property], against.properties[property])){
                        //
                        isCurrentlyEqual = false;
                        return;
                    }
                });
                return isCurrentlyEqual;
            }
        }
    }
}

/*
function testV3(){

    const obj = {
        id: 1,
        name: 'john',
        profil: {
            age: 20
        },
        hobbies: ["true", "false", "true"]
    }
    
    console.log(type_check(obj, {
        type: "object",
        properties: {
            id: {type: "number"},
            name: {type: "string", enum: ["john", "jade"]},
            profil: {
                type: "object",
                properties: {
                    age: {
                        type: "number"
                    }
                }
            },
            hobbies: {
                type: "array",
            }
        }
    }))
}

testV3();

function testV2(){
    console.log('---------------------');
    console.log('---------------------');
    console.log('TYPE_CHECK V2');
    console.log('---------------------');
    console.log('---------------------');
    console.log(['1 : true ', type_check_v2({prop1:1}, {type:"object"})]);
    console.log('---------------------');
    console.log(['2 : true ', type_check_v2("foo", {type:"string", value:"foo"})]);
    console.log('---------------------');
    console.log(['3 : false ', type_check_v2("bar", {type:"string", value:"foo"})]);
    console.log('---------------------');
    console.log(['4 : true ', type_check_v2(3, {enum:["foo","bar", 3]})]);
    console.log('---------------------');

}

function testV1(){
    console.log('---------------------');
    console.log('---------------------');
    console.log('TYPE_CHECK V1');
    console.log('---------------------');
    console.log('---------------------');
    console.log(['1V1 : true ', type_check_v1(1, "number")]);
    console.log('---------------------');
    console.log(['2V1 : true ', type_check_v1("str", "string")]);
    console.log('---------------------');
    console.log(['3V1 : true ', type_check_v1(true, "boolean")]);
    console.log('---------------------');
    console.log(['4V1 : true ', type_check_v1(undefined, "undefined")]);
    console.log('---------------------');
    console.log(['5V1 : true ', type_check_v1([1, 2, 3], "array")]);
    console.log('---------------------');
    console.log(['6V1 : true ', type_check_v1(null, "null")]);
    console.log('---------------------');
    console.log(['7V1 : false ', type_check_v1("b", "number")]);
    console.log('---------------------');
    console.log(['8V1 : false ', type_check_v1(1, "string")]);
    console.log('---------------------');
    console.log(['9V1 : false ', type_check_v1(true, "number")]);
    console.log('---------------------');
    console.log(['10V1 : false ', type_check_v1(null, "undefined")]);
    console.log('---------------------');
    console.log(['11V1 : false ', type_check_v1({}, "array")]);
    console.log('---------------------');
    console.log(['12V1 : false ', type_check_v1(undefined, "null")]);
}

*/

module.exports.type_check_v1 = type_check_v1;
module.exports.type_check_v2 = type_check_v2;
module.exports.type_check = type_check;
