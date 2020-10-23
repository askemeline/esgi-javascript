function type_check_v1(attr, type){
    if(typeof attr === 'object'){
        if(type === "null") return true;
        if(type === "array") return Array.isArray(attr);
        return (attr !== null || !(Array.isArray(attr)));
    }
    return (typeof attr === type);
}

function type_check_v2()

module.exports.type_check_v1 = type_check_v1;
module.exports.type_check_v2 = type_check_v2;
