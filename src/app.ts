type Engineer = {
  firstName: string
  lastName: string
  age: number
  books: string[]
  id: number
  friends: string[]
}

const me: Engineer = {
  firstName: 'Thomas',
  lastName: 'Dimnet',
  age: 34,
  books: ["first book", "second book"],
  id: 21,
  friends: ["Max", "Paul", "Jack"]
}

function mergeProfil(firstName: string, lastName: string, age: number, id: number): string[] {
  return [
    firstName, lastName, String(age), String(id)
  ]
}

function displayFriends(books: string[]): void {
  books.forEach(book => console.log(book))
}

function getFriends(friends: string[]): string {
  const sentence = "Les amis de Thomas"
  return sentence
}

function main(): void {
  console.log("foo")
}

main()
