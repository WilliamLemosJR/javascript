function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date ()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <12) {
        //Bom Dia!
        img.src = '../sr'
    } else if (hora >=12 && hora <= 18) {
        //Boa Tarde!
        img.src = 'imagem/foto-tarde2.jpg'
    } else {
        //Boa Noite !
        img.src = 'imagem/foto-noite.jpg'
    }
}
