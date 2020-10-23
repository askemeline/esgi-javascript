function isNotString(str){

    return typeof str !== "string" || str === ""
}

function ucfirst(str){
    if(isNotString(str)) return ""

    return str.charAt(0).toUpperCase() + str.slice(1)
}

function capitalize(str){
    if(isNotString(str)) return ""

    return str.split(' ').map(w => ucfirst(w.toLowerCase())).join(' ')
}

function camelCase(str){
    if(isNotString(str)) return ""

    return str.replace('_', ' ').split(' ').map(w => ucfirst(w.toLowerCase())).join('')
}

function snake_case(str){
    if(isNotString(str)) return ""

    return str.split(' ').join('_').toLowerCase()
}

function leet(str){
    if(isNotString(str)) return ""

    const alpha = {
        A:4,
        E:3,
        I:1,
        O:0,
        U:'(_)',
        Y:7
    }

    return str.split(' ').map(w => {
        w.split('').map(c => {
            if(c.toUpperCase() in alpha){
                c = c.toUpperCase().alpha
                console.log(c)
                return "finddd"
            }
            return "not"
        })
    })
}


function verlan(str){
    if(isNotString(str)) return ""

    return str.split(' ').map(w => w.split('').reverse().join('') ).join(' ')
}

function yoda(str){
    if(isNotString(str)) return ""

    return str.split(' ').reverse().join(' ')
}

function prop_access(obj, props) {
    if (typeof obj === "undefined" || !obj) return obj
    if (typeof props !== "string" || !props || props.trim() === "") return obj

    const res = props.split(".").map(keys => {
        if(!obj[keys]) return `${props} not exist`
        
        return obj = obj[keys]
    })

    return res[res.length - 1]
}

const prairie = {
    animal: {
        annaconda: {
            color: {
                test: "ok"
            },
            type: "hello"
        }
    }
}
var ok ;


console.log(prop_access(prairie, "animal.annaconda.color.test"))


module.exports.ucfirst = ucfirst;
module.exports.capitalize = capitalize;
module.exports.camelCase = camelCase;
module.exports.snake_case = snake_case;
module.exports.leet = leet;
module.exports.verlan = verlan;
module.exports.yoda = yoda;
module.exports.prop_access = prop_access;
