const radioButtonRef = document.querySelectorAll('[name="color"]');


function changeBackgroundColor(event) {
  const selectedColor = event.target.value;
  document.body.style.backgroundColor = selectedColor;
}


radioButtonRef.forEach(function (radioButton) {
  radioButton.addEventListener("change", changeBackgroundColor);
});