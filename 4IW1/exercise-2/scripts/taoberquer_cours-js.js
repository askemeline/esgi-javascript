function type_check_v1 (value, type) {
  const typeOfVariable = typeof value;

  if (typeOfVariable !== 'object') return typeOfVariable === type;
  if (type === 'object') return value !== null && ! Array.isArray(value);

  return (type === 'null' && value === null) || (type === 'array' && Array.isArray(value));
}

function better_includes (array, search) {
  for (value of array) if (value === search) return true;

  return false;
}

function type_check_v2(value, checkers) {
  if ('type' in checkers && ! type_check_v1(value, checkers.type)) return false;
  if ('value' in checkers && JSON.stringify(value) !== JSON.stringify(checkers.value)) return false;
  if ('enum' in checkers && ! better_includes(checkers.enum,value)) return false;

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
