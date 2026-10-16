
function displayMessage() {
  const emailInput = document.getElementById("email");
  const message = document.getElementById("message");
  const email = emailInput.value.trim();
  message.textContent = `Thank you for subscribing.`;
}
