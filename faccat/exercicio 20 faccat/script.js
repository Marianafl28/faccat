var valor1 = parseInt(prompt("Digite um valor"))
var valor2 = parseInt(prompt("Digite um valor"))
if (valor1 == valor2){
    alert("Numeros iguais")
}else
if(valor1 < valor2){
    alert("Em ordem crescente " + valor1 + "e " + valor2)
}
else
alert("Em ordem crescente " + valor2 + "e " + valor1)