function type_check_v1(variable, type) {
  const typeOfVariable = typeof variable;

  switch (typeOfVariable) {
    case "object":
      switch (type) {
        case "null":
          return variable === null;
        case "array":
          return Array.isArray(variable);
        
      }
    default:
      return typeOfVariable === type;
  }
}
