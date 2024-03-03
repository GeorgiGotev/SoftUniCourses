function passValidator(password) {
  function lengthValidator(password) {
    return password.length >= 6 && password.length <= 10;
  }

  function lettersAndDigitsValidator(password) {
    for (let i = 0; i < password.length; i++) {
      let currChar = password[i];
      let digits =
        currChar >= String.fromCharCode(48) &&
        currChar <= String.fromCharCode(57);
      let smallLetters =
        currChar >= String.fromCharCode(97) &&
        currChar <= String.fromCharCode(122);
      let bigLetters =
        currChar >= String.fromCharCode(65) &&
        currChar <= String.fromCharCode(90);

      if (!smallLetters && !bigLetters && !digits) {
        return false;
      }
    }
    return true;
  }
  function digitsValidator(password) {
    digitCounter = 0;
    for (let char of password) {
      let charValue = char.charCodeAt();
      if (charValue >= 48 && charValue <= 57) {
        digitCounter++;
      }
    }
    return digitCounter >= 2;
  }
  if (
    digitsValidator(password) &&
    lettersAndDigitsValidator(password) &&
    lengthValidator(password)
  ) {
    console.log("Password is valid");
  } else {
    if (!lengthValidator(password)) {
      console.log("Password must be between 6 and 10 characters");
    }
    if (!lettersAndDigitsValidator(password)) {
      console.log("Password must consist only of letters and digits");
    }
    if (!digitsValidator(password)) {
      console.log(`Password must have at least 2 digits`);
    }
  }
}

passValidator("Passs3da");
