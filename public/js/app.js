const form = document.querySelector("form");
const input = document.querySelector("input");
const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  p1.textContent = "Loading..";
  p2.textContent = " ";

  const city = input.value;

  fetch(`/weather?address=${city}`).then((response) => {
    response.json().then((data) => {
      if (data.Message) {
        p1.textContent = data.Message;
      } else {
        p1.textContent = data.forecast;
        p2.textContent = "Loaded";
      }
    });
  });
});
