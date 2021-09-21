const chalk = require("chalk");
const clipboardy = require("clipboardy");
const program = require("commander");

const createPassword = require("./utils/createPassword");
const savePassword = require("./utils/savePassword");

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

// Save password to file
if (save) {
  savePassword(generatedPassword);
}

// Copy to clipboard
clipboardy.writeSync(generatedPassword);

// Output generated password
console.log(chalk.green("New Password:"), chalk.bold(generatedPassword));
console.log(chalk.cyan("Password copied to clipboard"));
