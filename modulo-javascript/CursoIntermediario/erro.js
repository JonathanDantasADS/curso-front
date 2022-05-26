function tratarErrorLancar(erro){
    // throw new Error('...')
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date,
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErrorLancar(e)
    } finally {
        console.log('Final')
    }
}

// const obj = { nome: 'Jonathan'}
const obj = { name: 'Jonathan'}
imprimirNomeGritado(obj)