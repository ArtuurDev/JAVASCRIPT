// biblioteca de personalizaçao de saidas 
import  chalk  from "chalk";

import fs from 'fs';

// tratando erros
function tratarErro(erro) {
    throw new Error(chalk.red(erro.code, 'nao há arquivo no diretorio'))
}
 
// promisses async/await

async function pegarArquivo(caminhodoarquivo) {
    try {
        const encoding = 'utf-8'
    const texto = await fs.promises.readFile(caminhodoarquivo, encoding)
    console.log(chalk.green(texto))
    } catch(erro) {
        tratarErro(erro)
    }
    
}


// promisses com then() assincronos
//function pegarArquivo(caminhodoarquivo) {
//    const encoding = 'utf-8'
//   fs.promises.readFile(caminhodoarquivo, encoding)
    //  .then((texto)=> console.log(chalk.green(texto)))
    // tratando erro assincrono
    //.catch((erro) => tratarErro(erro))
//}

// tratando erros e lendo arquivos sincronos
//  function pegarArquivo(caminhodoarquivo) {
//    const encode = 'utf-8'
    // leitor de arquivos (fs.readfile)
//  fs.readFile(caminhodoarquivo, encode, (erro,texto) =>{
//        if (erro) {
//            tratarErro(erro)
//        }
//        console.log(chalk.green(texto));
//    } )
//}

pegarArquivo('./arquivos/texto.md')
