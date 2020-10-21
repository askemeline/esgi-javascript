function type_check_v1(input, type) {
    switch (typeof input) {
        case "string":
        case "symbol":
        case "number":
        case "function":
        case "undefined":
        case "boolean":
            return typeof input === type;
        case "object":
            switch (type) {
                case 'null':
                    return input === null;
                case 'array':
                    return Array.isArray(input);
                default:
                    return input !== null && !Array.isArray(input);
            }
    }
}


module.exports.type_check_v1 = type_check_v1;
