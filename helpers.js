function toggleShow(elementId) {
  const div = document.getElementById(elementId);
  if (div.style.display === 'none') {
    div.className = 'w3-pale-yellow w3-padding animate fadeIn';
    div.style.display = 'block';
  }
  else {
    div.style.display = 'none';
    div.className = 'w3-pale-yellow w3-padding';
  }
}
function toggleArrow(spanId) {
  const span = document.getElementById(spanId);
  if (span.innerHTML === '\\/ ') {
    span.innerHTML = '/\\ ';
  }
  else {
    span.innerHTML = '\\/ ';
  }
}
function navigateTo(div) {
  Array.from(div.children)
  .map((anchor) => { anchor.click(); });
}
(function initSamples() {
  setTimeout(() => {
    w3.toggleShow('#samples');
    toggleArrow('samplesSpan');
  }, 500);
}())
