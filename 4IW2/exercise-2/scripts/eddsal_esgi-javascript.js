
// function type_check_v1(val, type) {
//     if ((typeof (val) === type) ||
//         (value === undefined && type === "undefined")||
//         (value === null && type === "object")) {
//         return true
//     }
//     return false
// }
// console.log(type_check_v1(1, 'number'));
// console.log(type_check_v1('edd', 'string'));
// console.log(type_check_v1(['sa'], 'array'));



function type_check_v1(variable, type) {
    switch (typeof variable) {
      case "symbol":
      case "number":
      case "string":
      case "boolean":
      case "undefined":
      case "function":
        return type === typeof variable;
      case "object":
        switch (type) {
          case "null":
            return variable === null;
          case "array":
            return Array.isArray(variable);
          default:
            return variable !== null && !Array.isArray(variable);
        }
    }
  }

console.log(type_check_v1(null, "null") === true);
console.log(type_check_v1(null, "object") === false);
console.log(type_check_v1({}, "null") === false);
console.log(type_check_v1(undefined, "undefined") === true);


// function type_check_v2(arg, type,arg2) {
//     if (typeof(arg) === type) {
//         return true
//     }
//     if (arg.value === arg2) {
//         return true
//     }
// }
// console.log(type_check_v2('edd', 'edd'))
// console.log(type_check_v2('edd','string'))

function type_check_v2(variable, conf) {
    for (toCheck in conf) {
      switch (toCheck) {
        case "type":
          if (type_check_v1(variable, conf.type) === false) return false;
          break;
        case "value":
          if (JSON.stringify(variable) !== JSON.stringify(conf.value))
            return false;
          break;
        case "enum":
          let found = false;
          for (subValue of conf.enum) {
            found = type_check_v2(variable, { value: subValue });
            if (found) break;
          }
          if (!found) return false;
          break;
      }
    }
    return true;
  }
  

module.exports.type_check_v1 = type_check_v1;
module.exports.type_check_v2 = type_check_v2;
