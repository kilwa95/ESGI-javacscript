const type_check_v1 = (valeur,type) => {
 if(type===typeof(valeur)){
     return true
 }
 else{
     return false
 }
}

console.log(type_check_v1(true,'boolean'))

