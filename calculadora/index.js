const num1 = prompt('Coloque o primeiro número:')
const num2 = prompt('Coloque o segundo número:')

const x = parseFloat(num1)
const y = parseFloat(num2)

const soma = x + y
const subtracao = x - y
const divisao = x / y
const multiplicacao = x * y

let operacao = ''

do {
  operacao = prompt('Qual operação você deseja usar?\n' + 
    '\n1.Soma' +
    '\n2.Subtração' +
    '\n3.Divisão' +
    '\n4.Multiplicação' +
    '\n5.Sair' 
  )

  switch (operacao) {
    case '1':
      alert(soma)
      break
    case '2':
      alert(subtracao)
      break
    case '3':
      alert(divisao)
      break
    case '4':
      alert(multiplicacao)
      break
    case '5':
      alert('Encerrando...')
      break
    default:
      alert('Opção inválida!')
      break
  }
} while (operacao !== '5')


// alert (
//   'Resultados:\n' +
//   '\nSoma: ' + soma +
//   '\nSubtração: ' + subtracao +
//   '\nDivisão: ' + divisao +
//   '\nMultiplicação: ' + multiplicacao
// )



