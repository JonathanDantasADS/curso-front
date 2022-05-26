function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''

        // Carregando imagem
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 18) {
                // Foto jovem
                img.setAttribute('src', 'img/jovem_m.png')
            } else if (idade <= 60) {
                // Foto adulto
                img.setAttribute('src', 'img/adulto_m.png')
            } else {
                // Foto Idoso
                img.setAttribute('src', 'img/idoso_m.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 17) {
                // Foto jovem
                img.setAttribute('src', 'img/jovem_f.png')
            } else if (idade <= 60) {
                // Foto adulto
                img.setAttribute('src', 'img/adulta_f.png')
            } else {
                // Foto Idoso
                img.setAttribute('src', 'img/idosa_f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}