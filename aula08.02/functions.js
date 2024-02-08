function multiplicar(){
    let multiplicar = 1
    for (i in arguments){
        multiplicar *= arguments[i]

    } return {multiplicar, arguments}
}

console.log(multiplicar(2,5))