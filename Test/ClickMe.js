function okClicked() {
  buttonClicked("Ok");
}
function cancelClicked() {
  buttonClicked("Cancel");
}
function buttonClicked(buttonName) {
  const header = document.getElementById("heading");
  button = buttonName ? "You just clicked '" + buttonName + "'" : '';

  if (button != '') {
    header.innerHTML = button
  } else {
    header.innerHTML = ""

  }
}
