const email = document.querySelector('.email-js');
const btn = document.querySelector('.btn-js');
const span = document.querySelector('.email_invalido-js');
const email_correto = document.querySelector('.email_correto-js')

// Ao clicar no botão é feita uma verificação do email digitado
function verificarEmail(regex, string) {
  if (regex.test(string)) {
    email_correto.style.display = 'flex';
    // btn.style.display = 'none';
    // email.style.display = 'none';
  } else {
    // redirecionar para algum lugar
    email.classList.add('email-invalido');
    span.style.display = 'block';
  }
}

//  Ao clicar no input de email a borda vemelha e a mensagem de erro sao removidos.
function resetErro() {
  email.classList.remove('email-invalido');
  span.style.display = 'none';
}

btn.addEventListener('click', () => verificarEmail(/^[a-z]{2,20}[0-9]{0,4}[a-z]{0,10}@[a-z]{4,10}.[a-z]{2,4}$/, email.value));
email.addEventListener('click', resetErro);