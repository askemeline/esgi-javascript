function type_check_v1(myNumber, typecheck){
    switch (typecheck) {
        case 'number':
        case 'StringNotNumber':
        case 'BooleanNotNumber':
        case 'object':
        case 'function':
        case 'string':
            return (typeof(myNumber) === typecheck);
          break;
        case 'undefined':
            return myNumber === undefined;
            case 'null':
            case 'nullNotObject':
                return myNumber === null;
            case 'array':
                return Array.isArray(myNumber);
        default:
         return false;
      }
}



module.exports.type_check_v1 = type_check_v1;
