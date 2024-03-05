function calcularTriangulo() {
    const base = parseFloat(prompt("Informe a área do triângulo: "))
    const altura = parseFloat(prompt("Informe a altura do triângulo: "))
    return base * altura / 2
}

function calcularRetangulo() {
    const base = parseFloat(prompt("Informe a área do retangulo: "))
    const altura = parseFloat(prompt("Informe a altura do retangulo: "))
    return base * altura 
}

function calcularQuadrado() {
    const lado = parseFloat(prompt("Informe a área do quadrado: "))
    return lado * lado
}

function calcularTrapezio() {
    const baseMaior = parseFloat(prompt("Informe a base maior do trapézio: "))
    const baseMenor = parseFloat(prompt("Informe a base menor do trapézio: "))
    const altura = parseFloat(prompt("Informe a altura do trapézio: "))
    return (baseMaior + baseMenor) * altura / 2
}

function calcularCirculo() {
    const raio = parseFloat(prompt("Informe o raio do círculo: "))
    return  (3.14 * raio * raio)
}

function exibirMenu() {
    return prompt(
        "Calculadora Geométrica\n" +
        "1. Calcular área de triângulo\n" +
        "2. Calcular área de retângulo\n" +
        "3. Calcular área de quadrado\n" +
        "4. Calcular área de trapézio\n" +
        "5. Calcular área de círculo\n" +
        "6. Sair\n"
    )
}

function executar() {
    let opcao = " "
    
    do {
        opcao = exibirMenu()
        let resultado

        switch(opcao) {
            case "1":
                resultado = calcularTriangulo()
                break
            case "2":
                resultado = calcularRetangulo()
                break
            case "3":
                resultado = calcularQuadrado()
                break
            case "4":
                resultado = calcularTrapezio()
                break
            case "5":
                resultado = calcularCirculo()
                break
            case "6":
                alert("Encerrando...")
                break
            default:
                alert("Opção inválida")
        }
        if (resultado) {
            alert("Resultado: " + resultado)
        }
    } while (opcao !== "6");
}

executar()