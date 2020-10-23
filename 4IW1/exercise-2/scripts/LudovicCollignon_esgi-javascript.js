function type_check_v1(value, type) {
    console.log(typeof value);
    console.log(value);
    if (value === null)
        return type === "null";

    if (Array.isArray(value))
        return type === "array";

    return type === typeof value;
}

module.exports.type_check_v1 = type_check_v1;
