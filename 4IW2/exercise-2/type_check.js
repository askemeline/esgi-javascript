function type_check_v1(variable, type) {
    switch(typeof variable) {
        case "symbol":
        case "number":
        case "string":
        case "boolean":
        case "undefined":
        case "function":
            return type === typeof variable;
        case "object":
            switch(type) {
                case "null":
                    return variable === null;
                case "array"
            }
    }
}