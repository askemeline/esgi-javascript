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

//console.log(type_check_v1({}, "null"));
//console.log(type_check_v1({}, "object"));
//console.log(type_check_v1({}, "array"));
//console.log(type_check_v1(null, "object"));
//console.log(type_check_v1(null, "null"));
//console.log(type_check_v1({}, "number"));
//console.log(type_check_v1([], "array"));
//console.log(type_check_v1([], "object"));

function type_check_v2(variable, conf) {
  for (key in conf) {
    switch (key) {
      case "type":
        if (!type_check_v1(variable, conf.type)) return false;
      case "value":
        if (JSON.stringify(variable) !== JSON.stringify(conf.value))
          return false;
      //
      case "enum":
          let found = false;
          for (subValue of conf.enum) {
              if (type_check_v2(variable, {value: subValue})) {
                  found = true;
                  break;
              }
          }
          if(!found) return false;
    }
  }

  return true;
}

function type_check_v2_2(value, checkers) {
  if ("type" in checkers && !type_check_v1(value, checkers.type)) return false;
  if ("value" in checkers && value !== checkers.value) return false;
  if ("enum" in checkers && !checkers.enum.includes(value)) return false;
  return true;
}

console.log(type_check_v2_2({ e: 4 }, { type: "object", value: { e: 4 } }));
