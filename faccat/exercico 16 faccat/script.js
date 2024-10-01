var maça = parseInt(prompt("Qual a quantidade de maças que você comprou ?"))
if (maça <=12){
    total = maça * 1.50
    alert("O preço total é de" + total)
}else
if(maça > 12){
    total = maça * 1.00
    alert("O preço total é de" + total)
}