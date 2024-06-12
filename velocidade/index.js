const vei1 = prompt('Digite o nome do seu veículo')
const vel1 = parseFloat(prompt('Digite a velocidade do primeiro veículo')) 

const vei2 = prompt('Digite o nome do segundo veículo')
const vel2 = parseFloat(prompt('Digite a velocidade do segundo veículo'))

if (vel1 > vel2) {
   alert(vei1 + ' é mais rápido do que o ' + vei2)
} else if (vel1 < vel2) {
   alert(vei2 + ' é mais rápido do que o ' + vei1)
} else {
   alert(vei1 + ' e ' + vei2 + ' possuem a mesma velocidade ')
}