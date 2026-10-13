(() => {
  const catalog = window.travelTranslations;
  const select = document.getElementById('site-language');
  const panel = document.getElementById('language-subtitle');
  if (!catalog || !select || !panel) return;
  const navLinks = [...document.querySelectorAll('header nav a')];
  const page = document.querySelector('[data-blog-key]');
  const articleKey = page ? page.dataset.blogKey : '';
  const title = panel.querySelector('h2');
  const summary = panel.querySelector('p');
  const notice = panel.querySelector('small');
  let saved;
  try { saved = localStorage.getItem('travel-language'); } catch (_) {}
  const browser = (navigator.language || 'en').split('-')[0];
  function apply(code) {
    const language = catalog[code] ? code : 'en';
    const text = catalog[language];
    select.value = language;
    document.querySelector('label[for="site-language"]').textContent = text.label;
    navLinks.forEach((link, i) => { if (text.nav[i]) { link.textContent = text.nav[i]; link.lang = language; } });
    panel.lang = language;
    title.textContent = text.title;
    summary.textContent = text.articles[articleKey] || text.summary;
    notice.textContent = text.notice;
    panel.hidden = false;
    try { localStorage.setItem('travel-language', language); } catch (_) {}
  }
  select.addEventListener('change', () => apply(select.value));
  apply(catalog[saved] ? saved : (catalog[browser] ? browser : 'en'));
  document.querySelector('.language-control').hidden = false;
})();
