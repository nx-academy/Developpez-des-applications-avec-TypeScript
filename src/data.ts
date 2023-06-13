import { Engineer } from "./types";

const ENGINEERS: Engineer[] = [
  {
    age: 32,
    books: [
      {
        lastUpdateYear: 2020,
        name: "React Native",
        publisher: "O'Reilly Media",
        releaseYear: 2016,
        url: "https://www.oreilly.com/library/view/learning-react-native/9781491929049/",
      },
      {
        lastUpdateYear: 2020,
        name: "React",
        publisher: "O'Reilly Media",
        releaseYear: 2019,
        url: "https://www.oreilly.com/library/view/react/9781491931820/",
      },
    ],
    companies: [
      {
        country: "United States",
        name: "Facebook",
        numberOfEmployees: 10000,
        url: "https://www.facebook.com/",
      },
      {
        country: "Russia",
        name: "Yandex",
        numberOfEmployees: 7000,
        url: "https://yandex.com/",
      },
    ],
    firstName: "Dan",
    genre: ["he", "him"],
    github: {
      href: "https://github.com/gaearon",
      username: "gaearon",
    },
    id: 1,
    isOpenSourceContributor: true,
    lastName: "Abramov",
    linkedin: {
      href: "https://www.linkedin.com/in/dan-abramov-9a0a858/",
    },
    nationality: "Russian",
    nickName: "gaearon",
    skills: ["React", "Redux", "JavaScript"],
    twitter: {
      href: "https://twitter.com/dan_abramov",
      username: "dan_abramov",
    },
  },
  {
    firstName: "Kent",
    lastName: "C. Dodds",
    nationality: "American",
    genre: ["he", "him"],
    id: 2,
    isOpenSourceContributor: true,
    age: 37,
    skills: ["JavaScript", "React", "Testing"],
    github: {
      href: "https://github.com/kentcdodds",
      username: "kentcdodds",
    },
    twitter: {
      href: "https://twitter.com/kentcdodds",
      username: "kentcdodds",
    },
    linkedin: {
      href: "https://www.linkedin.com/in/kentcdodds/",
    },
    blogUrl: "https://kentcdodds.com",
    newsletter: "https://kentcdodds.com/newsletter",
    companies: [
      {
        country: "USA",
        name: "PayPal",
        numberOfEmployees: 21000,
        url: "https://www.paypal.com",
      },
      {
        country: "USA",
        name: "Microsoft",
        numberOfEmployees: 181000,
        url: "https://www.microsoft.com",
      },
    ],
    books: [
      {
        name: "Testing JavaScript",
        publisher: "Kent C. Dodds",
        releaseYear: 2020,
        url: "https://testingjavascript.com",
      },
    ],
  },
  {
    firstName: "Sarah",
    lastName: "Drasner",
    nickName: "sdras",
    nationality: "American",
    genre: ["she", "her"],
    id: 3,
    isOpenSourceContributor: true,
    skills: ["JavaScript", "Vue", "Animation"],
    github: {
      href: "https://github.com/sdras",
      username: "sdras",
    },
    twitter: {
      href: "https://twitter.com/sarah_edo",
      username: "sarah_edo",
    },
    linkedin: {
      href: "https://www.linkedin.com/in/sarahdrasner/",
    },
    blogUrl: "https://css-tricks.com/author/sdrasner/",
    newsletter:
      "https://sarahdrasnerdesign.us19.list-manage.com/subscribe?u=1b0ad096d07ed4ce6fed5597f&id=4f4e7c8620",
    companies: [
      {
        country: "USA",
        name: "Microsoft",
        numberOfEmployees: 181000,
        url: "https://www.microsoft.com",
      },
    ],
    books: [
      {
        name: "SVG Animations",
        publisher: "O'Reilly Media",
        releaseYear: 2017,
        url: "https://www.samanthaming.com/svg-animation-handbook/",
      },
    ],
  },
  {
    firstName: "Rachel",
    lastName: "Andrew",
    nationality: "British",
    genre: ["she", "her"],
    id: 4,
    isOpenSourceContributor: true,
    skills: ["CSS", "HTML", "JavaScript", "PHP"],
    github: {
      href: "https://github.com/rachelandrew",
      username: "rachelandrew",
    },
    twitter: {
      href: "https://twitter.com/rachelandrew",
      username: "rachelandrew",
    },
    linkedin: {
      href: "https://www.linkedin.com/in/rachelandrew/",
    },
    blogUrl: "https://rachelandrew.co.uk/",
    newsletter: "https://rachelandrew.co.uk/signup",
    companies: [
      {
        country: "UK",
        name: "edgeofmyseat.com",
        numberOfEmployees: 2,
        url: "https://www.edgeofmyseat.com/",
      },
    ],
    books: [
      {
        name: "CSS in Depth",
        publisher: "Manning Publications",
        releaseYear: 2018,
        url: "https://www.manning.com/books/css-in-depth",
      },
    ],
  },
];

export { ENGINEERS };
