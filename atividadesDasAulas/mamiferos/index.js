// execuçoes / chamadas

import {Gato} from './Gato.js'

import { Cachorro } from "./Cachorro.js"

let bob = new Cachorro('bob', 'pudlloe', 4 )

console.log(bob)

console.log(bob.info)


function tipoMamifero(valor) {
    if (valor === 'miauu') {
        console.log('voçe é dona de uma gata')
    } else if ( valor === 'auu'){
        console.log('voçe é dono de um cachorro')
    } else{
        console.log('nao consegui identificar')

    }

}


let mel = new Gato('mel')


console.log(mel, 4)

tipoMamifero(bob.late)
tipoMamifero(mel.mia)