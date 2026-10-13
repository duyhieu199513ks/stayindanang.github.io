(() => {
  function showFallback(img) {
    img.hidden = true;
    const fallback = img.parentElement.querySelector('.photo-fallback');
    if (fallback) fallback.hidden = false;
  }
  document.querySelectorAll('.destination-photo img').forEach(img => {
    img.addEventListener('error', () => showFallback(img));
    if (img.complete && img.naturalWidth === 0) showFallback(img);
  });
})();
