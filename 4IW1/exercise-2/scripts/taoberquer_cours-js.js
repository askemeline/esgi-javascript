function type_check_v1(value, type) {
  const typeOfVariable = typeof value;

  switch (typeOfVariable) {
    case 'object':
      switch (type) {
        case 'null':
          return value === null;
        case 'array':
          return Array.isArray(value);
        case 'object':
          return value !== null && ! Array.isArray(value);
        default:
          return false;
      }
    default:
      return typeOfVariable === type;
  }
}

function type_check_v2(value, checkers) {
  if ('type' in checkers && ! type_check_v1(value, checkers.type)) return false;
  if ('value' in checkers && value !== checkers.value) return false;
  if ('enum' in checkers && ! checkers.enum.includes(value)) return false;

  return true;
}

function type_check(value, checkers) {
  if (! type_check_v2(value, checkers)) return false;

  for (key in value) if (typeof value[key] === 'object' && ! type_check(value[key], checkers[key])) return false;

  return true;
}

module.exports.type_check_v1 = type_check_v1;
module.exports.type_check_v2 = type_check_v2;
module.exports.type_check = type_check;
