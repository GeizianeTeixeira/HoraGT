function carregar () {
    var msg = document.querySelector('#msg')
    var img = document.querySelector('#manha')
    var  data = new Date()
    //var hora = data.getHours()
    var hora = 15
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12){
        //Bom dia!
        img.src= "manha.jpg"
        document.body.style.background = '#29F6B2'


    } else if (hora >=12 && hora <=19){
        //Boa tarde!
        img.src= "tarde.jpg"
        document.body.style.background = '#FFAD40'
    } else {
        //Boa noite!
        img.src= "noite.jpg"
        document.body.style.background = '#6D36DB'
   }
}