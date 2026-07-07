// Shared script — Natthapath Damrongsri portfolio.
// Scrollspy for the case rail: highlights the chapter currently in view.
// Safe to include on any page; does nothing when no .rail-toc exists.
(function () {
  var links = document.querySelectorAll('.rail-toc a[href^="#"]');
  if (!links.length || !('IntersectionObserver' in window)) return;

  var byId = {};
  links.forEach(function (a) { byId[a.getAttribute('href').slice(1)] = a; });

  var chapters = [].slice.call(document.querySelectorAll('.chapter[id]'))
    .filter(function (s) { return byId[s.id]; });
  if (!chapters.length) return;

  function setActive(id) {
    links.forEach(function (a) { a.classList.toggle('active', a === byId[id]); });
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) setActive(e.target.id);
    });
  }, { rootMargin: '-25% 0px -65% 0px' });

  chapters.forEach(function (s) { io.observe(s); });
  setActive(chapters[0].id);
})();
