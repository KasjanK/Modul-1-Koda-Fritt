// get classes and elements in html
const showHostButton = document.querySelector(".showHost");
const changeColorBtn = document.querySelector(".changeColorBtn");
const showDateBtn = document.querySelector(".showDate");
const footer = document.querySelector(".footer");
const mathBtn = document.querySelector(".sqrt");

// what happens when we press the change color button
changeColorBtn.addEventListener("click", () => {
  // create a variable that gets the body in html
  let background = document.querySelectorAll("body");
  // change the color to red
  background[0].style.backgroundColor = "red";
});

// what happens when we press the show hostname button
showHostButton.addEventListener("click", () => {
  // make the button disappear
  footer.innerHTML = "";
  // get hostname
  const hostname = location.hostname;
  // create p in html and fill it with the hostname so it prints on the site
  const showHostName = document.createElement("p");
  showHostName.innerHTML = hostname;
  footer.appendChild(showHostName);
});

// what happens when we click the show date button
showDateBtn.addEventListener("click", () => {
  // show the date in console
  console.log(Date());
});

// what happens when we click the try it button
mathBtn.addEventListener("click", () => {
  let numbers = [9, 25, 49, 81];
  const x = document.querySelector(".answer");
  x.innerHTML = numbers.map(Math.sqrt);
});
