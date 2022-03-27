console.log('hello world');

const emailEL = document.getElementById('email');
const submitEL = document.querySelector('button');

submitEL.addEventListener('click', isMail);

function isMail(e) {
  // regex doesn't cover all cases, needs tweaking
  let regex = /^\w.*\w*@\w*.*\w*\.[A-Za-z]+$/;

  if(regex.test(emailEL.value)) {
    console.log(emailEL.value);
    console.log('it is an email!');
  }
  else {
    console.log('not an email :(');
  }

  e.preventDefault();
}