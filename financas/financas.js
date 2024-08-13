let saldo = parseFloat(prompt('Qual é o seu saldo atual?'))

let opcao = ""

do {
    opcao = prompt('Escolha o que você deseja fazer:' +
        '\nSaldo disponível: R$ ' + saldo +
        '\n1.Adicionar dinheiro' +
        '\n2.Remover dinheiro' +
        '\n3.Encerrar' 
    )

    switch (opcao) {
        case '1':
            saldo += parseFloat(prompt('Qual a quantidade de dinheiro que deseja colocar?'))
            break
        case '2':
            saldo -= parseFloat(prompt('Qual a quantidade de dinheiro que deseja remover?'))
            break
        case '3':
            alert('Encerrando...')
            break
        default:
            alert('Opção inválida')
    }
    
} while (opcao !== '3')
