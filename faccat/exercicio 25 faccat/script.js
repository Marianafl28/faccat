var numero = parseInt(prompt("Qual o numero da sua conta?"))
var saldo = parseInt(prompt("Qual o numero de saldo sua conta?"))
var debito = parseInt(prompt("Qual o numero de debito sua conta?"))
var credito = parseInt(prompt("Qual o numero decredito sua conta?"))

var saldo_atual = saldo - debito + credito
alert ("Seu saldo é de " + saldo_atual)
if (saldo_atual >= 0){
    alert("Saldo positivo")
}else{
    alert("Saldo negativo")
}