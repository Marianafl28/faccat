var temperaturaF = parseFloat(prompt("Qual a temperatura em Fahrenheit?"))
var temperaturC = (temperaturaF - 32)*(5/9)
var temperaturC = temperaturC.toFixed(2)
alert("A temperatura em graus é " + temperaturC)