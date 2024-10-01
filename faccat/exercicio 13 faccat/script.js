var nota1 = parseInt(prompt("Qual a nota 1?"))
var nota2 = parseInt(prompt("Qual a nota 2?"))
var nota3 = parseInt(prompt("Qual a nota 3?"))
var media = (nota1 * 2 + nota2 * 3 + nota3 * 5)/10
var media = media.toFixed(2)
alert("A sua media é " + media)

