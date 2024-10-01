var estoque = parseInt(prompt("Qual a quantidade no estoque?"))
var maxima = parseInt(prompt("Qual a quantidade maxima no estoque?"))
var minima = parseInt(prompt("Qual a quantidade minima no estoque?"))

var quantidade_media = (maxima + minima)/2
if (estoque >= quantidade_media){
    alert("Não efetuar compra")
}else{
    alert("Efetuar compra")
}