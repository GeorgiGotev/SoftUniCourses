function passValidator(password) {
  let passLength = password.length;
  let digitsCounter = 0;
  let digitCounterValidator = false;
  let lengthValidator = false;
  let digitsAndLettersValidator = true;

  if (passLength >= 6 && passLength <= 10) {
    lengthValidator = true;
  }

  for (let i = 0; i < passLength; i++) {
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

    if (!digits && !smallLetters && !bigLetters) {
      digitsAndLettersValidator = false;
    }

    if (digits) {
      digitsCounter++;
      if (digitsCounter >= 2) {
        digitCounterValidator = true;
      }
    }
  }

  if (lengthValidator && digitCounterValidator && digitsAndLettersValidator) {
    console.log(`Password is valid`);
  } else {
    if (!lengthValidator) {
      console.log("Password must be between 6 and 10 characters");
    }
    if (!digitsAndLettersValidator) {
      console.log("Password must consist only of letters and digits");
    }
    if (!digitCounterValidator) {
      console.log(`Password must have at least 2 digits`);
    }
  }
}

passValidator("logIn");
