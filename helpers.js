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
function interObserve(func, options) {
  try {
    return new IntersectionObserver(func, options);
  } catch(error) {
    return func();
  }
}
window.onload = () => {
  w3.toggleShow('#work');
  toggleArrow('experienceSpan');

  w3.toggleShow('#education');
  toggleArrow('educationSpan');

  w3.toggleShow('#leadership');
  toggleArrow('leadershipSpan');

  w3.toggleShow('#achievements');
  toggleArrow('achievementSpan');

  w3.toggleShow('#computer');
  toggleArrow('computerSpan');

  /*
  I'll continue this later
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
  */
};
