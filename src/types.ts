type Book = {
  lastUpdateYear?: number;
  name: string;
  publisher: string;
  releaseYear: number;
  url: string;
};

type Company = {
  country: string;
  name: string;
  numberOfEmployees: number;
  url?: string;
};

type Engineer = {
  age?: number;
  blogUrl?: string;
  books?: Book[];
  companies: Company[];
  firstName: string;
  genre: Pronouns;
  github?: GithubAccount;
  id: number;
  isOpenSourceContributor: boolean;
  lastName: string;
  linkedin?: LinkedinAccount;
  nationality: string;
  newsletter?: string;
  nickName?: string;
  skills: string[];
  twitter?: TwitterAccount;
};

type He = ["he", "him"];
type She = ["she", "her"];
type They = ["they", "them"];

type Pronouns = He | She | They;

type LinkedinAccount = {
  href: string;
};

type GithubAccount = {
  href: string;
  username: string;
};

type TwitterAccount = {
  href: string;
  username: string;
};

export { Engineer };
