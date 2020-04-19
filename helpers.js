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

