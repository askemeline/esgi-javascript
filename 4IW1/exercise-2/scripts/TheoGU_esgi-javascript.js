function type_check_v1(val, arg2){
    
    return typeof val === arg2.toLowerCase().trim()
}

function type_check_v2(val, conf){

    let {type, value, enumerable} = conf
    const array = []
        
        if(type !== undefined){
            array.push(type_check_v1(val, conf.type))
        }
        
        if(value !== undefined){
            const newVal = isObject(val) ? Object.values(val) : val
            array.push(newVal[0] === value)
        }
        
        if(enumerable !== undefined){
            const newVal = isObject(val) ? Object.values(val) : val
            array.push(enumerable.includes(newVal[0]))
        }

        return array.includes(false) ? false : true
}


function isObject(value){
    return typeof value === "object"
}


function type_check(val, conf){
    
}






const obj = {
    props:{
        prop1: {type: "object"},
        prop2: {type:"string", enumerable: ["val1", "val2"]},
        prop3: {type:"object", props: {prop32: "number"}},
        prop4: {type:"array", props: ["boolean"]},
    }
}



module.exports.type_check_v1 = type_check_v1;
module.exports.type_check_v2 = type_check_v2;
module.exports.type_check = type_check;
