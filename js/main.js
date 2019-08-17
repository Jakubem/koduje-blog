const inp = document.querySelector('.search-str');
const btn = document.querySelector('.btn-submit');
const resultList = document.querySelector('.result-list');
btn.addEventListener('click', (e) => {
  e.preventDefault();
})
btn.classList.add('btn-hidden');

const resultTemplate = (el) => {
  const tag = document.createElement('li');
  tag.innerHTML =  `
  <a href=${el.url}>
    <h4>${el.title}</h4>
  </a>
  `
  return tag;
}

const postFilter = (el) => {
  return el.text.includes(inp.value.toLowerCase());
}

inp.addEventListener('input', async (e) => {
  e.preventDefault();
  if (inp.value) {
    const all = await fetch('search.json');
    const res = await all.json();
    let results = res.search.filter(postFilter);
    resultList.innerHTML = '';
    results.forEach((el) => {
      resultList.appendChild(resultTemplate(el));
    })
  } else {
    resultList.innerHTML = '';
  }
})
