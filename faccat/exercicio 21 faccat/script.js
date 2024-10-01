var comeco = parseInt(prompt("Digite quando você começou a jogar? Apenas em horas"))
var fim = parseInt(prompt("Digite quando você acabou de jogar? Apenas em horas"))
var total = (fim - comeco)
if (total > 24){
    alert("Desclassificado, passou de 24 horas de jogo")
}
else
alert("Você jogou por " + total + "horas")