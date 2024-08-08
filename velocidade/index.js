const vei1 = prompt('Qual o nome do primeiro veículo?')
const vel1 = parseFloat(prompt('Qual a velocidade do primeiro veículo?'))

const vei2 = prompt('Qual o nome do segundo veículo?')
const vel2 = parseFloat(prompt('Qual a velocidade do segundo veículo?'))

if (vel1 > vel2) {
   alert(vei1 + ' é ' + ' mais rápido que ' + vei2)
} else if (vel1 < vel2) {
   alert(vei2 + ' é ' + ' mais rápido que ' + vei1)
} else {
   alert(vei1 + ' e ' + vei2 + ' possuem a mesma velocidade')
}