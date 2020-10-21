function type_check_v1(input, type) {
    switch (typeof input) {
        case "string":
        case "number":
        case "function":
        case "undefined":
        case "boolean":
            return typeof input === type;
    }
}


module.exports.type_check_v1 = type_check_v1;
