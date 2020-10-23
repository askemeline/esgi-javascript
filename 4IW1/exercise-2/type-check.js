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


console.log(type_check_v1({}, "null"))
console.log(type_check_v1({}, "object"))
console.log(type_check_v1({}, "array"))
console.log(type_check_v1(null, "object"))
console.log(type_check_v1(null, "null"))
console.log(type_check_v1({}, "number"))
console.log(type_check_v1([], "array"))
console.log(type_check_v1([], "array"))