var nota1 = parseInt(prompt("Qual a nota 1 ?"))
var nota2 = parseInt(prompt("Qual a nota 2 ?"))
var media = (nota1 + nota2)/2
if (media >= 6){
    alert("Aluno aprovado " + media)
}else
    alert("Aluno reprovado " + media)
