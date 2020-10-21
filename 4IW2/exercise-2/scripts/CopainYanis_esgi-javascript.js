function type_check_v1(value, type) {
  switch(typeof value) {
    case "boolean":
    case "string":
    case "number":
    case "undefined":
    case "function":
        return type === typeof value;
    case "object":
       switch(type) {
           case "array":
               return Array.isArray(value);
           case "null":
               return value === null;
           default:
               return data !== null && !Array.isArray(value);
       }
   }

   return false
}






module.exports.type_check_v1 = type_check_v1;
