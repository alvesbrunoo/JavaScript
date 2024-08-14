const numero = prompt('Qual é a tabuada que você deseja ver?')
let resultado = ''

for (let fator = 1; fator <= 20; fator++) {
    resultado += ' -> ' + numero + ' * ' + fator + ' = ' + (numero * fator) + '\n'
}

alert('O resultado da tabuada do ' + numero + ': \n' + resultado)