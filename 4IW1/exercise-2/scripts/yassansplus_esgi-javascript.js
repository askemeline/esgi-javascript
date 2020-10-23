function type_check_v1(myNumber, typecheck){
    switch (typecheck) {
        case 'number':
        case 'StringNotNumber':
        case 'BooleanNotNumber':
        case 'object':
        case 'string':
        case 'null':
            return (typeof(myNumber) === typecheck);
          break;
        case 'undefined':
            return myNumber === undefined;

        default:
         return false;
      }
}
console.log(typeof(type_check_v1(1,'number')))



module.exports.type_check_v1 = type_check_v1;
