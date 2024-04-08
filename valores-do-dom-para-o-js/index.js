function register(element) {
    const usarname = element.children.usarname.value
    const password = element.children.password.value
    const passwordConfirmation = element.children.passwordConfirmation.value

    if (password === passwordConfirmation) {
        alert("Usarname " + usarname + " registered! ") 
    } else {
        alert("The passwords are different")
    }

    console.log({ usarname, password, passwordConfirmation})
}