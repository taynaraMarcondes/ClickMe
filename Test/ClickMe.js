function okClicked() {
  buttonClicked("Ok");
}
function cancelClicked() {
  buttonClicked("Cancel");
}
function buttonClicked(buttonName) {
  const header = document.getElementById("heading");
  button = buttonName ? "You just clicked '" + buttonName + "'" : '';

  console.log("button: ", button)

  if (button != '') {
    console.log("aquiu")
    header.innerHTML = button
  } else {
    console.log("aqui")
    header.innerHTML = ""

  }
}
