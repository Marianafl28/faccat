let valor1 = parseFloat(prompt("Informe o primeiro valor: "))
let valor2 = parseFloat(prompt("Informe o segundo valor: "))

if ( valor1 > valor2){
    alert ("O primeiro é maior " + valor1 )
} else if ( valor2 > valor1){
    alert ("O segundo é maior " + valor2)
} else {
    alert ("Valores iguais!")
}