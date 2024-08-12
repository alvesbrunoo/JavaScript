const turista = prompt('Qual é o nome do turista?')
let cidades = ""
let contagem = 0

let confirmacao = prompt('Você já visitou alguma cidade? [Sim/Não]')

while (confirmacao === 'Sim') {
    let cidade = prompt('Qual o nome da cidade que você já visitou?')
    cidades +=  "-" + cidade + '\n'
    contagem++
    confirmacao = prompt('Você já visitou alguma outra cidade? [Sim/Não]')
}

alert('\nTurista: ' + turista + 
    '\nQuantidade de cidades visitadas: ' + contagem +
    '\nCidades visitadas:\n ' + cidades 
)