function displayName(firstName: string, lastName: string): string | Error {
  if (!firstName || !lastName) {
    return new Error("firstName or lastName is missing");
  }
  return `${firstName} ${lastName}`;
}

type AllUser = {
  age: number;
  books?: string[];
  genre: ["he", "his"] | ["she", "her"];
  firstName: string;
  friends: string[];
  id: number;
  lastName: string;
};
