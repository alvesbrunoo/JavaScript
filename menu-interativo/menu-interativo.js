let opcoes = ""
do { opcoes = prompt("Seja bem-vindo(a)!\n" +
"\n1. - Opção Um" +
"\n2. - Opção Dois" +
"\n3. - Opção Três" +
"\n4. - Opção Qautro" +
"\n5. - Encerrar") 

switch (opcoes) {
    case "1":
        alert("Você escolheu a opção 1")
        break
    case "2":
        alert("Você escolheu a opção 2")
        break
    case "3":
        alert("Você escolheu a opção 3")
        break
    case "4":
        alert("Você escolheu a opção 4")
        break
    case "5":
        alert("Encerrando o programa...")
        break
    default:
        alert("Opção inválida")
}

} while (opcoes !== "5");