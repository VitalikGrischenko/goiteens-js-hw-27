const controlFontSize = document.getElementById('font-size-control');
const text = document.getElementById('text');

controlFontSize.addEventListener('input', function () {
  const fontSize = controlFontSize.value + 'px';
  text.style.fontSize = fontSize;
});