function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    // var hora = 22
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12) {
        // Bom dia!
        img.src = '3.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18){
        // Boa tarde!
        img.src = '2.png'
        document.body.style.background = '#FE9A2E'
    } else {
        // Boa noite!
        img.src = '1.png'
        document.body.style.background = '#27013C'
    }
}
