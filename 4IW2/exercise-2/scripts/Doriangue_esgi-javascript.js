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
function type_check_v2(vari,type) {
	for (key in type) {
		switch (key) {
			case "type":
				if (!type_check_v1(vari, type.type)) return false;
				break;
			case "value":
				if(JSON.stringify(vari) !== JSON.stringify(type.value)) {
                    return false;
                };
                break;
			case "enum":
				type.enum.forEach(val => {
					if (!type_check_v2(vari, { value: val })) {
						return false;
					}
					return true;
				});
        }
    }
    return true;
}


module.exports.type_check_v1 = type_check_v1;
module.exports.type_check_v2 = type_check_v2;
