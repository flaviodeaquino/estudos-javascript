function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`
    //var hora = 22
    if(hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'imagens/manha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >=12 && hora <18) {
        //BOA TARDE!
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        //BOA NOITE!
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#022B5F'
    }
}