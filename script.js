console.log(8);
//01) Programming basics
for (let i = 1; i <= 100; i++) {
  console.log(i);
  if (i % 3 === 0) {
    console.log(i + " This is divisible by 3");
  } else if (i % 5 === 0) {
    console.log(i + " This is divisible by 5");
  } else if (i % 3 === 0 && i % 5 === 0) {
    console.log(i + " Jackpot");
  }
}

//02) DOM Manipulation

let button = document.createElement("BUTTON");
let buttonText = document.createTextNode("Click me");
button.appendChild(buttonText);
document.body.appendChild(button);

button.addEventListener("click", () => {
  console.log("Clicked");
  let img = document.createElement("img");
  img.src = "https://www.wishesmsg.com/wp-content/uploads/good-day-message.jpg";
  img.height = 200;
  img.width = 200;
  document.body.appendChild(img);
});

//03) Async API calls

fetch("https://reqres.in/api/users")
  .then((response) => response.json())
  .then((users) => {
    let firstThree = users.data.slice(0, 3).map((user) => {
      let firstName = user.first_name;
      console.log(firstName);

      let p = document.createElement("p");
      let pText = document.createTextNode(firstName);
      p.appendChild(pText);
      document.body.appendChild(p);
    });
  });
