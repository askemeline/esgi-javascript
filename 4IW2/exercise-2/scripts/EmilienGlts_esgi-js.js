function type_check_v1(input, type) {
    if (input === null) {
        type = "null";
    } else if (typeof input === "object" && input.length !== undefined) {
        type = "array";
    } else {
        type = typeof input;
    }
    return type === type;
}


module.exports.type_check_v1 = type_check_v1;
