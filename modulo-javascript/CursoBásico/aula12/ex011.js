var idade = 77
if (idade < 16) {
    console.log(`Não vota`)
} else if (idade < 18 || idade > 65){
    console.log(`Voto é opcional`)
} else {
    console.log(`Voto é obrigatório`)
}


// Outra forma

var anos = 17

anos < 16 ? console.log(`Não vota`) : (anos < 18 || anos > 65 ? console.log(`Voto Opcional`) : console.log(`Voto obrigatório`))