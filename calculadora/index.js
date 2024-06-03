const num1 = prompt('Digite o primeiro número:')
const num2 = prompt('Digite o segundo número:')

const x = parseFloat(num1)
const y = parseFloat(num2)

const soma = x + y
const subtracao = x - y
const divisao = x / y
const multiplicacao = x * y

alert(
    "\nSoma: " + soma +
    "\nSubtração: " + subtracao +
    "\nMultiplicação: " + multiplicacao +
    "\nDivisão: " + divisao
  )