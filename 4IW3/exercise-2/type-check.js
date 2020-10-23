function type_check_v1(variable, type) {
  const typeOfVariable = typeof variable;
  switch (typeOfVariable) {
    case "object":
      switch (type) {
        case "null":
          return variable === null;
        case "array":
          return Array.isArray(variable);
        case "object":
          return variable !== null && !Array.isArray(variable);
        default:
          return false;
      }
    default:
      return typeOfVariable === type;
  }
}

function type_check_v1_2(value, type) {
  if (typeof value != "object") {
    return type === typeof value;
  } else {
    switch (type) {
      case "null":
        return value === null;
      case "array":
        return Array.isArray(value);
      default:
        return value !== null && !Array.isArray(value);
    }
  }
}

function type_check_v2(value, conf) {

}

console.log(type_check(null, "object"));
console.log(type_check_v1(null, "object"));

console.log(type_check(null, "null"));
console.log(type_check_v1(null, "null"));

console.log(type_check({}, "null"));
console.log(type_check_v1({}, "null"));

console.log(type_check([], "array"));
console.log(type_check_v1([], "array"));

console.log(type_check([], "object"));
console.log(type_check_v1([], "object"));

console.log(type_check({}, "number"));
console.log(type_check_v1({}, "number"));
