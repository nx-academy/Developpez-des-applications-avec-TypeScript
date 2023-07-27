const user = {
  firstName: "John",
  lastName: "Doe",
  age: 28,
  books: ["Introduction to Robotics", "Data Structures and Algorithms"],
  id: 1,
  friends: ["Jane Smith", "Michael Johnson"],
};

function displayBooks(books: string[]): void {
  books.forEach((book) => console.log(book));
}

function getFriends(firstName: string, friends: string[]): string {
  const sentence = `Les amis de ${firstName} sont ${friends.join(", ")}`;
  return sentence;
}

function handleProfil(
  firstName: string,
  lastName: string,
  age: number,
  id: number,
): string[] {
  return [firstName, lastName, String(age), String(id)];
}

function main(): void {
  console.log("=======");
  console.log("La fonction displayBooks");
  displayBooks(user.books);
  console.log("=======");

  console.log("=======");
  console.log("La fonction getFriends");
  console.log(getFriends(user.firstName, user.friends));
  console.log("=======");

  console.log("=======");
  console.log("La fonction handleProfil");
  console.log(handleProfil(user.firstName, user.lastName, user.age, user.id));
  console.log("=======");
}

main();
