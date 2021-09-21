const program = require("commander");

program.version("1.0.0").description("Password Generator");

program
  .option("-l, --length <number>", "Length of password", "10")
  .option("-s, --save", "Save password to password.txt file")
  .option("-nn, --no-numbers", "Remove numbers")
  .option("-ns, --no-symbols", "Remove symbols")
  .parse();

console.log(program.opts());
