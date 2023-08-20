const hiddenElements = document.querySelectorAll('.hidden');
const firasElements = document.querySelectorAll('.firas');
const shareefElements = document.querySelectorAll('.shareef');
const firasInvertElements = document.querySelectorAll('.firas-invert');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target); // Stop observing once animated
        }
    });
}, { threshold: 0.5 }); // Adjust the threshold as needed

const firasObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
            firasObserver.unobserve(entry.target); // Stop observing once animated
        }
    });
}, { threshold: 0.5 }); // Adjust the threshold as needed

const shareefObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            shareefObserver.unobserve(entry.target); // Stop observing once animated
        }
    });
}, { threshold: 0.5 }); // Adjust the threshold as needed

const firasInvertObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
            firasInvertObserver.unobserve(entry.target); // Stop observing once animated
        }
    });
}, { threshold: 0.5 }); // Adjust the threshold as needed

hiddenElements.forEach(element => {
    observer.observe(element);
});

firasElements.forEach(element => {
    firasObserver.observe(element);
});

shareefElements.forEach(element => {
    shareefObserver.observe(element);
});

firasInvertElements.forEach(element => {
    firasObserver.observe(element);
});