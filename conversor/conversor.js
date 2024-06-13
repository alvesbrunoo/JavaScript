const medida = parseFloat(prompt('Insira a medida em metros:'))

const unidade = prompt(
    'Para qual unidade deseja converte?' +
    '\n1.milímetro (mm)' +
    '\n2.centímetro (cm)' +
    '\n3.decímetro (dm)' +
    '\n4.decâmetro (dam)' + 
    '\n5.hectômetro (hm)' +
    '\n6.quilômetro (km)' + 
    '\n7.Sair'
)

switch(unidade) {
    case '1':
        alert('Resultado: ' + medida + 'm = ' + medida * 1000 + 'mm')
        break

     case '2':
        alert('Resultado: ' + medida + 'm = ' + medida * 100 + 'cm')
        break
        
    case '3':
        alert('Resultado: ' + medida + 'm = ' + medida * 10 + 'dm')
        break
        
    case '4':
        alert('Resultado: ' + medida + 'm = ' + medida / 10 + 'dam')
           break
        
    case '5':
        alert('Resultado: ' + medida + 'm = ' + medida / 100 + 'hm')
        break

    case '6':
        alert('Resultado: ' + medida + 'm = ' + medida / 1000 + 'km')
        break

    case '7':
        break

    default:
        alert('Opção inválida')
        break
} 

