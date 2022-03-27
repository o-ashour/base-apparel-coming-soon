// work on regex
// make error styles go away after initial state 

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
    emailEL.style.borderColor = "hsl(0, 93%, 68%)";
    emailEL.style.borderWidth = "2px";
  }

  e.preventDefault();
}