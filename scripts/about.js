document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('#socialsList li a').forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.classList.remove('socialsDeselect');
            item.classList.add('socialsSelect');
        });

        item.addEventListener('mouseleave', () => {
            item.classList.remove('socialsSelect');
            item.classList.add('socialsDeselect');
        });
    }); 
});