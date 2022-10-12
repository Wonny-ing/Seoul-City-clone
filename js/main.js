const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('.search-input');

searchEl.addEventListener('click', () => {
  searchInputEl.focus(); // focus 강제적용해주는 명령
});
