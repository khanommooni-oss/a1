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

    // Numbers rollups (Stats counter animation)
    const counters = document.querySelectorAll('.counter-value');
    if (counters.length > 0) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.getAttribute('data-target'), 10);
                    const suffix = counter.getAttribute('data-suffix') || '';
                    let count = 0;
                    const speed = 2000 / target; // Total 2s duration

                    const updateCount = () => {
                        count++;
                        counter.innerText = count + suffix;
                        if (count < target) {
                            setTimeout(updateCount, speed);
                        } else {
                            counter.innerText = target + suffix;
                        }
                    };
                    updateCount();
                    counterObserver.unobserve(counter);
                }
            });
        }, {
            threshold: 0.5
        });

        counters.forEach(c => counterObserver.observe(c));
    }
});
