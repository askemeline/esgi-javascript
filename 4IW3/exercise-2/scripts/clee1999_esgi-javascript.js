function type_check_v1(variable, type) {
    const typeOfVariable = typeof variable;
    switch (typeOfVariable) {
        case "string":
        case "number":
        case "function":
        case "undefined":
        case "boolean":
            return typeof variable === type;
        case "object":
            switch (type) {
                case 'null':
                    return variable === null;
                case 'array':
                    return Array.isArray(variable);
                case "object":
                    return variable !== null && !Array.isArray(variable);
            }
    }
}

function type_check_v2() {
    
}

module.exports.type_check_v1 = type_check_v1;
module.exports.type_check_v2 = type_check_v2;
