const conversor = parseFloat(prompt("Escolha um número para ser coverteido: "))
const unidade = prompt("1.milímetro (mm)\n2.centímetro (cm)\n3.decímetro (dm)\n4.decâmetro (dam)\n5.hectômetro (hm)\n6.quilômetro (km)")

switch (unidade) {
    case "1":
        alert("O núrmero escolhido foi: " + conversor + "m = " + conversor * 1000 + "mm")
        break
    case "2":
        alert ("O núrmero escolhido foi: " + conversor + "m = " + conversor * 100 + "cm")
        break
    case "3":
        alert("O núrmero escolhido foi: " + conversor + "m = " + conversor * 10 + "dm")
        break
    case "4":
        alert("O número escolhido foi: " + conversor + "m = " + conversor / 10 + "dam")
        break
    case "5":
        alert("O núrmero escolhido foi: " + conversor + "m = " + conversor / 100 + "hm")
        break
    case "6":
        alert("O núrmero escolhido foi: " + conversor + "m = " + conversor / 1000 + "km")
        break
    default:
        alert("Opção inválida")
        break
}