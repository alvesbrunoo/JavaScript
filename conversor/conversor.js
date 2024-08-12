const medida = parseFloat(prompt('Insira uma medida em metros:'))

const unidade = prompt('Para qual medida você deseja converter?\n' +
    '\n1.Milímetro (mm):' +
    '\n2.Centímetro (cm):' +
    '\n3.Decímetro (mm):' +
    '\n4.Decâmetro (dam):' +
    '\n5.Hectômetro (hm):' +
    '\n6.Quilômetro (km):' +
    '\n7.Sair'
)

switch (unidade) {
    case '1':
        alert('A medida em milímetro é ' + medida * 1000)
        break
    case '2':
        alert('A medida em centímetros é ' + medida * 100)
        break
    case '3':
        alert('A medida em centímetros é ' + medida * 10)
        break
    case '4':
        alert('A medida em centímetros é ' + medida / 10)
        break
    case '5':
        alert('A medida em centímetros é ' + medida / 100)
        break
    case '6':
        alert('A medida em centímetros é ' + medida / 1000)
        break
    case '7':
        alert('Saindo...')
        break
    default:
        alert('Opção inválida!')
        break
}