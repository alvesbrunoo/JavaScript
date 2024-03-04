function dobro(x) {
    console.log("O dobro de " + x + " é " + (x * 2))
}
dobro(5)

function dizerOla(nome = "mundo") {
    console.log("Olá," + nome + "!")
}

dizerOla("Bruno")
dizerOla()

function soma(a, b) {
    console.log(a + b)
}
soma(7, 5)

function novoUsuario(nome, email, senha, tipo = "leitor") {
    const usuario = { nome, email, senha, tipo }
    console.log(usuario)
}

criarUsuario("Bruno", "bruno@email.com", "1234")
novoUsuario("Bruno", "bruno@email.com", "1234")

function  parametrosDoJeitoErrado(nome, telefone, endereco, aniversario, email, senha) {
    // ...
}

function parametrosDoJeitoCerto(usuario) {
    // ...
}


parametrosDoJeitoErrado("nome", "telefone", "endereco", "aniversario", "email", "senha")
const dadosDoUsuario = {
    nome: "",
    telefone: "",
    email: "",
    senha: "",
    aniversario: "",
    endereco: ""
}
parametrosDoJeitoCerto(dadosDoUsuario)
