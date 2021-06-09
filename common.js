function funname(a){
    console.log(`Inside Function ${a.name}`)
}

funname({name:'Gowtham'})

var arrfunc = (b) =>{
    console.log(`Its ARROW function ${b}`)
}
arrfunc('Executed Correctly')

function funname1(){
    console.log(`Executing a simple function`)
}

module.exports = funname
module.exports = arrfunc
module.exports = funname1



// var accesscommon = require('./helper')
// console.log(accesscommon('Gowtham')) 