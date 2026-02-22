if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const colorClasses = ['green', 'blue', 'red'];

    const tryAttr = (img, name) => {
      try {
        return (img.getAttribute && img.getAttribute(name)) || img[name] || '';
      } catch (_) {
        return '';
      }
    };

    const getSrc = img => {
      if (!img) return '';
      const dataSrc = tryAttr(img, 'data-src') || tryAttr(img, 'data-srcset');
      if (dataSrc) return dataSrc.split(',')[0].trim().split(' ')[0] || '';
      const src = tryAttr(img, 'src') || tryAttr(img, 'srcset');
      return src ? src.split(',')[0].trim().split(' ')[0] : '';
    };

    const filenameFromSrc = src => {
      if (!src) return '';
      const clean = src.split('?')[0].split('#')[0].trim();
      if (!clean) return '';
      const parts = clean.split('/');
      return parts[parts.length - 1].toLowerCase();
    };

    const rows = Array.from(document.querySelectorAll('table tr')).slice(1);

    rows.forEach(row => {
      const interimImgs = Array.from(row.querySelectorAll('.interim-img'));
      const releaseImgs = Array.from(row.querySelectorAll('.release-img'));

      const interimNames = new Set(interimImgs.map(i => filenameFromSrc(getSrc(i))).filter(Boolean));
      const releaseNames = new Set(releaseImgs.map(i => filenameFromSrc(getSrc(i))).filter(Boolean));

      releaseImgs.forEach(img => {
        const name = filenameFromSrc(getSrc(img));
        img.classList.remove(...colorClasses);
        if (name && interimNames.has(name)) {
          img.classList.add('green');
          img.dataset.match = 'both';
        } else {
          img.classList.add('blue');
          img.dataset.match = 'release-only';
        }
      });

      interimImgs.forEach(img => {
        const name = filenameFromSrc(getSrc(img));
        img.classList.remove(...colorClasses);
        if (name && releaseNames.has(name)) {
          img.classList.add('green');
          img.dataset.match = 'both';
        } else {
          img.classList.add('red');
          img.dataset.match = 'interim-only';
        }
      });
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".hamburger");
  const body = document.body;
  if (!btn) return;

  btn.addEventListener("click", () => {
    const open = body.classList.toggle("nav-open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 700 && body.classList.contains("nav-open")) {
      body.classList.remove("nav-open");
      btn.setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("click", e => {
    if (!body.classList.contains("nav-open")) return;
    const inside = e.target.closest(".navbar");
    if (!inside) {
      body.classList.remove("nav-open");
      btn.setAttribute("aria-expanded", "false");
    }
  });
});