function type_check_v1(variable, type) {
    switch(typeof variable) {
        case "number":
        case "string":
        case "boolean":
        case "undefined":
        case "function":
            return type === typeof variable;
    }
}