var total_eleitores = parseInt(prompt("Digite o total de eleitores"))
var vt_brancos = parseInt(prompt("Digite o numero de votos brancos"))
var vt_nulos = parseInt(prompt("Digite a quantidade de votos nulos"))
var vt_validos = parseInt(prompt("Digite a quantidade de votos validos"))
var porcentagem_vt_branco = vt_brancos/ total_eleitores * 100
var porcentagem_vt_nulos = vt_nulos/ total_eleitores * 100
var porcentagem_vt_validos = vt_validos/total_eleitores * 100
alert("A porcentagem de votos brancos " + vt_brancos + " é de " + porcentagem_vt_branco)
alert("A porcentagem de votos nulos " + vt_nulos + " é de " + porcentagem_vt_nulos)
alert("A porcentagem de votos validos " + vt_validos + " é de " + porcentagem_vt_validos)