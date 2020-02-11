function verificar() {
    var data = new Date() // Data atual
    var ano = data.getFullYear() // Somente o ano
    var fano = document.getElementById("txtano")
    var res = document.querySelector("div#res")
    if (fano.value.length == 0 || Number(fano.value) > ano) { // Se o ano é igual a 0 ou maior do que o ano atual
        alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement("img") // Criando uma tag img dentro do JavaScript
        img.setAttribute("id", "foto") // Criando um id foto para img
        if(fsex[0].checked) { // Obrigar o usuario a marcar uma das duas opções [0]
            genero = "Homem"
            if(idade >=0 && idade < 10){
                // Criança
                img.setAttribute("src", "foto-bebe-m.png")
            } else if (idade < 21) {
                // Jovem
                img.setAttribute("src", "foto-jovem-m.png")
            } else if (idade < 50) {
                // Adulto
                img.setAttribute("src", "foto-adulto-m.png")
            } else {
                // Idoso
                img.setAttribute("src","foto-idoso-m.png")
            }
        } else if (fsex[1].checked) {  // Obrigar o usuario a marcar uma das duas opções [1]
            genero = "Mulher"
            if(idade >=0 && idade < 10){
                // Criança
                img.setAttribute("src", "foto-bebe-f.png")
            } else if (idade < 21) {
                // Jovem
                img.setAttribute("src", "foto-jovem-f.png")
            } else if (idade < 50) {
                // Adulto
                img.setAttribute("src", "foto-adulto-f.png")
            } else {
                // Idoso
                img.setAttribute("src","foto-idoso-f.png")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) // Adicionando o elemento img
    }
    
}