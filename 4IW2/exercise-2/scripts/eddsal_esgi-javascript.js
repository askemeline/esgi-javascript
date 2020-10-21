
function type_check_v1(val, type) {
    if (typeof(val) === type) {
        return true
    }
}
console.log(type_check_v1(1, 'number'));
console.log(type_check_v1('edd', 'string'));




function type_check_v2(arg, type,arg2) {
    if (typeof(arg) === type) {
        return true
    }
    if (arg.value === arg2) {
        return true
    }
}
console.log(type_check_v2('edd', 'edd'))
console.log(type_check_v2('edd','string'))


module.exports.type_check_v1 = type_check_v1;
module.exports.type_check_v2 = type_check_v2;
