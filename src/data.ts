import { Engineer } from "./types";

export const ENGINEERS: Engineer[] = [
  {
    age: 32,
    books: [
      {
        name: 'React Native',
        publisher: "O'Reilly Media",
        url: "https://www.oreilly.com/library/view/learning-react-native/9781491929049/"
      }
    ],
    firstName: 'Dan',
    genre: ["he", "him"],
    lastName: "Abramov",
    nickName: "gaearon"
  },
  {
    age: 37,
    firstName: 'Kent',
    genre: ["he", "him"],
    lastName: 'C. Dodds'
  },
  {
    firstName: 'Sarah',
    books: [
      {
        name: 'SVG Animations',
        publisher: "O'Reilly Media",
        url: 'https://www.samanthaming.com/svg-animation-handbook/'
      }
    ],
    genre: ["she", "her"],
    lastName: 'Drasner'
  },
  {
    firstName: 'Rachel',
    genre: ["she", "her"],
    lastName: 'Andrew'
  }
]

