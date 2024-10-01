var salario_hora = parseInt(prompt("Qual seu salario por hora?"))
var horas = parseInt(prompt("Quantas horas você trabalhou essa semana?"))
var horas = horas * 4
var salario_total = 0
if (horas > 40){
  var  hora_extra = horas - 40
var salario_extra = hora_extras * (salario_hora * 1.5)
}
else{
    salario_total = horas * salario_hora
    alert("Você trabalhou " + horas + "horas essa semana " + "e seu salario por hora é de R$ " + salario_hora.toFixed(2) + "com um total de R$ " + salario_total.toFixed(2))
 }
