var anos = parseInt(prompt("Dgite a sua idade expressa em anos"))
var meses = parseInt(prompt("Digite a quantidade de meses desde o seu ultimo aniversario"))
var dias = parseInt(prompt("Digite os dias desde o ultimo mesversario"))
var total_anos = 365 * anos
var total_meses =  30 * meses
var resultado = total_anos + total_meses + dias
alert("A sua idade em dias é " + resultado)