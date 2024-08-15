function show() {
  const contactList = document.getElementById('contact-list')
  console.log(contactList)

  const liElement = document.getElementsByTagName('li')
  console.log(liElement)

  const contacInput = document.getElementsByClassName('contact-input')
  console.log(contacInput)

  const contact1 = document.getElementsByName('contact1')
  console.log(contact1)

  const contacts = document.querySelectorAll('#contact-list > li > label')
  console.log(contacts)

  const contact = document.querySelector('#contact-list > li > label')
  console.log(contact)
}