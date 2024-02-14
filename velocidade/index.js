const veiculo1 = prompt("Qual é o veículo que você está dirigindo? ")
const vel1 = parseFloat(prompt("Qual a velocidade do seu veículo? "))
const veiculo2 = prompt("Qual é o veículo que você está dirigindo? ")
const vel2 = parseFloat(prompt("Qual a velocidade do seu veículo? "))

if (vel1 > vel2) {
   alert(veiculo1 + " é mais rápido do que " + veiculo2)
} else if (vel1 < vel2) {
   alert(veiculo2 + " é mais rápido do que " + veiculo1)
} else {
   alert(veiculo1 + " e " + veiculo2 +  " tem a mesma velocidade ")
}