document.addEventListener('DOMContentLoaded', () => {
    const btns = document.querySelectorAll('.scout-nav-btn');
    const hamburger = document.querySelector('.hamburger');
    let isAnimating = false;

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.scout;
            const nextEl = document.getElementById(target + '-content');
            const activeEl = document.querySelector('.scout-content.active');

            if (!nextEl || nextEl === activeEl || isAnimating) return;

            isAnimating = true;

            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            activeEl.classList.add('leaving');
            activeEl.classList.remove('active');

            const onLeave = () => {
                activeEl.classList.remove('leaving');
                activeEl.style.display = 'none';

                nextEl.style.display = 'block';
                nextEl.classList.add('entering');

                const onEnter = () => {
                    nextEl.classList.remove('entering');
                    nextEl.classList.add('active');
                    nextEl.style.display = '';
                    isAnimating = false;
                };

                nextEl.addEventListener('animationend', onEnter, { once: true });
            };

            activeEl.addEventListener('animationend', onLeave, { once: true });
        });
    });

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            const open = document.body.classList.toggle('nav-open');
            hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 700 && document.body.classList.contains('nav-open')) {
                document.body.classList.remove('nav-open');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });

        document.addEventListener('click', (e) => {
            if (!document.body.classList.contains('nav-open')) return;
            if (!e.target.closest('.navbar')) {
                document.body.classList.remove('nav-open');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });
    }
});