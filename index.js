const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U",
  "V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u",
  "v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^",
  "&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
  "/"];


function randomPassword(length) {
  let password = ""
  for (let i = 0; i < 12; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length)
    password += characters[randomIndex]
  }
  return password;
}

function generatePassword(length) {
  const password = randomPassword(length)
 // const encryptedPassword = "*".repeat(password.length)
  document.getElementById("firstPassword").textContent = password; //replaced password with encryptedPassword
  document.getElementById("secondPassword").textContent = password; //replaced password with encryptedPassword
}

function reset(){
  let resetter = ""
  document.getElementById("firstPassword").textContent = resetter
  document.getElementById("secondPassword").textContent = resetter;
}
