const users = [
  { name: "Alice", role: "admin" },
  { name: "Bob", role: "editor" },
  { name: "Charlie", role: "admin" }
];

const filterByRole = (users) => (role) => (name) => {
    const user = users.find((user) => user.name === name);
    if(!user) {
        return false;
    }
    return user.role === role;
}

const usersList = filterByRole(users);
const usersAdmin = usersList("admin");
const isAdmin = usersAdmin("Bob");

console.log(isAdmin);