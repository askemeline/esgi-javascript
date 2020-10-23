function type_check_V1(value, type) {
  return typeof value === type;
}

function type_check_V2(value, checkers) {
  if (! 'type' in checkers || type_check_V1(value, checkers.type)) return false;
  if (! 'value' in checkers || value != checkers.value) return false;
  if (! 'enum' in checkers || ! checkers.enum.includes(value)) return false;

  return true;
}


