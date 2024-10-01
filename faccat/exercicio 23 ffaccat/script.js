let nome = prompt("Coloque seu nome")
let sexo = prompt("coloquee seu sexo")
let altura = prompt("Digite sua altura")
let pesoIdeal

if (sexo == "M"){
    pesoIdeal = (72.7 * altura) - 58
    alert("O seu peso ideal é de: "+pesoIdeal)
}else{
    pesoIdeal = (62.1 * altura) - 44.7
    alert("O seu peso ideal é de: "+pesoIdeal)
}