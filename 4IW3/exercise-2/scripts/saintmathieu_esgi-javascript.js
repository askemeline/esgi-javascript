/* Exos - partie 2 */

function type_check_v1(arg1, arg2){
    let verifType = '';
    if(typeof(arg1) === arg2) {
        verifType = true;
    }
    console.log(verifType);
}

module.exports.type_check_v1 = type_check_v1;
