// Funções de alta-ordem, ou high-order functions, são funções que
// recebem outras funções como parâmetro e as executam em algum momento
function calcular(a, b, operacao) {
    console.log("Realizando uma operação.")
    const resultado = operacao(a, b)
    return resultado
}

function somar(x, y) {
    console.log("Realizando soma.")
    return x + y
}

console.log(calcular(3, 5, somar))
console.log(somar) // Retorna a própria função
console.log(somar(1, 1))  // Chama a função (retorna o resultado da função)

// Também podemos escrever funções anônimas dentro da própria chamada da high-order function
console.log(calcular(9, 2, function(x, y){
    console.log("Realizando subtração.")
    return x - y
}))

// Essas funções que são passadas como parâmetros geralmente são chamadas de callbacks
// Um exemplo comum de high-order function no javascript é a função .forEach() dos arrays
function exibirElemento(elemento, indice, array) {
    console.log({
        elemento,
        indice,
        array
    })
}

// Forma tradicional
const lista = ["Maçã", "banana", "Laranja", "Limão", "Uva"]
for (let i = 0; i < lista.length; i++) {
    exibirElemento(lista[i], i, lista)
}
// Forma funcional
lista.forEach(exibirElemento)
// Também poderia ser feito:
lista.forEach(function(elemento, indice, array){
    console.log({
        elemento,
        indice,
        array
    })
})

