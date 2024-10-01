var salarioFixo = parseFloat(prompt("Qual o valor do seu salario"))
var carrosVendidos = parseInt(prompt("Quantos carros você vendeu?"))
var totalvendas = parseFloat(prompt("qual o valor total das vendas"))
var comissaoFixa = parseFloat(prompt("Qual o valor da sua comissao fixa?"))

var ValorComissao = comissaoFixa + carrosVendidos
var salarioFinal = salarioFixo + ValorComissao + (totalvendas * 0.05)
var salarioFinalF = salarioFinal.toFixed(2)
alert ("O seu salario final é " + salarioFinalF)  