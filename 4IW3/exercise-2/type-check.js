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

function type_check(variable, type) {
  return typeof variable === type;
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
