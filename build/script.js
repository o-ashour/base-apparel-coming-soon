// work on regex

const emailEL = document.getElementById('email');
const submitEL = document.querySelector('button');
const errIconEL = document.querySelector('.error-icon');
const errMsgEL = document.querySelector('.err-msg');

submitEL.addEventListener('click', isMail);

function isMail(e) {
  // regex doesn't cover all cases, needs tweaking
  let regex = /^\w.*\w*@\w*.*\w*\.[A-Za-z]+$/;

  if (!regex.test(emailEL.value)) {
    emailEL.classList.add('error');
    errIconEL.style.display = 'block';
    errMsgEL.style.display = 'block';

    emailEL.onfocus = () => {
      emailEL.classList.remove('error');
      errIconEL.style.display = 'none';
      errMsgEL.style.display = 'none';
    };
  }

  e.preventDefault();
}