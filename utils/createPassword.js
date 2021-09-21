const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "1234567890";
const symbols = "!@#$%^&*()-_+=";

const createPassword = (length, hasNumbers, hasSymbols) => {
  let chars = characters;
  hasNumbers ? (chars += numbers) : "";
  hasSymbols ? (chars += symbols) : "";
  return generatePassword(length, chars);
};

const generatePassword = (length, chars) => {
  let password = "";
  let charLength = chars.length;

  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * charLength));
  }
  return password;
};

module.exports = createPassword;
