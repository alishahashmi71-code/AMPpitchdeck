// AMP Hero Navigation - mobile menu toggle. Progressive enhancement: the nav
// is a plain list of links without this script; this only adds the collapse
// behavior needed once .amp-hero-nav__toggle is visible (see module.css breakpoint).
document.querySelectorAll('.amp-hero-nav').forEach(function (hero) {
  var toggle = hero.querySelector('.amp-hero-nav__toggle');
  var nav = hero.querySelector('.amp-hero-nav__nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  nav.querySelectorAll('.amp-hero-nav__nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
});
