const UsernameInput = document.getElementById("Username");
const display = document.getElementById("display");
const buttonElem = document.getElementById("btn")

/* Validate Username*/
function ValidateUsername(){
  let username = UsernameInput.value.trim();

  /* CHECKING EMPTY USERNAME*/
  if (username === "") {
    display.textContent = "please enter username";
    return;
  }

  /* CHECKING SPACES*/
  if (username.includes(" ")) {
    display.textContent = "username should not contain spaces";
    return;
  }

  /* CHECKING USERNAME LENGTH*/
  if (username.length < 6) {
    display.textContent = "Username must be at least 6 characters";
    return;
  }

  /* CHECKING IF STARTS A LETTER */
  let firstChar = username.charAt(0)

  if(firstChar >="0" && firstChar <= "9"){
    display.textContent = "Username should start with a letter";
    return;

  }
  display.textContent = "Valid Username"
}

buttonElem.addEventListener("click", ValidateUsername)