type Book = {
  name: string;
  publisher: string;
  url: string;
};

type He = ["he", "him"];
type She = ["she", "her"];
type They = ["they", "them"];

type Pronouns = He | She | They;

type Engineer = {
  age?: number;
  books?: Book[];
  firstName: string;
  genre: Pronouns;
  id: number;
  lastName: string;
  nickName?: string;
};

export { Engineer };
