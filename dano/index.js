const nome1 = prompt("Qual é o nome do seu personagem? ")
const ataque = parseFloat(prompt("Qual é o poder de ataque do seu personagem? "))

const nome2 = prompt("Qual é o nome do personagem rival? ")
let life = parseFloat(prompt("Quantos pontos de vida ele tem? "))
const defesa = parseFloat(prompt("Qual é o poder de defesa do personagem rival? "))
const escudo = prompt("Ele possui escudo?[Sim/Não] ")

let danoCausado = 0

if(ataque > defesa && escudo === "Não") {
    danoCausado = ataque - defesa
} else if (ataque > defesa && escudo === "Sim") {
    danoCausado = (ataque - defesa) / 2
}

life -= danoCausado

alert(nome1 + " causou " + danoCausado + " pontos de dano em " + nome2)
alert(
    nome1 + "\nPoder de ataque: " + ataque + "\n\n" +
    nome2 + "\nPontos de vida: " + life +
    "\nPontos de defesa: " + defesa + "\nPossui escudo: " + escudo
) 