function type_check_v1(arg1, arg2) {
    if(Array.isArray(arg1)){
        return arg2.toLowerCase() === "array";
    }
    return typeof arg1 === arg2.toLowerCase();
}

function type_check_v2(arg1, conf) {
    if(conf["type"] !== undefined) {
        if(typeof arg1 !== conf["type"]) return false;
    }
    if(conf["value"] !== undefined) {
        if(arg1 !== conf["value"]) return false;
    }
    if(conf["enum"] !== undefined) {
        if(!(arg1 in conf["enum"])) return false;
    }
    return true;
}

module.exports.type_check_v1 = type_check_v1;
module.exports.type_check_v2 = type_check_v2;
