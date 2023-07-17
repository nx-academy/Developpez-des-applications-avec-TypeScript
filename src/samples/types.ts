function handleUser({
  firstName,
  lastName,
  age,
  isConnected,
  isVerified,
  email
}: {
  firstName: string;
  lastName: string;
  age: number;
  isConnected: boolean;
  isVerified: boolean;
  email: string;
}) {
  // Fait quelque chose
}

type User = {
    firstName: string;
    lastName: string;
    age: number;
    isConnected: boolean;
    isVerified: boolean;
    email: string;
}

function anotherHandleUser({
    firstName,
    lastName,
    age,
    isConnected,
    isVerified,
    email
}: User) {
    // Fait quelque chose
}

const me: User = {
    firstName: 'thomas',
    lastName: 'dimnet',
    age: 34,
    isConnected: true,
    isVerified: true,
    email: 'thomas.dimnet@gmail.com'
}
