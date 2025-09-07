// function numberOfUsers() numberOfUsers
// function addUser() name , id , balance
// function editUserBalanceById() id , newBalance
// function deleteUserById() id

let users = [];

function numberOfUsers(count) {
  var count = prompt("Enter number of users");
  for (let i = 0; i < count; i++) {
    let name = prompt(`Enter name for user ${i + 1}:`);
    let id = prompt(`Enter unique ID for user ${i + 1}:`);
    let balance = prompt(`Enter balance for user ${i + 1}:`);
    addUser(name, id, balance);
  }
}

function addUser(name, id, balance) {
  let exists = users.some((user) => user.id === id);
  if (exists) {
    console.log("ID already exists!");
    let id = prompt("enter new id");
    users.push({ name, id, balance });
  } else users.push({ name, id, balance });
}
console.log(users);
function editUserBalanceById(id, newBalance) {
  id = prompt("enter your id to edit balance");
  let user = users.find((user) => user.id === id);
  if (user) {
    let newBalance = prompt("enter new balance");
    user.balance = newBalance;
    console.log(users);
  } else console.log("user with id not found");
}

function deleteUserById(id) {
  id = prompt("enter your id to delete item");
  let index = users.findIndex((user) => users.id === id);
  if (index) {
    let removed = users.splice(index, 1);
    console.log(removed);
  } else console.log("user with id not found");
}
numberOfUsers();
console.log(users);
editUserBalanceById();
console.log(users);
deleteUserById();
console.log(users);
