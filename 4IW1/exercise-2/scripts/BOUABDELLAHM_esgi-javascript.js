function type_check_v1(myNumber, type){
    const typeOfVariable = typeof myNumber;

    switch (typeOfVariable){
        case 'object':
            switch(type) {
                case 'null':
                    return myNumber === null;
                case 'array':
                    return Array.isArray(myNumber)
                case 'object':
                    return myNumber !== nul && !Array.isArray(myNumber);
                default:
                    return false;
            }
            default:
                return typeOfVariable === type;
    }
}

function type_check_v2 (variable, conf){
    for (key in conf) {
        switch (key) {
            case "type":
                if (!type_check_v1(variable, conf.type)) return false;
            case "value":
                if (!JSON.stringify(variable !== JSON.stringify(conf.value)))
                return false;
            case "enum":
                let found = false;
                for (subValue of conf.enum) {
                    if(type_check_v2(variable, {value: subValue})) {
                        found = true;
                        break;
                    }
                }

                if (!found) return false;
        }
    }

    return true;
}


function type_check_v2_2(value, checkers){
    if ("type" in checkers && !type_check_v1(value, checkers.type)) return false;
    if ("value" in checkers && value !== checkers.value) return false;
    if ("enum" in checkers && !checkers.enum.includes(value)) return false;
    return true;
}

module.exports.type_check_v1 = type_check_v1;
module.exports.type_check_v2 = type_check_v2;
