const program = require("commander");

const createPassword = require("./utils/createPassword");

program.version("1.0.0").description("Password Generator");

program
  .option("-l, --length <number>", "Length of password", "10")
  .option("-s, --save", "Save password to password.txt file")
  .option("-nn, --no-numbers", "Remove numbers")
  .option("-ns, --no-symbols", "Remove symbols")
  .parse();

const { length, save, numbers, symbols } = program.opts();

// Get generated password
const generatedPassword = createPassword(length, numbers, symbols);

// Output generated password
console.log(generatedPassword);
