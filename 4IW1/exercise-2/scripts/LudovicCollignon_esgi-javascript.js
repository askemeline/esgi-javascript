function type_check_v1(value, type) {
    if (value === null)
        return type === "null";

    if (Array.isArray(value))
        return type === "array";

    return type === typeof value;
}


function type_check_v2(value, conf) {
    let typeCheck = true;
    let valueCheck = true;
    let enumCheck = true;

    if (conf.type !== undefined) typeCheck = type_check_v1(value, conf.type);

    if (conf.value !== undefined) valueCheck == conf.value;

    if (conf.enum !== undefined) enumCheck = conf.enum.includes(value);

    return typeCheck && valueCheck && enumCheck;
}

module.exports.type_check_v1 = type_check_v1;
module.exports.type_check_v2 = type_check_v2;
