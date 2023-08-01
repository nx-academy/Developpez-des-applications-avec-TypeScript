type MyUser = {
  age: number;
  books?: string[];
  firstName: string;
  friends: string[];
  id: number;
  lastName: string;
};

const aUser: MyUser = {
  firstName: "Jane",
  lastName: "Smith",
  age: 30,
  id: 2,
  friends: ["John Doe", "Michael Johnson"],
};

function displayBooks(books: string[]): void {
  console.log(books);
}

// À decommenter si vous souhaitez voir l'erreur dans VSCode
// displayBooks(aUser.books)
