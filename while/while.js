const turista = prompt("E aí, turista! Qual é o seu nome turista? ")
let cidades = ""
let contagem = 0

let continuar = prompt("Você já visitou alguma cidade? (Sim/Não)")

while (continuar === "Sim") {
    let cidade = prompt("Qual é o nome da cidade visitada? ")
    cidades += " - " + cidade + "\n"
    contagem++
    continuar = prompt("Você já visitou alguma outra cidade? (Sim/Não) ")
}

alert (
    "Turista: " + turista +
    "\nQuantidade de cidades visitadas: " + contagem +
    "\nCidades visitadas:\n" + cidades
)

