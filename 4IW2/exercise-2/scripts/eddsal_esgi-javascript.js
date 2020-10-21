
function type_check_v1(val, type) {
    if (typeof(val) === type) {
        return true
    }
}
console.log(type_check_v2(1, 'number'));


module.exports.type_check_v1 = type_check_v1;
module.exports.type_check_v2 = type_check_v2;
