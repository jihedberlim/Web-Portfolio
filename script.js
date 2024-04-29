/* ========================= MENU SHOW AND HIDDEN ========================= */
const { navMenu, navToggle, navClose } = {
    navMenu: document.getElementById('navMenu'),
    navToggle: document.getElementById('navToggle'),
    navClose: document.getElementById('navClose')
};

/* ===== MENU SHOW / HIDDEN ===== */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/* ========================= REMOVE MENU MOBILE ========================= */
const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.getElementById('navMenu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))