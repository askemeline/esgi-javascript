function type_check_v1(variable, type) {
  const typeOfVariable = typeof variable;
  switch (typeOfVariable) {
    case "string":
    case "number":
    case "boolean":
    case "undefined":
    case "symbol":
    case "function":
      return typeOfVariable === type;
    case "object":
      switch (type) {
        case "null":
          return variable === null;
        case "array":
          return Array.isArray(variable);
        case "object":
          return variable !== null && !Array.isArray(variable);
      }
  }
}

function type_check(variable, type) {
}

console.log()
