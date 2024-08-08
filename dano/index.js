const atacante = prompt("Qual é o nome do personagem atacante?")
const poderAtaque = parseFloat(prompt("Qual é o seu poder de ataque?"))

const defensor = prompt("Qual é nome do personagem defensor?")
const poderDefesa = parseFloat(prompt('Qual o poder de defesa?'))
let pontosDeVida = parseFloat(prompt("Quantos pontos de vida ele possui?"))
const escudo = prompt('Possui escudo? (Sim/não)')

let danoCausado = 0

if (poderAtaque > poderDefesa && escudo === 'Não') {
  danoCausado = poderAtaque - poderDefesa
} else if (poderAtaque > poderDefesa && escudo === 'Sim') {
  danoCausado = (poderAtaque - poderDefesa) / 2
} else if (poderAtaque < poderDefesa) {
  danoCausado = 0
}

pontosDeVida -= danoCausado

alert(atacante + ' causou ' + danoCausado + ' pontos de dano ' + defensor) 

alert(
  '\nPoder de ataque: ' + poderAtaque + 
  defensor + '\nPontos de vida: ' + pontosDeVida + 
  '\nPontos de defesa: ' + poderDefesa + '\nPossui escudo: ' + escudo
)
