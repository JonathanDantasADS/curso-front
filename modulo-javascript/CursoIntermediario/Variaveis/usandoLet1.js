let numero = 1 // Não vai existir conflito nesse caso
{
    let numero = 2 // Nesse caso ele não sobrescreve porque o let considera esse escopo diferente do global
    console.log('dentro =', numero)
}
console.log('fora =', numero)

/* Saída
    dentro = 2
    fora = 1
*/