type User = {
  age: number;
  books: string[];
  firstName: string;
  friends: string[];
  id: number;
  lastName: string;
};

const myUser: User = {
  firstName: "John",
  lastName: "Doe",
  age: 28,
  books: ["Introduction to Robotics", "Data Structures and Algorithms"],
  id: 1,
  friends: ["Jane Smith", "Michael Johnson"],
};

const anotherUser: {
  firstName: string;
  lastName: string;
  age: number;
  books: string[];
  id: number;
  friends: string[];
} = {
  firstName: "John",
  lastName: "Doe",
  age: 28,
  books: ["Introduction to Robotics", "Data Structures and Algorithms"],
  id: 1,
  friends: ["Jane Smith", "Michael Johnson"],
};

const myUsers: User[] = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 28,
    books: ["Introduction to Robotics", "Data Structures and Algorithms"],
    id: 1,
    friends: ["Jane Smith", "Michael Johnson"],
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    age: 30,
    books: ["Introduction to Robotics", "Data Structures and Algorithms"],
    id: 2,
    friends: ["John Doe", "Michael Johnson"],
  },
];

function mergeUsers(user: User): User[] {
  return [user];
}
