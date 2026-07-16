const emailInput = document.getElementById("email");
const result = document.getElementById("result");
const buttonElem = document.getElementById("btn");

/* Validate Email*/
function ValidateEmail() {
  let email = emailInput.value.trim();

  /* CHECKING EMPTY email*/
  if (email === "") {
    result.textContent = "please enter email";
    return;
  }

  /* CHECKING SPACES*/

  if (email.includes(" ")) {
    result.textContent = "email should not contain spaces";
    return;
  }

  /* CHECKING email LENGTH*/

  if (email.length < 5) {
    result.textContent = " email must be at least 5 characters";
    return;
  }
if(!email.includes("@")){
    result.textContent = "email must contain @";
    return
}

if(!email.endsWith(".com")){
    result.textContent = "email must end .com";
    return
}
 
  result.textContent = "Valid email";
}

buttonElem.addEventListener("click", ValidateEmail);
