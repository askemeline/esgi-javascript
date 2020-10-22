function type_check_v1(val, type) {
    switch (typeof val) {
        case 'object':
            if (type === "array") return Array.isArray(val);
            if (type === "null") return val === null;
            return val != null && !Array.isArray(val);
        default:
            return typeof val === type;
    }
}


function type_check_v2(object, arr) {
    checker = true;
    Object.keys(arr).forEach(function(element) {
        if (!checker) return checker;

        switch (element) {
            case 'type':
                checker = type_check_v1(object, arr['type'])
                break;
            case 'value':
                checker = (JSON.stringify(object) === JSON.stringify(arr["value"]));
                break;
            case 'enum':
                let found = false;
                enum_loop: {
                    for (value of arr.enum) {
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

//type_check_v2({ "toto": { 'a': 'b' } }, { type: "object", value: { "toto": { 'a': 'b' } } });
//type_check_v2(1, { type: "number", value: 1 });
//type_check_v2({ "toto": { "a": "b" } }, { type: "object", enum: [{ "toto": { "a": "b" } }, { "toto": { "a": "d" } }] });



/*
const obj = {
    id: 1,
    name: 'john',
    profil: {
        age: 20
    },
    hobbies: ["foot"]
}

console.log(type_check(obj, {
    type: "object",
    properties: {
        id: { type: "number" },
        name: { type: "string", enum: ["john", "jade"] },
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
            enum: ['basket']
        }
    }
}));*/

module.exports.type_check_v1 = type_check_v1;
module.exports.type_check_v2 = type_check_v2;
module.exports.type_check = type_check;
