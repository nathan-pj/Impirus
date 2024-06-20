function expandNavbar() {
    const burger = document.getElementById("burgerExpanded");
    burger.style.display = "flex";
    burger.classList.add("burgerOpenAnimation");
    burger.classList.remove("burgerCloseAnimation");
}

function closeNavbar() {
    const burger = document.getElementById("burgerExpanded");
    burger.classList.add("burgerCloseAnimation");
    burger.classList.remove("burgerOpenAnimation");
    setTimeout(() => {
        burger.style.display = "none";
    }, 900); 
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.burgerLink, .navLink, .navbarCompanyName, .footerLink').forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.classList.remove('menuDeselect');
            item.classList.add('menuSelect');
        });

        item.addEventListener('mouseleave', () => {
            item.classList.remove('menuSelect');
            item.classList.add('menuDeselect');
        });
    });

    const burgerCloseBtn = document.getElementById("burgerClose");
    burgerCloseBtn.addEventListener('mouseenter', () => {
        burgerCloseBtn.classList.remove('menuDeselect');
        burgerCloseBtn.classList.add('menuSelect');
    });

    burgerCloseBtn.addEventListener('mouseleave', () => {
        burgerCloseBtn.classList.remove('menuSelect');
        burgerCloseBtn.classList.add('menuDeselect');
    });

    const footerLogo = document.getElementById("footerLogo");
    
    footerLogo.addEventListener('mouseenter', () => {
        footerLogo.classList.remove('footerLogoDeselect');
        footerLogo.classList.add('footerLogoSelect');
    });

    footerLogo.addEventListener('mouseleave', () => {
        footerLogo.classList.remove('footerLogoSelect');
        footerLogo.classList.add('footerLogoDeselect');
    });
});

function redirectTo(url) {
    let transOut = document.querySelector('.transOut');
    transOut.classList.add('blackTransOut');
    setTimeout(() => {
        window.location.href = url;
    }, 900); 
}
