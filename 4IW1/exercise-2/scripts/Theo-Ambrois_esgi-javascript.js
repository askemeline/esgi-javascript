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


function type_check_v2(variable, conf) {
  for (key in conf) {
    switch (key) {
      case "type":
        if (!type_check_v1(variable, conf.type)) return false;
        break;
      case "value":
        if (JSON.stringify(variable) !== JSON.stringify(conf.value))
          return false;
        break;
      //
      case "enum":
        enum_loop: {
          for (subValue of conf.enum) {
            if (type_check_v2(variable, { value: subValue })) {
              break enum_loop;
            }
          }
          return false;
        }
    }
  }

  return true;
}


function type_check(arg, types) {
let isChecked = type_check_v2(arg, types);

if(!types.properties) return isChecked

for (const typeKey in types.properties) {
isChecked = type_check(
type_check_v1(arg, 'object') ? arg[typeKey] : arg
, types.properties[typeKey]
)
if (!isChecked) break
}

return isChecked
}


module.exports.type_check_v1 = type_check_v1;
module.exports.type_check_v2 = type_check_v2;
module.exports.type_check = type_check;
