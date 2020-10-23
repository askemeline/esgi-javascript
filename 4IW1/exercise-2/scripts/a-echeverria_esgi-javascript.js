function type_check_v1(value, type) {
    if (typeof value === "object") {
        if (type === "array") {
            return Array.isArray(value);
        }
        if (type === "null") {
            return value === null;
        }
        if (type === "object") {
            return !(value === null) && !(Array.isArray(value));
        }
        return false
    }
    return typeof value === type;
}

function type_check_v2(value, type) {
    if (type["type"] && !(type_check_v1(value, type["type"]))) {
        return false;
    }
    if (type["value"] && value !== type["value"]){
        return false
    }
    if (type["enum"] && !(type["enum"].includes(value))) {
        return false;
    }
    return true;
}


module.exports.type_check_v1 = type_check_v1;
module.exports.type_check_v2 = type_check_v2;
