const turista = prompt("Qual é o seu nome turista? ")
let cidades = ""
contagem = 0 

let continuar = prompt ("Você já visitou alguma cidade?[Sim/Não] ")
 
while (continuar === "Sim") {
    let cidade = prompt("Qual é o nome da cidade que você já visitou? ")
    cidades += " - " + cidade + "\n"
    contagem++
    continuar = prompt("Você já visitou alguma cidade? [Sim/Não] ")
}

alert(
    "Turista: " + turista +
    "\nQuantidade de Cidades visitadas: " + contagem +
    "\nCidades visitadas:\n " + cidades
)

