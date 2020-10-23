function type_check_v1(arg, type) {
    switch (typeof arg) {
        case "symbol":
        case "number":
        case "string":
        case "boolean":
        case "undefined":
        case "function":
            return type === typeof arg;
        case "object":
            switch (type) {
                case "null":
                    return arg === null;
                case "array":
                    return Array.isArray(arg);
                default:
                    return arg !== null && !Array.isArray(arg);
            }
    }
}

module.exports.type_check_v1 = type_check_v1;
