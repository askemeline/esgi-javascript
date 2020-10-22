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

function type_check_v2(arg, conf) {
    for (toCheck in conf) {
        switch (toCheck) {
            case 'type':
                if (!type_check_v1(arg, conf.type)) return false;
                break;
            case 'value':
                if (JSON.stringify(arg) !== JSON.stringify(conf.value)) return false;
                break;
            case 'enum':
                let isFound = false;
                for(value of conf.enum){
                    isFound = type_check_v2(arg, {value: value})
                    if (isFound) break;
                }
                if (!isFound) return false
                break
        }
    }

    return true;
}

function type_check(arg, types) {
    let isChecked = type_check_v2(arg, types);

    if(!types.properties) return isChecked

    for (const typeKey in types.properties) {
        isChecked = type_check(
            type_check_v1(arg, 'object') ? arg[typeKey] : arg
            , types.properties[typeKey]
        )
        if (!isChecked) break
    }

    return isChecked
}

const obj = {
    id: 1,
    name: 'john',
    profil: {
        age: 20
    },
    hobbies: ["true", "false", "true"]
}

console.log(type_check(obj, {
    type: "object",
    properties: {
        id: {type: "number"},
        name: {type: "string", enum: ["john", "jade"]},
        profil: {
            type: "object",
            properties: {
                age: {
                    type: "number"
                }
            }
        },
        hobbies: {
            type: "array",
        }
    }
}))



module.exports.type_check_v1 = type_check_v1;
module.exports.type_check_v2 = type_check_v2;
module.exports.type_check = type_check;
