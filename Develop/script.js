document.addEventListener("DOMContentLoaded", function () {
  const generateBtn = document.getElementById("generate");
  const passwordTextArea = document.getElementById("password");
  const passwordLengthInput = document.getElementById("length");

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function generatePassword(passwordLength) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let password = "";

    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = getRandomInt(0, characters.length - 1);
      password += characters.charAt(randomIndex);
    }

    return password;
  }

  generateBtn.addEventListener("click", function () {
    const desiredLength = parseInt(passwordLengthInput.value, 10);
    const newPassword = generatePassword(desiredLength);
    passwordTextArea.value = newPassword;
  });
});

