import * as readline from "readline";

import { ENGINEERS } from "./data";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function main(): void {
  rl.question("What's your name? ", (answer) => {
    console.log("=====");
    console.log(answer);
    console.log("=====");

    if (answer === "q") {
      process.exit();
    }

    main();
  });
}

main();
