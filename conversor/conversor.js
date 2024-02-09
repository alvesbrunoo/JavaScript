const medida = parseFloat(prompt("Insira uma unidade de medida em metros: "))

const unidade = prompt(
    "Para qual unidade de medida deseja converter? " +
    "\n1-milímetros (mm)" +
    "\n2-centimetros (cm)" +
    "\n3-decímetros (dm)" +
    "\n3-decâmetros (dam)" +
    "\n5-hectômetro (mm)" +
    "\n6-quilômetro (mm)" 
)

switch (unidade) {
    case "1":
        alert("Resultado: " + medida + "m = " + medida * 1000 + "mm")
        break
    case "2":
        alert("Resultado: " + medida + "m = " + medida * 100 + "cm")
        break
    case "3":
        alert("Resultado: " + medida + "m = " + medida * 10 + "dm")
        break
    case "4":
        alert("Resultado: " + medida + "m = " + medida / 10 + "dam")
        break
    case "5":
        alert("Resultado: " + medida + "m = " + medida / 100 + "hm")
        break
    case "6":
        alert("Resultado: " + medida + "m = " + medida / 1000 + "km")
        break
    default:
        alert("Opção inválida")
        break
}