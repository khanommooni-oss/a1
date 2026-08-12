document.addEventListener('DOMContentLoaded', () => {
    // Scroll reveal observer
    const revealElements = document.querySelectorAll('[data-reveal]');
    if (revealElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-seen');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        revealElements.forEach((el) => {
            observer.observe(el);
        });
    }

    // Horizontal Progress Bars Animation
    const progressInners = document.querySelectorAll('.bar-inner');
    if (progressInners.length > 0) {
        const barObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    const value = bar.getAttribute('data-value');
                    bar.style.width = value;
                    barObserver.unobserve(bar);
                }
            });
        }, {
            threshold: 0.2
        });

        progressInners.forEach(b => barObserver.observe(b));
    }
});
