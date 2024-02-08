const veiculo1 = prompt("Digite o nome do primeiro veiculo: ")
const vel1 = parseFloat(prompt("Informe a velocidade do primeiro carro: "))

const veiculo2 = prompt("Digite o nome do segundo veiculo: ")
const vel2 = parseFloat(prompt("Informe a velocidade do segundo carro: "))

if (vel1 > vel2) {
   alert(veiculo1 + " é mais rápido que " + veiculo2)
} else if (vel2 > vel1) {
   alert(veiculo2 + " é mais rápido que " + veiculo1)
} else {
   alert(veiculo1 + " e " + veiculo2 + " possuem a mesma velocidade")
}
