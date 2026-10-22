//your JS code here. If required.

const form = document.getElementById("votingForm");
const ageInput = document.getElementById("age");
const nameInput = document.getElementById("name");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const age = ageInput.value.trim();
  const name = nameInput.value.trim();

  if (age === "" || name === "") {
    alert("Please enter valid details.");
    return;
  }

  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Number(age) > 18) {
        resolve(name);
      } else {
        reject(name);
      }
    }, 4000);
  })
    .then((name) => {
      alert(`Welcome, ${name}. You can vote.`);
    })
    .catch((name) => {
      alert(`Oh sorry ${name}. You aren't old enough.`);
    });
});
