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
      if (dataSrc) {
        return dataSrc.split(',')[0].trim().split(' ')[0] || '';
      }
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

    rows.forEach((row, rowIndex) => {
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

// ...existing code...

// Mobile detection + apply mobile layout class
(function applyMobileLayout() {
  function isMobileDevice() {
    // prefer userAgentData when available
    if (navigator.userAgentData && typeof navigator.userAgentData.mobile === "boolean") {
      return navigator.userAgentData.mobile;
    }
    // fallbacks: coarse pointer OR small viewport OR common mobile UA tokens
    const ua = navigator.userAgent || "";
    const smallViewport = window.innerWidth <= 700;
    const coarsePointer = window.matchMedia && window.matchMedia("(pointer: coarse)").matches;
    const mobileUa = /Mobi|Android|iPhone|iPad|iPod|IEMobile|BlackBerry|Opera Mini/i.test(ua);
    return smallViewport || coarsePointer || mobileUa;
  }

  document.addEventListener("DOMContentLoaded", () => {
    if (isMobileDevice()) {
      document.body.classList.add("mobile-layout");
    }
  });

  // Optional: update on resize if user rotates or changes window
  window.addEventListener("resize", () => {
    if (isMobileDevice()) document.body.classList.add("mobile-layout");
    else document.body.classList.remove("mobile-layout");
  });
})();

// ...existing code...