function register(element) {
    const username = element.children.usarname.value
    const password = element.children.password.value
    const passwordConfirmation = element.children.passwordConfirmation.value

    if (password === passwordConfirmation) {
        alert('Usuário ' + username + ' registrado com sucesso!' )
    } else {
        alert('As senhas não conferem!')
    }
}