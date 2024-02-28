import { Veiculos } from "./Veiculos.js";
import { VeiculosNovos } from "./VeiculosNovos.js";


let palio = new Veiculos('Fiat', 'ELX', 'ghj-4729', 'Vermelha', '2005', 'Flex', 2)
console.table(palio)
let gol = new VeiculosNovos('volksvagen', 'gol bolinha', null, 'azul', '2020', 'diesel', 10, '67000', 'patio')
gol.setQuantidade = -1
gol.setTaxaEmplacamento = 700
gol.setEmplacado = true
gol.setPlaca = 'fgt-2343'
gol.setQuantidade = 1
gol.setQuantidade = -1
gol.setStatusVenda = true

console.table(gol)




