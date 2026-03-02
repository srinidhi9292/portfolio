document.addEventListener("DOMContentLoaded", function() {
    const serviceItems = document.querySelectorAll('.service-item');

    serviceItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            serviceItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.style.opacity = '0.5';
                }
            });
        });

        item.addEventListener('mouseleave', () => {
            serviceItems.forEach(otherItem => {
                otherItem.style.opacity = '1';
            });
        });
    });
});