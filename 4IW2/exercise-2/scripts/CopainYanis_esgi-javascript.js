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


function type_check(value, object){
    for(let key of Object.keys(object)) {
        switch(key) {
             case 'type':
             case 'value':
             case 'enum':
                 let conf = {};
                 conf[key] = object[key];
                 if(!type_check_v2(value, conf)) return false;
                 break;
            case 'properties':
               for(let property of Object.keys(conf[key])) {
                   if(value[property] === undefined) return false;
                   if(!type_check(value[property], conf[key][property])) return false;
                   return false;
               }
              break;
          }
     }
     return true;
}



module.exports.type_check_v1 = type_check_v1;
module.exports.type_check_v2 = type_check_v2;
module.exports.type_check = type_check;
