function type_check_v1(myNumber, typecheck){
    switch (typecheck) {
        case 'number':
        case 'StringNotNumber':
        case 'BooleanNotNumber':
        case 'object':
        case 'string':
            return (typeof(myNumber) === typecheck);
          break;
        case 'undefined':
            return myNumber === undefined;
            case 'null':
                return myNumber === null;
        default:
         return false;
      }
}
str = null;
console.log(type_check_v1(str,'null'))



module.exports.type_check_v1 = type_check_v1;
