const imoveis = []
let opcao = ''

do {
    opcao = prompt('Bem-vindo ao cadastro de Imóveis.\nTotal de imóveis: ' + imoveis.length + '\n\nEscolha uma opção:\n1.Adicionar imóvel\n2.Listar imóvel\n3.Sair')

    switch (opcao) {
        case '1':
            const imovel = {}
            imovel.propritario = prompt('Informe o nome do proprietário do imóvel:')
            imovel.quarto = prompt('Informe a quantidade de quarto do imóvel:')
            imovel.banheiro = prompt('Informe a quantidade de banheiro do imóvel:')
            imovel.garagem = prompt('O imóvel possui garagem? (Sim/Não)')


            const confirmacao = confirm(
                'Salvar esse imóvel?\n' + 
                '\nProprietário: ' + imovel.propritario +
                '\nQuartos: ' + imovel.quarto +
                '\nBanheiros: ' + imovel.banheiro + 
                '\nPossui garagem? ' + imovel.garagem
            )
            
            if (confirmacao) {
                imoveis.push(imovel)
            }
            break
            
        case '2':
            for(let i = 0; i < imoveis.length; i++) {
                alert(
                    'Imóvel: ' + (i + 1) +
                    '\nProprietário: ' + imoveis[i].propritario +
                    '\nQuartos: ' + imoveis[i].quarto +
                    '\nBanheiros: ' + imoveis[i].banheiro +
                    '\nPossui garagem? ' + imoveis[i].garagem
                )
            }
            break
        
        case '3':
            alert('Encerrando...')   
            break
        
        default:
            alert('Opção inválida')
    }

} while (opcao !== '3');


