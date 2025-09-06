const form = document.getElementById("myForm");
const formBtn = document.getElementById("button");
const formCon = document.getElementById("formContainer");
let usersArray = [];
// console.log(form);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const obj = Object.fromEntries(data);

  usersArray.push(obj);
  form.reset();

  console.log(obj);
  console.log(usersArray);
});

formBtn.addEventListener("click", () => {
  usersArray.forEach((item, index) => {
    console.log(item);
    console.log(item.userName);
    let div = document.createElement("div");
    let h2 = document.createElement("h2");
    let h3 = document.createElement("h3");

    h2.classList.add("text-primry");
    h2.innerHTML = ` Your name is: ${item.userName}`;
    h3.innerHTML = ` Your E-mail is: ${item.email}`;

    div.classList.add("alert", "alert-success");

    div.append(h2);
    div.append(h3);
    formCon.append(div);

    console.log(div);
  });
});
