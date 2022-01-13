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
function interObserve(func, options) {
  try {
    return new IntersectionObserver(func, options);
  } catch(error) {
    return func();
  }
}
(function initScrollObserver() {
  const spans = {
    'educationSpan': 'education'
  };
  const observer = interObserve(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = spans[entry.target.id];
        w3.toggleShow(`#${id}`);
        toggleArrow(`#${entry.target.id}Span`);
      }
    });
  }, { threshold: 0.5 });
  const edu = document.querySelector('#educationSpan');
  observer.observe(edu);
}())
