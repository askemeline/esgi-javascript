function type_check_v1(value, type) {
    switch (typeof value) {
        case "string":
        case "number":
        case "boolean":
        case "function":
        case "undefined":
            return type === typeof value;
        case "object":
            switch (type) {
                case "array":
                    return Array.isArray(value);
                case "null":
                    return value === null;
                default:
                    return value !== null && !Array.isArray(value);
            }
    }
}

function type_check_v2(object, array) {
    let checker = true;
    Object.keys(array).forEach(function(element) {
        if (!checker) return checker;

        switch (element) {
            case 'type':
                checker = type_check_v1(object, array['type'])
                break;
            case 'value':
                checker = (JSON.stringify(object) === JSON.stringify(array["value"]));
                break;
            case 'enum':
                let found = false;
                enum_loop: {
                    for (value of array.enum) {
                        if (type_check_v1(object, 'array')) {
                            for (el of object) {
                                if (type_check_v2(el, { value: value })) {
                                    found = true;
                                    break enum_loop;
                                }
                            }
                        } else if (type_check_v2(object, { value: value })) {
                            found = true;
                            break;
                        }
                    }
                }
                if (!found) return false;
                break;
        }
    });
    return checker;
}

function type_check(arg, types) {
    let isChecked = type_check_v2(arg, types);
    if (!types.properties) return isChecked;
    for (const typeKey in types.properties) {
        isChecked = type_check(type_check_v1(arg, 'object') ? arg[typeKey] : arg, types.properties[typeKey])
        if (!isChecked) break;
    }
    return isChecked;
}

module.exports.type_check_v1 = type_check_v1;
module.exports.type_check_v2 = type_check_v2;
module.exports.type_check = type_check;
