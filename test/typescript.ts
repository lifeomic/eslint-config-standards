interface User {
  id: number;
  name: string;
}

const user: User = {
  id: 1,
  name: "Test User",
};

export const greetUser = (user: User): string => {
  return `Hello, ${user.name}!`;
};

console.log(greetUser(user));
