function calcularMedia(a, b) {
    const media = (a + b) / 2
    return media
}

// const resultado = calcularMedia(7, 2)
console.log(calcularMedia(7, 2))

function criarProduto(nome, preco) {
    const produto = {
        nome,
        preco,
        estoque: '1'
    }
    return produto
}

// const nomeProduto = criarProduto
// console.log(nomeProduto("Smartphone Samsung Galaxy", 1000))
console.log(criarProduto("Smartphone Samsung Galaxy", 1000))

function areaRetangular(base, altura) {
    return base * altura
}

console.log(areaRetangular(9, 8))

function areaQuadrada(lado) {
    return areaRetangular(lado, lado)
}

console.log(areaQuadrada(7))


function ola() {
    let texto = '...'
    texto = 'Olá, mundo'
    return texto
}

// const palavra = ola
// console.log(palavra())
console.log(ola())


function maiorIdade(idade) {
    if (idade >= 18) {
        return 'Maior de idade'
    } else {
        return 'Menor de idade'
    }
}

console.log(maiorIdade(30))
console.log(maiorIdade(10))