(function () {
  const hero = document.getElementById('hero');
  const heroMate = document.getElementById('heroMate');
  if (!hero || !heroMate) return;

  window.addEventListener('load', () => {
    hero.classList.add('loaded');
  });

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (prefersReducedMotion.matches) return;

  const DEGREES_PER_SECOND = 10;
  let angle = 0;
  let lastTime = null;

  function animate(time) {
    if (lastTime !== null) {
      const delta = (time - lastTime) / 1000;
      angle = (angle + DEGREES_PER_SECOND * delta) % 360;
      heroMate.style.transform = `rotateY(${angle}deg)`;
    }
    lastTime = time;
    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
})();
