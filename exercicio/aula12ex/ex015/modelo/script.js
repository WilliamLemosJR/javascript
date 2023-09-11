function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date ()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <12) {
        //Bom Dia!
        img.src = 'imagens/foto-manha2.png'
        document.body.style.backgroundColor = '#e2cd9f'
    } else if (hora >=12 && hora <= 18) {
        //Boa Tarde!
        img.src = 'imagens/foto-tarde2.jpg'
        document.body.style.backgroundColor = '#b9846f'
    } else {
        //Boa Noite !
        img.src = 'imagens/foto-noite2.jpg'
        document.body.style.backgroundColor = '#515154' 
    }
}
