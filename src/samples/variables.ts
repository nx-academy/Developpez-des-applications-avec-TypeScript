// Je définies explicitement un type aux constantes firstName et age
const firstName: string = 'Thomas'
let age: number = 34

// Je laisse TypeScript s'occuper de la déclaration du type pour moi
const lastName = 'Dimnet'
let postCode = 75020

// Je définis un type plus "complexe"
const friends: string[] = ['Alex', 'Karl', 'Ashley']
const friendsAge: number[] = [31, 33, 29]

// Je modifie `friends` en lui ajoutant un boolean
friends.push("Max")