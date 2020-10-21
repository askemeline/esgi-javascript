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
               return value !== null && !Array.isArray(value);
       }
   }

   return false
}


function type_check_v2(value, object) {
   for (let key of  Object.keys(object)) {
       switch(key) {
          case 'type': 
            if (!type_check_v1(value, object[key])) return false;
            break;
          case 'value':
             if (JSON.stringify(value) !== JSON.stringify(object[key])) return false;
            break;
          case 'enum':
             let check = false;
             for (let val of object[key]) {
                check = type_check_v2(value, {val});
                if (check) break;
             }
             if(!check) return false;
        }
    }
}



module.exports.type_check_v1 = type_check_v1;
module.exports.type_check_v2 = type_check_v2;
