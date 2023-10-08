import * as readline from "readline";

import { ENGINEERS } from "./data";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function displayEngineersList(engineers: any[]): any {
  console.log("---------");
  console.log("");
  engineers
    .map((engineer) => ({
      firstName: engineer.firstName,
      id: engineer.id,
      lastName: engineer.lastName,
    }))
    .forEach((engineer) =>
      console.log(
        `${engineer.id} - ${engineer.firstName} ${engineer.lastName}`,
      ),
    );

  console.log("");
  console.log(
    "If you want to know more about one engineer, please write his or her id.",
  );
}

function displayEngineer(engineer: any): any {
  console.log(`
  Here are some information about ${engineer.firstName}:
    - id: ${engineer.id}
    - firstname: ${engineer.firstName}
    - lastname: ${engineer.lastName}
    - books: ${formatBooks(engineer.books)}
    - genre: ${engineer.genre}
    - age: ${engineer.age ? engineer.age : "confidential"}
  `);
}

function formatBooks(books?: any): any {
  if (!books) return "No books";
  return books.map((book: any) => `${book.name} - ${book.url}`).join(", ");
}

function main(): any {
  rl.question(
    `
Developer Statistics Tool 
----- MENU -----
Here are your choices:
  A) Display Engineerings List
  Q) Exit the program

  To display a particual engineer, you need to enter his or her number.
  For example, for "Sarah Drasner", enter 3.
  
  Enter an option: `,
    (answer) => {
      if (Number(answer)) {
        const selectedEngineer = ENGINEERS.filter(
          (engineer) => engineer.id === Number(answer),
        );
        if (selectedEngineer.length) {
          displayEngineer(selectedEngineer[0]);
        } else {
          console.log(`Engineer with id ${answer} not found`);
        }
      } else if (answer.toLowerCase() === "q") {
        console.log("Exiting the program...");
        process.exit();
      } else if (answer.toLowerCase() === "a") {
        displayEngineersList(ENGINEERS);
      } else {
        console.log("");
        console.log("Incorrect input");
      }

      main();
    },
  );
}

main();
