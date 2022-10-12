const dateOfBirth = document.querySelector("#dob");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#output");

checkButton.addEventListener("click", clickHandler);

function clickHandler() {
  const newDate = dateOfBirth.value.replaceAll("-", "");
  var sum = 0;
  for (i = 0; i < newDate.length; i++) {
    sum = sum + ~~newDate.charAt(i);
  }
  if (sum % ~~luckyNumber.value === 0) {
    showMessageTrue("YaY! You have a lucky birthday! 🥳🥳🥳");
  } else {
    showMessageFalse("Sorry! Your birthday is not lucky.");
  }
}

function calculateLucky(number) {}

function hideMessage() {
  message.style.display = "none";
}

function showMessageTrue(msg) {
  message.style.display = "block";
  message.style.color = "green";
  message.innerText = msg;
}

function showMessageFalse(msg) {
  message.style.display = "block";
  message.style.color = "red";
  message.innerText = msg;
}
