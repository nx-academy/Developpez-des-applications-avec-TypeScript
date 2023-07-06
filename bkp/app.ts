import { Command } from "commander";

import { ENGINEERS } from "./data";
import { Engineer } from "./types";

function displayEngineersList(engineersList: Engineer[]): void {
  engineersList
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
}

function displayEngineerDetails(engineer: Engineer) {
  const sentence = `
    Here are some information about: ${engineer.firstName} ${engineer.lastName}.
    ${engineer.genre[0]} is ${engineer.nationality}.
  `;
  console.log(sentence);
}

function main(): void {
  const program = new Command();

  program
    .option("-d, --debug", "output extra debugging")
    .option("-a, --all", "show all engineers")
    .option("-i, --inspect <type>", "get more info about one engineer");

  program.parse(process.argv);

  const options = program.opts();

  if (options.debug) {
    console.log("=========DEBUG LOG");
    console.log(ENGINEERS);
    console.log("=========END DEBUG LOG");
  } else if (options.all) {
    displayEngineersList(ENGINEERS);
  } else if (options.inspect) {
    const filteredEngineer = ENGINEERS.filter(
      (engineer) => engineer.id === Number(options.inspect),
    );

    if (!filteredEngineer.length) {
      console.log("Nope");
    } else {
      displayEngineerDetails(filteredEngineer[0]);
    }
  }
}
main();
