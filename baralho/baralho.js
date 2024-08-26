const baralho = []
let opcao = ''

do {
    opcao = prompt(
        'Cartas no barulho: ' + baralho.length +
        '\n1.Adicionar carta\n2.Puxar carta\n3.Sair'
    )

    switch (opcao) {
        case '1':
            const novaCarta = prompt('Qual é a carta?')
            baralho.push(novaCarta)
            break
        case '2':
            const cartaPuxada = baralho.pop()
            if(!cartaPuxada) {
                alert('Não há nenhuma carta no barulho')
            } else {
                alert('Você puxou um(a) ' + cartaPuxada)
            }
            break
        case '3':
            alert('Encerrando...')
            break
        default:
            alert('Opção inválida')
        
    }

} while(opcao !== '3')