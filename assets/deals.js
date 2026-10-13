(() => {
  const filters = document.querySelector('.travel-filters');
  if (!filters) return;
  const cards = [...document.querySelectorAll('[data-category]')];
  const count = document.getElementById('offer-count');
  filters.hidden = false;
  filters.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-filter]');
    if (!button || !filters.contains(button)) return;
    const category = button.dataset.filter;
    filters.querySelectorAll('button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    cards.forEach(card => { card.hidden = category !== 'all' && card.dataset.category !== category; });
    count.textContent = `${cards.filter(card => !card.hidden).length} places to start planning`;
  });
})();
