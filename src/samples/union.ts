function displayName(firstName: string, lastName: string): string | Error {
  if (!firstName || !lastName) {
    return new Error("firstName or lastName is missing");
  }
  return `${firstName} ${lastName}`;
}

type AllUser = {
  age: number;
  books?: string[];
  gender: "male" | "female" | "other";
  pronouns: ["he", "his"] | ["she", "her"];
  firstName: string;
  friends: string[];
  id: number;
  lastName: string;
};
