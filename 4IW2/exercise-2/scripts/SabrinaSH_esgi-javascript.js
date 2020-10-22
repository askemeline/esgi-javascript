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
          if (!found) found = type_check_v2(variable, { value: subValue });
          if (found) break;
        }
        if (!found) return false;
        break;
    }
  }
  return true;
}

function type_check(variable, conf) {
  if (type_check_v2(variable, conf) === false) {
    return false;
  } else if (type_check_v1(conf.properties, conf.type) === false) {
    return false;
  }
  return type_check(conf.properties, conf.type);
}


module.exports.type_check_v1 = type_check_v1;
module.exports.type_check_v2 = type_check_v2;
module.exports.type_check = type_check;
