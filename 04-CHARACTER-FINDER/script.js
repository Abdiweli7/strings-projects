/* SELECTING ELEMENTS */
const textInput = document.getElementById("text")
const firstChar = document.getElementById("first")
const lastChar = document.getElementById("last")
const middleChar = document.getElementById("middle")
const btnElem = document.getElementById("btn")




function findCharacter(){
  let word = textInput.value.trim();

  /* CHECKING EMPTY TEXT-AREA */
  if (word === "") {
    firstChar.textContent = "please enter a word";
    lastChar.textContent = "";
    middleChar.textContent = "";
    return;
  }

  /* finding first character */

  const first = word.charAt(0);
  firstChar.textContent = `first character: ${first}`;

  /* finding last character */

  const last = word.charAt(word.length - 1);

  lastChar.textContent = `last character: ${last}`;

  /* finding middle character */

  const middleIndex = Math.floor(word.length / 2);
  
  const middleCharacter = word.charAt(middleIndex)
  middleChar.textContent = `middle character: ${middleCharacter}`
}

btnElem.addEventListener("click", findCharacter)