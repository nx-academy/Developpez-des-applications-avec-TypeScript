type Engineer = {
  firstName: string;
  lastName: string;
  age: number;
  books: string[];
  id: number;
  friends: string[];
};

const user = {
  firstName: "John",
  lastName: "Doe",
  age: 28,
  books: ["Introduction to Robotics", "Data Structures and Algorithms"],
  id: 1,
  friends: ["Jane Smith", "Michael Johnson"],
};

function mergeProfil(
  firstName: string,
  lastName: string,
  age: number,
  id: number,
): string[] {
  return [firstName, lastName, String(age), String(id)];
}

function displayBooks(books: string[]): void {
  books.forEach((book) => console.log(book));
}

function getFriends(friends: string[]): string {
  const sentence = `Les amis sont ${friends.join(", ")}.`;
  return sentence;
}

function main(): void {
  console.log("==========")
  console.log("La fonction displayBooks")
  displayBooks(user.books)
  console.log("==========")

  console.log("==========")
  console.log("La fonction getFriends")
  console.log(getFriends(user.friends))
  console.log("==========")

  console.log("==========")
  console.log("La fonction mergeProfile")
  console.log(mergeProfil(user.firstName, user.lastName, user.age, user.id))
  console.log("==========")
}

main();
