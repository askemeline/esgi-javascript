function type_check_v1(myNumber, typecheck){
    switch (typecheck) {
        case 'number':
        case 'StringNotNumber':
        case 'BooleanNotNumber':
        case 'object':
            return (typeof(myNumber)== typecheck);

          console.log('Mangoes and papayas are $2.79 a pound.');
          // expected output: "Mangoes and papayas are $2.79 a pound."
          break;
        default:
         return false;
      }
}



module.exports.type_check_v1 = type_check_v1;
